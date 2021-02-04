# Java

Multiplatform programming language. Invented by James Gosling, Canadian computer scientist, in 1996.

Java needs both a compiler and an interpreter. The compiler converts the statements into *bytecode*. The *bytecode* is then ran by an interpreter called Java Virtual Machine.

## BEGINNING THE PROGRAM
```java
package com.java24hours;
```

A package is a way to group Java programs together. This line tells the computer to make `com.java24hours` the package name of the program.

A Java program (class) must have a name that matches the first part of its filename —the portion before the `.` period character— and should be capitalized the same way. You might get an error depending on how the class state is used.

### **Security**

The language generally has been considered safe enough to be usable over the Web, but security holes exploited in recent years have led some security experts to recommend that users turn off Java entirely in their browsers. Most of the leading browsers today discourage users from running
Java applets on websites.

### **www.sourceforge.net**

SourceForge is an enormous website devoted to collaborative programming projects.

## STATEMENTS AND EXPRESSIONS

Some statements are called expressions because they involve a mathematical expression and produce a result.

Java makes it possible to organize large numbers with underscore `_` characters. Example:
```java
long salary = 264_400_000_000L;
```
The underscores are ignored, so the variable still equals the same value. They just make numbers more human-readable. The capital `L` at the end of the number specifies it as a `long` value. If the `L` was omitted, the Java compiler would have assumed the number was an `int` and flagged an `integer number too large` error. The letter `F` for `float` values, the letter `L` is used for long integers and `D` for `double` floating-point values.

A naming convention in Java is to capitalize every letter in constants:
```java
final int TOUCHDOWN = 6;
```
<br>

## INCREMENTING AND DECREASING

The `++` and `--` are used for this purpose. They can be prefixed or postfixed to a variable.

```java
// Postfix:
int x = 3; 
int answer = x++ * 10; //Igual a 30 porque es igual que decir:
int answer = x * 10;
x++;

// Prefix:
int answer = ++x * 10; //Igual a 30 porque es igual que decir:
x++;
int answer = x * 10;
```

You can specify the value of a integer with binary and hexadecimal numbers using `0b` and `0x` respectively before the number.
```java
// Binary:
int z = 0b0000_1101; //1101 equals 13 in binary
```
<br>

## WORKING WITH STRING

Java allows to concatenate strings to other type of variable like an integer as long as there is a string in the statement.

### Compare

To compare two strings:
```java
String favorite = "chainsaw";
String guess = "pool cue";
System.out.println("Answer: " + favorite.equals(guess)); // The answer will be false.
```
<br>

### **`equalsIgnoreCase()`** 

Can be use to compare two strings without minding how they are capitalized.
```java
String.length().
String cinematographer = "Ben Demaree";
int nameLength = cinematographer.length(); //nameLength equals to 11.
```
<br>

### **`toUpperCase() / toLowerCase()`**

Changes the capitalization of any given string.
```java
String fin = "Ian Ziering";
String change = fin.toUpperCase(); // variable change equals “IAN ZIERING”.
```
<br>

### Searches

#### **`indexOf()`**

Returns a int that equals the position of the string or character you are trying to find in the string.
```java
String script = "Sharknado";
int position = script.indexOf("nado"); //La variable position equals 5. This is the position "nado" starts at within the String script.
```
<br>

#### **`contains()`**

If you just want if a string is present or not withing another string. It returns a boolean value.
```java
if (script.contains("There's a shark in your pool")) {
int stars = 4;
}
```
<br>

## CONDITIONAL TESTING

### **Equal and Not Equal**

`==` and `!=` cannot be used for strings, because strings are objects.

If there is only one statement to be executed in the "if" statement brackets are not necessary in the "if" syntax.
```java
if (account <= 0) System.out.println("No more money");

// On the other hand
int playerScore = 12000;
int playerLives = 3;
int difficultyLevel = 10;
if (playerScore > 9999) {
	playerLives++;
	System.out.println("Extra life!");
	difficultyLevel = difficultyLevel + 5;
}
```
<br>

### **`if()..else` and `if()...else if`**
```java
if (condition) {
	statement;
} else {
	statement;
}

if (condition) {
	statement;
} else if {
	statement;
} else {
	statement;
}
```
<br>

### **`switch` Statements**
```java
char grade = 'B';
switch (grade) {
	case 'A':
		System.out.println("You got an A. Awesome!");
		break;
	case 'B':
		System.out.println("You got a B. Beautiful!");
		break;
	case 'C':
		System.out.println("You got a C. Concerning!");
		break;
	default:
		System.out.println("You got an F. You'll do well in Congress!");
}
```

The value used in a case statement can be a `character`, `integer`, or `string`. The `default` statement is used as a catch-all if none of the preceding case statements is true, but you don't have to use it.

<br>

### **The Ternary Operator**
Syntax: `(condition to test) ? value_if_true : value_if_false;`
```java
int numberOfEnemies = (skillLevel > 5) ? 20 : 10;
String gender = "female";
System.out.print( (gender.equals("female")) ? "Ms." : "Mr." );
```
<br>

## LOOPS

### **`for`**

```java
for (int p = 0; p < 500; p++) {
	System.out.println("I will not sell miracle cures");
}
```
The variable `p` (counter) could have been declared outside and before `for` but it needs to be initialized inside `for` otherwise you will get a compilation error. 

As with `if`, `for` can be written without the brackets if it will contain only one statement.

### **`while`**

```java
int gameLives = 3;
while (gameLives > 0) {
	// the statements inside the loop go here
}
```

### **`do-while`**
```java
int gameLives = 0;
do {
	// the statements inside the loop go here
} while (gameLives > 0);
```
Opposite to `while` the condition is tested at the end. Therefore, in `do-while` it's statements are always executed at least once.

### **`Break`**

You can make any Loop statement end when you want using the `break` statement.
```java
int index = 0;
while (index <= 1000) {
	index = index + 5;
	if (index == 400) {
		break;
	}
}
```

### **`Continue`** 
The `continue` statement causes the loop to exit its current trip through the loop and start over at the first statement of the loop.
```java
int index = 0;
while (index <= 1000) {
	index = index + 5;
	if (index == 400) {
		continue;
	}
	System.out.println("The index is " + index);
}  //Due to "continue" "The index is 400" never prints.
```
<br>

### **Name Loops**

You can name loops in to make reference to a specific loop when using `break` or `continue`. This is specially useful when nesting loops.
```java
int points = 0;
int target = 100;
targetLoop:
while (target <= 100) {
	for (int i = 0; i < target; i++) {
		if (points > 50) {
			break targetLoop; //causes both loops to end.
		}
		points = points + i;
	}
}
```
<br>

### **Complex `for`**

The loop can include more than one variable in its initialization, conditional, and change sections.
Ex.:
```java
int i, j;
for (i = 0, j = 0; i * j < 1000; i++, j += 2) {
	System.out.println(i + " * " + j + " = " + (i * j));
}
```

Sections of a for loop also can be empty. An example of this is when a loop’s counter variable already has been created with an initial value in another part of the program, as in the following:
```java
int displayCount = 1;
int endValue = 13;
for ( ; displayCount < endValue; displayCount++) {
	// loop statements would be here
}
```
<br>

## **ARRAYS**

A pair of square brackets `[]` follow the type to distinguish arrays from variables.
Java is flexible you can put them after the variable name instead of the variable type.
```java
int[] reindeerWeight;
boolean[] hostileAirTravelNations;
String niceChild[]; //still the same.
```
When you create an `array` with the new statement, you must specify the number of elements. Each element of the `array` is given an initial value that depends on the type of the `array`. All numeric arrays have the initial *value `0`*, `char` arrays equal `\0`, and `boolean` arrays have the value `false`. A *`String` array and all other* objects are created with the initial value of `null`.

You can set up their initial values at the same time that you create them:
```java
String[] reindeerNames = { "Dasher", "Dancer", "Prancer", "Vixen",
	"Comet", "Cupid", "Donner", "Blitzen" };
```
<br>

### **`length` Variable**

The `length` variable is an integer that contains the number of elements an array holds.
	Ex.:
```java
String[] reindeerNames = { "Dasher", "Dancer", "Prancer", "Vixen",
"Comet", "Cupid", "Donder", "Blitzen", "Rudolph" };
System.out.println("There are " + reindeerNames.length + " reindeer."); //Prints 9 meaning the max index you can indicate for the array is 8.
```
Using length with arrays that have more than one dimension.
	Ex.:
```java
int[][][] data = new int[12][13][14];
```
The dimensions of this array can be measured by using the `data.length` variable for the first dimension, `data[0].length` for the second, and `data[0][0].length` for the third.

<br>

### **Multidimensional Arrays**

To create an array that has two dimensions, you must use an additional set of square brackets when creating and using the array:
```java
boolean[][] selectedPoint = new boolean[50][50];
```
<br>

### **Sorting an Array**

1. Use the `import java.util.*` statement to make it easier to use `java.util` classes in
the program.
2. Create the `array`.
3. Use the `sort()` method of the Arrays class to rearrange an array.

Numbers are arranged in ascending numerical order. Characters and string in alphabetical order.

**Notes:** Each character has a numerical value apart from their alphabetical. The capital alphabet 'A' to 'Z' range from 65 to 90. Java uses the Unicode standard which includes more than 60,000 symbols. The fist 127 of those belong to the ASCII code table.

<br>

## **OBJECTS**

Objects are defined by creating a class:
```java
public class Modem {
}
```

Ex.:
```java
public class Modem {
	int speed;
	
	public void displaySpeed() {
		System.out.println("Speed: " + speed);
	}
}  // This is Modem class. With a displaySpeed() method and the variable speed it's attribute.
```
To create an object (instance) off of that class:
```java
Modem device = new Modem();
```
<br>

### **Inheritance**

Through inheritance, a programmer can create a new class of objects by defining how they are different from an existing class. Lightman could make ErrorCorrectionModem inherit from Modem, and all he would need to write are things that make error-correction modems different than modems.

A class of objects inherits from another class by using the extends statement.
```java
public class ErrorCorrectionModem extends Modem {
	// program goes here
}
```
<br>

#### **Inheritance Hierarchy**

Parent-to-child grouping of classes is called a class hierarchy. A class that
inherits from another class is called a subclass. The class that is inherited from is called a superclass.

<br>

### **Converting Objects and Simple Variables**

Converting information to a new form is called casting. You don’t actually change the value when casting. Instead, a new variable or object is created in the format you need. 

`Boolean` values *cannot be used* in *any casting*.

<br>

#### **Casting Simple Variables** 
The following statements cast a float value into an `int`:
```java
float source = 7.00F;
int destination = (int) source;
```

Sometimes can use a variable in a different format without casting it at all. For example, you can use char variables as if they were int variables; int variables as if they were long variables, and any numeric type can be used as a double.

When you are converting information from a larger variable type into a smaller type, you must
explicitly cast it, as in the following statements:
```java
int xNum = 103;
byte val = (byte) xNum; //Java changes the value to make the cast fit successfully. This can produce unexpected results and should be avoided.
```
<br>

#### **Casting Objects**
You can cast objects into other objects when the source and destination are related by inheritance. One class must be a subclass of the other.

Some objects do not require casting at all. You can use an object where any of its superclasses are expected. All objects in Java are subclasses of the Object class, so you can use any object as an argument when an Object is expected.

You also can use an object where one of its subclasses is expected. However, because subclasses usually contain more information than their superclasses, you might lose some of this information. For instance, if the object doesn’t have a method that the subclass would contain,
an error results if that missing method is used in the program.

To use an object in place of one of its subclasses, you must cast it explicitly with statements such as the following:
```java
public void paintComponent(Graphics comp) {
Graphics2D comp2D = (Graphics2D) comp;
}
```

This casts a Graphics object called comp into a Graphics2D object called comp2D. You don’t lose any information in the cast, but you gain all the methods and variables the subclass defines.

<br>

#### **Converting Simple Variables to Objects and Back**
There are classes in Java for each of the simple variable types including `Boolean`, `Byte`, `Character`, `Double`, `Float`, `Integer`, `Long`, and `Short`.

These objects can be used as regular data types:
```java
Integer suffix = 5309;
```

To get an `int` value from the preceding suffix object, you could use the following statement:
```java
int newSuffix = suffix; //This statement causes the newSuffix variable to have the value 5309, expressed as an int value.
```

Java’s capability to use the basic data type and object forms of a value interchangeably is made possible through *autoboxing* and *unboxing*.
**Autoboxing** casts a simple variable value to the corresponding class.
**Unboxing** casts an object to the corresponding simple value. They assure that when you are expecting a simple data type like `float`, an object is converted to the matching data type with the same value or when you’re expecting an object like `Float`, a data type is converted to an object as necessary.

One common conversion from an object to a variable is to use a string in a numeric expression. When the string’s value could become an integer, this can be done using the `parseInt()` method of the `Integer` class:
```java
String count = "25";
int myCount = Integer.parseInt(count);
```
<br>

**Side note:** To keep a method from being public, leave off the public statement in front of the method’s name.


-----
# **HOW OBJECTS ARE LIKE**

## **CREATING VARIABLES**
```java
public class Gremlin {
	public int guid;
	public String creator = "Chris Columbus";
	int maximumAge = 240;
}
```
<br>

### **Access control**

Making a variable `public` makes it possible to modify the variable from another program that is using the object.
- **Protected:** You can use a "protected" variable only in the same class as the variable, any subclass of that class, or by classes in the same package.
- **Private:** Can use it only in the same class.
- **Default or package access:** When no access control is set, the variable is available only to classes in the same package.

<br>

## **CLASS/STATIC VARIABLES**

The variables declared so far for the class created can be called "object variables": a whole individual variable is created for each object of the class.
Class variables describe an entire class of objects instead of an specific object itself. Only one copy of the variable exists for the whole class.
Ex.:
```java
static int gremlinCount = 0; //If you want to keep track of how many Gremlin objects are being used in a program.
```

You can change it's value the same way you do for object's variables:
```java
stripe.gremlinCount++;
Gremlin.gremlinCount++; //Because class variables apply to an entire class, you also can use the name of the class instead.
```

Both statements accomplish the same thing, but If you always use object names when working with class variables, you can’t tell whether they are class or object variables without looking carefully at the source code.

**CAUTION:** Although class variables are useful, you must take care not to overuse them. These variables exist for as long as the class is running. If a large array of objects is stored in class variables, it will take up a sizeable chunk of memory and never release it.
<br>

