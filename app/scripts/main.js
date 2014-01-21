var foo = require('./foo');
console.log(foo.addFive(3));

// Add a heading to the top of the page, using a Hogan template
var headingTemplate = require('../templates/heading.ms');
$('body').prepend( headingTemplate({title: 'Magic'}) );
