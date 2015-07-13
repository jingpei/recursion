// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


var stringifyJSON = function(obj) {
  // your code goes here

	if(typeof(obj) === 'function' || obj === undefined){
  		return ""
  	}
  	else if(typeof(obj) === 'string'){
  		return "\"" + obj + "\"" ;
  	}
  	else if(obj instanceof Array){ 
		var accumString = ""
		_.each(obj, function(arrayItem, arrayIndex){
	  		accumString += stringifyJSON(arrayItem)
	  		if(arrayIndex != obj.length-1){
	  			accumString += ","
	  		}	
		})
		return "[" + accumString + "]";
  	}
	else if(obj instanceof Object){
		var accumString = ""
		var lastKey = Object.keys(obj).pop()
		_.each(obj, function(property, key){
			if(stringifyJSON(property) != ""){
				accumString += stringifyJSON(key) + ":" + stringifyJSON(property)
				if(key !== lastKey){
					accumString += ","
				}
			}
		})
		return "{" + accumString + "}"
	}
  	return String(obj)
};
