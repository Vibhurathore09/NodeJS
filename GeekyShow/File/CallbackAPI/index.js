// File System. - Callback API

import * as fs from 'fs';
// Creating Directory - Path should be there
// fs.mkdir('C:\\Users\\Acer\\OneDrive\\Desktop\\NodeJS\\GeekyShow\\File\\CallbackAPI\\text\\demo' , (error)=>{
//     if(error) throw error;
//     console.log("Directory Created....");
// })


// fs.mkdir('C:\\Users\\Acer\\OneDrive\\Desktop\\NodeJS\\GeekyShow\\File\\CallbackAPI\\geek\\haha' ,{recursive : true}, (error)=>{
//     if(error) throw error;
//     console.log("Directory Created....");
// })

// Read Content of Directory
// fs.readdir('C:\\Users\\Acer\\OneDrive\\Desktop\\NodeJS\\GeekyShow\\File\\CallbackAPI\\test' , (error , files)=>{
//     if(error) throw error;
//     for(const file of files){
//         console.log(file);
//     }
//     // console.log("Directory Created..");
// })

// Remove Directory - Directory should be empty
// fs.rmdir('c:\\Users\\Acer\\OneDrive\\Desktop\\NodeJs\\GeekyShow\\File\\CallbackAPI\\test\\demo' , (error , files)=>{
//     if(error) throw error;
//     console.log('Directory Removed...');
// });

// Create and Write File 
// fs.writeFile('readme.txt', 'Hello Vibhu Node JS', (error) => {
//     if (error) throw error;
//     console.log('File Create... ')
// });


// Read File
// fs.readFile('readme.txt','utf-8' ,(error , data)=>{
//     if(error) throw error;
//     console.log(data);
// })

// Append Data
// fs.appendFile('readme.txt' , ' This is Vibhu Rathore' , (error) =>{
//     if(error) throw error;
//     console.log("Data Appended");
// })

// Copy File
// fs.copyFile('readme.txt' , 'info.txt' , (error)=>{
//     if(error) throw error;
//     console.log('Fole copied..');
// } )

// Get File Information

// fs.stat('c:\\Users\\Acer\\OneDrive\\Desktop\\NodeJs\\GeekyShow\\File\\CallbackAPI' , (error , stats) =>{
//     if(error) throw error;
//     console.log(stats.isDirectory());
//     console.log(stats.isFile());
//     console.log(stats);
// })