## **METHODS**

Method the Gremlin class can use to create a new gremlin:

```java
public Gremlin replicate(String creator) {
Gremlin noob = new Gremlin();
noob.creator = "Steven Spielberg";
return noob;
}
```
This creates the method *replicate*. Gremlin precedes the declaration of the method because the method returns a Gremlin object. If the method should not return a value the keyword `void` should precede the name of the method. When a method returns a value, you can use the method as part of an expression (remember an expression is a statement that performs an operation) or at any place in the program where you could have used a variable.
Ex.:
```java
if (haskins.active() == true) {
System.out.println(haskins.guid + " is active.");
}
```
<br>

### **Accessor method**

Public methods used to access private object variables.
Ex.:
```java
public void setGuid(int newValue) {
if (newValue > 0) {
	guid = newValue;
}
}	
//
public int getGuid() {
return guid;
}
```
<br>

### **Similar Methods with Different Arguments**

Two methods can have the same name if they have a different number of arguments or the arguments are of different variable types. The arguments to a method are called the method’s signature. A class can have different methods with the same name as long as each method has a different signature.
```java
void tauntHuman() {
System.out.println("That has gotta hurt!");
}
//
void tauntHuman(String taunt) {
System.out.println(taunt);
}
```
<br>

### **Method Reference `::`**

it's a syntactic sugar for expressions like this:
```JAVA
numbers.forEach(x -> System.out.println(x));
```
Here, you don't actually need the name x in order to invoke println for each of the elements. That's where the method reference is helpful - the `::` operator denotes you will be invoking the println method with a parameter, which name you don't specify explicitly:
```java
numbers.forEach(System.out::println);
```

### **Constructors**

This method handles the work required to create the object when you saying: 
```java
Gremlin clorr = new Gremlin();
```

Constructors are defined like other methods, except they cannot return a value. The following are two constructors for the Gremlin class of objects:
```java
public Gremlin() {
creator = "Michael Finnell"; // creator is a string
maximumAge = 240; // maximumAge is an int
}
//
public Gremlin(String name, int size) {
creator = name;
maximumAge = size;
}
```

The different constructors can be called using the arguments they are sent:
```java
Gremlin blender = new Gremlin();
Gremlin plate = new Gremlin("Zach Galligan", 960);
```

**CAUTION:** If your subclass defines a constructor with one or more arguments, the class will no longer inherit a constructor with no arguments from its superclass. For this reason, *you must always define a no-argument constructor when your class has other constructors.*

### **Class Methods**

Like class variables, class methods are a way to provide functionality associated with an entire class instead of a specific object. Use static in front of the method name, as in the following code:
```java
static void showGremlinCount() {
System.out.println("There are " + gremlinCount + " gremlins");
}
//You can call it:
Gremlin.showGremlinCount();
```
<br>

### **Variable Scope within Methods**

In Java the scope of a variable is limited by the brackets. Variables declared within certain brackets can only be used withing suck brackets.
```java
if (humanCount < 5) {
int status = 1;
if (humanCount < 1) {
	boolean firstGremlin = true;
	status = 0;
} else {
	firstGremlin = false;
}
} // firstGremlin cannot be used within the "else" bracket because it was declared within the if bracket.
```
<br>

### **Putting One Class Inside Another**

Programs sometimes need more than one class to work. Such programs consist on a main class and any helper classes that are needed. There are two ways of creating a helper class. Once way is to define each class separately:
```java
public class Wrecker {
	String creator = "Phoebe Cates";

	public void destroy() {
		GremlinCode gc = new GremlinCode(1024);
	}
}

class GremlinCode {
int vSize;

	GremlinCode(int size) {
		vSize = size;
	}
}
```
Helper classes sometimes are defined in the same source code file as the class they’re assisting. When the source file is compiled, multiple class files are produced. The preceding example produces the files *Wrecker.class* and *GremlinCode.class* when compiled.

**CAUTION:** If more than one class is defined in the same source file, only one of the classes can be public. The other classes should not have public in their class statements. The name of the source code file must match the public class that it defines.

You can also define a inner class. Which is when you define the helper class within the brackets of the main class.
```java
public class Wrecker {
	String creator = "Hoyt Axton";

	public void destroy() {
		GremlinCode vic = new GremlinCode(1024);
	}

	class GremlinCode {
		int vSize;

		GremlinCode(int size) {
			vSize = size;
		}
	}
}
```

In both techniques you can use the helper classes the same way. The only difference is how compiler names the file the inner class. The compiler gives them a name that includes the name of the main class. In the preceding example, the compiler produces *Wrecker.class* and *Wrecker$GremlinCode.class*.

<br>

### **Using the `this` Keyword**

The keyword `this` serves to refer to the current class  we are programming withing the class itself. It comes in handy when there are methods or variables you will be referring to with similar name as those of the objects. By using `this`, you make it clear to which variable or method you are referring.

You can use `this` anywhere in a class where you would refer to an object by name. If you want to send the current object as an argument to a method, for example, you could use a statement such as the following:
```java
verifyData(this);
```
<br>


# **HOUR 12: MAKING THE MOST OF EXISTING OBJECTS**

## **-THE POWER OF INHERITANCE.-**

### **Overriding Methods**

You can override an inherited method by writing a method with the same name and signature as the inherited method in the subclass. This enables a subclass to change, replace, or completely wipe out some of the behavior or attributes of its superclasses. You need to override a method any time the inherited behavior produces an undesired result or you want to do something different. When a method is defined in a subclass and its superclass, the subclass method is used.
To override a method, you must declare the method in the same way it was declared in the superclass from which it was inherited. A public method must remain public, the value sent back by the method must be the same, and the number and type of arguments to the method must not change. The name of the arguments are of no importance.
When you override a method in a subclass, you should preface the method declaration with `@Override`, as in this example:
Ex.:
```java
@Override
public void setPosition(int x, int y) {
	if ( (x > 0) & (y > 0) ) {
		super.setPosition(x, y);
	}
}
```
The `@Override` text is a special comment called an annotation that tells the Java compiler more than it could figure out on its own. By preceding a method with the `@Override` annotation, you give the compiler an opportunity to check whether the method really overrides a superclass method. If it doesn’t—for example, you might have left off the second integer argument—the program won’t compile.

Without the annotation, the compiler can’t look for this potential problem. The method without the second integer would just appear like any other method.

<br>

### **Using this and super in a Subclass**

As "this" is used to refer the current object of a class "this" is being used in, "super" is used to refer to the immediate superclass (parent/base class) of the object.
Ex.:
```java
super("Adam", 12);   //To refer to a constructor of the superclass.
super.hawaii = 50;   //To refer to a variable of the superclass.
super.dragnet();   //To refer to a method of the superclass.
```
A variable accessed through `super` can’t be private because those are not available in a subclass. The first statement of a subclass constructor must be a call to a constructor of the superclass. This requires the super keyword, as in the following statements:
Ex.:
```java
public DataReader(String name, int length) {
super(name, length);
}
```

If a constructor does not explicitly invoke a superclass constructor, the Java compiler automatically inserts a call to the no-argument constructor (super()) of the superclass. If the superclass does not have a no-argument constructor, you will get a compile-time error. Object does have such a constructor, so if Object is the only superclass, there is no problem.

If a subclass constructor invokes a constructor of its superclass, either explicitly or implicitly, you might think that a whole chain of constructors called, all the way back to the constructor of Object. This, in fact, is the case. It is called constructor chaining.

<br>

## **-STORING OBJECTS OF THE SAME CLASS IN AN ARRAYLIST.-**

As the class name suggests, array lists are like arrays, which also hold elements of related data, but they can grow or shrink in size at any time.
They are created by referencing two classes: the ArrayList class and the class the list holds. The name of the class held by the list is placed within `<` and `>` characters, as in this statement.
Ex.:
```java
ArrayList<String> structure = new ArrayList<String>();
```

You can also declare it as: `ArrayList structure = new ArrayList();`
But indicating the type of class the list would hold as the latter example will give the compiler a better way to prevent error and will keep you from misusing the ArrayList by putting wrong objects in it.
An ArrayList holds objects that either belong to the same class or share the same superclass. Unlike arrays, ArrayLists aren’t created with a fixed number of elements they hold. The list is created with 10 elements. You can specify a size as an argument to the constructor.
Ex.:
```java
ArrayList<String> structure = new ArrayList<String>(300);
```

To add elements use the `add()` method with the object as the only argument.
Ex.:
```java
structure.add("Vance"); //Becomes element 0
structure.add("Vernon"); //Becomes element 1 and so on as you add elements.
```

Use the `get()` method along with the index number to retrieve the element
Ex.:
```java
String name = structure.get(1);
```

To see if a list contains an object in one of its elements, call its `contains()` method with that object as an argument:
Ex.:
```java
if (structure.contains("Velma")) {
System.out.println("Velma found");
}
```

Remove an object from a list using itself or its index number:
Ex.:
```java
structure.remove(0);
structure.remove("Vernon");
```

### **Looping through an ArrayList**

We use a special type of `for` loop that uses only two parts. The first has the class and name of the variable that would hold each object of the list. The second the name of the list.
Ex.:
```java
for (String name : structure) {
System.out.println(name);
}
```
<br>

# **HOUR 13 STORING OBJECTS IN DATA STRUCTURES **

## **-ARRAYLISTS.-**

The good thing about ArrayList is that they can change in size; something arrays do not do. An ArrayList is a data structure that holds objects of the same class or a common superclass.
Ex.:
```java
ArrayList servants = new ArrayList(); // simple declaration.
ArrayList servants = new ArrayList(30); //declaration with estimated capacity. The default capacity is 10.
```
ArrayLists can be created by specifying an initial capacity, which provides some guidance on how many elements the list might hold. The capacity is just a hint. If the capacity is exceeded, the ArrayList will be adjusted accordingly and continue to function properly. The better you estimate the capacity, the more efficient the list will be as the program runs.

You can specify the type of class the ArrayList is going to hold.
```java
ArrayList<String> servants = new ArrayList<String>(); //This statement creates an ArrayList of String objects.
```

These are common arrayList methods:

- **`add(Object)`**: adds an object to the list
	ex.: 
	```java
	servants.add("Bates");   servants.add("Anna"); //All you add goes to the end of the list, so Bates is first and Anna is last.
	```
- **`add(int, Object)`**: Adds object at the specified `int` position.
	ex.: 
	```java
	servants.add(0, "Robert"); //this adds Robert on top of Bates instead of the bottom. The position specified as the first argument must be no greater than the size() of the list. If robert would have been added to 4 error IndexOutOfBoundsException would have been thrown.
	```
- **`remove(Object)`**: takes an object out of the list.
	ex.: 
	```java
	servants.remove("Mrs. O'Brien");
	```
- **`remove(int)`**: removes an object specifying a number in the list.
- **`size()`**: Gets the number of elements currently holds.
	ex.: 
	```java
	int servantCount = servants.size();
	```
- **`get(int)`**: Calls an element specified by `int`.
	ex.: 
	```java
	String aristocrat = aristocrats.get(i);
	```
- **`indexOf(Object)`**: find out whether an array list contains a specific object with that object as the argument. The method returns the position of the object, or `1` if it cannot be found in the list:
	ex.: 
	```java
	int hasCarson = servants.indexOf("Carson");
	```
- **`contains()`**: returns true or false based on whether the specified
object can be found.
	ex.:
	```java
	boolean hasCarson = servants.contains("Carson");
	```
- **`Going through elements`**.
ex.:
```java
for (String servant : servants) {
System.out.println(servant);
}
```
The first argument to for is a variable where an element should be stored. The second is the array list.

<br>

## **-HASHMAPS.-**

*HashMaps* are data structure in Java that use an object to retrieve another object. The first object is the *key* and the second is the *value*. It's implemented by the `HashMap` class of the `java.util` package.
Ex.:
```java
HashMap phoneBook = new HashMap(); // can be created by calling the constructor with no arguments.

HashMap phoneBook = new HashMap(30, 0.7F);
```

In the latter the first number `30` is the capacity. It represents the number of elements the hash map can store. The second argument represents the percentage of elements that can be stored before the capacity is automatically increased. The value is floating-point number ranging from 0 (empty) to 1.0 (full). The *defaults* are a capacity of `16` and load factor of `.75`, which often are sufficient.
```java
HashMap<String, Long> phoneBook = new HashMap<>();
```

This creates a `HashMap` called phoneBook with keys that are *strings* and *values* that are `Long` objects. The second set of `< >` characters are empty, which assumes the same classes as those in the previous `< >` in the statement.

**Note**: if you were to use a primitive type between `< >`, such as `<int, Long>` will cause his class equivalent to be used: `<Integer, Long>` in this example.

- **`put(Object, Object)`**: Use to stored objects in the hash map.
	ex.: 
	```java
	phoneBook.put("Butterball Turkey Line", 8002888372L); 
	```
	**Note**: These statements are putting `Long` objects in the `HashMap` using `long` values. This would have been an error in early versions of Java, because a primitive data type such as `long` couldn't be used where an object was required.But it's no longer an error because of autoboxing and unboxing, a feature of Java that automatically converts between primitive types and their equivalent object classes. When the Java compiler sees a `long` like 8002888372, it converts it to a `Long` object.

- **`get(Object)`**: retrieves an object using its key as the only argument.
	ex.: 
	```java
	long number = phoneBook.get("Butterball Turkey Line"); // returns -null- if not matching key is found. This could cause a problem because -long- types do not accept null values. this could be fixed by declaring number a -Long- object.
	```

- **`getOrDefault(Object, Object)`**: If the key specified as the first argument is not found, the second argument is returned by default.
	ex.: 
	```java
	long number = phoneBook.getOrDefault("Betty Crocker", -1L); //If a number matching the key "Betty Crocker" is found in the map, that number is returned. Otherwise, −1 is returned.	
	```

- **`containsKey(Object)` / `containsValue(Object)`**: Indicate whether a key / value is present in the map. Returns a `Boolean`.

- **`size()`**: reveals the number of items in the data structure.

### -Loop though the Hash map.-
```java
for (Map.Entry<String, Long> entry : phoneBook.entrySet()) {
	String key = entry.getKey();
	Long value = entry.getValue();
	// ...
}
```
The method `entrySet()` returns these entries in the map as a `Set` of object (using the Set interface in `java.util`). Each item is them represented by `Map.Entry`, a class of `Java.util`. The entry object can call `getKey()` and `getValue()` to get the key and value.

