import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization
        if (!token) {
            return res.status(401).json({ error: 'Unauthorized' })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if (!decoded) {
            return res.status(401).json({ error: 'Unauthorized' })
        }

        next()
    } catch (error){
        return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }
}