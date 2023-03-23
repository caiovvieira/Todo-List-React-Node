const { User } = require('./userController')
const jwt = require('jsonwebtoken')

class Auth {

    static login(req, res) {
        const { email, password } = req.body
        const findUser = User.users
        const user = findUser.find(user => user.email === email && user.password === password)

        if (!user) {
            return res.status(401).json({ message: "USER NOT FOUND" })
        }

        else {
            const token = jwt.sign({ email: user.email }, process.env.SECRET_KEY, { expiresIn: "1h" })
            const refreshToken = jwt.sign({token}, process.env.SECRET_KEY, { expiresIn: "6h" })
            res.header({ authorization: token })
            return res.status(200).json({user:user.name, refreshToken})
        }
    }
}


module.exports = { Auth }

