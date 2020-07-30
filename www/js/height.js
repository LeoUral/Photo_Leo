'use strict'

class Height {
    constructor() {
        this.height = 0;
        this.blockContainer;
    }

    clientHeight() {
        this.height = document.documentElement.clientHeight;
        console.log(this.height);
    }

    getBlockContainer() {
        return this.blockContainer = document.querySelectorAll('.container');
    }

    sendHeightInStyle() {
        this.blockContainer.forEach((item, i) => {
            this.blockContainer[i].style.height = this.height + `px`;
        })
    }

    init() {
        this.clientHeight();
        this.getBlockContainer();
        this.sendHeightInStyle();
    }

}

let height = new Height();

height.init();