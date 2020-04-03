
let imgTags = document.getElementsByTagName("img");

function getImg() {
    let imgs = [
        "imgs/1.jpg",
        "imgs/2.jpg",
        "imgs/3.jpg",
        "imgs/4.jpg",
        "imgs/5.jpg"
    ];
    let index = Math.floor(Math.random() * 10) % 5;
    return imgs[index];
}
for (let imgTag of imgTags) {
    // console.log(imgTag.src);
    url = chrome.extension.getURL(getImg());
    console.log(url)
    imgTag.src = url;
}