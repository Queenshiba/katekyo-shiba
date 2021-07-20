const images = document.querySelectorAll('img')

images.forEach(image => {
    const newURL = image.getAttribute('data-src')
    image.src = newURL;
})


let copyEmailText = document.getElementById('copyEmailText')
let copyEmailBtn = document.getElementById('copyEmailBtn')

copyEmailBtn.addEventListener("click",() =>copyEmail())

function copyEmail() {
    let copyEmailText = document.getElementById('copyEmailText')
    copyEmailText.select();
    copyEmailText.setSelectionRange(0, 99999);
    document.execCommand("copy");

}
