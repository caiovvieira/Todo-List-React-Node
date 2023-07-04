import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'
import Token from '../models/tokenModel.js'

class Auth {

    static async login(req, res) {

        const { email, password } = req.body
        const user = await User.findOne({ email, password })

        if (!user) {
            return res.status(401).json({ message: "EMAIL OR PASSWORD INCORRECT" })
        }

        const token = await Token.findOne({ user_id: user._id })

        if (token) {
            await token.deleteOne()
        }

        const accessToken = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: "15m" })
        const refreshToken = jwt.sign({ id: user._id, accessToken }, process.env.SECRET_KEY, { expiresIn: "6h" })

        const newRefreshToken = new Token({ refreshToken, user_id: user._id })
        await newRefreshToken.save()

        res.set("Authorization", accessToken)

        return res.status(200).json({ user: { name: user.name, email: user.email }, refreshToken })

    }

    static async generateTokens(req, res) {

        const { refreshToken } = req.body

        const existRefreshToken = await Token.findOne({ refreshToken })

        if (!existRefreshToken) {
            return res.status(401).json({ message: "UNATHORIZED" })
        }

        let getRefreshTokenId

        const verifyToken = jwt.verify(refreshToken, process.env.SECRET_KEY, async (err, decode) => {
            if (err) {
                return res.status(401).json({ message: "UNATHORIZED" })
            }

            getRefreshTokenId = decode?.id
        })

        await Token.deleteOne({user_id:getRefreshTokenId})

        const newAccessToken = jwt.sign({ id: getRefreshTokenId }, process.env.SECRET_KEY, { expiresIn: "15m" })
        const newRefreshToken = jwt.sign({ id: getRefreshTokenId, newAccessToken }, process.env.SECRET_KEY, { expiresIn: "6h" })

        const saveRefreshToken = new Token({ refreshToken: newRefreshToken, user_id: getRefreshTokenId })
        await saveRefreshToken.save()

        return res.status(200).json({ accessToken: newAccessToken, refreshToken: newRefreshToken })
    }
}


export default Auth

