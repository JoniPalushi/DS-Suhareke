function checkPalindromes(words) {
    for(var i=0; i<words.length; i++){
        if(words[i] === words[i].split('').reverse().join('')){
            console.log("YES");

        }else
        {
console.log("NO");
        }
    }
}

checkPalindromes(["kimik", "level", "module"]);