// random integer 9 digit
function appRndInteger() {
    const number = "0123456789";
    let digit = Number(document.getElementById("digit").value);
    let result = "";
    for (let i = 0; i < digit; i++){
        if (digit < 13) {
            const randomDigit = Math.floor(Math.random() * number.length);
            result += number.charAt(randomDigit)
        } else {
            return window.alert(`Range in The Random Digit [1-12]`);
        }
    }
    
    document.getElementById("number").innerHTML = result;
}

// random Alpha 9 digit 

function appRndAlpha() {
    const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let digit = Number(document.getElementById("alpha-digit").value);
    let result = "";
    for (let i = 0; i < digit; i++) {
        if (digit < 13){
            const randomAlpha = Math.floor(Math.random()* alpha.length);
            result += alpha.charAt(randomAlpha);
        }else {
            return window.alert(`Range in The Random Alpha [1-12]`);
        };
    };
    document.getElementById("alpha").innerHTML = result;
};

// global digit 

function appRndGlobal() {
    const global = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let digit = Number(document.getElementById("global-digit").value);
    let result = "";
    for (let i = 0; i < digit; i++) {
        if (digit < 13){
            const randomAlpha = Math.floor(Math.random()* global.length);
            result += global.charAt(randomAlpha);
        }else {
            return window.alert(`Range in The Random Digit [1-12]`);
        };
    };
    document.getElementById("global").innerHTML = result;
}

