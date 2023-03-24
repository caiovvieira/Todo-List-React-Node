const jwt = require("jsonwebtoken")


function auth(req, res, next) {

    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({ message: "UNATHORIZED" })
    }
    
    const token = jwt.verify(authorization, process.env.SECRET_KEY, (err) => {
        if (err) {
            return res.status(401).json({ message: "UNATHORIZED" })
        }

        next()
    })
}




module.exports = auth

