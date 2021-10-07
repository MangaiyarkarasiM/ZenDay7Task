var req=new XMLHttpRequest();
req.open('GET','https://restcountries.com/v2/all',true);
req.send();
req.onload = () =>{
    var result=JSON.parse(req.response);
    var totalPopulation=result.reduce((acc,cv)=>acc+cv.population,0);
    console.log("Total population of countries: "+totalPopulation);
}