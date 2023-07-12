function promiseBody(resolve){
    setTimeout(resolve, 5000)
  }
  function medicineGet(){
    var answer = new Promise(promiseBody)
    return answer;
  }
  function printThing(){
    console.log("hi there!")
  }
  var medicine = medicineGet();
  medicine.then(printThing)




