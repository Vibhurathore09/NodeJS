// beofre a module's code is executed , Node.js will werap it with a function wrapper that looks like the following
// (function(exports , require , module , __firename , __dirname){
    // module code actually lives in here
// })


// exports - A reference to the module.exports that is shorter to type.
// require - Used to import modules.
// Module - A regerence to the current module.
// __dirname - The directory name of the current module. This is the same as the path.dirname() of the filename.
// __filename - The file name of hte current module. This is the current module file's absolute path with symlinks resolved.

console.log(__dirname);
console.log(__filename);
console.log(module);

