var fs = require('fs');
var less = require('less');

var input = fs.readFileSync('style.less', 'utf-8');

less.parse(input, function(err, root, imports, options) {
    var result;

    var parseTree = new less.ParseTree(root, imports);
    result = parseTree.toCSS(options);

    console.log(JSON.stringify(parseTree.root, null, 2));
    console.log(result.css);
});