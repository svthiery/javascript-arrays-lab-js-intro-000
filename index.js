var kittens = [] //define your array here
kittens.push("Milo", "Otis", "Garfield")

function destructivelyAppendKitten(name) {
  kittens.push(name)
}
 function destructivelyPrependKitten(name) {
   kittens.unshift(name)
 }
 
 function destructivelyRemoveLastKitten(name) {
   kittens.pop()
 }
 
 function destructivelyRemoveFirstKitten(name) {
   kittens.shift(name)
 }
 
 function appendKitten(name) {
   let kittenCopy = kittens.slice();
   kittenCopy.push(name)
   return kittenCopy
 }
 
 function prependKitten(name) {
   let kittenCopy = kittens.slice();
   kittenCopy.
 }