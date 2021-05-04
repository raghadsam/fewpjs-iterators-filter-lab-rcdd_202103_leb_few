// Code your solution here
function findMatching(drivers,string){
  let filtered = drivers.filter(function (word) {
let element=word.toUpperCase();
let modifiedString=string.toUpperCase();
return element.includes(modifiedString); });
return filtered;
  }
  /*
  function fuzzyMatch(drivers,letters){
  lettersArray=letters.split(""); //["S","a"]
          let filtered=drivers.filter(function (names){
                  let result=[];
                  let namesSplit=names.split("");
                  //["B","o","b","b","y"]
                  for(let i=0;i<namesSplit.length;i++){
                  if(namesSplit[i]===lettersArray[i])
                      result.push(namesSplit);
                  else
                      if(result.length>=1)
                       result.pop()
  }
                  return result.join("");
  })
  return filtered;
  }
  function fuzzyMatch(drivers,letters){
lettersArray=letters.split(""); //["S","a"]
        let filtered=drivers.filter(function (names){
                let result=[];
                let namesSplit=names.split("");
                //["B","o","b","b","y"]
                for(let i=0;i<namesSplit.length;i++){
                if(namesSplit[i]===lettersArray[i])
                    result.push(namesSplit);
                else
                {if(result.length>=1)
                     result.splice(result.indexOf(namesSplit[i]))}
}
//console.log(result)
                return result.join("");
})
return filtered;
}
*/
function fuzzyMatch(drivers,letters) {
let lettersArray=letters.split(""); //["s","a","r"]
let filteredNames = drivers.filter(function(word) {
let wordArray=word.split(""); //["s","a","r","a","h"]
     let result=[];
let ok=0;
for(let i=0;i<=lettersArray.length;i++)
{        if(wordArray[i]===lettersArray[i])
            {ok++;}
}
if(ok===lettersArray.length)
{result.push(word)
console.log(result);
return result;}
});
    return filteredNames;
}
function matchName(drivers,string){
let filtered=drivers.filter(function(element){
                if(element.name===string){
                     return element;
                }
})
return filtered;

}
