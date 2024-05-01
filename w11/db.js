import mongoose from 'mongoose';

const url = `mongodb+srv://somesh:somesh@cluster0.mpdotw5.mongodb.net/student?retryWrites=true&w=majority`

const connectionParams = {
  useNewUrlParser : true,
  useUnifiedTopology: true
}

const connectToDB = () => {
  mongoose.connect(url, connectionParams)
  .then(() => {
    console.log('Database connection successfully')
  }).catch(err => {
    console.log('Error while connecting to DB')
    console.log(err)
  })
}

export {connectToDB}