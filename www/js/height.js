'use strict'

class Height {
    constructor() {
        this.height = 0;
        this.blockContainer = document.querySelectorAll('.container');
    }

    clientHeight() {
        this.height = document.documentElement.clientHeight;
        console.log(this.height);
    }

    sendHeightInStyle() {
        this.blockContainer.forEach((item, i) => {
            this.blockContainer[i].style.minHeight = this.height + `px`;
        })
    }


    init() {
        this.clientHeight();
        this.sendHeightInStyle();
    }

}

let height = new Height();

height.init();