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
function fuzzyMatch(drivers,string){
  return drivers.filter(name => {
let result=[];
let element="";
    for(let i=0;i<string.length;i++)
    { if (name.charAt(i)=== string.charAt(i))
     { element=name;
console.log(element)}
   }
return result.push(element);
  })
}
function matchName(drivers,string){
let filtered=drivers.filter(function(element){
                if(element.name===string){
                     return element;
                }
})
return filtered;

}
