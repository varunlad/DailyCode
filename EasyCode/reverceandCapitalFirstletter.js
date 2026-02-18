function reverseAndFirstLetterCapital(text){
    let textSplit = text.split(' ');
    console.log( text);
    let output =[];
    for(let i=textSplit.length-1; i>-1; i--){
        output.push(firstLetterCapital(textSplit[i]))
    }
return output.join(' ');
}
function firstLetterCapital(text){
    let textSplit = text.split('');
    let textWithFirstCapLetter = [] 
    for(let i=0; i<textSplit.length; i++){
        if(i===0){textWithFirstCapLetter.push(textSplit[i].toUpperCase())}
        else{textWithFirstCapLetter.push(textSplit[i])}
    }
    return textWithFirstCapLetter.join('')
}

console.log(reverseAndFirstLetterCapital('my name is varun'))