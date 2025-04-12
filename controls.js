class Controls {
    constructor(type) {
        this.forward = false;
        this.left = false;
        this.right = false;
        this.reverse = false;

        switch(type) {
            case "KEYS":
                this.#addKeyboardListeners();
                break;
            case "MOBILE":
                this.#addMobileListeners();
                break;
        }
    }

    #addMobileListeners() {
        document.getElementById('mobileUp').ontouchstart = (e) => {
            e.preventDefault();
            this.forward = true;
        }
        document.getElementById('mobileUp').ontouchend = (e) => {
            e.preventDefault();
            this.forward = false;
        }
        document.getElementById('mobileLeft').ontouchstart = (e) => {
            e.preventDefault();
            this.left = true;
        }
        document.getElementById('mobileLeft').ontouchend = (e) => {
            e.preventDefault();
            this.left = false;
        }
        document.getElementById('mobileRight').ontouchstart = (e) => {
            e.preventDefault();
            this.right = true;
        }
        document.getElementById('mobileRight').ontouchend = (e) => {
            e.preventDefault();
            this.right = false;
        }
        document.getElementById('mobileDown').ontouchstart = (e) => {
            e.preventDefault();
            this.reverse = true;
        }
        document.getElementById('mobileDown').ontouchend = (e) => {
            e.preventDefault();
            this.reverse = false;
        }
    }

    #addKeyboardListeners() {
        document.onkeydown = (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    this.left = true;
                    break;
                case "ArrowRight":
                    this.right = true;
                    break;
                case "ArrowUp":
                    this.forward = true;
                    break;
                case "ArrowDown":
                    this.reverse = true;
                    break;
            }
            console.table(this);
        }
        document.onkeyup = (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    this.left = false;
                    break;
                case "ArrowRight":
                    this.right = false;
                    break;
                case "ArrowUp":
                    this.forward = false;
                    break;
                case "ArrowDown":
                    this.reverse = false;
                    break;
            }
            console.table(this);
        }
    }
}