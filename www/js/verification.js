'use strict'

class Verification {
    constructor() {
        this.nameInput = document.getElementById('name');
        this.buttonSubmit = document.getElementById('button_submit');
    }
    getNameInput() {
        this.nameInput.oncut = this.nameInput.oncopy = this.nameInput.onpaste = function() {
            return false;
        };
        this.nameInput.addEventListener('change', () => {
            console.log(this.nameInput.value);
            if (this.nameInput.value != null) this.onButtonSubmit()
        });
    }

    onButtonSubmit() {
        this.buttonSubmit.classList.remove('block-off');
        this.buttonSubmit.classList.add('block-visible');
    }

    init() {
        this.getNameInput();
    }
}
let verification = new Verification();

verification.init();