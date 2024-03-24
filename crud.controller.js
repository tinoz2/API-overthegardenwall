import { Character } from './schema/character.js';
import { Soundtrack } from './schema/soundtrack.js';

// GET

export const getAPI = async (req, res) => {
    try {
        const characters = await Character.find();
        const soundtracks = await Soundtrack.find();
        res.json({ characters, soundtracks });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getCharacters = async (req, res) => {
    try {
        const characters = await Character.find();
        res.json(characters);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getSoundtracks = async (req, res) => {
    try {
        const soundtracks = await Soundtrack.find();
        res.json(soundtracks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getCharacter = async (req, res) => {
    const id = req.params.id;
    try {
        const character = await Character.findOne({ id: id });
        if (!character) {
            return res.status(404).send('Character not found');
        }
        res.json(character);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getSoundtrack = async (req, res) => {
    const id = req.params.id;
    try {
        const soundtrack = await Soundtrack.findOne({ id: id });
        if (!soundtrack) {
            return res.status(404).send('Soundtrack not found');
        }
        res.json(soundtrack);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// POST

export const createCharacter = async (req, res) => {
    const characterData = req.body;
    try {
        const character = await Character.create(characterData);
        res.json(character);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const createSoundtrack = async (req, res) => {
    const soundtrackData = req.body;
    try {
        const soundtrack = await Soundtrack.create(soundtrackData);
        res.json(soundtrack);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// UPDATE

export const updateCharacter = async (req, res) => {
    const id = req.params.id;
    const characterData = req.body;
    try {
        const updatedCharacter = await Character.findByIdAndUpdate(id, characterData, { new: true });
        if (!updatedCharacter) {
            return res.status(404).send('Character not found');
        }
        res.json(updatedCharacter);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const updateSoundtrack = async (req, res) => {
    const id = req.params.id;
    const soundtrackData = req.body;
    try {
        const updatedSoundtrack = await Soundtrack.findByIdAndUpdate(id, soundtrackData, { new: true });
        if (!updatedSoundtrack) {
            return res.status(404).send('Soundtrack not found');
        }
        res.json(updatedSoundtrack);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// DELETE

export const deleteCharacter = async (req, res) => {
    const id = req.params.id;
    try {
        await Character.findByIdAndDelete(id);
        res.json({ message: 'Character deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const deleteSoundtrack = async (req, res) => {
    const id = req.params.id;
    try {
        await Soundtrack.findByIdAndDelete(id);
        res.json({ message: 'Soundtrack deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}