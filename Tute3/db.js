const mongoose = require('mongoose')

exports.connectDB = async () => {
    const connect = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`Database connected successfully on host ${connect.connection.host} and on port ${connect.connection.port}`)
}