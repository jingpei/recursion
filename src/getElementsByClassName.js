// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here

  var elementList = []

  var parseElement = function(elementArray){
  	_.each(elementArray, function(element, index){
  		if( _.contains(element.classList, className) === true){
  			elementList.push(element)
  		}
  		if( element.childNodes.length === 0 ){
  			return
  		}
  		else{ 
  			parseElement(element.childNodes)
  		}
  	})
  }
  
  parseElement(document.childNodes)
  
  return elementList
};
