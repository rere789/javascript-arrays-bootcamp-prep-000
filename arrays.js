    var chocolateBars = ["Snickers", "hundred grand", "kitkat", "skittles"];
    function addElementToBeginningOfArray(array, element) {
      var newArray = [element, array[0]]
      return newArray;
    }
     
     
      function destructivelyAddElementToBeginningOfArray(array, element){
        array.unshift(element); 
        return array; 
    }
    
    function addElementToEndOfArray(array, element) {
      return [...array, element];
    }
    
    
    function destructivelyAddElementToEndOfArray(array, element) {
      array.push(element)
      return array;
    }
    
    function accessElementInArray(array, index) {
      return array[index];
    }

    function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
   }	
   
   function removeElementFromBeginningOfArray(array) {
     var remove = array.slice(1)
     return remove;
   }
   
   function destructivelyRemoveElementFromEndOfArray(array) {
     array.pop()
     return array;
   }
   
   function removeElementFromEndOfArray(array) {
     array.slice(0, array.length - 1)
     return array:
   }
   
   