// match a substring of a string, aka find whether or not a given substring is part of
// given string

function isSubstring(sub,string){
  return string.includes(sub)
}

isSubstring('abc','abcdefg')
