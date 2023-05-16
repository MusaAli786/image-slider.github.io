let slidImage = document.querySelector('.slidImage');
let images = ["skardu1.jpg","skardu2.jpg","skardu3.jpg","skardu4.jpg","skardu5.jpg"];
console.log(images) 

let currentItem = 0;


function preBtn(){
   if(currentItem <= 0 ) currentItem = images.length; currentItem--;
   return imagReturn();
   console.log(preBtn)
}


function nextBtn(){
   if(currentItem >= images.length-1 ) currentItem = -1; currentItem++;
   return imagReturn()
}


function imagReturn(){
   return slidImage.setAttribute('src', 'images/' + images[currentItem]);
}



































// let slidImage = document.querySelectorAll('.slidImage');
// let Next = document.querySelector('.Next');
// let Previous = document.querySelector('.Previous');


// slidImage.forEach((slidImage,index)=>{
//    slidImage.style.left = `${index * 100}%`
// })




// let currentItem = 0;


// const nextBtn = ()=>{
//    currentItem++
//    sliderimage()
// }




// const preBtn = ()=>{
//    currentItem--
//    sliderimage()
// }

// let sliderimage = ()=>{
//    slidImage.forEach(
//       (slidImage)=>{
//    slidImage.style.transform = `translateX(-${currentItem * 100}%)`
// }) 
// }
// // if(currentItem < 0){
// //    Previous.style.display = "block"
// // }

// for(i= 0; i < slidImage.length; i++){
//       nextBtn[i].style.display = "none"
// }
// nextBtn[slidImageindex -1].style.display = "block"

