import User from '../models/userModel.js'

class UserController {

    static async index(req, res) {
        try {
            const users = await User.find()
            
            return res.status(200).json(users)
            
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }


    static async store(req, res) {
        try {
            const { name, email, password } = req.body
            const newUser = new User({name, email, password})
            await newUser.save()

            return res.status(200).json(newUser)

        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }


    static async show(req, res) {
        try {
            const { id } = req.params
            const getUser = await User.findById(id)
            
            return res.status(200).json(getUser)
            
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
        
    }
    

    static async update(req, res) {
        try {
            const { id } = req.params
            const { name, password } = req.body
            const updateUser = await User.findByIdAndUpdate(id, {name, password})
            
            return res.status(200).json({ message: "USER UPDATED" })
            
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }
    
    
    static async delete(req, res) {
        try {
            const { id } = req.params
            const deleteUser = await User.findByIdAndDelete(id)
            
            return res.status(200).json({ message: "USER DELETED" })

        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    
}

export default UserController

