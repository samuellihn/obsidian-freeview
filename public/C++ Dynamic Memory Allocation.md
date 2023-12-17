`new` and `delete` perform [[Dynamic Memory Allocation]] operations in C++, allocating and freeing heap memory

`new` and `delete` will call appropriate [[Constructors]] and [[Destructors]] when they are called

When dynamically allocating arrays, use `new` with bracket notation 

```c++
int *i = new i[10]
delete[] i
```

Be sure to also call `delete` with bracket notation as well: 

Dynamically allocated arrays with primitive types (`int`, `double`, `char`, etc.) will remain uninitialized, but class types will have their default constructor called (a default constructor **must exist** for this to compile) 

