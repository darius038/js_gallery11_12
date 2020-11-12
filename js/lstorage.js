const btnSave = document.querySelector('.save');

btnSave.addEventListener("click", saveGallery);

const btnLoad = document.querySelector('.load');

btnLoad.addEventListener("click", loadGallery);

let imgList;

function saveGallery() {
    localStorage.clear();
    imgList = document.querySelectorAll('img');
    for (let i=0; i<imgList.length; i++){
        localStorage.setItem(i.toString(), imgList[i].src.toString());
    }
}

function loadGallery() {
    ulList.innerHTML = "";
    for (let i = 0; i < localStorage.length; i++) {

        let imgUrl = localStorage.getItem(i.toString());

        let imgLi = document.createElement('li');

        let imgImg = document.createElement('img');
        imgImg.src = imgUrl;
        imgImg.className = "img-thumbnail";

        imgImg.addEventListener("click", function (e) {
            e.target.src = 'img/default-placeholder.png';
        });
        imgLi.appendChild(imgImg);
        ulList.appendChild(imgLi);

    }
}