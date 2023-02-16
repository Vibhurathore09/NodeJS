// The synchronous APIs perform all operations synchronously , blocking the event loop until the operation completes or fails

import * as fs from 'fs';

// Creating Directory - Path should be there
// fs.mkdirSync('C:\\Users\\Acer\\OneDrive\\Desktop\\NodeJS\\GeekyShow\\File\\SyncAPI\\test');

// Creating Directory - Path is not required to be there
// fs.mkdirSync('C:\\Users\\Acer\\OneDrive\\Desktop\\NodeJS\\GeekyShow\\File\\SyncAPI\\geek\\demo', { recursive: true });

// Read Content of Directory
// const files = fs.readdirSync('C:\\Users\\Acer\\OneDrive\\Desktop\\NodeJS\\GeekyShow\\File\\SyncAPI\\geek');
// for(const file of files)
//     console.log(file);

// Remove Directory - Directory should be empty
// fs.rmdirSync('C:\\Users\\Acer\\OneDrive\\Desktop\\NodeJS\\GeekyShow\\File\\SyncAPI\\test')

// Create and Write File
// fs.writeFileSync('reamde.txt' , 'Hello Node JSS');

// Read File
// const data  = fs.readFileSync('readme.txt' , 'utf-8');
// console.log(data);

// const data1 = fs.readFileSync('readme.txt');
// console.log(data1);

// Append File
// fs.appendFileSync('readme.txt' , 'Geekyshowsss');

// Copy File
// fs.copyFileSync('reamde.txt' , 'dnfo.txt');

// Get File Information
const stat = fs.statSync('C:\\Users\\Acer\\OneDrive\\Desktop\\NodeJS\\GeekyShow\\File\\SyncAPI\\geek\\demo');
console.log(stat.isDirectory());
console.log(stat.isFile());
console.log(stat);