<br>

# **HOUR 14 HANDLING ERRORS IN A PROGRAM**

Java divides errors into two categories:

- **Exceptions—Events** that signal an unusual circumstance has taken place as a program runs
- **Errors—Events** that signal the interpreter is having problems that might be unrelated to your program

Errors normally aren’t something a Java program can recover from. You might have encountered an *OutOfMemoryError* as you worked on Java programs, which means the program got so big it ran out of memory on the computer. There’s nothing that can be done in a Java program to handle that kind of error after it occurs. The program exits with the error.
Exceptions often can be dealt with in a way that keeps a program running properly.

**NOTE:** Two terms are used to describe this process: `throw` and `catch`. Objects throw exceptions to alert other objects that they have occurred. These exceptions are caught by other objects or the Java Virtual Machine.

All exceptions are subclasses of Exception in the `java.lang` package.
There are exceptions that can be dealt with by simple changing the code, similar to compiler errors. Other exceptions must be dealt with every time a program runs by using five new keywords: `try`, `catch`, `finally`, `throw`, and `throws`.

Java programs can take care of their own exceptions by using a `try-catch` block statement, which takes the following form:
Ex.:
```java
try {
// statements that might cause the exception
} catch (Exception e) {
// what to do when the exception occurs
}
```

The `Exception` object that appears in the `catch` statement should be one of three things:
1. The class of the exception that might occur
2. More than one class of exception, separated by pipe "|" characters
3. A superclass of several different exceptions that might occur

*`Try...Catch` in action*
```java
package com.java24hours;

public class NewCalculator {
	public static void main(String[] arguments) {
		float sum = 0;
		
		for (String argument : arguments) {
			try {
				sum = sum + Float.parseFloat(argument);
			} catch (NumberFormatException e) {
				System.out.println(argument 
					+ " is not a number.");
			}
		}
		System.out.println("Those numbers add up to " + sum);
	}
}
```
<br>

## **-Catching Several Different Exceptions.-**

One way to handle multiple classes of exceptions is to devote a catch block to each one.
Ex.:
```java
String textValue = "35";
int value;
try {
	value = Integer.parseInt(textValue);
} catch (NumberFormatException exc) {
	// code to handle exception
} catch (ArithmeticException exc) {
	// code to handle exception
}
```

You also can handle multiple exceptions in the same catch block by separating them with pipe `|` characters and ending the list with a name for the exception variable.
Ex.:
```java
try {
	value = Integer.parseInt(textValue);
} catch (NumberFormatException | ArithmeticException exc) {
	// code to handle exceptions
}  //If a NumberFormatException or ArithmeticException is caught, it will be assigned to the -exc- variable.
```
<br>

## **-Handling Something After an Exception.-**

There are times when you want the program to do something at the end of the block whether an exception occurred or not. Do this with:
Ex.:
```java
try {
	// statements that might cause the exception
} catch (Exception e) {
	// what to do when the exception occurs
} finally {
	// statements to execute no matter what
}
```

The statement/s within the `finally` section of the block are executed after everything else in the block, even if an exception occurs. One place this is useful is in a program that reads data from a file on disk. There are several ways an exception can occur when you are accessing data: the file might not exist, a disk error could occur, and so on. If the statements to read the disk are in a try section and errors are handled in a catch section, you can close the file in the finally section. This makes sure that the file is closed whether or not an exception is thrown as it is read.

## **-Throwing Exceptions.-**

When the compiler displays a message about an exception being handled incorrectly while using classes in the Java class library such as:
```java
Output ▼
NetReader.java:14: unreported exception java.net.MalformedURLException; must be
caught or declared to be thrown.
```

The *must be caught or declared to be thrown* part indicates the method you are trying to use throws that exception. You and your application must do one of the following:
1. Handle the exception with a `try-catch` block
2. Throw the exception
3. Handle the exception with a `try-catch` block and then throw it

If you would like to throw an `exception` after handling it (catch it), you can use a `throw` statement followed by the exception object to throw.
Ex.:
```java
float principal;
try {
	principal = Float.parseFloat(loanText) * 1.1F;
} catch (NumberFormatException e) {
	System.out.println(arguments[0] + " is not a number.");
	throw e;
} //This handles NumberFormatException errors only

float principal;
try {
	principal = Float.parseFloat(loanText) * 1.1F;
} catch (Exception e) {
	System.out.println("Error " + e.getMessage());
	throw e;
} // Handles all exceptions that could occur.
```

`Exception` is the parent of all exception subclasses. When you use throw in a catch block that catches a parent class, such as Exception, throwing the exception throws that class. This loses some detail of what kind of error occurred, because a subclass such as `NumberFormatException` tells you a lot more about the problem than simply the Exception class.
Java offers a way to keep this detail: the `final` keyword in a catch statement.
Ex.:
```java
try {
	principal = Float.parseFloat(loanText) * 1.1F;
} catch (final Exception e) {
	System.out.println("Error " + e.getMessage());
	throw e;
}
```
That `final` keyword in catch causes throw to behave differently. The specific class that was caught is thrown.

## -Ignoring Exceptions.-

