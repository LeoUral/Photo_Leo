'use strict'

class Verification {
    constructor() {
        this.nameInput = document.getElementById('name');
        this.buttonSubmit = document.getElementById('button_submit');
        this.buttonSubmit.disabled = true; // отключаем кнопку
    }
    getNameInput() {
        this.nameInput.oncut = this.nameInput.oncopy = this.nameInput.onpaste = function() {
            return false;
        };
        this.nameInput.addEventListener('change', () => {
            console.log(this.nameInput.value);
            if (this.nameInput.value != null) {
                this.onButtonSubmit()
                this.buttonSubmit.disabled = false; // включаем кнопку
            }
        });
    }



    onButtonSubmit() {
        this.buttonSubmit.classList.remove('btn-off');
        this.buttonSubmit.classList.add('block-visible');
    }

    init() {
        this.getNameInput();
    }
}
let verification = new Verification();

verification.init();