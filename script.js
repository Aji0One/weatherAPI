
async function getData(){
    var loc= document.getElementById('search').value;
    console.log(loc);
    var data=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc}?key=RS7Y2KE2TW353HFZYMVVFXATA`);
    var result= await data.json();
    console.log(result);
    document.getElementById('report').innerHTML='Weather Report';
    document.getElementById('humidity').innerHTML=`Humidity: "${result.days[0].humidity}"`;
    document.getElementById('pressure').innerHTML=`Pressure: "${result.days[0].pressure}"`;
    document.getElementById('description').innerHTML= `Description: "${result.days[0].description}"`;
    document.getElementById('date').innerHTML=`Date & Time: "${Date(result.days[0].datetimeEpoch)}"`;
    document.getElementById('latitude').innerHTML= `Latitude: "${+result.latitude}"`;
    document.getElementById('longitude').innerHTML= `Longitude: "${result.longitude}"`;
    document.getElementById('address').innerHTML=`Address: "${result.resolvedAddress}"`;
    document.getElementById('search').value="";
}
