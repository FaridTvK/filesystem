import { writeFile } from 'node:fs/promises';
import { readFile } from 'node:fs/promises';

// Json in einen text ändern
try {
    // Pfad zur JSON-Datei
    const filePath = new URL('./text.json', import.meta.url)

    // Lese den Inhalt der JSON-Datei
    const json = await readFile(filePath, 'utf8')
    // console.log(json);

    // konvertiere JSON zu einem Object
    const jsonObj = JSON.parse(json)
    // console.log(jsonObj);

    // ziehe mir mit map alles raus
    const result = jsonObj.map((element) => {
        return element.id + "-" + element.title + "\n" + element.description + "\n"
    })
    // console.log(result.join('\n'));

    const endResult = result.join('\n')
    console.log(endResult);


    //Schreibe den Text in eine neue Datei
    writeFile('./newText.txt', endResult, null, 2)


} catch (error) {
    throw error
}