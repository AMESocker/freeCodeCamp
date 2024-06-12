require('dotenv').config();

//? 1. Install and Set Up Mongoose
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

//? 2. Create a Model
const Schema = mongoose.Schema;

const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});

let Person = mongoose.model('Person', personSchema);

//? 3. Create and Save a Record of a Model
const createAndSavePerson = (done) => {
  const person = new Person({ name: 'Paul', age: 25, favoriteFoods: ['Potatoes', 'Cheese'] });

  person.save((err, data) => {
    if (err) return console.error(err);
    done(null, data);
  });
};

//? 4. Create Many Records with model.create()
const arrayOfPeople = [
  { name: 'John', age: 30, favoriteFoods: ['Pizza', 'Pasta'] },
  { name: 'Mary', age: 25, favoriteFoods: ['Burger', 'Fries'] },
  { name: 'Jane', age: 35, favoriteFoods: ['Salad', 'Soup'] }
];
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data) => {
    if (err) return console.error(err);
    done(null, data);
  });
};

//? 5. Use model.find() to Search Your Database
const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, function(err, people) {
    if (err) return console.error(err);
    done(null, people);
  });
};
//? 6. Use model.findOne() to Return a Single Matching Document from Your Database
const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, function(err, person) {
    if (err) return console.error(err);
    done(null, person);
  });
};
//? 7. Use model.findById() to Search
const findPersonById = (personId, done) => {
  Person.findById(personId, function(err, person) {
    if (err) return console.error(err);
    done(null, person);
  });
};
//? 8. Perform Classic Updates by Running Find, Edit, then Save
const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById(personId, function(err, person) {
    if (err) return console.error(err);
    person.favoriteFoods.push(foodToAdd);
    person.save(function(err, updatedPerson) {
      if (err) return console.error(err);
      done(null, updatedPerson);
    });
  });
};
//? 9. Perform New Updates on a Document Using model.findOneAndUpdate()
const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  Person.findOneAndUpdate(
    {name: personName},
    {age: ageToSet},
    {new: true},
    function(err, updatedPerson) {
      if (err) return console.error(err);
      done(null, updatedPerson);
    }
  );
};
//? 10. Delete One Document Using model.findByIdAndRemove
const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, function(err, removedPerson) {
    if (err) return console.error(err);
    done(null, removedPerson);
  });
};
//? 11. Delete Many Documents with model.remove()
const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  Person.remove({name: nameToRemove}, function(err, data) {
    if (err) return console.error(err);
    done(null, data);
  });
};
//? 12. Chain Search Query Helpers to Narrow Search Results
const queryChain = (done) => {
  const foodToSearch = "burrito";
  Person.find({favoriteFoods: foodToSearch})
    .sort({name: 1})
    .limit(2)
    .select('-age')
    .exec(function(err, data) {
      if (err) return console.error(err);
      done(null, data);
    });
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
