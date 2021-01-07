## **General**

- **Internet**. Internet is a global network of computers connected to each other which communicate through a standardized set of protocols. The internet is a design philosophy and an architecture expressed in a set of protocols.
- **Chrome tabs resource usage.** Cada tab en Chrome tiene su proprio mundo. Event loop, stack, etc. Hence the amount of resourced it uses.
- **Tuple**. Las tuples son inmutables. Luego de que se dimensionan y se les asigna un valor, estos no pueden ser modificados.
- *Roles de un arquitecto de software*. El arquitecto es el encargado de hacer que el producto (Software) sea creado con la calidad suficiente, y que cree valor al negocio. Pero para poder crear valor el producto debe ser mantenible, oportuno, suficiente y escalable. Hay es donde muchos conceptos incluyendo Design Patterns y Design Principles viene al la palestra. Tu producto o solución no crea valor si es un dragón de recursos, y eso no solo se limita al hardware sino a tiempo, dinero, calidad, y algunos puntos importantes. El Arquitecto es el encargado de velar por el balance de cada una de esas cosas:
    - punto intermedio de comunicación entre los dueños o gerencia de la empresa, los clientes finales y los developers.
    - Diseñar los sistemas que luego los Developers estarán haciendo.
    - Estructurar (unir) todos esos sistemas para que funcionen como un uno solo.
    - garante de algo llamado 'consistencia conceptual' del sistema como un todo.
Hay otros detalles que se consideran secundarios pero son importantes:
    - mentor técnico de los developers en caso de ser necesario (seniors incluidos)
    - lead en caso de ser necesario.

## **DOM**

O sea, el DOM exposes una interface, para que cualquier lenguaje pueda manipularlo. No solo JavaScript.

#### What is the Difference Between the DOM and HTML Source Code?
There are two instances the browser-generated DOM will be different than HTML source code:
- The DOM is modified by client-side JavaScript
- The browser automatically fixes errors in the source code.


## **API**
Interface y API no es lo mismo. Pero sí, el DOM tiene cara de API y expone esa interface. JDBC expone la interface Connection, pero no tiene nada de funcionalidad. No es una API. Una API uno la llama para utilizarla en la creación de una app. O sea, ya tiene toda su funcionalidad. Y uno usualmente se comunica con esa API a través de alguna interface que ella expone. En este casi, interface no se refiere a la que no está implementada, simplemente a la cara del API, los métodos que expone, etc. La I de API, o sea Interface en este caso, no se refiere a una interface de un lenguaje que hay que implementar, simplemente se refiere a las formas o métodos que expone para comunicarte con ella.

## **Database**
- **Partionning**:
    - *Horizontal*. Has separado en una base de datos una tabla con 100 columnas en varias de menos columnas para normalizar?
    - *Vertical*. Has separado en una base de datos una tabla con millones de records, en varias tablas con menos records, conde puedes elegir separarlas por categoría o lo que quieras. Si quieres separarlas por categoría, de una tabla products puedes hacer 10 tablas electronic_products, etc., y listo. Para que pesen menos.

## **Web Assembly (WASM)**
High-level single-threaded garbage-collected interpreted or just-in-time compiled prototype-based multi pradigm dinamic langugae with a non blocking event loop concurrency model


## **Data Structures**

A way to organize data para facilitar su manipulacion mas adelante. 

**Arrays** 

Usada para almacenar un mismo tipo de dato en ubicaciones contiguas. Su tamaño debe ser indicado antes de almacenar datos.
- Complexity:
    - *Access O(1)*: Elementos almacenaados uno al lado del otro.
    - *Search O(n)*: para busquedas secuenciacles. > O(log n) para binarias en Arrays sorted.
    - *Insertion O(n)*:  el peor caso occurre cuando la insertion sucede al principio del array y se requiere mover todos los demas elementos.
    - *Deletion O(n)*: Cuando el borrado es al principio del arreglo y se requiere mover todos los elementos.

**Linked list**

Cada elemento (nodo) es un objeto por separado. Cada nodo esta compuesto por 2 elementos: los datos y una referencia al siguiente nodo. Esto da la ventaja de que el tamaño de la estructura puede expandirse or achicarse, pero el acceso a los datos no puede ser aleatorio: en arrays podemos acceder un elemento en O(1) pero en los lists O(n). 
- *Singly linked list*. Cada nodo apunta a el siguiente y el ultimo a NULL.
- *Double Linked list*. Cada nodo tienes 2 referencias: al anterior y al siguiente. El puntero anterior del primer nodo y el posterior del ultimo son NULL.
- *Circular Linked list*. Todos los nodos estan conectados para formar un circulo. Pueden ser Singly o Double. Cualquier nodo puede ser el punto de inicio. Ej.: el ultimo nodo apunta al primero.
- Complexity:
    - *Access O(n)*: Tengo que recorrer cada elemento para encontrar el que tiene el puntero que apunta al que quiero.
    - *Search O(n)*.
    - *Insertion O(1)*:  Si sabemos la posicion donde queremos insertar.
    - *Deletion O(1)*: Si sabemos la direccion del nodo que apunta al elemento a eliminar.

