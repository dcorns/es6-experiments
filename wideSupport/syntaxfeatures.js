/**
 * syntaxfeatures
 * Created by dcorns on 12/1/15
 * Copyright © 2015 Dale Corns
 */
'use strict';
//rest parameter requires node --harmony
function restpar(a, b, ...c){
  console.log(a, b, c);
  console.log(arguments);
}
restpar(1, 3, 5, 10, 15, 20, 25);

