// const MongoClient = require ('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err , db) =>{
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
    console.log('Connected to MongoDB server');

    //delete many
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) =>{
    //   console.log(result);
    // });

    //delete one
    // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result) => {
    //   console.log(result);
    // });

    //find oneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) =>{
    //   console.log(result);
    // })

    // db.collection('Users').deleteMany({name: 'Luis'}).then((result) =>{
    //   console.log(result);
    // });

    // db.collection('Users').findOneAndDelete({
    //   _id: new ObjectID('59085adce0e532273ce8dcc8')
    // }).then((result) =>{
    //   console.log(JSON.stringify(result, undefined, 2));
    // })


    // db.close();
});
