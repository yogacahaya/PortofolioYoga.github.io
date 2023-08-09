 let number1 = document.getElementById('number1');
    let counter = 0;
    setInterval(() =>{
        if(counter == 58){
            clearInterval();
        }else{
         counter += 1;
        number1.innerHTML = counter + "%";
        }
       
    }, 30)