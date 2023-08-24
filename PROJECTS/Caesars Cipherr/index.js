const rot13 = (str) => {
  let decipher = "";
  for(let i=0;i<str.length;i++){
    let characterASCII = str[i].charCodeAt(0);
    if(characterASCII>=65 && characterASCII<=90){
      if(characterASCII>=78){
        decipher+=String.fromCharCode(characterASCII-13)
      }else{
        decipher+=String.fromCharCode(characterASCII+13)
      }
    }else{
      decipher+=str[i]
    }    
  }
  console.log(decipher);
}

rot13("SERR YBIR?");
rot13("SERR PBQR PNZC")