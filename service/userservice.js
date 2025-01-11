const User=require('../models/usermodel')

class UserService{

    async register(data){
        const user = new User(data)
        await user.save()
        return user
    }

    async login(data){
        const user = await User.findOne({email:data.email})
        if(!user){
            return {error:'User not found',status:404}
            }
        else{
            return user
        }
    }
}
module.exports=new UserService()