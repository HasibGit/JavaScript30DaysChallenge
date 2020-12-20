// jshint esversion : 6
// start with strings, numbers and booleans

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.

// You might think we can just do something like this:
//const team = players;

// however what happens when we update that array?
//team[1] = 'bos';


// now here is the problem!
//console.log(team);
//console.log(players);

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way
const team = players.slice(); // slice returns a copy. we give from and to index in parameters. if we pass nothing, it returns the
                              // the whole array

// or create a new array and concat the old one in
const team2 = [].concat(players);
 team2[1] = 'bos';
// console.log(team2, players);

// or use the new ES6 Spread
const team3 = [...players];
team3[2] = 'hasib';
// console.log(team3,players);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};

// and think we make a copy:
const me = Object.assign({},person,{birthYear : 1998});
console.log(me,person);

// We will hopefully soon see the object ...spread

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const wes = {
      name: 'Wes',
      age: 100,
      social: {
        twitter: '@wesbos',
        facebook: 'wesbos.developer'
      }
    };

    console.clear();
    console.log(wes);

    const dev = Object.assign({}, wes);
    dev.social.facebook = 'hasib/476';
    //console.log(dev,wes); // both got modified, cause lvl_1 copying, social was passed as ref.

    const dev2 = JSON.parse(JSON.stringify(wes));  // one way of copying the whole object deep
