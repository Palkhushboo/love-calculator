function calculatelove(){
    var name=document.getElementById("your-name").value;
    var lname=document.getElementById("partner-name").value;
    if(name==""){
        alert("please Enter your Name!");
    }else if(name.length<=2){
        alert("min length is 3!");
    }else if(!isNaN(name)){
        alert("numbers are not allowed!");
    }


    if(lname==""){
        alert("please Enter your partner Name!");
    }else if(lname.length<=2){
        alert("min length is 3!");
    }else if(!isNaN(lname)){
        alert("numbers are not allowed!");
    }



    else{
    var random =Math.floor(Math.random()*100);
    document.getElementById("result").innerHTML=name +" "+"and" +" "+lname+" " +random + "%" +"of love";

    }
    if(random<=0 || random<=30){
        document.getElementById("statement").innerHTML="Bad Relationship";

    }else if(random<=31 || random<=60){
        document.getElementById("statement").innerHTML="Good Relationship"
    }
    else if(random<=61 || random<=100){
        document.getElementById("statement").innerHTML="lovely relationship";

    }

}




