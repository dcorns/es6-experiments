'use strict';
module.exports = function(){
  return {
    //demonstrate 'let'
    testLet: function(){
      var x = 6;
      {
        let y = x * 2;
        console.log('Insideblock: x=' + x + ' y=' + y);
        console.log('let y = 7 will generate a type error and will not compile (let already used with y');
        let person = {name: 'ted', position: 'coder'};
        console.dir(person);
      }
      try{
        console.log('Outsideblock: x=' + x + ' y=' + y);
      }
      catch(e){
        console.log('Of course this fails because the purpose of let is to block scope so');
        console.log(e.message);
      }
      try{
        console.dir(person);
      }
      catch(e){
        console.log('Of course this fails because the purpose of let is to block scope so');
        console.log(e.message);
      }
    },
    //demonstrate const
    testConst: function(){
      {
        const A_NUMBER = 30;
        console.log('A_NUMBER = ' + A_NUMBER);
        console.log('const can not be reassigned, A_NUMBER = 7 will not even compile');
      }
      try{
        console.log('ANUMBER = ' + A_NUMBER);
      }
      catch(e){
        console.log('const is block scoped\n' + e.message)
      }
    },
    testSpread: function(){
      //for function arguments
      var names = ['Fred', 'Barney', 'BamBam'];
      function bedrockBoys(a, b, c){
        console.log(a, b, c);
      }
      //instead of bedrockBoys.apply(null, names);
      bedrockBoys(...names);
      //Use in array literals to insert arrays
      var names2 = ['Wilma',...names, 'Betty', 'Pebbles'];
      console.log(names2);
      console.log(names2.length);
      //How about extracting all the letters
      var letters = [...names[0]];
      console.log(letters);
      //Use to apply where apply can not be used, like with a constructor
      var data = [2000, 0, 1];
      var d = new Date(...data);
      console.log(d);
      //Pushing arrays to the end of arrays Array.prototype.push.apply(names, ['Wilma', 'Betty', 'Pebbles']);
      names.push(...['Wilma', 'Betty', 'Pebbles']);
      console.log(names);
    }

  };
}();