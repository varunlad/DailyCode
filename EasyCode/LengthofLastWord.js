////Length of Last Word

 function lengthOfLastWord(s) {
    if(s.trim() === '') return 0;
    let wordArr = s.split(" ").filter((ele => ele !== ''));
    let lastWordLenth =  wordArr[wordArr.length - 1]?.length;
    return lastWordLenth;
};
console.log(lengthOfLastWord("    "));
console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
