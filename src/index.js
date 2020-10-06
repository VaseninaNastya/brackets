module.exports = function check(str, bracketsConfig) {
  let newBracketsConfig = bracketsConfig.map(function(item){
return item.flat().join("")
  })
      let result = 0
      while(result!=-1){
          let newstr=str
          for(let i = 0; i<newBracketsConfig.length; i++){
              newstr=newstr.replace(newBracketsConfig[i], '')
          }
          if(newstr==str){
              result=-1
          }else{
              str=newstr
          }
      }
      if(str.length!=0){
      return false
      }else{
      return true
      }   
}
