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