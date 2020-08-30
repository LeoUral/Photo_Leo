'use strict'
// галерея работ

class Gallary {
    constructor() {
        this.urlGallry = '../img/gallary/';
        this.gallryHTMLBlock = '';
        this.blockGallry = document.querySelector('.portfolio__photos-block');
        this.heightGallary = document.documentElement.clientHeight;
        this.widthGallary = document.documentElement.clientWidth;
        this.width = 0;
        this.quantity = 9; // количество галерей для просмотра
        this.quantityImage = 14; //количество фото в галлерее
        this.selectGallary = '';
        this.viewSelectGallary = `<div class="block-gallary">`;
        this.arrImage = [];
        this.indexImage = 0;
        this.heightViewBlock = '';
        this.arrowLeft;
        this.arrowRight;
    }

    creatPreviewGallary() {
        this.gallryHTMLBlock = '';
        for (let i = 1; i < (this.quantity + 1); i++) {
            this.gallryHTMLBlock = this.gallryHTMLBlock + `
                <div class="gallary-preview" data-gallary="gal_${i}">
                    <img src="${this.urlGallry}gal_${i}/1.jpg" data-image="gal_${i}">
                </div>`
        }
        this.blockGallry.innerHTML = this.gallryHTMLBlock;
    }

    getClickBlock() {
        this.blockGallry.addEventListener('click', (event) => {
            if (!event.target.dataset.image) {
                return
            } else {
                this.selectGallary = event.target.dataset.image;
                console.log(this.selectGallary); // ! определение нажатой галлереи 
                this.creatSelectedGallary(); //формируем архив фотографий
                this.creatButtonClouse();// вставляем в верстку кнопку возврата
                this.viewInScreen(); // просмотр фотографий выбранной галереии кликом мышки
            }
        })
    }


    creatSelectedGallary() {
        for (let i = 0; i < 14; i++) {
            this.arrImage[i] = `
                    <div class="block-gallary">
                        <img src="${this.urlGallry}${this.selectGallary}/${i + 1}.jpg" alt="photo">                        
                    </div>                    
                    `;
        }
    }

    viewSelectedImage(index) {
        this.blockGallry.innerHTML = this.arrImage[index];
        // this.indexImage++;
        console.log(this.indexImage);
        this.sendHeightInStyleView();
    }

    viewInScreen() {
        this.viewSelectedImage(this.indexImage);
        // this.blockGallry.addEventListener('click', () => {
        //     this.creatHandler()
        // });
        this.pressedLeftArrow();
        this.pressedRightArrow();
        this.createClouseGallary();
    }

    // creatHandler() {
    //     this.viewSelectedImage(this.indexImage);
    //     if (this.indexImage < this.quantityImage) {
    //         return;
    //     } else {
    //         this.indexImage = 0;
    //     }
    // }

    chekIndexImage() {
        if (this.indexImage > this.quantityImage - 1) {
            this.indexImage = 0;
        } else if (this.indexImage < 0) {
            this.indexImage = this.quantityImage - 1;
        }
    }

    pressedLeftArrow() {
        this.arrowLeft = document.getElementById('left');
        this.arrowLeft.addEventListener('click', () => {
            this.indexImage--;
            this.chekIndexImage();
            this.viewSelectedImage(this.indexImage);
        })
    }
    pressedRightArrow() {
        this.arrowRight = document.getElementById('right');
        this.arrowRight.addEventListener('click', () => {
            this.indexImage++;
            this.chekIndexImage();
            this.viewSelectedImage(this.indexImage);
        })
    }

    sendHeightInStyleView() {
        if (this.widthGallary > 1000) {
            document.querySelector('.block-gallary').style.height = (this.heightGallary * 0.70) + 'px';
        } else {
            document.querySelector('.block-gallary').style.height = (this.heightGallary * 0.40) + 'px';
        }

    }

    creatButtonClouse() {
        let clouseBtn = document.querySelector('.clouse-btn');
        clouseBtn.insertAdjacentHTML('afterend', `
                <div class="arrows">
                    <button id="left" class="arrow left">&#10148;</button>
                    <button id="clousebtn" class="clousebtn">&#10006;</button>
                    <button id="right" class="arrow right">&#10148;</button>
                </div>`);
    }

    createClouseGallary() {
        let idClouse = document.getElementById('clousebtn');
        idClouse.addEventListener('click', () => {
            this.indexImage = 0;
            // this.creatPreviewGallary();
            location.reload();// ! перезагрузка страницы, поменять действие
        })
    }

    init() {
        this.creatPreviewGallary();
        this.getClickBlock();
    }
}

let gallary = new Gallary();
gallary.init();