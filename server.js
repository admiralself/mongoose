const express = require('express');
const app = express();
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/mongoose', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log(`CONNECTED TO MONGO!`);
    })
    .catch((err) => {
        console.log(`OH NO! MONGO CONNECTION ERROR!`);
        console.log(err);
    })

    const PersonSchema = new mongoose.Schema({
       
      
        name: {
            type: String,
            required: true
        },

        
        age: {
            type: Number,
            required: true,
        },
        favoriteFoods: {
            type: [String]
        }
    })


    	
const Person = mongoose.model('Person', PersonSchema);


/*     const person = new Person({
        name: "MONJIA",
        age: 80,
        favoriteFoods: ['Loubiya','KAMOUNIYA']
    }); */


/*     var persons = [{ name: 'Mongoose Tutorial', age: 10, favoriteFoods: ['Loubiya','KAMOUNIYA'] },
                    { name: 'NodeJS tutorial', age: 15, favoriteFoods: ['Loubiya','KAMOUNIYA'] },
                    { name: 'MongoDB Tutorial', age: 20, favoriteFoods: ['Loubiya','KAMOUNIYA'] }];




                    Person.collection.insertMany(persons, function (err, docs) {
                        if (err){ 
                            return console.error(err);
                        } else {
                          console.log("Multiple documents inserted to Collection");
                        }
                      }); */

                      
                    /* Person.findOne({ 'name': 'MONJIA' }, function (err, person) {
                        if (err) return handleError(err);
                        // Prints "Space Ghost is a talk show host".
                        console.log(person.name,person.age);
                      }); */

/*  var id = '627120085fddac8e412def1f';
 Person.findById(id, function (err, docs) {
    if (err){
        console.log(err);
    }
    else{
        console.log("Result : ", docs);
    }
}); */
 


 



                      /* var id = '62717fa23471b0f948451c6e';
                      Person.findOneAndUpdate( 
                        { _id: ('62717fa23471b0f948451c6e') }, 
                        { $push: { 
                                  favoriteFoods: ['test','test2']
      
                                } 
                        
                        }) */

                      
                        
/* const id = '627120085fddac8e412def1f';
const foodToAdd = "hamburger";
Person.findById(id, (err, data) => {
  if (err) return console.log(err);
  data.favoriteFoods.push(foodToAdd);

});
 */



  const ageToSet = 15;
  Person.findOneAndUpdate(
    { name:  'MONJIA' },
    { $set: { age: ageToSet } },
    { new: true },
    (err, data) => {
      if (err) return console.log(err);
    });

    

/*     const _id = '627120085fddac8e412def1f';
    Person.findByIdAndRemove(_id, (err, data) => {
      if (err) return console.log(err);
    });

 */


/*       const nameToRemove = "NodeJS tutorial";
      Person.remove({ name: nameToRemove }, (err, data) => {
      if (err) return console.log(err);
    });
  */

    const foodToSearch = "KAMOUNIYA";
  Person.find({ favoriteFoods: foodToSearch })
    .sort({ name: 1 })
    .limit(2)
    .select({ age: 0 })
    .exec((err, dataNext) =>{
      if (err) return console.log(err);
      console.log(dataNext);
    });
    
/*     
    Person.find({}, function (err, person) {
      if (err) return handleError(err);
      console.log(person);
    }); */