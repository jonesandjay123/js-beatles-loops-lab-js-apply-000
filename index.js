// add solution here
function theBeatlesPlay(musicians, instruments){
  var emptyArray = [];

  for (var i=0; i<musicians.length; i++) {
    var string = musicians[i]+" plays "+instruments[i];
    emptyArray.push(string);
  }
  return emptyArray;
}

function johnLennonFacts(facts){
  var emptyArray = []; 
  
  var i = 0;
  while(i < facts.length){
    emptyArray[i] = facts[i]+"!!!";
    i++;
  }
  return emptyArray;
}

function iLoveTheBeatles(num){
  var emptyArray = []; 
  
  if(num < 15){
    var i = 0;
    do{
      emptyArray.push("I love the Beatles!");
      i++;
    }
    while(i < num)
  }
  return emptyArray;
}