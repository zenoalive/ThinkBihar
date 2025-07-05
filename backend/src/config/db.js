import mongoose from 'mongoose'

export const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MONGODB connected successfully")
    }
    catch{
        console.log("Error connecting database")
        process.exit(1)
    }
}