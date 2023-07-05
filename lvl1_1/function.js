import { readFile, writeFile, rm, rename } from 'node:fs/promises';
import { readdir, rmdir, mkdir } from 'node:fs/promises';

// Textdatei mit Inhalt schreiben
// try {
//     writeFile(('./blog1.txt'), "Hello World")
// } catch (error) {
//     console.error(err.message);
// }

// --------------------------------
// Text überschreiben
// try {
//     const text1 = await readFile('./blog1.txt', "utf8")
//     console.log(text1);

//     const newText1 = "Good night!"

//     writeFile(('./blog1.txt'), newText1)

// nur nochmal zum lesen in der Console
// const text2 = await readFile('./blog1.txt', "utf8")
// console.log(text2);

// } catch (error) {
//     console.error(err.message);
// }


// --------------------------------
// erstelle eine Datei mit Text
// try {
//     writeFile(('./blog2.txt'), "Ich habe hunger")
// } catch (error) {
//     console.error(err.message);
// }


// --------------------------------
// lösche falls es den Ordner assets gibt diesen
// try {
//     const folder = await readdir('./assets')
//     if (folder !== false) {
//         rmdir('./assets')
//     }
// } catch (error) {
//     throw error
// }


// --------------------------------
// erstelle den Ordner assets
// try {
//     mkdir('./assets')
// } catch (error) {
//     throw error
// }


// --------------------------------
// schaue ob es delete.txt gibt, wenn ja lösche diesen

// try {
//     const text3 = await readFile('./delete.txt')
//     if (text3 !== false) {
//         rm('./delete.txt')
//     }
// } catch (error) {
//     throw error
// }


// --------------------------------
// erstelle eine Datei namens delete.txt
// try {
//     writeFile(('./delete.txt'), "Hi")
// } catch (error) {
//     throw error
// }

// try {
//     writeFile(('./Hello.txt'), "Was geht?")
// } catch (error) {
//     throw error
// }

// try {
//     rename(('./Hello.txt'), ('./HelloWorld.txt'))
// } catch (error) {
//     throw error
// }