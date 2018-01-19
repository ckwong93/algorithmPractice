// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.
//
// Each letter in the magazine string can only be used once in your ransom note.
//
// Note:
// You may assume that both strings contain only lowercase letters.
//
// canConstruct("a", "b") -> false
// canConstruct("aa", "ab") -> false
// canConstruct("aa", "aab") -> true

var canConstruct = function(ransomNote, magazine) {
    let ransomCollection = {};
    let magazineCollection = {};

    for(var i = 0; i < ransomNote.length; i++){
        let currentLetter = ransomNote[i];
        if(ransomCollection[currentLetter]){
            ransomCollection[currentLetter]++;
        }
        else{
            ransomCollection[currentLetter] = 1;
        }
    }

    for(var j = 0; j < magazine.length; j++){
        let currentLetter = magazine[j];
        if(magazineCollection[currentLetter]){
            magazineCollection[currentLetter]++;
        }
        else{
            magazineCollection[currentLetter] = 1;
        }
    }
//     console.log(ransomCollection);
//     console.log(magazineCollection);
    for(var letters in ransomCollection){
        if(!magazineCollection[letters]){
          console.log('its here first');
          return false
        }
        else if(ransomCollection[letters] > magazineCollection[letters]){
          console.log('its here second');
          return false
        }
    }
    return true
}
