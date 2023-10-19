const mongoose = require('mongoose');

mongoose
  .connect( //mongodb://127.0.0.1:27017/restraunt-api local url
    'mongodb+srv://prashantnegi478:Prashant10@foodordering.rjk24bn.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }
  )
  .then(result => {

    console.log("Connected to database Successfully!")

  })
  .catch(err => {
    console.log("Can't connect to database!", err);
  });