const inputbox=document.querySelector(".input-box");
const btn =document.querySelector(".searchbtn");
const wether_img=document.querySelector(".weather-img");
const temperature=document.querySelector(".temperature");
const desciption=document.querySelector(".desciption");
const humdity=document.querySelector(".humdity-speed");
const weids=document.querySelector("#wind-speed");
const location1=document.querySelector(".location");
const weather_body=document.querySelector(".weather-body");
const h1=document.querySelector(".h1");
let key="8bd82b84ab7e774e6d2dc6c05341a93c";



let checkwether= async(city)=>{

const api_key=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8bd82b84ab7e774e6d2dc6c05341a93c`;

  let response=await fetch(api_key);
  let data=await response.json();
  console.log(data);


  if(data.cod ==='404')
  {
         location1.style.display="flex";
         weather_body.style.display="none";
         console.log("error");
         let speech= new SpeechSynthesisUtterance();
    speech.text = h1.innerText;
    window.speechSynthesis.speak(speech);
         return;
  }

  location1.style.display="none";
  weather_body.style.display="flex";


  let  k=temperature.innerHTML= `${Math.round(data.main.temp-273.15)}°C`;
   let l= desciption.innerHTML=data.weather[0].description;
  let  o= humdity.innerHTML=`${data.main.humidity}%`;
  let  p= weids.innerHTML=`${data.wind.speed}Km/H`;

    let speech= new SpeechSynthesisUtterance();
    speech.text = `${k}"end${l}"humdity speed"${o}"wind speed"${p}`;
    window.speechSynthesis.speak(speech);


    switch(data.weather[0].main)
    {
        case "Clouds": wether_img.src="cloud.png";
        break;
        case "Clear": wether_img.src="clear.png";
        break;
        case "Rain": wether_img.src="rain.png";
        break;
        case "Misst": wether_img.src="misst.png";
        break;
        case "Snow": wether_img.src="snow.png";
        break;
        
    }
    
};
btn.addEventListener("click",()=>{
    
    checkwether(inputbox.value);

});