'use strict';

class Price {
    constructor() {
        this.dataPrice = ''; //данные из JSON
        this.blockPrice = document.querySelector('.price__pricing-block'); //блок вставки прайса в HTML
        this.blockPriceHtml = '';
    }

    async getDataJson() {
        let responsePrice = await fetch('../js/price.json');
        this.dataPrice = await responsePrice.json();
        console.log(this.dataPrice);
        this.createBlocksPrice(this.dataPrice);
    }

    createBlocksPrice(data) {
        for (let i = 0; i < data.length; i++) {
            this.blockPriceHtml = this.blockPriceHtml + `
                <div class="price__pricing-modul">
                    <h3> ${data[i].service} </h3>
                    <span> ${data[i].price} &#8381; / ${data[i].unit} </span>
                    <p> ${data[i].description} </p>
                </div>
            `;
        }
        this.blockPrice.innerHTML = this.blockPriceHtml;
    }

    init() {
        this.getDataJson()
    }
}

let price = new Price();

price.init();
