// String transformations

//  a. capitalize(str)
function capitalize(text) {
    if(typeof(text) === "string"){
      let result = text[0].toUpperCase();
      result += text.slice(1);
      console.log(result);
    }
    else{
      console.log("Input not a string");
    }
  }
  capitalize("capitalize")

//  b. reverse(str)
function reverse(text) {
    let result = "";
    let counter = text.length - 1;
    if(typeof(text) === "string") {
      for(let i=0; i<text.length; i++) {
      result += text[counter];
      counter--;
      }
      console.log(result);
    }
    else{
      console.log("Invalid input");
    }
  }
  reverse("hello");