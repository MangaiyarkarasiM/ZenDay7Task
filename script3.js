var req=new XMLHttpRequest();
req.open('GET','https://restcountries.com/v2/all',true);
req.send();
req.onload = () =>{
    var result=JSON.parse(req.response);
    result.forEach(element => {
        console.log("Country name:"+element.name+" Captital:"+element.capital+" Flag:"+element.flag);
    });
}