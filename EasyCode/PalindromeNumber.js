  //Palindrome Number
  
  function isPalindrome(x) {

    if (typeof (x) !== 'number' || x < 0) {
        return false;
    }
    var rev = 0;
    var num = x;
    while (num > 0) {
        rev = rev * 10 + (num % 10);
        num = parseInt(num / 10);
    }

    if (rev === x) {
        return true; 
    }
    else {
        return false;
    }
    
};

console.log(isPalindrome(121));
console.log(isPalindrome(3211));
console.log(isPalindrome(12321));