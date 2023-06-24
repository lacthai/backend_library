require('dotenv').config();

const mongoose = require('mongoose');

const connectionURL = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.hutwe0p.mongodb.net/library?authSource=Cluster0&authMechanism=SCRAM-SHA-1`


mongoose.connect(connectionURL , {useNewUrlparser: true})
.then(() => console.log('connected to mongodb'))
.catch(err => console.log(err))

mongoose.connection.on('error', err => {
  console.log(err)
})