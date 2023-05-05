import mongoose from "../databases/connection.js";


const user_schema = new mongoose.Schema({
    // name:{
    //     type:String,
    //     required,
    // },
    username:{
        type:String,
        required:true
    },
    // company_name:String,
    // country:{
    //     type:'String',
    //     required: true
    // },
    // mobile_number:{
    //     type:number,
    // },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required: true
    }
});

const user_model = mongoose.model('user_data',user_schema)

export default user_model