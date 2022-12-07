const button = document.getElementsByClassName("box");

const input = document.getElementById('input');

for(let i = 0; i < button.length; i++) {

    button[i].addEventListener('click', (event) => {

        let inputText = ' ';

        switch (event.target.innerHTML) {
            case 'c':
                inputText = null;
                break;
            case '=':
                inputText = eval(input.value);
                break;
            case '⬅':
                inputText = input.value.slice(0, input.value.length - 1);
                break;
            default:
                inputText = `${input.value}${event.target.innerHTML}`;
                break;
        }
        input.value = inputText;
    });
}
