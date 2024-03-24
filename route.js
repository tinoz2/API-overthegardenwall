import { Router } from 'express'
const router = Router()
import { createCharacter, createSoundtrack, deleteCharacter, deleteSoundtrack, getAPI, getCharacter, getCharacters, getSoundtrack, getSoundtracks, updateCharacter, updateSoundtrack } from './crud.controller.js'
import { auth } from './auth.js'

// GET

router.get('/', getAPI)

router.get('/characters', getCharacters)

router.get('/soundtracks', getSoundtracks)

router.get('/character/:id', getCharacter)

router.get('/soundtrack/:id', getSoundtrack)

// POST

router.post('/character', auth, createCharacter);

router.post('/soundtrack', auth, createSoundtrack);

// PUT

router.put('/character/:id', auth, updateCharacter);

router.put('/soundtrack/:id', auth, updateSoundtrack);

// DELETE

router.delete('/character/:id', auth, deleteCharacter);

router.delete('/soundtrack/:id', auth, deleteSoundtrack);

export default router