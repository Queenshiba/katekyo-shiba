const images = document.querySelectorAll('img')

images.forEach(image => {
    const newURL = image.getAttribute('data-src')
    image.src = newURL;
})
