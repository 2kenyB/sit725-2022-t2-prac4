const mongoose =require("mongoose")



const connectDB = async () => {
    try {
const conn = await mongoose.connect(process.env.MONGO_URL,{
            UseUnifiedTopology: true,
            useNewUrlparser : true,
            usCreateIndex:true
        });

        console.log('Connected succesfully');

    } catch (error) {
        console.error('Error:');
        process.exit();

        
    }
}

module.exports  = connectDB;