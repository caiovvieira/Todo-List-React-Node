class User {

    static users = []

    static index(req, res) {
        return res.status(200).send(User.users)
    }

    static store(req, res) {
        const { name, email, password } = req.body

        const user = { name, email, password }

        User.users.push(user)

        return res.status(200).json({ user })
    }

}

module.exports = { User }