When you want to create a method not to deal with a certain exception you can use `throws`.
Ex.:
```java
public void loadURL(String address) throws MalformedURLException {
	URL page = new URL(address);
	// code to load web page
}
```
If a wrong URL is passed to *address* (for instance *http:www.java24hours.com* missing the two slash //) then the constructor of the URL class throws a *MalformedURLException*. However, because the loadURL method declare with `throws MalformedURLException` the responsibility for catching this exception falls to any method that calls the `loadURL()` method.

## **-Exceptions That Don’t Need `catch`.-**

These exceptions are called *Unchecked exceptions*. They are all subclasses of the *RuntimeException* in the `java.lang` package. *IndexOutOfBoundsException* and *NullPointerException* (if a statement incorrectly assumes an object has a value or when an object that has no value is used) are common unchecked exceptions. <br>
The rationale for unchecked exceptions in Java is that they either can be prevented by wellwritten code, or they could occur so often that catching them all the time would make programs unnecessarily complex. A NullPointerException could occur in every statement in a program where an object’s methods are called.
Of course, just because an exception can be ignored doesn’t mean it should be. You still have the option of using try, catch, and throws with unchecked exceptions.

### **Is it possible to create your own exceptions?**
It’s not just possible, it’s a really good idea. Making your own exceptions for problems that may arise makes your classes more robust. You can create your own exceptions easily by making them a subclass of an existing exception, such as Exception, the superclass of all exceptions. In a subclass of Exception, there are only two constructors you might want to override: `Exception()` with no arguments and `Exception(String )` with a `String` as an argument. In the latter, the string should be a message describing the error that has occurred.

<br>

# **-HOUR 15. CREATING A THREADED PROGRAM.-**

In a Java program, each of the simultaneous tasks the computer handles is called a thread, and the overall process is called multithreading. Multitasking is made possible through a class of objects called *threads*.

**Tip**: All classes that belong to the `java.lang` package do not need to be imported to be used. Both, the class `Thread` and the interface `Runnable`, that represent Threads are part of this package.

## **-Slowing Down a Program.-**

The `Thread` class has a `sleep()` method that you can call in any program that should stop running for a short period of time.
Ex.:
```java
Thread.sleep(5000); 
```
Causes the JVM to pause for five seconds (5,000 milliseconds) before doing anything else. If for some reason the JVM can’t pause that long, an *InterruptedException* is thrown by the `sleep()` method. Therefore, you should deal with some manner, like inside a `try-catch` statement block.
Ex.:
```java
try {
Thread.sleep(5000);
} catch (InterruptedException e) {
// wake up early
}
```
Your program can have as many threads as needed, and they all can run simultaneously without affecting each other.

## **-Creating a `Thread`.-**

A Java class that can be run as a thread is referred to as a *runnable (or threaded) class*. <br>
Two ways to place a task in its own thread include:
1. Putting the task in a class that implements the Runnable interface
2. Putting the task in a class that is a subclass of Thread

To support the `Runnable` interface, the implements keyword is used when the class is created.
Ex.:
```java
public class LoadStocks implements Runnable {
// body of the class
}
```

When a class implements an interface, it indicates that the class contains some extra behavior in addition to its own methods.
Classes that implement the `Runnable` interface must include the `run()` method, which has the following structure:
Ex.:
```java
public void run() {
// body of the method
}
```
The `run()` method should take care of the task that the thread was created to accomplish.

When a threaded application is run, the statements in its `run()` method are not executed automatically. Threads can be started and stopped in Java, and a thread doesn’t begin running until you do two things:

1. Create an object of the threaded class by calling the Thread constructor
2. Start the thread by calling its `start()` method <br>
The Thread constructor takes a single argument: the object that contains the thread’s `run()` method. Often, you use the `this` keyword as the argument, which indicates the current class includes the `run()` method.

Normally you’d expect to see that object assigned to a variable, like so:
Ex.: 
```java
PrimeFinder frame = new PrimeFinder();
/*However, if there is no need to refer to the object later on in the code, you can simply call "new" to cause the program to run*/ 
new PrimeFinder();
```
It’s a good programming practice in Java to store objects in variables only when those objects are needed after their creation.

```java
public class PrimeFinder implements Runnable {
	Thread go;
	StringBuffer primes = new StringBuffer();
	int time = 0;

	public PrimeFinder() {
		start();
		while (primes != null) {
			System.out.println(time);
			try {
				Thread.sleep(1000);
			} catch (InterruptedException exc) {
				// do nothing
			}
			time++;
		}
	}

	public void start() {
		if (go == null) {
			go = new Thread(this);
			go.start();
		}
	}

	public void run() {
		int quantity = 1_000_000;
		int numPrimes = 0;
		// candidate: the number that might be prime
		int candidate = 2;

		primes.append("\nFirst ").append(quantity).append(" primes:\n\n");
		while (numPrimes < quantity) {
			if (isPrime(candidate)) {
				primes.append(candidate).append(" ");
				numPrimes++;
			}
			candidate++;
		}
		System.out.println(primes);
		primes = null;
		System.out.println("\nTime elapsed: " + time + " seconds");
	}

	public static boolean isPrime(int checkNumber) {
		double root = Math.sqrt(checkNumber);
		
		for (int i = 2; i <= root; i++) {
			if (checkNumber % i == 0) {
				return false;
			}
		}
		return true;
	}

	public static void main(String[] arguments) {
		new PrimeFinder();
	}
}
```

**NOTE**: The PrimeFinder application does something unusual with the StringBuffer object's `append()` method. A call to `append() `is followed by a period `.` character and another call to `append()`. This causes text to be appended in sequence. It's possible because a call to `append()` returns that buffer, which then can be called again.

The following subjects will be covered by following code:
- The Constructor
- Catching Errors as You Set Up URLs
- Starting the Thread
- Handling Mouse Clicks
- Displaying Revolving Links

The program you are undertaking rotates through a list of website titles and the addresses used to visit them. The title of each page and the web address are displayed in a continuous cycle. Users can visit the currently displayed site by clicking a button on the application’s graphical user interface. This program operates over a period of time, displaying information about each website in sequence. Because of this time element, threads are the best way to control the program.
package com.java24hours;

```java
import java.awt.*;
import java.awt.event.*;
import java.io.*;
import javax.swing.*;
import java.net.*;

/*This unusually large number of packages is required because the project uses Swing, a set of packages to support a graphical user interface in Java.*/

public class LinkRotator extends JFrame implements Runnable, ActionListener {

	/*With this LinkRotator is a subclass of JFrame and support the Runnable and 
	ActionListener interfaces. With Runnable you can make the thread start running 
	`Run()` and with ActionListener the program to respond to mouse clicks*/

	String[] pageTitle = new String[6];
		//holds the titles of the six websites that are displayed.

	URI[] pageLink = new URI[6];
		/*The URI class of objects stores the value of a website address. 
		URI has all the behavior and attributes needed to keep track 
		of a web address.*/

	int current = 0;
		//keeps track of which site is being displayed so you can cycle through the sites.

	Thread runner;
	JLabel siteLabel = new JLabel();

	public LinkRotator() {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setSize(300, 100);
		FlowLayout flo = new FlowLayout();
		setLayout(flo);
		add(siteLabel);
		
		pageTitle = new String[] {
			"Oracle's Java Site",
			"Server Side",
			"JavaWorld",
			"Java in 24 Hours",
			"Sams Publishing",
			"Workbench"
		};
		pageLink[0] = getURI("http://www.oracle.com/technetwork/java");
		pageLink[1] = getURI("http://www.theserverside.com");
		pageLink[2] = getURI("http://www.javaworld.com");
		pageLink[3] = getURI("http://www.java24hours.com");
		pageLink[4] = getURI("http://www.samspublishing.com");
		pageLink[5] = getURI("http://workbench.cadenhead.org");
		Button visitButton = new Button("Visit Site");
		visitButton.addActionListener(this);
		add(visitButton);
	/*Assigns values to the array pageTitle. The elements of the pageLink array 
	are assigned a value returned by the getURI() method, created below. The
	last three statements create a clickable button labeled “Visit Site” and add 
	it to the application’s frame.*/

		setVisible(true);
		start();
	}

	/*Takes a web address as an argument, returning a URI object representing that 
	address. If the string is not a valid address, the method returns null instead*/	
	private URI getURI(String urlText) {
		URI pageURI = null;
		try {
			pageURI = new URI(urlText);
		} catch (URISyntaxException ex) {
			// do nothing
		}
		return pageURI;
	}

	/*Starts the runner thread if it is not already started. The start() method is 
	called as the last statement of the constructor above.*/
	public void start() {
		if (runner == null) {
			runner = new Thread(this); 
			/*Creates a new Thread object. The this keyword refers to the
				program itself, designating it as the class that runs within 
				the thread*/
			runner.start();
			/*Causes the thread to begin running. When a thread begins,
				the run() method of that thread is called. Because the 
				runner thread is the LinkRotator application itself, 
				the run() method of the application is called.*/
		}
	}

	//Here the main work of a thread takes place.
	public void run() {
		Thread thisThread = Thread.currentThread();
		/*The currentThread() keeps track of the thread that’s currently 
			running.*/

		/*Both runner and thisThread are threads, and as long as they 
			refer to the same object, the while loop continues looping.*/
		while (runner == thisThread) {
			current++;

			/*The current variable is used as index to the pageTitle
				array to determine which website’s information to display. 
				The title is set as the text of the siteLabel user interface component.*/
			if (current > 5) {
				current = 0;
			}
			siteLabel.setText(pageTitle[current]);
			repaint();

			/*Pauses the thread for 2 seconds and handles any
				InterruptedException error. This error would occur if 
				something interrupts the thread as it slept.*/
			try {
				Thread.sleep(2000);
			} catch (InterruptedException exc) {
				//do nothing
			}
		}
	}

	/*This method is required by the ActionListener interface. Its code makes 
	the application open the displayed website with a web browser.*/	
	public void actionPerformed(ActionEvent event) {
		Desktop desktop = Desktop.getDesktop();
		/*The Desktop class in the java.awt package represents the desktop
			environment of the computer running the application. After 
			you have this object, you can use it to launch an email client 
			using a “mailto:” link, open a file for editing with another 
			program, print a file, and make other programs outside of 
			Java perform tasks. Here, the Desktop object is used to open 
			a web page with the computer’s default web browser.*/

		if (pageLink[current] != null) {
			try {
				desktop.browse(pageLink[current]);
				runner = null;
				System.exit(0);
			} catch (IOException exc) {
				//do nothing
			}
		/*The browse(URI) method loads the specified web address in a 
			browser. If pageLink[current] is a valid address, browse() 
			requests that the browser load the page.*/
		}
	}	

	public static void main(String[] arguments) {
		new LinkRotator();
	}
}
```

The LinkRotator application doesn't have a way to stop the thread. However, the way it is structured it can be easily created.
Ex.:
```java
public void stop() {
	if (runner != null) {
		runner = null;
	}
}
```
Setting the runner object to a null value causes it to have a different value than the thisThread object. When this happens, the while loop inside the `run()` method stops running.

**NOTE:**
Something important to remember about interfaces. An interface is a guarantee that the class includes all the interface's methods. If an interface contains three different methods all of them must be included in a class that implements the interface.


# **-HOUR 16 USING INNER CLASSES AND CLOSURES.-**

Inner classes are helper classes that are contained within an enclosing class. There are three reasons that Java includes inner classes:

1. When a helper class is only used by one other class, it makes sense to define it within that class.
2. They enable a helper class to access private methods and variables it could not access as a separate class.
3. They put a helper class as close as possible to where it is being used in another class.

An inner class is created with the class keyword, like any other class, but it is declared inside the containing class. Typically, this is placed with class and instance variables.
Ex.:
```JAVA
public class Simple {
	class InnerSimple {
		InnerSimple() {
			System.out.println("I am an inner class!");
		}
	}
	public Simple() {
		// empty constructor
	}
	public static void main(String[] arguments) {
		Simple program = new Simple();
		Simple.InnerSimple inner = program.new InnerSimple();   /*Creating an inner class requires an object of the outer class. The new operator is called on the object. The name of the class includes the name of the outer class, a period (.) character, and the inner class name.*/
	}
}
```

## **-Anonymous Inner Classes.-**

An anonymous inner class is one that has no name and is declared and created at the same time. To use one, you replace a reference to an object with the new keyword, a call to a constructor, and the class definition inside `{ }` characters.
Ex.: The following doesn't use one
```java
WorkerClass worker = new WorkerClass();
Thread main = new Thread(worker);
main.start();
/*If the code in WorkerClass is short and simple, and the class only needs to be used once, it could be worthwhile to put it in an anonymous inner class.*/
```

```java
Thread main = new Thread(new Runnable() {
public void run() {
	// thread's work to perform goes here
}
}); /*The anonymous inner class has replaced the reference to worker with the code that ends here and starts with -new-*/
main.start();
```
This creates an anonymous class that implements the Runnable interface and overrides the `run()` method. The statements inside the method would perform whatever work the class requires.

Let's elaborate with an example:
```java
import javax.swing.*;
import java.awt.event.*;
import java.awt.*;

public class KeyViewer extends JFrame {
	JTextField keyText = new JTextField(80);
	JLabel keyLabel = new JLabel("Press any key in the text field.");

	public KeyViewer() {
		super("KeyViewer");
		setSize(350, 100);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		keyText.addKeyListener(new KeyAdapter() {
			public void keyTyped(KeyEvent input) {
				char key = input.getKeyChar();
				keyLabel.setText("You pressed " + key);
			}
		});
		BorderLayout bord = new BorderLayout();
		setLayout(bord);
		add(keyLabel, BorderLayout.NORTH);
		add(keyText, BorderLayout.CENTER);
		setVisible(true);
	}

	public static void main(String[] arguments) {
		new KeyViewer();
	}
}
```

A Java application can receive keyboard input with the `Swing` graphical user interface packages. The application monitors the keyboard with an object that implements the `KeyListener` interface. For this interface 3 methods must be implemented: `keyTyped()`, `keyPressed()`, and `keyReleased()`.
Ex.:
```java
public void keyTyped(KeyEvent input) {
	char key = input.getKeyChar();
	keyLabel.setText("You pressed " + key);
}
public void keyPressed(KeyEvent txt) {
	// do nothing
}
public void keyReleased(KeyEvent txt) {
	// do nothing
}
```

In the same class as these statements, the key listener is set to use the class to monitor keyboard events: `keyText.addKeyListener(this);`

With an anonymous inner class and the KeyAdapter class in the java.awt.event package, there’s a better way to create the listener and add it to the graphical user interface. The *KeyAdapter* class implements the KeyListener interface with do-nothing implementations of all three methods. It makes it easy to create a listener for keyboard events, because you can create a subclass that only overrides the method that actually does anything.

In the example above we created a *KeyViewer* class that implements the *KeyAdapter* interface in a anonymous inner class by calling the *KeyAdapter* constructor from the *KeyAdapter* interface. We could create an object of a *KeyViewerListener* helper class and set it as a listener: 
```java
KeyViewerListener kvl = new KeyViewerListener();  
keyText.addKeyListener(kvl);
```
However, this approach would require a whole separate helper class.

Instead, we created a briefer version by creating a listener class anonymously by calling the `new KeyAdapter()` followed by the definition of the class. The class overrides the `keyTyped()` method so that when a key is pressed, it is retrieved with a call to `getKeyChar()` and displayed by setting the value of *keyLabel*, which is a JLabel component.

Plus, the anonymous inner class does something that a normal helper class could not do: access the keyLabel instance variable. That variable belongs to the *KeyViewer* class. Inner classes can access the methods and variables of their enclosing class.

At the end, the application monitors keyboard input using the only method in the KeyListener interface the application requires and displays that input by updating the keyLabel instance variable.

Anonymous inner classes cannot define constructors, so they are more limited than a non-anonymous inner class.

<br>

## **-Closures / Lambda Expressions.-**

Closures allow an object with a single method to be created with only an -> operator.
Ex.: 
```java
Runnable runner = () -> { System.out.println("Run!"); };
```
This single line creates an object that implements the Runnable interface and makes its *run()* method equivalent to the following code:
```java
void run() {
System.out.println("Run!");
}
```
In a lambda expression, the statement to the right of the arrow operator -> becomes the method that implements the interface. This can be done only when the interface has a single method to implement, like Runnable. An interface in Java that has one method is now called a FUNCTIONAL INTERFACE.

The set of parentheses refers to the arguments sent to the method of the functional interface. Here is another one that needs an argument:
Ex.: 
```java
//Regular expression
public void actionPerformed(ActionEvent act) {
System.out.println(act.getSource());
}

//Lambda expression
ActionListener al = (ActionEvent act) -> {
System.out.println(act.getSource());
}
```
The `ActionListener` interface receives action events, such as when a user clicks a button. The only method in the functional interface is actionPerformed(ActionEvent). The argument is an ActionEvent object that describes the user action that triggered the event.

The object, act, is used inside the body of the method. The left-half reference to act appears to be outside the scope of the right-half implementation of the method. This is because closures allow code to refer to the variables of another method outside the scope of those variables.

In a lambda expression, it’s possible to infer the class of the argument or arguments sent to the method.
Ex.:
```java
ActionListener al = (act) -> {
System.out.println(act.getSource());
}  /*Because the ActionListener functional interface has a method that takes an ActionEvent object as its only argument, the name of that class can be omitted.*/
```
Anonymous inner classes have access to the methods and instance variables of their enclosing class. A separate helper class would not.

> PROGRAMS: ColorFrame.class / NewColorFrame.class



# **-HOUR 17 BUILDING A SIMPLE USER INTERFACE.-**

With Java, the development of a program’s user interface is based on Swing and an earlier set of classes called the Abstract Windowing Toolkit. These classes enable you to create a GUI and receive input from the user. With Java’s user interface classes, you can create a GUI that includes all the following and more:

- Buttons, check boxes, labels, and other simple components
- Text fields, sliders, and other more complex components
- Pull-down menus and pop-up menus
- Windows, frames, dialog boxes, panels, and applet windows

**NOTE:** To know more about Swing components refer to the web at *http://download.java.net/jdk9/docs/api*

## **-USING COMPONENTS.-**

When you are putting a GUI together, you work with two kinds of objects: components and containers. A component is an individual element in a user interface, such as a button or slider. A container is a component that you can use to hold other components.
In an application, the container is often a window or a frame.

### **Windows and Frames**

Windows are simple containers that do not have a title bar or any of the other buttons normally along the top edge of a GUI. Frames are windows that include all the common windowing features users expect to find when they run software—such as buttons to close, expand, and shrink the window.
You create these containers using *Swing’s `JWindow` and `JFrame`* classes.
Ex.:
```java
import javax.swing.*; 
//To refer to Swing classes without using the full package and class name
```

One way to make use of a frame in a Java application is to make the application a subclass of `JFrame`.
Ex.:
```java
import javax.swing.*;
public class MainFrame extends JFrame {
	public MainFrame() {
		// set up the frame
	}
}
```
This class creates a frame but doesn’t set it up completely. In the frame’s constructor, you must do several things when creating a frame:
- Call a constructor of the superclass, `JFrame`.
- Set up the title of the frame.
- Set up the size of the frame.
- Set the frame’s look and feel.
- Define what happens when the frame is closed by a user.

You also must make the frame visible, unless for some reason it should not be displayed when the application begins running.
Most of these things can be handled in the frame’s constructor. The first thing the method must contain is a call to one of the constructors of `JFrame`, using the super statement.
Ex.:
```java
super("Main Frame");
//Calling with a String argument sets that String as the frame's tittle.
//Another way.
super();
setTitle("Main Frame");
```

The size of the frame can be established by calling its setSize(int, int) method with two arguments: the *width* and *height*.
Ex.:
```java
setSize(350, 125);
//Sets a frame 350 pixels wide and 125 pixels tall.
```

Another way to set the size of a frame is to fill it with components and then call the frame’s `pack()` method.
Ex.:
```java
pack();
```
The `pack()` method sets the frame big enough to hold the preferred size of each component inside the frame (but no bigger). Every interface component has a preferred size, though this is sometimes disregarded, depending on how components have been arranged within an interface. You don’t need to explicitly set the size of a frame before calling pack()—the method sets it to an adequate size before the frame is displayed.

Every frame is displayed with a button along the title bar that can be used to close the frame. To define what happens when this button is clicked, call the frame’s `setDefaultCloseOperation(int)` method with one of four `JFrame` class variables as the argument:
- `EXIT_ON_CLOSE`: Exit the program when the button is clicked.
- `DISPOSE_ON_CLOSE`: Close the frame and keep running the application.
- `DO_NOTHING_ON_CLOSE`: Keep the frame open and continue running.
- `HIDE_ON_CLOSE—Close`: the frame and continue running.

A graphical user interface created with Swing can customize its appearance with a look and feel, a visual theme that controls how buttons and other components appear and how they behave. Java includes an enhanced look and feel called Nimbus, but it must be turned on to be used in a class. Setting a look and feel is done by calling the `setLookAndFeel()` method of the *UIManager* class in the main Swing package.
The method takes one argument: the full name of the look and feel’s class.
Ex.:
```java
The following statement sets Nimbus as the look and feel:
UIManager.setLookAndFeel(
"javax.swing.plaf.nimbus.NimbusLookAndFeel"
);
//Sets Nimbus as the look and feel
```

One last thing is required is to make the frame visible. Call its `setVisible()` method with true as an argument:
Ex: 
```java
setVisible(true);
```
This opens the frame at the defined width and height. You also can call it with false to stop displaying a frame.

To add components to a frame, you must create the component and add it to the container. Each container has an `add()` method that takes one argument: the component to display.

### `Buttons`

A JButton object is a clickable button with a label that describes what clicking the button does. This label can be text, graphics, or both.
Ex.: 
```java
JButton okButton = new JButton("OK");
//creates a JButtoncalled okButton and labels it OK.
```

Next add the component to a container by calling its add() method
Ex.:
```java
add(okButton);
```
When you add components to a container, you do not specify the place in the container where the component should be displayed. The arrangement of components is decided by an object called a layout manager. The simplest of these managers is the FlowLayout class, which is part of the java.awt package.

To make a container use a specific layout manager, you must first create an object of that layout manager’s class. You can create a FlowLayout object by calling its constructor with no arguments.
Ex.:
```java
FlowLayout flo = new FlowLayout();
```
Then call the container's setLayout method to associate the specified manager with that container
Ex.:
```java
setLayout(flo);
```
<br>

### **Labels and Text Fields**

A JLabel component displays information that the user cannot modify. This information can be text, a graphic, or both. A JTextField component is an area where a user can enter a single line of text. You can set up the width of the box when you create the text field.
Ex.:
```java
JLabel pageLabel = new JLabel("Web page address: ", JLabel.RIGHT);
/*Creates a label with the text "Web page address: ". The second
* argument indicates the label should appear flush (assigned) right.*/ 
JTextField pageAddress = new JTextField(20);
/*Indicates the text field should be approximately 20 characters wide*/
FlowLayout flo = new FlowLayout();
setLayout(flo);
add(pageLabel);
add(pageAddress);
```

You also can specify default text that appears in the text field with a statement.
Ex.:
```java
JTextField country = new JTextField("Togolese Republic", 29);
```

You can retrieve the text contained within the object with the `getText()` method, which returns a string.
Ex.:
```java
String countryChoice = country.getText();
```

You also can set the text with a corresponding method:
Ex.:
```java
country.setText("Separate Customs Territory of Taiwan, Penghu, Kinmen, and Matsu");
```
<br>

### **Check Boxes**

A *JCheckBox* component is a box next to a line of text that can be checked or unchecked by the user.
Ex.:
```java
JCheckBox jumboSize = new JCheckBox("Jumbo Size");
/*The String passed to the constructor the text to be displayed
* alongside the box*/
FlowLayout flo = new FlowLayout();
setLayout(flo);
add(jumboSize);
```

If you want the box to be checked.
Ex.:
```java
JCheckBox jumboSize = new JCheckBox("Jumbo Size", true);
```

You can present a JCheckBox as part of a group. In a group of check boxes, only one can be checked at a time. To make a JCheckBox object part of a group, you have to create a ButtonGroup object.
Ex.:
```java
JCheckBox frogLegs = new JCheckBox("Frog Leg Grande", true);
JCheckBox fishTacos = new JCheckBox("Fish Taco Platter", false);
JCheckBox emuNuggets = new JCheckBox("Emu Nuggets", false);
FlowLayout flo = new FlowLayout();
ButtonGroup meals = new ButtonGroup();
meals.add(frogLegs);
meals.add(fishTacos);
meals.add(emuNuggets);
setLayout(flo);
add(jumboSize);
add(frogLegs);
add(fishTacos);
add(emuNuggets);
```
This creates three check boxes that are all grouped under the ButtonGroup object called meals. The Frog Leg Grande box is checked initially, but if the user checked one of the other meal boxes, the check next to Frog Leg Grande would disappear automatically.

### **Combo Boxes**

A JComboBox component is a pop-up list of choices that also can be set up to receive text input. To create a JComboBox object, you have to add each of the choices after creating the object
Ex.:
```java
JComboBox profession = new JComboBox();
FlowLayout flo = new FlowLayout();
profession.addItem("Butcher");
profession.addItem("Baker");
profession.addItem("Candlestick maker");
profession.addItem("Fletcher");
profession.addItem("Fighter");
profession.addItem("Technical writer");
setLayout(flo);
add(profession);
```

This example creates a single JComboBox component that provides six choices from which the user can make a selection. When one is selected, it appears in the display of the component. <br>
To enable a JComboBox component to receive text input
Ex.:
```java
profession.setEditable(true);
//This method must be called before the component is added to a container.
```
<br>

### **Text Area**

A JTextArea component is a text field that enables the user to enter more than one line of text. You can specify the width and height of the component.
E.:
```java
JTextArea comments = new JTextArea(8, 40);
FlowLayout flo = new FlowLayout();
setLayout(flo);
add(comments);
```

You can specify a string in the `JTextArea()` constructor to be displayed in the text area
Ex.:
```java
JTextArea comments = new JTextArea("I should have been a pair\n"
+ "of ragged claws.", 10, 25);
```

Call the `setLineWrap(boolean)` method with an argument of true to cause text to wrap to the next line when the user enters text passed the right boundary of the component.
Ex.:
```java
comments.setLineWrap(true);
comments.setWrapStyleWord(true); //True wraps base on where the word ends, false based on character.
```

In Swing, you support scrolling by adding a component to a scroll pane, a container that is represented by the JScrollPane class. You can create a scroll pane with the following constructors:
- `JScrollPane()` — Create a scroll pane with horizontal and vertical scrollbars that appear as needed.
- `JScrollPane(int, int)` — Create a scroll pane with the specified vertical scrollbar and horizontal scrollbars.
- `JScrollPane(Component)` — Create a scroll pane that contains the specified user interface component.
- `JScrollPane(Component, int, int)` — Create a scroll pane with the specified component, vertical scrollbar, and horizontal scrollbar.

The integer arguments to these constructors determine how scrollbars are used in the pane. Use the following class variables as these arguments:
- `JScrollPane.VERTICAL_SCROLLBAR_AS_NEEDED` or `JScrollPane.HORIZONTAL_SCROLLBAR_AS_NEEDED`
- `JScrollPane.VERTICAL_SCROLLBAR_NEVER` or `JScrollPane.HORIZONTAL_SCROLLBAR_NEVER`
- `JScrollPane.VERTICAL_SCROLLBAR_ALWAYS` or `JScrollPane.HORIZONTAL_SCROLLBAR_ALWAYS`

Example:
```java
FlowLayout flo = new FlowLayout();
setLayout(flo);
JTextArea comments = new JTextArea(8, 40);
comments.setLineWrap(true);
comments.setWrapStyleWord(true);
JScrollPane scroll = new JScrollPane(comments,
JScrollPane.VERTICAL_SCROLLBAR_ALWAYS,
JScrollPane.HORIZONTAL_SCROLLBAR_NEVER);
add(scroll);
```
<br>

### **Panels**

The purpose of `JPanel` objects is to subdivide a display area into different groups of components. When the display is divided into sections, you can use different layout managers in each section.
Ex.:
```java
JPanel topRow = new JPanel();
FlowLayout flo = new FlowLayout();
topRow.setLayout(flo);
add(topRow);
```
You add components to a panel by calling its `add()` method. You can assign a layout manager directly to the panel by calling its `setLayout()` method. You also can use panels when you need an area in an interface to draw something, such as an image from a graphics file. Another convenient use of JPanel is to create your own components that can be added to other classes.

Including the final keyword in a method declaration prevents the method from being overridden in a subclass. This is required for *FreeSpacePanel* to be a GUI component.

> **SEE** FreeSpacePanel.java and FreeSpaceFrame.java FILES

In a simple container such as a panel, components are arranged using `FlowLayout` by default. Each component is added in the same manner that words are displayed on a page in English, from left to right, then down to the next line when there’s no more room. Frames, windows, and applets use the BorderLayout default layout style.

> **PROGRAMS:** SalutonFrame.java / Playback.java / Components.java

<br>

# **-HOUR 18 LAYING OUT A USER INTERFACE.-**

## **-Using Layout Managers.-**

In Java, the layout of buttons, text fields, and other components can be affected by the following things:
- The size of the container
- The size of other components and containers
- The layout manager

> **SEE** Crisis.java

The FlowLayout class uses the dimensions of its container as the only guide for how to lay out components. Resize the window of the application to see how components are instantly rearranged in response.

### **The GridLayout Manager**

The GridLayout class in the java.awt package organizes all components in a container into a specific number of rows and columns. All components are allocated the same-sized space in the display area, so if you specify a grid that is three columns wide and three rows tall, the container is divided into nine areas of equal size. <br>
GridLayout places all components as they are added into a place on a grid. Components are added from left to right until a row is full, and then the leftmost column of the next grid is filled. <br>
The following statements create a container and set it to use a grid layout that is two rows wide and three columns tall:
Ex.:
```java
GridLayout grid = new GridLayout(2, 3);
setLayout(grid);
```
<br>

### **The BorderLayout Manager**

In `java.awt`, the BorderLayout manager arranges components into five areas: four denoted by compass directions and one for the center area. It's `add()` method includes a second argument to specify where the component should be placed. This argument should be one of five class variables of the BorderLayout class: `NORTH`, `SOUTH`, `EAST`, `WEST`, and `CENTER`. <br>
Like the `GridLayout` class, BorderLayout devotes all available space to the components. The component placed in the center is given all the space that isn’t needed for the four border components.
Ex.:
```java
BorderLayout crisisLayout = new BorderLayout();
setLayout(crisisLayout);
add(panicButton, BorderLayout.NORTH);
add(dontPanicButton, BorderLayout.SOUTH);
add(blameButton, BorderLayout.EAST);
add(mediaButton, BorderLayout.WEST);
add(saveButton, BorderLayout.CENTER);
```
<br>

### **The BoxLayout Manager**

*BoxLayout* in the `javax.swing` package, makes it possible to stack components in a single row horizontally or vertically. For that you  create a panel to hold components, and then create a layout manager with two arguments:
- The component to organize in box layout
- The value `BoxLayout.Y_AXIS` for vertical alignment and `BoxLayout.X_AXIS` for horizontal alignment
Ex.:
```java
JPanel pane = new JPanel();
BoxLayout box = new BoxLayout(pane, BoxLayout.Y_AXIS);
pane.setLayout(box);
pane.add(panicButton);
pane.add(dontPanicButton);
pane.add(blameButton);
pane.add(mediaButton);
pane.add(saveButton);
add(pane);
```
<br>

### **Separating Components with Insets**

Insets are objects that represent the border area of a container and you can use to move components away from the edges of the container.
The Insets class, which is part of the java.awt package, has a constructor that takes fou arguments: the space to leave at the top, left, bottom, and right of the container. Each argument is specified using pixels.
To make use of an Insets object in a container, you must override the container’s getInsets() method.
Ex.:
public Insets getInsets() {
Insets squeeze = new Insets(50, 15, 10, 15);
return squeeze;
}

NOTE
A JFrame container has a built-in inset to make room for the frame’s title bar.

>Laying Out an Application<

When one single of the available layout managers is not suitable for the entire GUI you are building, one way around it is to use a group of JPanel objects as containers to hold different sections of a GUI. You can set up different layout rules for each of these sections by using the setLayout() methods of each JPanel. After these panels contain all the components they need to contain, you can add the panels directly to the frame.

SEE LottoMadness.java

In the LottoMadness application the setLookAndFeel() method is created as a class method —note the static keyword— and called in the main() method.
Previous applications made setLookAndFeel() an object method and called it within the object’s constructor. The reason this doesn’t happen in LottoMadness is because the look and feel must be selected before any instance variables have been created and given values.

PROGRAMS: NewMadness.java / LottoMadness.java / Crisis.java / Crisis2.java


	-HOUR 19 RESPONDING TO USER INPUT.-

-Getting Your Programs to Listen.-

A user event in Java is something that happens when a user performs an action with the mouse, keyboard, or another input device.
Before receiving events you must make and objet listen. Responding to user events requires the use of one or more EventListener interfaces. Interfaces are a feature of object-oriented programming in Java that enable a class to inherit behavior it would not be able to employ otherwise. They’re like a contract agreement with other classes that guarantees the class will contain specific methods.
An EventListener interface contains methods that receive user input of a specific type. You need two things to add one:
►Add > java.awt.event.*;
►Implement one or more listening interfaces.
Ex.:
import java.awt.event.*;
public class Graph implements ActionListener {
}
//ActionListener responds to button and menu clicks.

EventListener interfaces enable a component of a GUI to generate user events. Without one of the listeners in place, a component cannot do anything that can be heard by other parts of a program. A program must include a listener interface for each type of component to which it listens: for a click or Enter key pressed ActionListener, for a choice list or check boxes ItemListener, etc.
When you require more than one interface in the same class, separate their names with commas after the implements keyword.
Ex.:
public class Graph3D implements ActionListener, MouseListener {
// ...
}

-Setting Up Components to Be Heard.-

Next make the needed components generate user events. To make a JButton object generate and event:
Ex.:
JButton fireTorpedos = new JButton("Fire torpedos");
fireTorpedos.addActionListener(this);
/*The button calls its addActionListener() method. The keyword 'this' passed to the method indicates the current object receives the user event and handles it as needed*/

-Handling User Events.-

Each listener has a method that is called automatically when a user generates an event through the component attached to the corresponding listener.
For action listener:
Ex.:
public void actionPerformed(ActionEvent event) {
// method goes here
}

If you have only one component performing the action just add statments to the method above to handle it. If there is more than component each class object that is passed to the event handler method (in the case of actionPerformed the class object is ActionEvent) has methods that can be use to determine which component the action comes from.
Ex.:
String cmd = event.getActionCommand();
/*getActionCommand() returns a String: if the component is a button, its label; if it’s a text field the text entered in the field.*/
//
//getSource() method sends back the object that caused the event.
public void actionPerformed(ActionEvent event) {
Object source = event.getSource();
if (source == speed) {
	// speed field caused event
} else if (source == viscosity) {
	// viscosity field caused event
} else {
	// start button caused event
}
}
/*This actionPerformed receives events from a JButton object called start, a JTextField called speed, and another JTextField called viscosity*/

>Check Box and Combo Box Events<

These require the ItemListener interface. The method addItemListener() makes them generate events.
Ex.:
JCheckBox superSize = new JCheckBox("Super Size", true);
superSize.addItemListener(this);

►itemStateChanged() method receives the event. With
►ItemEvent object as argument
►getItem() method sees what object caused the event.

To determine whether a check box is selected or deselected, compare the value returned by the getStateChange() method to the constants ItemEvent.SELECTED and ItemEvent.DESELECTED. The following code is an example for an ItemEvent object called item:
Ex.:
public void itemStateChanged(ItemEvent item) {
int status = item.getStateChange();
if (status == ItemEvent.SELECTED) {
	// item was selected
}
}
//
//To determine the value selected in a JComboBox object
Object which = item.getItem();
String answer = which.toString();

>Keyboard Events<

When a program must react immediately once a key is pressed, it uses keyboard events and the KeyListener interface.
First register the component that receives key presses by calling its addKeyListener() method. The argument of the method should be the object that implements the KeyListener interface. If it is the current class, use this as the argument.
An object that handles keyboard events must implement three methods:
►keyPressed(KeyEvent)—A method called the moment a key is pressed
►keyReleased(KeyEvent)—A method called the moment a key is released
►keyTyped(KeyEvent)—A method called after a key has been pressed and released

These methods all return void instead of a value. Each of these has a KeyEvent object with the following methods:
►getKeyChar() returns a char representing the key that was pressed (letters, numbers, puntuation)
►getKeyCode() returns an integer value representing the key. Includes any key in the keyboard (enter, home, page up, etc).
►getKeyText() accepts the prevous integer to return the name (String) of the key (Home, F1, etc.) 

SEE KeyViewer2.java

>Enabling and Disabling Components<

We use de setEnabled(boolean):
Ex.:
JButton previousButton = new JButton("Previous");
JButton nextButton = new JButton("Next");
JButton finishButton = new JButton("Finish");
previousButton.setEnabled(false);

-Completing a Graphical Application.-

SEE LottoEvent.java / LottoMadness.java

It often is convenient to divide Swing projects with the GUI in one class and the event-handling methods in another.
The LottoMadness project lacks variables used to keep track of things such as the number of drawings, winning counts, and lotto number text fields. Instead, the interface stores values and displays them automatically.

After the setText() method of a text component is used to change its value, you don’t need to do anything else. Swing handles the updating necessary to show the new value. You dont need to use paint() or repaint().

WHY java.awt.* AND  java.awt.event.*? Shoudn't the former include the latter? 
Though the names make them look like they are related, there’s no such thing as inheritance for packages in Java. One package cannot be a
subpackage of another. When you use an asterisk in an import statement, you are making all the classes in a package available in a program. The asterisk works only on classes, not packages. The most a single import statement can load is the classes of a single package.


Add a text field to the LottoMadness application that works in conjunction with the Thread.sleep() statement in the LottoEvent class to slow down the rate that drawings are conducted.

u Modify the LottoMadness project so it draws five numbers from 1 to 90.


	-HOUR 20. Reading and Writing Files.-

-STEAMS.-
A stream is an object that takes information from one source and sends it somewhere else. To save data permanently within a Java program, or to retrieve that data later, you must use at least one stream. After you learn how to work with one kind of data using streams, you can work with others in the same manner.
There are two kinds of streams:
►Input streams, which read data from a source
►Output streams, which write data to a source

All input and output streams are made up of bytes, individual integers with values ranging from 0 to 255. Bytes may represent executable programs, wordprocessing documents, and MP3 music files, etc.

NOTE
Java class files are stored as bytes in a form called bytecode. The Java Virtual Machine runs bytecode, which doesn’t actually have to be produced by the Java language. It can run compiled bytecode produced by other languages, including Scala, Groovy, and Jython. You also hear the JVM referred to as the bytecode interpreter.

A more specialized way to work with data is in the form of characters. You can use a character stream when you are reading and writing a text source.
Whether you work with a stream of bytes, characters, or other kinds of information, the overall process is the same:
►Create a stream object associated with the data.
►Call methods of the stream to either put information in the stream or take information out of it.
►Close the stream by calling the object’s close() method.

>Files<

Represented by the File class, which also is part of the java.io package. Files can be read from hard drives, DVDs, and other storage devices.
A File object can represent files that already exist or files you want to create. To create a File object, use the name of the file as the constructor:
Ex.:
File book = new File("address.dat");
//
//You also can include a path in the filename:
File book = new File("data\\address.dat");

The previous sample only works on Windows because it uses back slash as seperator. Unix based system like Linux uses forward slash. With this class variable the program will work regardless:
Ex.:
File book = new File("data" + File.pathSeparator + "address.dat");

Creating a File object doesn’t create a file on your computer. It’s just a reference to a file that may or may not yet exist. You can call several useful methods on that object:
►exists()—true if the file exists, false otherwise
►getName()—The name of the file, as a String
►length()—The size of the file, as a long value
►createNewFile()—Creates a file of the same name, if one does not exist already
►delete()—Deletes the file, if it exists
►renameTo(File)—Renames the file, using the name of the File object specified as an argument

You also can use a File object to represent a folder. Specify the folder name in the File constructor, which can be absolute (such as C:\\Documents\\) or relative (such as java\\database). You can then call its listFiles() method to see what’s inside the folder. This method returns an array of File objects representing every file and subfolder it contains.

>Reading Data from a Stream<

To read data from a file using an input stream. You can do this using the FileInputStream class, which represents input streams that are read as bytes from a file. You can create a file input stream by specifying a filename or a File object as the argument to the FileInputStream() constructor.
Reading and writing a file can throw a IOException so a try-catch block is often used. This exception belongs to the java.io package.
Streams must be closed when they’re no longer being used. Leaving a stream open is a significant drain on resources in the JVM as a program runs.
A special try statement called try-with-resources makes it easy to ensure that a resource, such as a file input stream, will be closed when it’s no longer needed. The try statement is followed by parentheses. Inside the parentheses are one or more Java statements that declare variables that read or write data through a resource.
Ex.:
File cookie = new File("cookie.web");
try (FileInputStream stream = new FileInputStream(cookie)) {
System.out.println("Length of file: " + cookie.length());
} catch (IOException ioe) {
System.out.println("Could not read file.");
}
//the stream is closed automatically when the try-catch block completes (if it hasn’t been closed).

File input streams read data in bytes. You can read a single byte by calling the stream’s read() method without an argument. When the end of the file is reached a byte value of −1 is returned.

When you read an input stream, it begins with the first byte in the stream. You can skip some bytes in a stream by calling its skip() method with one argument: an int representing the number of bytes to skip.
Ex.: 
scanData.skip(1024);
//skips the next 1,024 bytes in a stream named scanData

If you want to read more than one byte at a time, do the following:
►Create a byte array that is exactly the size of the number of bytes you want to read.
►Call the stream’s read() method with that array as an argument. The array is filled with bytes read from the stream.

SEE ID3Reader.java
ID3 is a metadata often added to the last 128 bytes of an MP3 file to hold information about the song, such as the title, artist, and album. To confirm if the MP3 has it or not we check if the first 3 bytes of the last 128 are equal to 84, 65, and 71 (T, A, G in ASCII). The ID3 format always puts the artist, song, title, and year information in the same positions in the last 128 bytes.
MP3 files either don’t contain ID3 information at all or contain ID3 information in a different format that the application can’t read.
Programs that create MP3 files from audio CDs read song information from a music industry database called CDDB.

>Buffered Input Streams<

Buffer the input read by a program to improve its performance. Buffering is the process of saving data in memory for use later when a program needs it. When a Java program needs data from a buffered input stream, it looks in the buffer first, which is faster than reading from a source such as a file.
To use a buffered input stream, you create an input stream such as a FileInputStreamobject. Call the BufferedInputStream (InputStream) constructor with the input stream as the only argument. Data is buffered as it is read from the input stream.
To read from a buffered stream, call its read() method with no arguments. An integer from 0 to 255 is returned and represents the next byte of data in the stream. If no more bytes are available, −1 is returned instead.

The System class has a class variable called in that represents an InputStream object. This object receives input from the keyboard and makes it available as a stream.
Ex.:
BufferedInputStream bin = new BufferedInputStream(System.in);
//creates a buffered input stream associated with the System.in input stream

SEE Console.java

-Writing Data to a Stream.-

In the java.io package, the classes for working with streams come in matched sets. There are FileInputStream and FileOutputStream classes for working with byte streams, FileReader and FileWriter classes for working with character streams, etc.
To begin writing data, you first create a File object that is associated with an output stream. This file doesn’t have to exist on your system. You can create a FileOutputStream in two ways:
►Call the FileOutputStream() constructor with two arguments: a File object representing the file and the boolean of true. The bytes you write to the stream are tacked onto the end of the file.
►call the FileOutputStream() constructor with a File object as its only object, if you want to write bytes into a new file.

After you have an output stream, you can call different write() methods to write bytes to it:
►Call write() with a byte as its only argument to write that byte to the stream.
►Call write() with a byte array as its only argument to write all the array’s bytes to the stream.
►Specify three arguments to the write(byte[], int, int) method: a byte array, an integer representing the first element of the array to write to the stream, and the number of bytes to write.
Ex.:
File dat = new File("data.dat");
FileOutputStream datStream = new FileOutputStream(dat);
byte[] data = new byte[] { 5, 12, 4, 13, 3, 15, 2, 17, 1, 18 };
datStream.write(data, 6, 4);
//creates a byte array with 10 bytes and writes the last 4 to an output stream

You can convert text to an array of bytes by calling the String object’s getBytes() method
Ex.:
String name = "Puddin N. Tane";
byte[] nameBytes = name.getBytes();

After you have finished writing bytes to a stream, you close it by calling the stream’s close() method.

SEE ConfigWriter.java

NOTE: When running a program in Eclipse that creates a file, the file is placed in the project's main folder. It will show at the bottom of the Package Explorer or Navigator windows.

-Reading and Writing Configuration Properties.-

Java programs are more versatile when they can be configured using command-line arguments, as you have demonstrated in several applications created in earlier hours. The java.util package includes a class, Properties, that enables configuration settings to be loaded from another source: a text file.
The file can be read like other file sources in Java:
►Create a File object that represents the file.
►Create a FileInputStream object from that File object.
►Call load() to retrieve the properties from that input stream.

A properties file has a set of property names followed by an equal sign = and their values.
Ex.:
username=lepton
lastCommand=open database
windowSize=32

Each property has its own line, so this sets up properties named username, lastCommand, and windowSize with the values “lepton”, “open database”, and “32”, respectively.

The following code loads a properties file called config.dat.
Ex.:
File configFile = new File("config.dat");
FileInputStream inStream = new FileInputStream(configFile);
Properties config = new Properties();
config.load(inStream);

Configuration settings, which are called properties, are stored as strings in the Properties object. Each property is identified by a key. The getProperty() method retrieves a property using its key.
Ex.:
String username = config.getProperty("username");
Ex.:
String windowProp = config.getProperty("windowSize");
int windowSize = 24;
try {
windowSize = Integer.parseInt(windowProp);
} catch (NumberFormatException exception) {
// do nothing
}
/*Properties are stored as string. They must be converted if we are to use a numberical value in them*/

serProperty() method stores properties with two arguments the key and value:
Ex.:
config.setProperty("username", "max");

To list all properties we use the list(PrintStream) method of the Properties object.
Ex.:
config.list(System.out);
//notice that PrintStream is the out instance variable of the System class.

After you have made changes to the properties, you can store them back to the file:
►Create a File object that represents the file.
►Create a FileOutputStream object from that File object.
►Call store(OutputStream, String) to save the properties to the designated output stream with a description of the properties file as the string.

SEE Configurator.java

Why do some of the byte stream methods in this hour use integers as arguments? Should they be using byte arguments?
There’s a difference between the bytes in a stream and the bytes represented by the byte class. A byte in Java has a value ranging from −128 to 127, while a byte in a stream has a value from 0 to 255. You often have to use int when working with bytes for this reason it can hold the values 128 to 255, whereas byte cannot.

SEE SongRenamer.java
IMPORTANT: the FileInputStream object needs to be closed befere the target File object can be renamed.

SEE Renamer.java



-HOUR 21. Using Java 9’s New HTTP Client.-

-Java Modules.-

When Java programs are shipped, they are packaged into Java Archive (JAR) files with the class libraries used by the program. That JAR file and the other JAR files required by the project are all put on the Classpath accessed by the Java Virtual Machine (JVM) as it runs the program. Over time, the inefficiencies in this process have become apparent. There could be hundreds or even thousands of Java classes in the JAR, organized only by package. The same class could be in two different places on the Classpath, leading to confusion about which one is used during the program’s execution.
Startin on Java 9 the use modules was added as a way to control how programs are deployed. The new HTTP Client Library included in the JDK versions must be included in a module for it to be available in the programs that you write. The library is a package called:
►jdk.incubator.httpclient	Java 9(JDK 9)
►java.net.http			Java 11(JDK 11.0)

To add a module in Eclipse to Java24:
►Right-click the package in the Package Explorer panel.
►Go to Configure and click Create module-info.java

The file module-info.java opens for editing in the source code editor. It only needs these three lines.
Ex.:
module Java24 {
requires jdk.incubator.httpclient;
//In Java 9
requires java.net.http;
//In java 11
}

Now the classes in java.net.http can be used in any Java program in this project.

-Making an HTTP Request.-

A web server communicates with browsers and other types of web client software through a message called an HTTP request. The request can be used to move information in both directions. Data can be received and sent between the server and client.
Making a web request with HTTP Client Library requires:
1. Create a browser object of the HttpClient class.
2. Create a request builder (the HttpRequest.Builder inner class).
3. Build the request as an HttpRequest object.
4. Use the browser to send the request to a web server.
5. Receive an HttpResponse object back.

The browser is created using a factory method of the HttpClient class:
Ex.:
HttpClient browser = HttpClient.newHttpClient();

For the request you need a builder and for a builder a web address (URI or URL).
Ex.:
URI link = new URI("https://www.oracle.com/");
/* URI class in the java.net package. URISyntaxException (from java.net) may be thrown if the address is not properly formatter*/

HttpRequest.Builder bob = HttpRequest.newBuilder(uri);
/* Creates the builder with the URI object and the factory method HttpRequest.newBuilder(URI)*/

HttpRequest request = bob.build();
/* The builder's build() method creates the request, which is an object of the HttpRequest class*/ 

Having a browser and a request, send it to the web server and get a response. The response is an HttpResponse object that uses generics because it can receive information in multiple formats.
The browser’s send() request takes two arguments:
►An HttpRequest object.
►A handler that sets the format of the response.

The handler is created by calling a class method of the HttpResponse.BodyHandler inner class:
Ex.:
HttpResponse<String> response = browser.send(request,
HttpResponse.BodyHandler.asString());
//HttpResponse<String> The generic reference that defines the response as a string.
/* asString() makes the call to the browser’s send() method return a string. The handler also has: asFile(Path) method to return the response in a file and asByteArray() method to return it as byte[].*/

Every HTTP request has headers that provide more information about the response and the server that sent it. One of these headers, Server, contains the name and version number of the software that runs the server. Some servers omit the version number for security reasons.
Ex.:
HttpHeaders headers = response.headers();
//The response's headers() returns the headers as an HttpHeaders object
Optional<String> server = headers.firstValue("Server");
//firstValue(String) the String part of this method is the header name to return. The first one matching that String.

The object returned by the call to firstValue() is a data structure from the java.util package that makes it easier to deal with something that has a null value when it isn’t present. Using an object with no value causes a NullPointerException, one of the most common exceptions in Java.
Optional class guards against this with an isPresent() method that returns true when there’s a valid value and false otherwise.
The value of server is a string, as indicated by the generic in the Optional<String> portion of the statement.
Ex.:
if (server.isPresent()) {
System.out.println("Server: " + server.get());
}
/* Calling isPresent() checks whether this structure holds null instead of a valid object. Now the string can be displayed while avoiding problems with null */

Like the input and output classes , the methods of these HTTP classes must deal with errors in the transmission of data. They throw the exceptions IOException and InterruptedException from the java.io package.

SEE ServerCheck.java

-Saving a File from the Web.-

The data that can be retrieved over HTTP isn’t limited to text files such as a web page. Any kind of data can be accessed as bytes, including images, videos, and executable files.
If we wanted to download an image from the web we follow the same steps we did for he ServerCheck.java program up until the point that the request is sent. A browser is created, a request builder is created using a URI, and the request is built.
Before the request is sent to the web server, a file must be created to hold the contents of the image when it is received:
Ex.:
Path temp = Files.createTempFile("lighthouse", ".jpg");
/* The Files class in the java.nio package creates a temporary file by calling its class method createTempFile(String -filename-, String -file extension-). The filename is generated with the identifier followed by a number and the file extension, such as lighthouse3994062538481620758.jpg.
*/

Once you have a file, the browser’s send() method can use a response handler to specify this file as the second argument. The response from the server will be stored in that file. Here’s a statement to do that:
Ex.:
HttpResponse<Path> response = browser.send(request,
HttpResponse.BodyHandler.asFile(temp));
/* request is the HttpRequest object created using a builder and the image file’s web address (URI). asFile(Path) method makes the specified file the destination for the image data*/

This temporary file can be saved to a permanent file by renaming it.
Ex.:
File perm = new File("lighthouse.jpg");
temp.toFile().renameTo(perm);

SEE ImageDownloader.java

-Posting Data on the Web.-

We can use Java to send a message to a webserver using a POST request.
A POST request can encode large amounts of data to be received by the server, such as a weblog post or even an image or video file. A GET request also can carry information to the server, but it is limited by what can be included in a URI. Calling isPresent() checks whether this structure holds null instead of a valid
object.

SEE SalutonVerkisto.java

The application creates a URI for a script on my server that receives comments:
Ex.:
String site = "http://workbench.cadenhead.org/post-a-comment.php";
URI uri = new URI(site);

The information will be sent to the web server using an HTTP request, just like the preceding projects. Before the comment can be sent, it must be encoded using a method of the HttpRequest.BodyProcessor inner class for Java 9 or  HttpRequest.BodyPublisher inner class for Java 11.
The class has a ofString (fromString() in Java 9) method called with a set of name-value pairs separated by “&” characters in a long string:
Ex.:
//Java 11
HttpRequest.BodyPublisher proc = HttpRequest.BodyPublishers.ofString(
"name=" + URLEncoder.encode(yourName, "UTF-8") +
"&comment=" + URLEncoder.encode(yourMessage, "UTF-8") +
"&mode=" + URLEncoder.encode("demo", "UTF-8")
);
//
//Java 9
HttpRequest.BodyProcessor proc = HttpRequest.BodyProcessor.fromString (
"name=" + URLEncoder.encode(yourName, "UTF-8") +
"&comment=" + URLEncoder.encode(yourMessage, "UTF-8") +
"&mode=" + URLEncoder.encode("demo", "UTF-8")
);

The encode(String, String) method of HttpRequest.BodyProcessor takes two arguments: the message and the character encoding to use. The proper encoding depends on what the web server can accept. The script on my server can accept UTF-8.
This method call specifies three name-value pairs: name, comment, and mode. The first two take their values from yourName and yourMessage. The third, mode, has the value “demo” and lets the server script know the purpose of the message.
The processed message proc can be used to create a request builder.
Ex.:
HttpRequest.Builder newBuilder = HttpRequest.newBuilder(uri)
.header("Content-Type", "application/x-www-form-urlencoded")
.header("Accept", "text/plain")
.POST(proc);

This method call stacks four calls together. This works because each one is a call to HttpRequest. Builder that returns the builder object:
1. newBuilder(URI) creates a builder for that web address.
2. header(String, String) sets a request header called Content-Type to the value “application/x-www-form-urlencoded”. This tells the server that a web form is being sent.
3. Another header() call sets Accept to “text/plain”, the MIME type of the request.
4. post(HttpRequest.BodyProcessor) formats the encoded message as an HTTP POST request.

The builderis ready, the request is built:
E.:
HttpRequest request = newBuilder.build();

The request is sent with a browser send(HttpRequest, HttpResponse.BodyHandler) call with the request and a handler that gets the response back as a string.
Ex.:
HttpResponse<String> response = client.send(request,
HttpResponse.BodyHandler.asString());
System.out.println(response.body());
/*The same technique was used in the ServerCheck application, but this time the response is displayed.
*/

The use of HTTP for software and web services was probably inevitable. The protocol is implemented everywhere and firewalls have to let the traffic through on port 80 or web browsers wouldn’t work.

NOTE: In Java when a project is in incubation means that it is still in an early stage of its developement. And, it is likely to change in the next version of Java.



	-HOUR 22. Creating Java2D Graphics.-

With Java you can turn containers into a canvas where you can draw fonts, colors, shapes and graphics.

-Using the Font Class.-

Colors and fonts are represented in Java by the Color and Font classes in the java.awt package. With these classes, you can present text in different fonts and sizes and change the color of text and graphics. Font(String, int, int)

1.The typeface of the font as either a generic name (“Dialog,” “DialogInput,” “Monospaced,” “SanSerif,” or “Serif”) or an actual font name (“Arial Black,” “Helvetica,” or “Courier New”)
2.The style as one of three class variables: Font.BOLD, Font.ITALIC, or Font.PLAIN
3.The size of the font in points
Ex:
Font current = new Font("Serif", Font.ITALIC, 12);
//Creates a 12-point italic Serif font

If you use a specific font rather than one of the generic ones it already must be installed on the computer of the user running your program.
You can combine the font styles by adding them:
Ex.:
Font headline = new Font("Courier New", Font.BOLD + Font.ITALIC, 72);

When you have a font, you call the Graphics2D component’s setFont(Font) method to designate it as the current font. All subsequent drawing operations use that font until another one is set.
Ex.:
public void paintComponent(Graphics comp) {
Graphics2D comp2D = (Graphics2D) comp;
Font font = new Font("Comic Sans", Font.BOLD, 15);
comp2D.setFont(font);
comp2D.drawString("Potrzebie!", 5, 50);
}

Java supports antialiasing (suavizado de bordes) to draw fonts and graphics more smoothly and less blocky in appearance. A Graphics2D object has a setRenderingHint(int, int) method that takes two arguments:
►The key of the rendering hint
►The value to associate with that key

These values are class variables in the RenderingHints class of java.awt. To activate antialiasing, call the method with two arguments:
Ex.:
comp2D.setRenderingHint(RenderingHints.KEY_ANTIALIASING,
RenderingHints.VALUE_ANTIALIAS_ON);

The comp2D object in this example is the Graphics2D object that represents a container’s drawing environment.

-Using the Color Class.-

The Color class includes the following constants as class variables: black, blue, cyan, darkGray, gray, green, lightGray, magenta, orange, pink, red, white, and yellow.
In a container, you can set the background color of the component using these constants by calling the setBackground(Color) method:
Ex.:
setBackground(Color.orange);

NOTE / IMPORTANT:
There are multiple panes on the JFrame: root pane, layered pane, content pane, glass pane. The one focused here is the content pane which displays pretty much everything (except the optional menu bar). As of Java 5, most things added directly to the Frame are added to the content pane. However, setting the background color is actually setting the background color of the not visible root pane. Thus you have to get access to the content pane to change the color because theoretically you could change the background color of the other panes.


The current color, like the current font, must be set before drawing takes place using the setColor(Color) method.
Ex.:
public void paintComponent(Graphics comp) {
Graphics2D comp2D = (Graphics2D) comp;
comp2D.setColor(Color.blue);
comp2D.drawString("Go, Owls!", 5, 50);
}
//Sets set the current color to blue and draw text in that color

Unlike the setBackground() method, which you can call directly on a container, you must call the setColor() method on a Graphics2D object.

-Creating Custom Colors.-

Specify the Red Green Blue (RGB) value of the color you want, each ranging from 0 (none of that color) to 255. The constructor Color(int, int, int) takes these arguments.
Ex.:
import java.awt.*;
import javax.swing.*;

public class Jacksonville extends JPanel {
Color gold = new Color(159, 121, 44);
Color teal = new Color(0, 101, 118);

public void paintComponent(Graphics comp) {
	Graphics2D comp2D = (Graphics2D) comp;
	comp2D.setColor(teal);
	comp2D.fillRect(0, 0, 200, 100);
	//draws a filled-in rectangle using the current color.

	comp2D.setColor(gold);
	comp2D.drawString("Go, Jaguars!", 5, 50);
}
}
//Displays gold text on a teal (verde azulado) background.

-Drawing Lines and Shapes.-

Drawing lines and shapes with Java is similar to displaying text. You need is a Graphics2D object to define the drawing surface and objects that represent things to draw.
Ex.:
comp2D.drawString("Draw, pardner!", 15, 40);
//draws the text “Draw, pardner!” at the coordinates (15, 40).

Drawing methods use the same (x, y) coordinate system as text. The (0, 0) coordinate is at the upper-left corner of the container, x values increase to the right, and y values increase as you go down.
Ex.:
int maxXValue = getSize().width;
int maxYValue = getSize().height;
//Determines the maximu value of (x,y) in any frame or container.

With the exception of lines, shapes you draw can be filled or unfilled.

>Drawing Lines<

The objects that define shapes belong to the java.awt.geom package of classes.
Ex.:
Line2D.Float line = new Line2D.Float(40F, 200F, 70F, 130F);
//Creates a line from the point (40, 200) to the point (70, 130). The arguments are followed by the letter F to indicate they are floating-point values. If this was omitted, Java would treat them as integers.

Line2D.Float has a period in the middle because Float is a static inner class of the Line2D class.

To draw shapes call a method of the Graphics2D: draw() for outlines -contorno- and fill() for filled shapes.
Ex.:
comp2D.draw(line);
//Draws the line object of the previous example.

>Drawing Rectangles<

Rectangles can be filled or unfilled and have rounded or square corners. They are created using the Rectangle2D.Float(int -x coordinate upper left-, int -y coordinate upper left-, int -width-, int -height-) constructor with these arguments.
Ex.:
Rectangle2D.Float box = new Rectangle2D.Float(245F, 65F, 20F, 10F);
comp2D.draw(box);
//Draws the rectangle as an outline
comp2D.fill(box);
////Draws the rectangle as an fill in

To create rectangles with rounded corners use the RoundRectangle2D.Float class with two additional arguments from the Rectangle2D.Float class: the number of pixels in the x and y direction away from the corner.
Ex.:
RoundRectangle2D.Float ro = new RoundRectangle2D.Float(
10F, 10F,
100F, 80F,
15F, 15F);

>Drawing Ellipses and Circles<

Use the Ellipse2D.Float, which takes four arguments: The x coordinate of the ellipse, The y coordinate of the ellipse, Its width and Its height. The (x, y) coordinates, width, and height describe an invisible rectangle inside which the ellipse fits. If it has the same width and height, the ellipse is a circle.
Ex.:
Ellipse2D.Float cir = new Ellipse2D.Float(245F, 45F, 5F, 5F);

>Drawing Arcs<

Arcs are created using the Arc2D.Float class. You draw the arc by specifying an ellipse, the portion of the ellipse that should be visible (in degrees), and the place the arc should begin on the ellipse. Its arguments are: The x coordinate of the invisible rectangle that the ellipse fits into, The y coordinate of the rectangle, The width of the rectangle, The height of the rectangle, The point on the ellipse where the arc should begin (in degrees from 0 to 359), The size of the arc (also in degrees) and The type of arc it is.
The arc’s starting point and size range from 0 to 359 degrees in a counterclockwise direction, beginning with 0 degrees at the 3 o’clock position.
The type of arc is specified using class variables: PIE for pie graph slices, CLOSED if the endpoints are connected with a straight line, and OPEN if the endpoints should not be connected.
Ex.:
Arc2D.Float smile = new Arc2D.Float(100F, 50F, 65F, 75F,
30F, 120F, Arc2D.Float.OPEN);
//Open arc at (100, 50) that is 120 degrees long, begins at the 30-degree mark, and has a width of 65 and a height of 75

-Baking a Pie Graph.-

SEE PiePanel.java | PieFrame.java

An example on the use of the PiePanel class:
Ex.:
PiePanel loans = new PiePanel(4);-
loans.addSlice(Color.green, 101F);
loans.addSlice(Color.yellow, 68F);
loans.addSlice(Color.blue, 91F);
loans.addSlice(Color.red, 25F); 

NOTE:
In Java, hexadecimal literals are preceded by 0x.

Drawing something using the shapes available with Java might seem like more trouble than it’s worth. However, graphics depicted with polygons have two advantages over graphics that are loaded from image files:
►Speed—Even a small graphic, such as an icon, would take longer to load and display than a series of polygons.
►Scaling—You can change the size of an entire image that uses polygons simply by changing the values to create it.

Q. How can I draw arcs that go clockwise rather than counterclockwise?
A. You can accomplish this by specifying the size of the arc as a negative number. The arc begins at the same point but goes in the opposite direction in an elliptical path.

When you change the color of something and redraw it on a container, to make it visible use the 'repaint()' statement, which causes the paintComponent() method to be called manually.



	-HOUR 23 Creating Minecraft Mods with Java.-


	-HOUR 24 Writing Android Apps.-

These programs, called apps, are built on an open source mobile platform that’s completely free for developers to build on. Anyone can write, deploy, and sell Android apps.

-A little history
Android was begun in 2003, acquired by Google, and launched in 2007 as part of an industrywide effort to establish a new mobile phone platform that was non-proprietary and open. Some of the biggest names in mobile phones and technology—Google, Intel, Motorola, Nvidia, Samsung, and other companies—formed the Open Handset Alliance to promote the new platform. Google released the Android Software Development Kit (SDK), a free set of tools for developing Android apps. The first phone running Android, the T-Mobile G1, came out in June 2008.
Before Android, mobile application development required expensive programming tools and developer programs. The makers of the phone had control over who’d be allowed to create apps for them and whether the apps could be sold to users.

The place to download the Android SDK and find out more about creating programs for the platform is the Android Developer site at https://developer.android.com.
The recommended integrated development environment (IDE) that supports Android SDK for Android programming is Android Studio, which also is free and open source.

-Creating an Android App.-

Android apps are ordinary Java programs that use an application framework, a core set of classes and files that all apps have in common. The framework embodies a set of rules for how apps must be structured in order to run properly on Android devices.

To begin using the IDE on a project:
1. Run Android Studio.
2. In the dialog that appears at startup, choose Start a New Android Project. The Create New Project wizard opens.
3. In the Application Name field, enter the application name.
4. The Package Name field will be updated with what is entered in the Company Domain field and the application name.
5. You can accept the default Project Location (a subfolder of AndroidStudioProjects in your user folder) or choose a different one with the “...” button to the right of the field.
6. Click Next.
7. Every Android project requires a target platform. The target represents the oldest version of Android that can run your app. Because each new Android release has enhanced features, your target choice determines which features you can use. Choose Phone and Tablet as the target and API 15 as the Minimum SDK (or the lowest if API 15 isn’t available).
6. Click Next. The wizard asks about the application’s activity to create. Choose Fullscreen Activity and click Next.
7. Enter the name of the activity in the Activity Name field. This changes the Layout Name and Title fields. Keep those changes.
8. Click Finish. The new app is created and new item with the application name appears in the Package Explorer pane.

>Exploring a New Android Project<

A new Android project consists of about 20 files and folders that always are organized the same way in an Android app. There might be more files you add depending on the capabilities of the app, but these starting files and folders always must be present. Some of them are:

►/java/com.java24hours.salutonmondo/SalutonActivity.java— The class for the activity that launches by default when the app is run.
►/res—The folder for application resources such as strings, numbers, layout files, graphics, and animation. There are subfolders for specific resource types: layout, values, drawable, and mipmap.
►AndroidManifest.xml—The app’s primary configuration file.

These files and folders form the application framework. There are additional files that are added to the framework to suit specific purposes.

>Creating an App<

Although you haven’t done anything to it yet, you could successfully run the new Android project. The framework functions as a working app.
Android apps display strings that have been stored first in a resource file called strings.xml. You can find this file in the /res/values folder.
Strings and other resources are given a name and a value. The names of resources follow three rules:
►They must be all lowercase.
►They must have no spaces.
►They must only use the underscore character (“_”) as punctuation.

Resources are stored in XML files. The Resources editor is a simple XML editor. You also can directly edit the XML itself.
Ex.:
<resources>
<string name="app_name">SalutonMondo</string>
<string name="dummy_button">Dummy Button</string>
<string name="dummy_content">DUMMY\nCONTENT</string>
</resources>

This is a resources element with three string child elements. Each string element has a name attribute that holds its name. There’s also text between an opening <string> tag and a closing </string> tag that holds its value. These serve the same purpose as variables: one named dummy_content has the value “DUMMY\nCONTENT.”

>Setting Up an Android Emulator<

You do this to setup a debugging environment. You must set up an Android Virtual Device (AVD) that can run the app on your desktop as an emulator. You also must create the project’s debug configuration. Then you build the app and run it in the emulator.
To configure an Android Virtual Device, first click the green Android phone icon in the Android Studio toolbar. This launches the Android Virtual Device Manager, one of the tools in the Android SDK. The emulators that you’ve created are listed to the left.

To add a new emulator, click Create Virtual Device and follow these steps:
1. Choose a device from the list, such as the Galaxy Nexus, and click Next.
2. Choose a release from the list, such as Nougat, and click Next.
3. In the AVD Name field, give it the name SimpleAVD.
4. Click Finish.

You can create as many emulators as you need. They can be customized for different versions of Android and different kinds of displays.

-Running the App.-

After clicking Run App the Android emulator loads in its own window. The app you have installed will appear with an Android icon and the label SalutonMondo.
The emulator can do many of the things a real device can do, including connect to the Internet if the computer has an active connection. It also can receive fake phone calls and SMS messages. Because of this you can connect your real phone, if the phone is set to debugging mode. Apps developed with the Android SDK can only be deployed on a phone in this mode.

-Designing a Real App.-

This app takes advantage of an Android’s phone capabilities to make a phone call, visit a website, and load a location in Google Maps. The app puts you in touch with the White House via phone, Web, and maps.

First start a new project:

1. Choose Start a New Android Studio Project.
2. In the package name add com.java24hours.
3. Click Finish.
4. Choose Fullscreen Activity; then click Next.
5. After the project opens select File > New > Activity > FullScreenActivity.
6. In the Activity Name field, enter LeaderActivity.
7. Click Finish.

>Organizing Resources<

Creating an Android app requires Java programming, but a lot of the work is done in the Android Studio interface. One thing you do without programming is create resources that will be used by the app. Every new Android project starts out with several folders where resources are placed. all of them under the res folder.
Resources consist of graphics in the PNG, JPG, or GIF format; strings stored in a file called strings.xml; user interface layout files in XML format; and other files you can create.

Some of them are:
-colors.xml for colors used in the app
-styles.xml to define the appearance of user interface components.
-ic_launcher.png and ic_launcher_round.png that have different versions of the app’s icon. These multiple versions are the same graphic, sized for different resolution displays.

A new graphics file, appicon.png, will be added to the project and designated as its icon. Android’s support for multiple resolutions is handy, but it’s not necessary here.
Let's add the 5 files downloaded according to the book. Files can be added to resources using cut and paste. Open the temporary folder containing the five files, select appicon.png and hit Ctrl-C to copy it. In Android Studio, select the folder mipmap in the Project pane, right-click and choose Paste. Next, go back to the temporary folder, select the other four files and copy them. Then in Android Studio, select the folder drawable and paste the files in it.
Now that the project has a new icon, you can set it as the app’s icon. This will be handled by editing AndroidManifest.xml, the app’s main configuration file.

CAUTION
Resources are identified in an app using an ID formed from their filename with the extension removed. appicon.png has the ID appicon, browser.png has the ID browser, and so on. No two resources can have the same ID (with the exception of the same graphic being stored at different resolutions in the mipmap folders, because they count as a single resource).
If two resources have the same name without the extension, such as appicon.png and appicon.gif, Android Studio will flag the error and the app won’t compile.
Resources also must have names that contain only lowercase letters, numbers, underscores (_), and periods (.). The files in this project follow these rules.

>Configuring the App’s Manifest File<

AndroidManifest.xml is located in the manifests folder. After double clicking on it to edit it, go to the Icon field that now reads:
EX:
android:icon="@mipmap/ic_launcher"

Change it for:
android:icon="@mipmap/appicon"

>Designing a User Interface<

An app’s graphical user interface consists of layouts, which are containers that hold widgets such as text fields, buttons, graphics, and custom widgets of your own design. Each screen displayed to a user can have one layout or multiple layouts contained within each other. There are layouts to stack components vertically or horizontally, organize them in a table, and other arrangements. An app can be as simple as a single screen or contain multiple screens.
The Leader app consists of a single screen, which holds buttons for contacting the president of the United States or a leader to be named later. All of an app’s screens are kept in the /res/layout folder. This project has an activity_leader.xml file in this folder that’s designated as the screen to display when the app loads. After double-clicking it the main Adroid Studio editing pane opens. You will se a Palette pane with several categories of user interface components that can be expanded. These can be dragged and dropped onto the screen at right.

Let's add 3 graphical buttons:
1- Delete the widget that displays the “Dummy Button” text by clicking this widget at the bottom of the screen in the editing pane and pressing the Delete key.
2- Click the Layouts folder in the Palette pane
3- Drag the LinearLayout (vertical) widget from the Palette to the screen. In its Properties make sure Orientation is 'horizontal'. This widget determines how user interface elements placed on it will be arranged.
4- In the Palette pane, click the Buttons folder.
5- Drag an ImageButton widget to the app screen. A Resource dialog opens, asking you to choose an image to display on the button. Choose phone and click OK.
6- In the Properties pane, set Layout_Width to wrap_content.
7- Drag another ImageButton widget and drop it to the right of the phone button. Choose the browser resource for this one.
8- Drag one more ImageButton widget and drop it to the right of browser, assigning it the maps resource.
9- The Component pane lists the widgets on the screen. Select the imageButton1 item. In the ID property change the name to 'phoneButton'.
10- In the On Click property, enter the value 'processClicks'.
11- Repeat steps 9 and 10 for imageButton2, giving it the ID 'webButton', the On Click property 'processClicks' and make sure layout_Width is set to wrap_content.
12- Do the same imageButton3, giving it the ID 'mapButton'.
13- Click the LinearLayout item in the Component Tree.
14- In the Properties pane, click the View All Properties link.
15- Click the value for Background; then click the vertical rounded-corner rectangle to its right. The Resources dialog opens.
16-Choose whitehouse, and click OK. A graphic of the White House becomes the screen’s background.
17- Click the Save button.

>Writing Java Code<

Apps are organized into Activities -things the app can do. Each has its own Java class. This app has an Activity LeaderActivity. A class matching this name runs automatically when the app is loaded.
The source code for LeaderActivity.java can be found in Package Explorer in the /java/om.java24hours.leader folder. Double-click this file to edit it.
All activities are subclasses of an activity class that contains the behavior necessary to display a screen, collect user input, save user preferences, and so on.
The onCreate() method defined in the class is called when the class is loaded. The first thing the method does is use super() to call the same method in its superclass: super.onCreate(savedInstanceState); next, it calls setContentView(), a method that selects the screen that will be displayed. The argument to this method is an instance variable, R.layout.activity_leader, that refers to the file activity_leader.xml in /res/layout. Remember, the ID of a resource is its filename without the extension.
Now we will define the processClicks() method that was assign to the OnClick property of each button.
Ex.:
public void processClicks(View display) {
Intent action = null;
int id = display.getId();

/*These three Intents tell the Android device to set up an outgoing phone call to the White House public phone line at (202) 456-1111, visit the website http://whitehouse.gov, and load Google Maps with the partial address “White House, Washington, DC,”*/
switch (id) {
		case (R.id.phoneButton):
			action = new Intent(Intent.ACTION_DIAL, 
		Uri.parse("tel:202-456-1111"));
			break;
		case (R.id.webButton):
			action = new Intent(Intent.ACTION_VIEW, 
		Uri.parse(parse("http://whitehouse.gov"));
			break;
		case (R.id.mapButton):
			action = new Intent(Intent.ACTION_VIEW, 
		Uri.parse(parse("geo:0,0?q=White House, Washington," 					+ " DC"));
			break;
		default:
			break;
	}
/*After you have created an Intent, this statement makes it do something*/
	startActivity(action);
}

Android Studio will automatically add this import statement at the top:
Ex.:
import android.content.Intent;

The processClicks() method  is called with one argument: a View object from the android.view package. A View is a visual display of some kind in an app. In this case, it’s the screen containing the Dialer, Browser, and Map buttons. The View object’s getId() method returns the ID of the button that was clicked: phoneButton, webButton, or mapButton. This ID is stored in the id variable so it can be used in a switch statement to take action based on the click.
The first statement in the processClicks() method creates a variable to hold an Intent object, a class in Android’s android.content package. Intents in Android are how Activities tell another Activity what to do. They’re also the way an app communicates with the Android device. The switch statement has 3 Intents. The Intent() constructor takes two arguments:
►The action to take, represented by one of its class variables
►The data associated with the action

Because you deleted the Dummy Button on the activity, you must remove this line of code, which is the last one in the onCreate() method:
findViewById(R.id.dummy_button).setOnTouchListener(mDelayHideTouchListener);

Save the file when you’re done. Choose the menu comment Build, Make Project to compile it. To run the app, choose Run, Run App, and SimpleAVD as the virtual device. The emulator loads (which takes time) and then automatically runs the app.

NOTE: When excecuting the app you may get an error indicating that no default Activity has been indicated. You can fix this problem 2 ways:

1. Go to the Androigmanifest.xml file and add an intent-filter node to the activity confuguration section. It should look as follows:
Ex.:
<activity
android:name=".LeaderActivity"
android:configChanges="orientation|keyboardHidden|screenSize"
android:label="@string/title_activity_leader"
android:theme="@style/FullscreenTheme">
<intent-filter>
	<action android:name="android.intent.action.MAIN"/>
	<category android:name="android.intent.category.LAUNCHER"/>
</intent-filter>
</activity>

2. Go to Run > Edit Configurations > Lunch > Specified Activity. There choose the activity you would like to be displayed first.

NOTE: For the imageButtons you may get the error "Image without 'contentDescription'". This is an attribute use when accesibility option is available on the phone. It helps describe nontextual elements on the screen. You can either input a description manually in the Atributes pane, or edit the XML file of the activity the button is in (just right click the button in the ComponentTree pane and choose Go to XML. It would take you directly to where the lines of code of the button attributes are).
Android Studio will tell you that the best practice is to create a string variable with the description and referrence that variable. For that you go to the values folder and create the variable in the strings.xml file.
Ex.:
<string name="mapButtonDescription">Maps. Opens White House map</string>
//Then assign it to the contentDescription in the attribute pane
@string/mapButtonDescription
//or the XML file directly
android:contentDescription="@string/mapButtonDescription"

You may also choose to ignore the suggestion:
1. Adding this line instead:
Ex.:
tools:ignore="ContentDescription"
2. Go to Analize > Inspect Code, on Inspection profile click the ... button.  Drop down Android > Lint > Accessibility and uncheck Image without contentDescription


FURTHER LEARNING:


Si tienes clase A y clase B, y en ambas tienes la propiedad String name = "a"; y String name = "b";, y en ambas tiene el método String getName(); Si haces algo así:

A a = new B();

print(a.name);
print(a.getName());

El primer print imprimirá a, mientras que el segudo b, porque el compilador mira la referencia y ve que es de A, así que la variable name de la clase A él la amarra, pero no amarra el método porque no sabe a quién le pertenecerá. Así que en tiempo de compilación ya el primer print tiene el a, pero el segundo no se sabe hasta que corra en un objeto.

----
Cualquier método que llames a través de un objeto, la máquina virtual primero verifica si el objeto tiene el método overriden para llamar ese método, de lo contrario trata de encontrarlo en el padre.
O sea, aunque careFor no está definido en el hijo, cuando llama a play, la máquina virtual verifica si está definido en el objeto primero, de ser así ejecuta ese, sino, ejecuta el del padre.

___
# MISC

- `Java.lang`. Libreria que se importa por defecto en Java.

- **Trick:** The memory available to the Java Virtual Machine when it runs an application is controlled by two things: the total physical memory available on the computer and the amount the JVM is configured to use. The default memory allocation is 256MB. A different amount can be set with the `-Xmx` command-line argument. <br>
To set this in NetBeans, choose *Run, Set Project Configuration, Customize.* The *Project Properties* dialog opens with the *Run* settings at the front. In the *VM Options* field, enter `-Xmx1024M` to allocate 1024MB of memory to the JVM. Alter that number for more or less memory. Also fill out the *Main Class* and *Arguments* fields and run the program by choosing *Run, Run Project*.