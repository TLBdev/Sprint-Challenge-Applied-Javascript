/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carouselCreator(){
  //create
  const carousel = document.createElement('div'),
  leftButton = document.createElement('div'),
  img1 = document.createElement('img'),
  img2 = document.createElement('img'),
  img3 = document.createElement('img'),
  img4 = document.createElement('img'),
  rightButton = document.createElement('div')
  //nest
  carousel.append(leftButton, img1, img2, img3, img4, rightButton)
  //classes
  carousel.classList.add('carousel')
  leftButton.classList.add('left-button')
  rightButton.classList.add('right-button')
  //content
  img1.src = "./assets/carousel/mountains.jpeg"
  img2.src = "./assets/carousel/computer.jpeg" 
  img3.src = "./assets/carousel/trees.jpeg"
  img4.src = "./assets/carousel/turntable.jpeg"
  //functionality
  let arr = [img1, img2, img3, img4]
  let counter = 0
  if(counter === 0){
    img1.style.display = 'inline-block'
  }
  leftButton.addEventListener('click', () => {
    if (counter === 2){
      counter --
      img1.style.display = 'none'
      img2.style.display = 'inline-block'
      img3.style.display = 'none'
      img4.style.display = 'none'
    }else if (counter === 3){
      counter --
      img1.style.display = 'none'
      img2.style.display = 'none'
      img3.style.display = 'inline-block'
      img4.style.display = 'none'
    }else if (counter === 1){
      counter --
      img1.style.display = 'inline-block'
      img2.style.display = 'none'
      img3.style.display = 'none'
      img4.style.display = 'none'
    }else{
      counter = 3
      img1.style.display = 'none'
      img2.style.display = 'none'
      img3.style.display = 'none'
      img4.style.display = 'inline-block'

    }
      
  })
  rightButton.addEventListener('click', () => {
    if (counter === 0){
      counter ++
      img1.style.display = 'none'
      img2.style.display = 'inline-block'
      img3.style.display = 'none'
      img4.style.display = 'none'
    }else if (counter === 1){
      counter ++
      img1.style.display = 'none'
      img2.style.display = 'none'
      img3.style.display = 'inline-block'
      img4.style.display = 'none'
    }else if (counter === 2){
      counter ++
      img1.style.display = 'none'
      img2.style.display = 'none'
      img3.style.display = 'none'
      img4.style.display = 'inline-block'
    }else{
      counter = 0
      img1.style.display = 'inline-block'
      img2.style.display = 'none'
      img3.style.display = 'none'
      img4.style.display = 'none'

    }
  })
  
  return carousel
}

let carouselCont = document.querySelector('.carousel-container')

carouselCont.appendChild(carouselCreator())