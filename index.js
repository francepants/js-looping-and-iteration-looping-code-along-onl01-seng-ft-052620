// Code your solutions in this file
let array = []
function writeCards(name, event) {
    for (let i = 0; i < name.length; i++) {
        array.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return array
}



// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//       console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     }


function countDown(number) {
    while(number>=0) {
        console.log(number)
        number--
    }
}


// const gifts = ["teddy bear", "drone", "doll"];
 
// function wrapGifts(gifts) {
//   let i = 0; // the initialization moved OUTSIDE the body of the loop!
//   while (i < gifts.length) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     i++; // the iteration moves INSIDE the body of the loop!
//   }
 
//   return gifts;
// }
 
// wrapGifts(gifts);