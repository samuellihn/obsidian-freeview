Related classes with an **is-a** relationship can be inherited from each other
```
class BaseClass {
	// Definitions for BaseClass
};
class DerivedClass : public BaseClass {
	// Definitions for DerivedClass
};
```

`protected` members are like `private` members, but we can access them from derived classes

Constructors are not inherited automatically, and the assignment operator is not inherited automatically either

However, we can call a constructor of the base class in the initializer list or in the derived constructor - this runs **before** the rest of the derived class's constructor

> Must be the first thing we call in the constructor

> If this doesn't happen, the base class default constructor is called

The base destructor is called automatically **after** the derived destructor runs
