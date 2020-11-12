const btnShow = document.querySelector('.show');

btnShow.addEventListener("click", showGallery);

const btnMix = document.querySelector('.mix');

btnMix.addEventListener("click", mixGallery);

let ulList = document.querySelector('ul');

//atvaizduojama galerija
function showGallery() {
    genGallery();
    btnShow.className = "invisible ";
}

//Galerijos perkrovimas sumaisant
function mixGallery() {
    ulList.innerHTML = " ";
    genGallery();
}

//Galerijos sukurimas
function genGallery() {

    var imgAjax = new XMLHttpRequest();

    imgAjax.open("GET", "http://web-training.lt/img_api/", true);

    let ulList = document.querySelector('ul');

    imgAjax.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                console.log("f1");
                let images = JSON.parse(imgAjax.responseText);

                for (let i = 0; i < images.length; i++) {

                    let imgIndex = Math.floor(Math.random() *(i+1));

                    let imgUrl = 'http://web-training.lt/img_api/img/' + images[imgIndex];

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

            } else {
                alert(this.statusText)
            }
        }
    };
    imgAjax.send();
}


