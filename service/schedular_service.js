const schedular_model=require('../models/timeslotmodel')

class SchedularService{
    async add_slot(data){
        try {
            console.log("Service data",data);
            
            const new_slot = new schedular_model(data)
            await new_slot.save()
            return new_slot
        }
        catch (err) {
            console.log(err)
            return false
        }
    }

    async get_slots(){
        try {
            const slots = await schedular_model.find()
            return slots
        }
        catch (err) {
            console.log(err)
            return false
        }
    }
}
module.exports=new SchedularService()