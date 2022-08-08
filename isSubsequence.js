//write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. The function should check whether the characters in the first string appear somewhere in rhe SECOND string without their order changing.

//two strings, second is larger than the first so check that 
//pointers can move together to the right

function isSubsequence(str1, str2) {
 if (str1.length > str2.length) return false;

}

// console.log(isSubsequence('abc', 'ababbccdd'))