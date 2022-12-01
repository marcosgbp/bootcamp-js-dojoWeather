function loadingWeather(element){
    alert("Loading weather report "+element.innerHTML);
}

//Esconder mensaje de cookie
function acceptCookie(){
    document.querySelector(".cookie").remove()
}
//Cambia de C a F
function changeFormatTemp(element){
    let weatherMaxArr=document.querySelectorAll(".temp-max");
    let weatherMinArr=document.querySelectorAll(".temp-min");
    //Recorro y actualizo las temperaturas máximas
    for(let i = 0; i<weatherMaxArr.length; i++){
        //Quito el caracter especial ° y convierto en entero
        let weatherClear = weatherMaxArr[i].innerHTML.replace("°","");
        let weather = parseInt(weatherClear);
        if(element.value==="Fahrenheit"){
            let fahrenheit = (weather*1.8)+32;
            weatherMaxArr[i].innerHTML=fahrenheit.toFixed(1);
        }else{
            let celsius = (weather-32)/1.8;
            weatherMaxArr[i].innerHTML=celsius.toFixed(1)+"°";
        }
    }
    //Recorro y actualizo las temperaturas minimas
    for(let i = 0; i<weatherMinArr.length; i++){
        //Quito el caracter especial ° y convierto en entero
        let weatherClear = weatherMinArr[i].innerHTML.replace("°","");
        let weather = parseInt(weatherClear);
        if(element.value==="Fahrenheit"){
            let fahrenheit = (weather*1.8)+32;
            weatherMinArr[i].innerHTML=fahrenheit.toFixed(1);
        }else{
            let celsius = (weather-32)/1.8;
            weatherMinArr[i].innerHTML=celsius.toFixed(1)+"°";
        }
    }
}