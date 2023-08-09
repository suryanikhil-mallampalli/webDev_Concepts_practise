
// using traditional callbacks

// function callback(res){
//   console.log(res);
// }

// function callGoogle(){
//   fetch("https://google.com").then(callback);
// }




// using await, async
async function callGoogle(){
    const res= await fetch("https://google.com");
    console.log(res);
  }
  
  
callGoogle();
