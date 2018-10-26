// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var _getElementsByClassName = function(className) {
  var nodeArr = document.body; //parse childNodes object into array
  var elementsMatchingClass = []; //variable to store DOM elements that match className
  
  var childrenByClass = function(elem) {
    if(elem.classList.contains(className)) {//check element classList values against className
      elementsMatchingClass.push(elem);//push the matching element to the results array
    }
      
    if(elem.childNodes.length > 0) {//check to see if the element has children
      var elemArr = elem.childNodes;
      elemArr.forEach(function(node) {//iterate through the childNodes 
        if(node.id !== 'mocha' && node.nodeName !== '#text') {
          return childrenByClass(node);//use recursion to iterate through childNodes
        }
      });
    }
  }
  
  childrenByClass(nodeArr);//call the method on our document body
  return elementsMatchingClass;//return the results of the method
};