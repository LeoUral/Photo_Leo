'use strict'

class Scrolling {
    constructor() {
        this.sizeModulsAll = 0; //размер всей страницы
        this.sizeModul = 0; // размер одного модуля sizeMod
        this.quantityModul = 6; // количество модулей sizeQuant
        this.visibilitySize = 200; //проявление при прокрутке sizeY
        this.positionMouse = 200; //нижняя точка реакции мыши
        this.module_1 = document.querySelector('.about');
        this.module_2 = document.querySelector('.portfolio');//! пересчитать размер для условия
        this.module_3 = document.querySelector('.price');
        this.module_4 = document.querySelector('.comment');
        this.module_5 = document.querySelector('.feedback');
        this.footer = document.querySelector('.footer');
    }

    getPositionScrolling(sizeY, sizeMod, mod1, mod2, mod3, mod4, mod5) {
        window.addEventListener('scroll', function () {
            // console.log(pageYOffset);
            // console.log(sizeMod);
            if (pageYOffset > (sizeY)) {
                mod1.classList.remove('block-invisibility');
                mod1.classList.add('block-visible');
            }
            if ((pageYOffset > (sizeMod * 1 + sizeY)) && (pageYOffset < (sizeMod * 2 + 300))) {
                mod2.classList.remove('block-invisibility');
                mod2.classList.add('block-visible');
            }
            if ((pageYOffset > (sizeMod * 2 + sizeY)) && (pageYOffset < (sizeMod * 3 + 300))) {
                mod3.classList.remove('block-invisibility');
                mod3.classList.add('block-visible');
            }
            if ((pageYOffset > (sizeMod * 3 + sizeY)) && (pageYOffset < (sizeMod * 4 + 300))) {
                mod4.classList.remove('block-invisibility');
                mod4.classList.add('block-visible');
            }
            if ((pageYOffset > (sizeMod * 4 + sizeY)) && (pageYOffset < (sizeMod * 5 + 300))) {
                mod5.classList.remove('block-invisibility');
                mod5.classList.add('block-visible');
            }
        });
    }

    getSizeModule() {
        this.sizeModulsAll = document.scrollingElement.scrollHeight;
        this.sizeModul = this.sizeModulsAll / this.quantityModul;
        console.log('size ->' + this.sizeModul);
    }

    getPositionMouse() {
        document.addEventListener('mousemove', (event) => {
            if (event.clientY > this.sizeModul - this.positionMouse) {
                this.reactionMouseOn();
            } else {
                this.reactionMouseOff();
            }
        })
    }

    reactionMouseOn() {
        this.footer.classList.remove('block-invisibility');
        this.footer.style.opacity = 1;
    }
    reactionMouseOff() {
        this.footer.style.opacity = 0;
        this.footer.classList.add('block-invisibility');
    }

    init() {
        this.getSizeModule();
        this.getPositionScrolling(this.visibilitySize, this.sizeModul, this.module_1, this.module_2, this.module_3, this.module_4, this.module_5);
        this.getPositionMouse();
    }
}

let scrolling = new Scrolling();
scrolling.init();