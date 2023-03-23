const jwt = require("jsonwebtoken")

function auth(req, res, next) {

    const { authorization } = req.headers
    const { refreshToken } = req.body

    if (!authorization) {
        return res.status(401).json({ message: "UNATHORIZED" })
    }

    if (!refreshToken) {
        return res.status(401).json({ message: "UNATHORIZED" })
    }

    const token = jwt.verify(authorization, process.env.SECRET_KEY, (err, decode) => {
        if (err) {
            console.log("token expirou");

            const verify = verifyRefreshToken(refreshToken)

            if (verify) {
                console.log(verify);
                const newToken = jwt.sign({ refreshToken }, process.env.SECRET_KEY, { expiresIn: "1h" })
                res.header({ authorization: newToken })
                console.log("novo token");
                return next()
            }
            else {
                return res.status(401).json({ message: "UNATHORIZED" })
            }
        }

        next()
    })
}

function verifyRefreshToken(refreshToken) {
    const refreshTokent = jwt.verify(refreshToken, process.env.SECRET_KEY, (err) => {
        if (err) {
            return false
        }
        else {
            return true
        }
    })

    return refreshTokent
}


module.exports = auth

