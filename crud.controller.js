import api from './api.json' assert { type: "json" };

// GET

export const getAPI = (req, res) => {
    res.send(api)
}

export const getCharacters = (req, res) => {
    res.send(api.Characters)
}

export const getSoundtracks = (req, res) => {
    res.send(api.Soundtracks)
}

export const getCharacter = (req, res) => {
    const id = req.params.id
    const character = api.Characters.find(character => character.id == id)
    if (!character) return res.status(404).send('Character not found')
    else res.send(character)
}

export const getSoundtrack = (req, res) => {
    const id = req.params.id
    const soundtrack = api.Soundtracks.find(soundtrack => soundtrack.id == id)
    if (!soundtrack) return res.status(404).send('Soundtrack not found')
    else res.send(soundtrack)
}

// POST

export const createCharacter = (req, res) => {
    const character = {
        id: api.Characters.length + 1,
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        about: {
            personality: req.body.about?.personality,
            gender: req.body.about?.gender,
        },
        age: req.body.age,
    };

    const requiredFields = ['name', 'description', 'image', 'age']
    const missingFields = requiredFields.filter(field => !character[field])
    if (missingFields.length > 0) {
        return res.status(400).json({ error: "Missing fields", missingFields });
    }

    api.Characters.push(character);
    res.json(character);
}

export const createSoundtrack = (req, res) => {
    const soundtrack = {
        id: api.Soundtracks.length + 1,
        name: req.body.name,
        link: req.body.link,
    }
    const requiredFields = ['name', 'link']
    const missingFields = requiredFields.filter(field => !soundtrack[field])
    if (missingFields.length > 0) {
        return res.status(400).json({ error: "Missing fields", missingFields });
    }
    api.Soundtracks.push(soundtrack);
    res.json(soundtrack)
}

// UPDATE

export const updateCharacter = (req, res) => {
    const id = req.params.id;
    const characterIndex = api.Characters.findIndex(character => character.id == id);
    if (characterIndex === -1) {
        return res.status(404).json({ error: "Character not found" });
    }

    const updatedCharacter = {
        id: id,
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        about: {
            personality: req.body.about?.personality,
            gender: req.body.about?.gender,
        },
        age: req.body.age,
    };

    const requiredFields = ['name', 'description', 'image', 'age'];
    const missingFields = requiredFields.filter(field => !updatedCharacter[field]);
    if (missingFields.length > 0) {
        return res.status(400).json({ error: "Missing fields", missingFields });
    }

    api.Characters[characterIndex] = updatedCharacter;
    res.json(updatedCharacter);
}

export const updateSoundtrack = (req, res) => {
    const id = req.params.id;
    const soundtrackIndex = api.Soundtracks.findIndex(soundtrack => soundtrack.id == id);
    if (soundtrackIndex === -1) {
        return res.status(404).json({ error: "Soundtrack not found" });
    }

    const updatedSoundtrack = {
        id: id,
        name: req.body.name,
        link: req.body.link,
    };

    const requiredFields = ['name', 'link'];
    const missingFields = requiredFields.filter(field => !updatedSoundtrack[field]);
    if (missingFields.length > 0) {
        return res.status(400).json({ error: "Missing fields", missingFields });
    }

    api.Soundtracks[soundtrackIndex] = updatedSoundtrack
    res.json(updatedSoundtrack);
}

// DELETE

export const deleteCharacter = (req, res) => {
    const id = req.params.id;
    const characterIndex = api.Characters.findIndex(character => character.id == id);
    if (characterIndex === -1) {
        return res.status(404).json({ error: "Character not found" });
    }

    api.Characters.splice(characterIndex, 1);
    res.json({ message: "Character deleted successfully" });
}

export const deleteSoundtrack = (req, res) => {
    const id = req.params.id;
    const soundtrackIndex = api.Soundtracks.findIndex(soundtrack => soundtrack.id == id);
    if (soundtrackIndex === -1) {
        return res.status(404).json({ error: "Soundtrack not found" });
    }

    api.Soundtracks.splice(soundtrackIndex, 1);
    res.json({ message: "Soundtrack deleted successfully" });
}