A **pointer** is a type that stores a memory address for a piece of data

> The data at this memory address can then be referenced by the program

This can help solve function scope issues when we want to persist data after a function has completed

Pointers can be declared by adding `*` in front of the variable name before declaring it

```c
int *point
```

The **dereference operator** `*` can then be used to access the value referenced b by a pointer

```c
*point = 10
*point += 2
```

**Be careful - reference operators `*`, and `&`** bind closer than binary operators (arithmetic), BUT unary operators evaluate from right to left

```c
// Increments memory address, then derefrences - BAD!!!
// Dereferencing a memory address with a bad offset
*ip++ 

// Dereferences, then increments the VALUE - GOOD!
(*ip)++
```
