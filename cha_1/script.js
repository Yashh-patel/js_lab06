let counterr = 0;
const counter_2 = document.querySelector('#counter');
const button_1 = document.querySelector('#buttonplus');

button_1.addEventListener('click', () => {
    counterr++;
    counter_2.textContent = counterr;
});