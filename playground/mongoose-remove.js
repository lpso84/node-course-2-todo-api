const {ObjectID} = require('mongodb');

const {mongoose} = require ('./../server/db/mongoose');
const {Todo} = require ('./../server/models/todo');
const {Users} = require ('./../server/models/user');

//Todo.remove
// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

// Todo.findOnedAndRemove()
// Todo.findByIdAndRemove()

Todo.findOnedAndRemove({_id:'590af567b91685c7ff2faf8e'}).then((todo) =>{
  console.log(todo);
})

Todo.findByIdAndRemove('590af567b91685c7ff2faf8e').then((todo) =>{
  console.log(todo);
});
