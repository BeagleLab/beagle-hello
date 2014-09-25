function test () {
  var darwinQuote = 'It is easy to specify the individual objects of ' +
    'admiration in these grand scenes; but it is not possible to give an ' + 
    'adequate idea of the higher feelings of wonder, astonishment, and ' + 
    'devotion, which fill and elevate the mind. Charles Darwin';
  console.log('\n' + darwinQuote + '\n');
}

exports.moduleName = 'beagle-hello'; // Should eventually be manifest-like object
exports.test = test;
exports.html = '<h1>hello world!</h1><br />' + 
  '<p><i>From module beagle-hello.</i></p>';
exports.css = '.beagle-sidebar { color: green }';