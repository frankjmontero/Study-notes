# Overview

Every 6 months a new version of Java is released but not necessarily considered for long-term support. As of march 2021, Java 11 is the latest oficial lon-term version of Java. 

## **Java Ecosystem**

### **Editions**

It has a number of different Java additions.

- **Java Card, Standard card**. which is the smart card addition and can be used with SIM cards. SIM card, credit cards, etc. 

- **Java ME, Micro-Edition**. Which can work with things like smart TVs, and set-top boxes, and embedded devices.

- **Java SE, Standard-Edition**, here we learn the Java programming language, because it contains both the tools, like compilers and Java virtual machines, to run your code, but libraries.

- **Java MP, Micro-Profile**. It's used with micro services and allows you to define, for a server, how your application should be deployed and run as a microservice.

- **Java EE, Enterprise-Edition**, that supports creating applications for the enterprise: web services, passing messages through Java messaging asynchronously, and enterprise JavaBeans for sharing code. Also, for user interface, you can also create servlets, Java server pages, and Java server faces applications, although we're seeing that being used less and less. Mostly, we're seeing Java used in the enterprise, in what we call the back end of the enterprise. This can take the form of web services and is typically how we see Java being used today.

### **Multi-Platform**

The code that we write after compiled turns into *bytecode* (Java Class) and read by the JVM (Java Virtual Machine, that emulates the actual CPU and the computer that the software is running on) translates the code into executable code the computer can run.

## **Design**

### **Class**

A class represents a type of thing or concept that has attributes and behaviors. A blueprint or template of an object.

A way to determine the classes we'll use is to describe the interaction between the end user and the system (use cases) and look for nouns. The nouns are typically our classes that have behaviors and data for the application to work correctly.

#### **Behaviors**
We manipulate objects through their behaviors. For instance, methods like setName() or setAddress() in a customer class.

### **Inheritance**

Inheritance allows more general top-level classes (common attributes and behaviors), like, say, animal, which might have attributes of name and weight and behaviors of eat and breathe, to be extended with lower-level classes that have more specific behavior as dictated by the needs of the application.

### **Polymorphism**

This ability of the Java runtime system to invoke the correct behavior based on the type of object.

### **Flexible Design**

Java has other ways to achieve a flexible design like: 

- **Interfaces** that abstract out common behavior across classes,
- **enumerations**, called `enums`, for creating user-defined constants,
- **generics** to pass specific type information to the compiler, making programs more stable and less error-prone.

#### **Enum and Generics**

![Pet Interface](.\Resources\PetInterface.png)

```java
public enum feed {
  DOG_FOOD;
  FISH_FOOD;
}
```

```JAVA
List<Pet> pets = new ArrayList<>();
pets.add(new Dog());
pets.add(new Fish());
```
Now, here, we see, for example, an enum called feed, which would have two constants so when we go to feed our pets, we can make sure that they get the right type of food. 

We also see that we're creating a list, or a collection, of pet objects, and we've passed generic information to that list.Now, this will make sure the compiler makes sure that we can only add objects to this list that implement the pet interface.

#### **Analysis, Design, and Architecture**

We do all of these with Java and object orientation. And to make it easier for us, we use something called the *Unified Modeling Language, UML*.

##### **UML**

Is a modeling notation that allows us to analyze our business requirements, model our code structures, and describe application deployment. And it's done with a series of diagrams and meta information about the application we're creating.

![UML diagrams](.\Resources\UMLSampleDiagrams.png)

- **Use case**, that describes the interaction between an end user and the system. 
- **Class diagrams** to represent the different classes we're going to need, and also document their behaviors, attributes, and relationships to each other.
- **Activity diagrams** to describe flow of control. 
- **Sequence diagrams** to show how one object can invoke another object, and the passing of data back and forth.
- **State transition** diagrams if we need to document that a certain object goes in or out of a certain state-- for example, turning on or turning something off. 
- Deployment diagrams that indicate how the application can be deployed.


## **APIs**

### **Streams APIs**

Allows us to efficiently filter, map, and reduce large streams of data. 

```java
List<Employee> employees = new ArrayList<>();
employees.stream().parallel()
  .filter(e->e.getSalary()>1000)
  .forEach(e->e.calculateBonus());
```

For the example we've created a new array list of employees. Then we can say to that list, return a stream of objects, and do this in parallel, multi-threaded, automatically filtering the list. For each employee whose salary is greater than 1,000, allow that employee to be calculated. If you have an employee whose salary is not greater than 1,000, then that employee would be filtered out. Then for each of the employees whose salary is greater than 1,000, calculate a bonus for that employee. So we calculate the bonus for each employee, and this can be done in parallel. So Java Streams APIs are a very powerful way of manipulating working with large data sets.

### **IO APIs**

With them we can transfer data through a series of interconnected streams, read/write information for sources and destinations.

### **Concurrency API**

They take advantage of multi-CPU-core architecture. Execute code concurrently to achieve better performance and user experience.


## **Java in the Enterprise**

Java in the Enterprise. Java works in the enterprise. And it's actually mostly where Java is used today, in the back end processing. You don't really see Java used too much for user interfaces any longer. So in the back end, one of the things we work with Java are web services.

