'use strict';
module.exports = function(){
  return {
    //demonstrate 'let'
    testLet: function(){
      var x = 6;
      {
        let y = x * 2;
        console.log('Insideblock: x=' + x + ' y=' + y);
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
    }
  };
}();