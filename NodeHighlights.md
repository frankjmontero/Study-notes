# Node

## <i>**BASICS**</i>

## **General**

- **NPM**. NPM is a package manager for Node.js packages, or modules if you like.
- **Package**. A package in Node.js contains all the files you need for a module.
- **Modules** are JavaScript libraries you can include in your project. 

### **Events**

Objects in Node.js can fire events,

## **Backend**

### **`http` Module**

**`createServer()`**. Creates and HTTP server. The function passed into the http.createServer() method, will be executed when someone tries to access the computer on the indicated port.
Ex.: SEE *NodeJSPractice.js* file
- *Http Header*. If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct content type:
```js
res.writeHead(200, {'Content-Type': 'text/html'});
```
    The first argument of the res.writeHead() method is the status code, 200 means that all is OK, the second argument is an object containing the response headers.

- *`req`*. argument that represents the request from the client, as an object (http.IncomingMessage object). This object has a property called "url" which holds the part of the url that comes after the domain name:
```js
res.write(req.url);
```

**Read a file**. Ex.: SEE *NodeJSPractice.js* file

**Create files**.
- `appendFile()`. Appends specified content to a file. If the file does not exist, the file will be created.
    Ex.: SEE *NodeJSPractice.js* file
- `open()`. Takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created:
    Ex.: SEE *NodeJSPractice.js* file
- `writeFile()`. Replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created.
    Ex.: SEE *NodeJSPractice.js* file
- `unlink()` method deletes the specified file.
    Ex.: SEE *NodeJSPractice.js* file
- `rename()` method renames the specified file.
    Ex.: SEE *NodeJSPractice.js* file

### **`http` Module**

The URL module splits up a web address into readable parts. Parse an address with the `url.parse()` method, and it will return a URL object with each part of the address as properties:

___
- **`Running test`** 
    - `npm run test` or for short `run test`, runs all tests in the current project.
    - `npm test -- <keyphrase>`, runs any test that matches the keyword or phrase.
        ```node
        npm test -- searchbar
        ```


___
### **MISC**

- Node puede manejar múltiples requests en paralelo, usando los recursos de hardward como los procesadores multi cores. Node usa varias threads por dentro, pero la main thread es una sola, y aunque las demás hayan terminado y ya tengan su resultado listo y en el queue, es el main thread que se encarga de retornar eso al usuario, y si el main thread se bloquea, ya, no hay respuesta para el asuario hasta que se desbloquee. Por eso, NO BLOQUEE EL MAIN THREAD.

- Para que algo del Message Queue entre al Call Stack este debe estar empty. Pero para algo de Job Queue entrar al call Stack solo debe de esperar que la ultima funcion termine de ejecutar:

```js
const greetconst { reject } = require("async");
const { resolve } = require("path");
const { setTimeout } = require("timers");

const greet = name => console.log(`Hi ${name}!!`);
const bye = name => console.log(`Hi ${name}!!`);

const notMatter = () => {
    console.log("Don't look at me...");
    setTimeout(greet, 0, 'Fulanitosh');
    new Promise((resolve, reject) => {
        resolve("She doesn't love you!!!");
    }).then(resolve => console.log(resolve));
    bye("Tu meno cotize");
}

/*
    Prints:
    Console log 
    Bye 
    Promise 
    Greet
*/
``` 
El promise se resuelve y se ejecuta después. El time out también. Entonces la funciones que no necesitan ser resueltas se imprimen primero.

## Event Loop

Node.js applications then enter the Event Loop, responding to incoming client requests by executing the appropriate callback. This callback executes synchronously, and may register asynchronous requests to continue processing after it completes.

## ¿Quién me dice qué significa esto?

![](.\Resources\bcrypt-bcryptjs-Diff.png)

Significa que aunque las librerias fueron escritas en dos lenguajes diferentes (c++ vs js), comparten la misma interface, entonces ambas siguen usando los mismos metodos

## Other

child_process es un module el que permite crear procesos en el sistema operativo que cuentan con sus propios recursos(memoria, threads and CPU) independientes de la aplicación las cual los esta llamando.

child_process.exec() Engendra (o crea) un proceso en sistema operativo, pero el resultado (output) lo carga completo en memoria antes de retornar, cabe mencionar que este comando acepta shell scripting por defecto.

child_process.spawn Engendra (o crea) un nuevo proceso, pero este puede interactuar con el mismo a través de su stdio's streams, también los parámetros para ejecutar el proceso utilizando este metodo deben de ser pasados en un array como segundo argumento.

child_process.fork Engendra (o crea) un nuevo proceso pero esta es una aplicación node, esta aplicación tendrá sus propios recursos (heap, event loop y thread pool) y se va a comunicar con la aplicación padre mediante IPC