Web services allow us to expose code to the enterprise for reuse in a controlled, standardized manner. These web service capabilities include the ability to work with XML object mappings, and be able to convert back and forth Java objects and XML for transmission. And the same thing with JSON.

- **JAX-WS API** enables the *SOAP* service implementation where we can define our own interface and our own types of methods that we support. SOAP can only work with XML.
- **JAX-RS API** enables *REST* service implementation that leverages the HTTP transport, and the operations available in HTTP, and can work with different types of data.  REST services can work with any type of data we wish, XML, JSON, plain text, whatever we want.

**Java EE** applications are actually deployed to a server in order to execute. While Java Standard Edition applications can run from the command line.

<br>

# **Concepts and Syntaxes**

In Java you cannot execute methods on a primitive only its Objects.

## **Constants**

It is customary to make constants public because they cannot be changed and we can access them directly.

```java
public final double MIN_PRICE = 10;
```

## Loops

### **Enhanced `for`**

This is Java's `for...each`. Iterates through iterables:

```java
String [] names = "Mary", "Bob", "Pinky";

for (String name: names) {
  System.out.println(name);
}
```
- *names* is what I am iterating through
- *name* the variable that would hold each value.
- *String* is the type of the iterable. Any type it may be.

### **`while`**

`while` is *good to use* when:
- You don't know the amount of times you are going to be looping, 
- when the conditions can change inside its body 
- or there are several conditions to evaluate.

## **Objects**

### **Stack/Heap**

These are two areas of memory created by the JVM upon its startup. The *stack* stores variables and the *heap* objects.

### **Methods**

The signature of a method is the name of the method and its parameters. Therefore, there can't be two methods with the same signature even if they return a different type.

## **Access Modifiers**

### **Static**

The static modifier implies that the method or variable belong to the class and it's shared by all objects. It is not specific to an object instance. It is a method or variable that does not logically belong to an object but to the class.

## **Error Handling**

## **Exceptions**

An exception is something unexpected that Java doesn't know what to do with it.

You can handle them with `try...catch`.

```java
int a, b, c;

try{
  c = a / b;  
} catch (Exception e) {
  System.out.println(e.getMessage());
}
```

## OOP in Java

Java is what is called a **single class inheritance hierarchy**  because all classes family tree start on the class Object.

The father classes, in Java known as super classes, are more general and hold the common aspects of the child classes. Child classes are more specific and may have different behaviors and properties.

### **Abstract Classes**

If there are members that we want to be always present in child classes but we don't have an actual general implementation that makes sense and we can pass to the children then we can create an `abstract` signature of the member and let each children to handle their particular implementation.

```java
public abstract class Clothing {
  public abstract double reimbursement();
}
```

A class that implements a abstract method must be abstract as well.

### **Interfaces**

Uses:

- When we have features that are shared between multiple classes for which we cannot use inheritance because they are not related with each other.
- When we need to use composition. Meaning, add behaviors from multiple classes. Sometimes our classes are more than one thing, therefore we use interfaces because we can implement more than one but we cannot inherit from more than one parent.

They can contain concrete methods only if they are default, private or static. They can contain constants but not variables because they cannot instantiated.
### **Abstract Classes vs Interfaces**

Although both are similar: they cannot be instantiated and can have methods with or without and implementation. 

They differ in:
- abstract classes can declare fields that are not static and final, and define public, protected, and private concrete methods. With interfaces, all fields are automatically public, static, and final, and all methods that you declare or define (as default methods) are public.
- You can extend only one class, whether or not it is abstract, whereas you can implement any number of interfaces. 

# **Good To Know**

## Classes and instances access

Classes are not able to access an instantiated object. The object does have a reference to its class so that JVM can find the code that defines the object and executed. This means that a static member (method or property) cannot access a instance member

```java
private static int  nextHat;
private int hatID;

public static void toHat() {
  hatID = nextHat;
}

//This will not compile
```

## **String Pool**

It is a special region in memory that JVM has where String objects created with String literals (*String str = "test"*) are stored. Every time we create a String object JVM looks for it in the pool, returns a reference to that memory address or creates a new spot in the pool if not found. String objects created with *new()* (*String str = new String("test")*) are still stored in the heap. Because of that:

```java
String one = "test";
String two = "test";
String three = new String("test");

System.out.println(one == two); // True
System.out.println(one == three); // False
```

## **`.equals()` vs `==`**

- On objects the operator `==` compares references and the method equals() values.

```java
String one = "test";
String two = new String("test");

System.out.println(one == three); // False
System.out.println(one.equals(three); // True
```

- With `==` the compared aliases should be compatible

```java
Thread t = new Thread();
Object o = new Object();
String s = new String("test");

// Good
System.out.println(t == o);
System.out.println(o == s);
// Again equals compares de values not their references, therefore their types
System.out.println(t.equals(s));

// Incompatible types error
System.out.println(t==s);
```

<br>

## **Builder**

Builder like when you do `Routing route = Routing.builder()` is a special pattern for creating objects similar to but more robust than a constructor.