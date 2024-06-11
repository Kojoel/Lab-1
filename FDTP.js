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