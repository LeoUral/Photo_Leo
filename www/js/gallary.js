'use strict'
// галерея работ

class Gallary {
    constructor() {
        this.urlGallry = '../img/gallary/';
        this.gallryHTMLBlock = '';
        this.blockGallry = document.querySelector('.portfolio__photos-block');
        this.heightGallary = document.documentElement.clientHeight;
        this.width = 0;
        this.quantity = 9; // количество галерей для просмотра
        this.quantityImage = 14; //количество фото в галлерее
        this.selectGallary = '';
        this.viewSelectGallary = `<div class="block-gallary">`;
        this.arrImage = [];
        this.indexImage = 0;
        this.heightViewBlock = '';
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
        this.indexImage++;
        console.log(this.indexImage);
        this.sendHeightInStyleView();
    }

    viewInScreen() {
        this.viewSelectedImage(this.indexImage);
        this.blockGallry.addEventListener('click', () => {
            this.creatHandler()
        });
        this.createClouseGallary();
    }

    creatHandler() {
        this.viewSelectedImage(this.indexImage);
        if (this.indexImage < this.quantityImage) {
            return;
        } else {
            this.indexImage = 0;
        }
    }

    sendHeightInStyleView() {
        document.querySelector('.block-gallary').style.height = (this.heightGallary * 0.70) + 'px';
    }

    creatButtonClouse() {
        let clouseBtn = document.querySelector('.clouse-btn');
        clouseBtn.insertAdjacentHTML('afterend', `
                    <button id="clousebtn" class="clousebtn">закрыть просмотр</button>
                    <div class="text-click">нажмите фото</div>`);
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