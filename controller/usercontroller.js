const userservice=require('../service/userservice')
const jwt = require('jsonwebtoken');

class UserController{
    async registration(req,res){
        try {
            const data = req.body
            const user = await userservice.register(data)
            if (user) {
                res.status(200).json({
                    message: 'Registration Successfull',
                    user: user,
                    status: true
                })
            } else {
                res.status(400).json({
                    message: 'Registration Failed',
                    user: {},
                    status: false
                })
            }
        } catch (error) {
            res.status(500).json({
                status: false,
                message: 'Internal Server Error',
                error: error.message
            })
        }
    }
    async login(req,res){
        try {
            const data = req.body
            const user = await userservice.login(data)
            if (user) {
                const token = jwt.sign({ id: user._id,email:user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
                res.status(200).json({
                    message: 'Login Successfull',
                    user: user,
                    status: true,
                    token: token
                })
            } else {
                res.status(400).json({
                    message: 'Login Failed',
                    user: {},
                    status: false
                })
            }
        } catch (error) {
            res.status(500).json({
                status: false,
                message: 'Internal Server Error',
                error: error.message
            })
        }
    }
                                
}
module.exports=new UserController()