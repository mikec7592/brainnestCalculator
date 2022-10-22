window.onload=function(){

    const btns = document.querySelectorAll(".btn");
    const screen = document.querySelector(".screen");
    const equal = document.querySelector(".equal");
    const clear = document.querySelector(".clear");
    let form = document.querySelector('form');
    // let div = document.querySelector('div');
    // let test = document.querySelector('.test');

    // let keys = ['*', '/', '-', '+', '.', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0', 'E', 'C']
    // let text = ['*', '/', '-', '+', '.', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '=', 'C']

    // let buildButtons = () => {
    //     for (let i = 0; i < 17; i++) {
    //         let buttons = document.createElement('button')
    //         buttons.className = 'btn'
    //         buttons.id = keys[i]
    //         buttons.setAttribute('key', keys[i])
    //         buttons.innerText = text[i]

    //         div.appendChild(buttons)
    //     }
    // }

    // buildButtons();

    form.addEventListener('submit', () => {
        if (screen.value === "") {
            screen.value = 'enter value'
        } else {
            screen.value = Function("return " + screen.value)().toFixed(2)
        }
    });

    // test.addEventListener('click', event => {
    //     console.log(event.target)
    // })

    btns.forEach( (btns) => {
        btns.addEventListener("click", event =>  {
          console.log(event.target)
          screen.value += btns.getAttribute("key");
        });
    });

    equal.addEventListener('click', () => {
        if (screen.value === "") {
            screen.value = 'Enter value';
        } else {
            screen.value = Function( "return " + screen.value)().toFixed(2)
        }
    });

    clear.addEventListener('click', () => {
        screen.value = ""
    })
}