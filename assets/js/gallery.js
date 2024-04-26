let imageArray = ['assets/img/elephant.jpg', 'assets/img/great-white.jpg', 'assets/img/koala.jpg', 'assets/img/smithi.jpg', 'assets/img/tiger.jpg']

let currentImage = 0

let myGalleriImageElement = document.getElementById('galleryImage')

let myForwardButton = document.getElementById('forward')

myForwardButton.addEventListener('click', (event) => {

    if (currentImage > 4) {
        currentImage = imageArray.length
    }

    currentImage = currentImage + 1
    changeImage()

})

let myBackButton = document.getElementById('back')

myBackButton.addEventListener('click', (event) => {

    if (currentImage < 1) {
        currentImage = imageArray.length
    }

    currentImage = currentImage - 1
    changeImage()
        
})



function changeImage() {

    myGalleriImageElement.src = imageArray[currentImage]

}








