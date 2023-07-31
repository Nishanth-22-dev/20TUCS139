const mongoose=require('mongoose')

const url='mongodb+srv://20tucs139:<Nish9360510426>@cluster0.1xppenr.mongodb.net/'
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
const trainschema=new mongoose.Schema({
    trainnumber:{type : String,required:true},
    trainame:{type:String ,required:true},
    departuretime:{type:Date,required:true},
    seatavialability:{
    sleeper:{type:Number,default:0},
    AC:{type:Number,default:0}
    },
    prices:{
        sleeper:{type:Number,default:0},
        AC:{type:Number,default:0
    }
}
})

const Train=mongoose.model('train',trainschema)

module.export=Train