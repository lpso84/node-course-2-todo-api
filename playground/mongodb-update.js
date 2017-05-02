// const MongoClient = require ('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err , db) =>{
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
    console.log('Connected to MongoDB server');

    // find one and update

    // db.collection('Todos').findOneAndUpdate({
    //   _id: new ObjectID('59087fbb24973da81d1fb04e')
    // }, {
    //   $set: {
    //     completed: true
    //   }
    // }, {
    //   returnOriginal: false
    // }).then((result) => {
    //   console.log(result);
    // })


    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('59085a593219e943e8cbfffd')
    }, {
      $inc: {
        age: 1
      },
      $set:{
        name: 'Luis'
      }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    })


    // db.close();
});
