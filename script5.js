var req=new XMLHttpRequest();
req.open('GET','https://restcountries.com/v2/all',true);
req.send();
req.onload = () =>{
    var result=JSON.parse(req.response);
    var res=result.filter((ele)=>ele.currencies!==undefined).filter((el)=>el.currencies[0].code==='USD');
    console.log(res);
}