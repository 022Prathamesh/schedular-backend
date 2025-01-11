const schedular_service=require('../service/schedular_service')

class SchedularController{
    async addSlots(req,res){
        try{
            const slots = req.body
            console.log("Dfata",slots);
            
            const result = await schedular_service.add_slot(slots)
            if(result){
                res.status(200).json({
                    message: 'Slot added',
                    result:result ,
                    status: true
                })
            }   
            else{
                res.status(400).json({
                    message: 'Failed to add slot',
                    status: false,
                    result:{}
                })
            }         
        }
        catch(err){
            console.log(err)
            res.status(500).send({message:err.message,status:false})
            }
    }

    async get_slots(req,res){
        try {
            const result = await schedular_service.get_slots()
            if (result) {
                res.status(200).json({
                    message: 'Slots fetched',
                    result: result,
                    status: true
                })
            }
            else {
                res.status(400).json({
                    message: 'Failed to fetch slots',
                    status: false,
                    result: {}
                })
            }

        } catch (error) {
            res.status(500).json({
                status: false,
                message: error.message
            })
        }

    }
}
module.exports=new SchedularController()