const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

class ColorCtrl {
    
    constructor({ colorsArray = [], time = 500 }) {
        this.colorsArray = colorsArray,
            this.time = time,
    
            this.refs = {
                body: document.querySelector('body'),
                startButton: document.querySelector('.start'),
                stopButton: document.querySelector('.stop'),
            },

            this.refs.startButton.addEventListener('click', this.start.bind(this));
        this.refs.stopButton.addEventListener('click', this.stop.bind(this));
    }

    start() {
        if (this.timerId) {
            return;
        }
        this.timerId = setInterval(() => {
            this.refs.body.style.backgroundColor = this.colorsArray[randomIntegerFromInterval(0, this.colorsArray.length)];
        }, this.time);
        this.refs.stopButton.removeAttribute('disabled');
        this.refs.startButton.setAttribute('disabled', true);
    }

    stop() {
        if (!this.timerId) {
            return;
        }
        clearInterval(this.timerId);
        this.timerId = null;
        this.refs.stopButton.setAttribute('disabled', true);
        this.refs.startButton.removeAttribute('disabled');
    }
}

export default ColorCtrl;