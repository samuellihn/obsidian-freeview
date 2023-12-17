# Default Constructor

The **default constructor** creates a new instance of a class, without initializing anything within it, unless explicitly defined

The default constructor leaves primitive types uninitialized, and calls the default constructor for all its members that are class types

The default constructor can be called when a class is initialized, but not declared

```c++
ClassType c;
```

An **initializer list** can be used to initialized values upon calling a constructor

```c++
IntAndString() : i(7), s("hello") { }
```

This calls the appropriate constructor for each member (if it's a class type) and initializes each primitive

This is better than using assignments inside the constructor body:

```
IntAndString() { 
	i = 7; 
	s = "hello"; 
}
```

Since `s` is a class type, the default constructor is called, creating an empty string, then the string is assigned, **calling the constructor twice** 

Using the initializer list, we call the constructor for `s` **once** directly with the desired value, which is faster

# Alternative Constructor

An **alternative constructor** can have values passed into it that specify desired properties of the class

```c++
DefaultSeven(int initial) : i(initial) { }
```

> Can still use initializer list syntax

**When an alternative constructor is declared, a default constructor is no longer implicitly created**

When declaring an array of class instances, that class **must** have a default constructor, or aggregate initialization syntax must be used

Aggregate Initialization Syntax: 

```c++
MyThing s[10] = {{0},{1},{2},{3},{4},{5},{6},{7},{8},{9}};
```

In most cases, constructors should be defined `public`