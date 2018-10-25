var htmlStrings = [
  '<div class="targetClassName"></div>',
  '<div class="otherClassName targetClassName"></div>',
  '<div><div class="targetClassName"></div></div>',
  '<div><div class="targetClassName"><div class="targetClassName"></div></div></div>',
  '<div><div></div><div><div class="targetClassName"></div></div></div>',
  '<div><div class="targetClassName"></div><div class="targetClassName"></div></div>',
  '<div><div class="somediv"><div class="innerdiv"><span class="targetClassName">yay</span></div></div></div>'
];

describe('getElementsByClassName', function() {

  it('should match the results of calling the built-in function', function() {
    $('body').addClass('targetClassName');
    htmlStrings.forEach(function(htmlString) {
      var $rootElement = $(htmlString);//one element at a time assigns htmlString to Jquery var
      $('body').append($rootElement);//appends the value of the Jquery var to the html doc body

      var result = _getElementsByClassName('targetClassName');//resulting array from my function
      var expectedNodeList = document.getElementsByClassName('targetClassName');//actual result of getElementsByClassName result
      var expectedArray = Array.prototype.slice.apply(expectedNodeList);//parses expectedNodeList into an array for comparison
      var equality = _.isEqual(result, expectedArray); // why can't we use `===` here?
      expect(equality).to.equal(true);

      $rootElement.remove();//removes the htmlString element added to the body
    });
    $('body').removeClass('targetClassName');
  });

});
