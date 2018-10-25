// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var _getElementsByClassName = function(className) {
  var nodeArr = Array.prototype.slice.apply(document.body.childNodes); //parse childNodes object into array
  var classRegex = new RegExp(className, 'ig'); // create regex from className to search each node
  var results = []; //variable to store DOM elements that match className
  var childrenByClass = function(arr) {
    arr.forEach(function(elem) {//iterate through the childNodes array
      if(classRegex.test(elem.classList) || classRegex.test(elem)) {//check element classList values against className regex
        results.push(elem);//push the matching element to the results array
      }
      if(elem.nodeName !== '#text' && elem.childNodes.length > 0) {//skip text nodes or others without children
        var elemArr = Array.prototype.slice.apply(elem.childNodes);//parse childNode object into array
        return childrenByClass(elemArr);//use recursion to iterate through childNodes
        }
      });
  }
  childrenByClass(nodeArr);
  return results;
};