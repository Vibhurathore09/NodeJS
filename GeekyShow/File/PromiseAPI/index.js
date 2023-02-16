// File System - Promiose Api
import * as fs from 'fs/promises'

// Creating Directory - Path should be there

// try {
//     await fs.mkdir('C:\\Users\\Acer\\OneDrive\\Desktop\\NodeJS\\GeekyShow\\File\\text\\demo');
//     console.log("Directory Created...")
// } catch (error) {
//     console.log(error
//     );
// } 


// try {
//     await fs.mkdir('c:\\Users\\Acer\\OneDrive\\Desktop\\NodeJS\\GeekyShow\\File\\test\\demo' , {recursive : true});
//     console.log("Directory Created");
// } catch (error) {
//     console.log(error);
// }


// Read content of directory

// try {
//     const files = await fs.readdir('c:\\Users\\Acer\\OneDrive\\Desktop\\NodeJS\\GeekyShow\\File\\text');
//     for(const file of files){
//         console.log(file);
//     }
// } catch (error) {
//     console.log(error);
// }



// Remove Directory - Directory SHould be empty
// try {
//     await fs.rmdir('c:\\Users\\Acer\\OneDrive\\Desktop\\NodeJS\\GeekyShow\\File\\text\\demo')
// } catch (error) {
//     console.log(error);
// }


// Create and Write File

try {
    await fs.writeFile('readme.txt', 'Hello NodeJS');
    
} catch (error) {
    console.log(error);
}

// Read File
// try {
//     const data =  await fs.readFile('readme.txt');
//     console.log(data);
// } catch (error) {
//     console.log(error);
// }


// try {
//     const data =  await fs.readFile('readme.txt' , 'utf-8'); // if you want origial file data , then use utf-8
//     console.log(data);
// } catch (error) {
//     console.log(error);
// }



// Append Data into files

// try {
//     await fs.appendFile('readme.txt' , " Hello GeekyShows"); 
// } catch (error) {
//     console.log(error);
// }


// Copy File
// try {
//     await fs.copyFile('readme.txt' , 'info.txt');
//     console.log('file copies');
// } catch (error) {
//     console.log(error);
// }

// Get File information
// try {
//     const stats = await fs.stat('c:\\Users\\Acer\\OneDrive\\Desktop\\NodeJS\\GeekyShow\\File\\text\\emp.js');
//     console.log(stats.isFile());
//     console.log(stats);
// } catch (error) {  
//     console.log(error);
// }