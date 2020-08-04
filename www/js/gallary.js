'use strict'
// галлерея работ

class Gallary {
    constructor() {
        this.urlGallry = '../img/gallary/';
        this.gallryHTMLBlock = '';
        this.blockGallry = document.querySelector('.portfolio__photos-block');
        this.widthGallary = this.blockGallry.clientWidth;
        this.width = 0;
        this.quantity = 9; // количество галлерей для просмотра
    }

    creatPreviewGallary() {
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
            console.log(event.target.dataset.image); // ! определение нажатой галлереи 
        })
    }

    init() {
        this.creatPreviewGallary();
        this.getClickBlock();
    }
}

let gallary = new Gallary();
gallary.init();