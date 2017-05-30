
//one say to structure your ctr assest is similar to that of the run
//of the css foldure architecture, something like ITCSS. While this test
//only has two dir, you should get the gist, no need to reinvent the wheel

//@note, I think this is an anti-pattern and you should only have one
//ctr style entry point per js file
require('./settings/_index.ctr.js');
require('./one/_index.ctr.js');
require('./two/_index.ctr.js');