**Tipos de estructuras de datos de abstraccion**

**Stack**

Tambien conocido como LIFO(last in, first out) sirve como una coleccion de elementos con dos operaciones principales: push, que agregar un elemento y pop, que lo remueve; Peek or Top: regresa al elemento de arribe del stack, isEmpty, devuelve true si stack esta vacio.. Ambas operaciones se hacen en el mismo extremo del stack, la parte de arriba. Se puede implementar con arreglso o con linked list:
- Complexity:
    - *Access O(n)*: 
    - *Insertion O(1)*: 
    - *Deletion O(1)*:
Ej.: Para manejar las llamadas a funciones ( la ultima llamda debe finalizar su ejecucion primero), en editores de texto para hacer undo donde la ultima palabra insertada es la que se borra.

**Queue**

FIFO(First in, first out). Como stack cuenta con dos opereaciones: enqueue, agrega elementos atras de la cola, dequeue, remueve desde el frente de la fila, Front, ir al frente del queue; ir a la parte de atras del queue. Tambien puede imprementarse son aray y linked list.
Ej.: Situaciones en recursos son compartidos entre diferentes usuarios y servicdas al primero que llegue. CPU scheduling, disk scheduling
Circular Queue, The advantage of this data structure is that it reduces wastage of space in case of array implementation, As the insertion of the (n+1)’th element is done at the 0’th index if it is empty.

**Binary Tree**

Estructura de datos herarquica no lineal como Arrays, List, Stack y Queue. Cada nodo tiene 2 ninos: izquierdo y derecho. Se implementa principalmente con links. Es representado por un puntero al nodo root. Cuando el arbol esta vacio root es NULL. Un nodo contiene: data, puntero al hijo izquierdo, puntero al derecho. Se puede recorrer de dos maneras:

-Travesia Depth First: 
   - *Inorder* (Left-Root-Right). 
   - *Preorder* (Root-Left-Right). Usualmente usado para copiar el arbol
   - *Postorder* (Left-Right-Root). Usualmente para borrar el arbol.
-*Travesia Breadth First*: Level Order Traversal

Puedes saber varias informaciones sobre un arbol segun sus propiedades: 
1. El numero maximo de nodos en nivel  x es igual a 2^x
2. El numero maximo de nodos en el arbol 2^x-1
3. Numero minimo de niveles Log2(N+1) donde N es la cantidad de nodos
4. En un arbol cuyos todos nodos tienen 0 o 2 hijos el numero de nodos hoja es siempre uno mas que el numero totalt de nodos con 2 hijos.

Nodes:
- Successor: The left most node of my first right node.
- Predecessor: The right most node of my first left node.

Types od Trees:
- *Full*:  Cada nodo tiene 0 o 2 hijos
- *Complete*: Todos los niveles estan completos. Se acepta que el ultimo no.
- *Perfect*: Todos los nodos internos tienes sus hijos y los nodos hoja al mismo nivel.
- *Degenerate, pathological*. Cada nodo interno tiene solo un hijo. A nivel de desempeño es igual a un linked list.
Balanced.

**Binary Search Tree**
- El subarbol a la izquierda todos sus nodos tienen un valor menor a root y en cada nivel menor a su padre.
- El subarbol a la derecha contiene valores iguales or majores a root. Aunque otro lado me dice que no debe haber duplicates.

Search:

Algorithm:
```
Search (ROOT, ITEM)

Step 1: IF ROOT -> DATA = ITEM OR ROOT = NULL
    Return ROOT
   ELSE
   IF ROOT < ROOT -> DATA
   Return search(ROOT -> LEFT, ITEM)
  ELSE
   Return search(ROOT -> RIGHT,ITEM)
  [END OF IF]
  [END OF IF]
Step 2: END
```

<u>*Insert*</u>: Se hace un search hasta que se llega al leaf que se convertira en su padre y se coloca a izquierda o derecha dependiendo si es mayoiur or menor.

<u>*Delete*</u>:
1 - Si es leaf solo se borra o se iguala a Null
2 - Si es un nodo con un solo hijo se intercambian los valores y ahora que el nodo pasa a ser un leaf

HashMap, HashSet, Balanced Tress, Grafos, al bruja, la recursión. Con un par de ejemplos, fibonacci, caching, time y space complexity, etc.
