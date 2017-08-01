//
// String Rotation: Assume you have amethod isSubstring which checks ifone word is asubstring of another. Given two strings, 51 and 52,
// write code to check if 52 is a rotation of 51 using only one call to isSubstring (e.g.,"waterbottle"is a rotation of"erbottlewat").


function isSubstring(string1,string2){
  // if the two string lengths are not the same they are not substrings - not the same group of letters
  if(string1.length !== string2.length){
    return false
  }else{
    // we double up string 1's size so that we can get a long string of repeated chars
    // if string 2 is a substring, it will surely be in the double sized string
    // ex: 'hellohello' contains 'ohell' & 'llohe', etc
    string1+=string1;
    if(string1.includes(string2)){
      return true
    }
  }
  return false
}


isSubstring('calvin','alvinc')
