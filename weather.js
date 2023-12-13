let key ='a453f2ff278b0131d0e8e36d73258076'
let city = document.getElementById('city');
let desc = document.getElementById('desc');
let windspeed = document.getElementById('windspeed');
let temp = document.getElementById('temp');
let humi = document.getElementById('humi');
let time = document.getElementById('time');


function getData(){
    let cityname=document.getElementById('cityname').value;
    let api ='https://api.openweathermap.org/data/2.5/weather?q={cityname}&appid={key}';
     
    fetch(api)
    .then(Response=>Response.json())
    .then(data=>{
        console.log(api);
        city.innerHTML=data.name;
        desc.innerHTML= data.weather[0].description;
        windspeed.innerHTML = data.wind.speed;
        humi.innerHTML = data.main.humidity;
        temp.innerHTML = data.main.temp-273;
        time.innerHTML = data.timezone;
    })
}