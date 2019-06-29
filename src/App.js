class App {
    constructor() {
        this.className = "App";
    }

    intialize() { 
        this.render();
    }
    render() { 
        let appElem = document.querySelector("#app");
        let addListenerBtn = document.createElement('div');
        let Btn_01 =  appElem.appendChild(addListenerBtn);
            Btn_01.classList.add('btn');
            Btn_01.innerHTML = "Click Me";
            Btn_01.onclick = evt=>{
                console.log('hello world');
            }    
    }

}

let application = new App();
    application.intialize();