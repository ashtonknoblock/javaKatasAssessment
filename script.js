function displayResult(target, text) {
    let span2 = document.createElement("span");
    let newElement2 = document.getElementById(target);
    newElement2.textContent = text;
    newElement2.appendChild(span2);
  };


  
  ////////////////Kata 1 
  const add = (x, y) => (x + y)
  displayResult("div1", add(2, 4));
  


  //////////////kata 2
  function multiply(x, y) {
    let result = 0;
    for (let i = 1; i <= y; i++) {
      result = add(result, x)
    }
    return result;
  };
  displayResult("div2", multiply(6, 8));
  


  ////////////////////Kata3
  function power(x, n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result = multiply(x, result);
    }
    return result;
  };
  displayResult("div3", power(2, 8));
  
  

  /////////////////////kata4
  function factorial(x) {
    let result = x;
    for (i = x - 1; i > 0; i--) {
      result = multiply(result, i);
    }
    return result;
  };
  displayResult("div4", factorial(4));
  
  
    
  //////////////////////kata5 
  function fibonacci(f) {
    x = 0
    y = 1
    let result = f;
    for (let i = 1; i < f; i++) {
  
      let fib = add(x, y);
      x = y
      y = fib;
    }
    return x;
  }
  displayResult("div5", fibonacci(8));
  