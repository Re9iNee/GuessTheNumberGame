let inputBox;

function setup() {
    noCanvas();

    let min = 0;
    let max = 5;
    let rangeThinkin = floor(random(min, max))

    inputBox = select('#textBox');
    inputBox.attribute('placeholder', 'Range Between ' + min + ' to ' + max);
    inputBox.style('transition', 'all 0.5s');

    inputBox.changed(checkValue);

    function checkValue() {
        (this.value() == rangeThinkin) ? this.style('background-color', '#8db449'): this.style('background-color', '#c10000');
    }
}