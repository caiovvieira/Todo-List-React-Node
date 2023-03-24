const { User } = require('./userController')
const jwt = require('jsonwebtoken')

class Auth {

    static refreshTokens = []

    static login(req, res) {
        const { email, password } = req.body
        const findUser = User.users
        const user = findUser.find(user => user.email === email && user.password === password)

        if (!user) {
            return res.status(401).json({ message: "USER NOT FOUND" })
        }

        const token = jwt.sign({ email: user.email }, process.env.SECRET_KEY, { expiresIn: "2h" })
        const refreshToken = jwt.sign({ email: user.email, token }, process.env.SECRET_KEY, { expiresIn: "6h" })

        Auth.refreshTokens.push(refreshToken)

        return res.status(200).json({ user: { name: user.name, email: user.email }, token, refreshToken })

    }

    static generateTokens(req, res) {

        const { refreshToken } = req.body

        const existRefreshToken = Auth.refreshTokens.includes(refreshToken)

        let user = {}

        if (!existRefreshToken) {
            return res.status(401).json({ message: "UNATHORIZED" })
        }

        const verifyToken = jwt.verify(refreshToken, process.env.SECRET_KEY, (err, decode) => {
            if (err) {
                return res.status(401).json({ message: "UNATHORIZED" })
            }

            user.email = decode?.email
        })

        Auth.refreshTokens = Auth.refreshTokens.filter(token => token !== refreshToken)

        const newToken = jwt.sign({ email: user.email }, process.env.SECRET_KEY, { expiresIn: "2h" })
        const newRefreshToken = jwt.sign({ email: user.email, newToken }, process.env.SECRET_KEY, { expiresIn: "6h" })

        Auth.refreshTokens.push(newRefreshToken)

        return res.status(200).json({ token: newToken, refreshToken: newRefreshToken })
    }
}


module.exports = { Auth }

