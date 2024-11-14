let right = document.querySelector("#right")
let left = document.querySelector("#left")
let slider = document.querySelector(".slider")
let counter = 0
let callMe = document.querySelector("#callMe")
let modal = document.querySelector(".modal")
let commright = document.querySelector("#commRight")
let commleft = document.querySelector("#commLeft")
let pairs = document.getElementsByClassName("commentPair")
console.log(callMe);

callMe.onclick = function(){
console.log("callMe");
modal.style.opacity = 1
modal.style.pointerEvents = "auto"

}
right.onclick = function(){
console.log("right");
counter++
if (counter == 3) {
    counter = 0
}
slider.style.transform = "translateX(calc(-100% / 3 * "+counter+"))"
console.log(counter)

}
left.onclick = function(){
    console.log("right");
    counter--
    if (counter == -1) {
        counter = 2
    }
    slider.style.transform = "translateX(calc(-100% / 3 * "+counter+"))"
    console.log(counter);
    } 
commright.onclick = function(){
    console.log("commright");
    let activepair = document.querySelector(".activePair")
    let nextpair = activepair.nextElementSibling
    console.log(nextpair == null);
    if (nextpair == null) {
        nextpair = pairs[0]
    }
    activepair.classList.remove("activePair")
    nextpair.classList.add("activePair")
}
commleft.onclick = function(){
    console.log("commright");
    let activepair = document.querySelector(".activePair")
    let prevpair = activepair.previousElementSibling
    console.log(prevpair == null);
    if (prevpair == null) {
        prevpair = pairs[pairs.length-1]
    }
    activepair.classList.remove("activePair")
    prevpair.classList.add("activePair")
}
