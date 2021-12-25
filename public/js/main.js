

const cityname=document.getElementById('cityname'); 
const submitbtn=document.getElementById('submitBtn');
const city_name=document.getElementById('city_name');
const temp_real_val=document.getElementById('temp_real_val');
const temp_status=document.getElementById('temp_status');
const datahide=document.querySelector('.middle_layer');


const getInfo=async (event)=>{
    event.preventDefault();
    let cityval=cityname.value;
    
    if(cityval===""){
       city_name.innerText=`Plz write the name before search`;
       datahide.classList.add('data_hide');
    }
    else{
        try{
        let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=7b69a34101e41d287ad95626631ca310`
        const response=await fetch(url);
        const data= await response.json();
        const arrdata=[data];
         
        city_name.innerText=`${arrdata[0].name},${arrdata[0].sys.country}`;
        temp_real_val.innerText=arrdata[0].main.temp;
        
        const tempMood=arrdata[0].weather[0].main;
        // Condition to check sunny or cloudy
        if(tempMood==="clear")
    {  temp_status.innerHTML=
        "<i class='fas fa-sun' style='color:#eccc68;'></i>";
    }else if(tempMood==="Clouds"){
        temp_status.innerHTML=
        "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
    }
    else if(tempMood==="Rain"){
        temp_status.innerHTML=
        "<i class='fas fa-rain' style='color:#a4b0be;'></i>";
    }
    else {
        temp_status.innerHTML=
        "<i class='fas fa-sun' style='color:#eccc68;'></i>";
    }
    datahide.classList.remove('data_hide');
        

              
        
        }
        catch{
           city_name.innerText=`Plz enter the city name properly`; 
           datahide.classList.add('data_hide');
        }
    }

}
submitbtn.addEventListener('click',getInfo);
