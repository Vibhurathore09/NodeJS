const path = require('path');
// console.log(path.basename('c:/nodejs/Path/path.js'))
// console.log(path.basename(__filename));
// console.log(path.basename(__filename , '.js'));

// console.log(path.dirname('c:/nodejs/Path/Path.js'));
// console.log(path.dirname(__filename));
// console.log(path.extname(__filename));

// console.log(path.join('/search' , 'label' , 'course/pyhton','oop'))
// // The last parameter (..) is instructing path.join to 'go back a directory
// console.log(path.join('/search' , 'label' , 'course/pyhton','oop','..'))

// console.log(path.normalize('c:\\temp\\\\foo\\ bar'));
// console.log(path.normalize('c:\\temp\\\\foo\\bar\\..\\'));

console.log(path.parse(__filename));
console.log(path.parse(__filename).base);
console.log(path.parse(__filename).name);
console.log(path.parse(__filename).root);