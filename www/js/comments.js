'use strict'
// карусель отзывов
class Comment {
    constructor() {
        this.widthBlock = 0;
        this.block = document.querySelector('.comment__response-block_block-in');
        this.dataComments = '';
        this.url = '../js/comments.json';
        this.blockComment = `<div class="main-comment-block">`;
        this.widthCommentBlock = 0;
        this.step = 0;
    }

    async getCommentsFrom() {
        let response = await fetch(this.url);
        this.dataComments = await response.json();
        console.log(this.dataComments);
        this.createBlokComment(this.dataComments);
        this.block.innerHTML = this.blockComment;
        this.createStyleBlockComment();
    }

    getWidthBlock() {
        this.widthBlock = this.block.clientWidth;
        console.log('width = ' + this.widthBlock);
        this.block.style.width = this.widthBlock + 'px';
    }

    createBlokComment(data) {
        for (let i = 0; i < data.length; i++) {
            this.blockComment = this.blockComment + `
            <div class="comment-block">
                <span>${data[i].name}</span>
                <p>${data[i].comment}</p>
            </div>`
        }
        this.blockComment = this.blockComment + `</div>`;
    }
    createStyleBlockComment() {
        let commentBlock = document.querySelectorAll('.comment-block');
        this.widthCommentBlock = (this.widthBlock - (10 * 2 + 60 * 2)) / 3;
        commentBlock.forEach((item, i) => {
            commentBlock[i].style.width = this.widthCommentBlock + 'px';
        })
        console.log(this.widthCommentBlock);
    }

    makeStepRight() {
        let blockForStep = document.querySelector('.main-comment-block');
        if (this.step <= -1 * (this.dataComments.length - 3) * (this.widthCommentBlock + 10 * 5)) {
            return
        } else {
            this.step = this.step - (this.widthCommentBlock + 10 * 5);
            blockForStep.style.marginLeft = this.step + 'px';
            console.log(blockForStep.style.marginLeft);
        }
    }
    makeStepLeft() {
        let blockForStep = document.querySelector('.main-comment-block');
        if (this.step >= 0) {
            blockForStep.style.marginLeft = 0;
        } else {
            this.step = this.step + (this.widthCommentBlock + 10 * 5);
            blockForStep.style.marginLeft = this.step + 'px';
            console.log(blockForStep.style.marginLeft);
        }
    }

    init() {
        this.getWidthBlock();
        this.getCommentsFrom();
    }
}

let comment = new Comment;
comment.init();