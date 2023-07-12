function printToScreen(){
    console.log("hi");
  }
 setTimeout(printToScreen, 1*5000);
 
 // synchronous code
 let counter=0;
 for(let i=0;i<1000;i++){
   counter=counter+1;
 }
 console.log(counter);
 