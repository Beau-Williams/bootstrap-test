import myJson from './names.json' assert {type: 'json'};


for(let item in myJson){
    if(myJson[item].item === "pizza"){
        console.log(myJson[item].price);
        console.log(myJson[item].qty);
        
    } else{
        console.log("not pizza");
    }
}