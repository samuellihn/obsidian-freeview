Integer division - effectively **truncates** (removes decimal portion) of the result and returns the remaining integer part

`int x; int y; int z = x / y` is synonymous with $z = \lfloor x/y \rfloor$

# Operator precedence chart:

![[Pasted image 20230826180351.png]]
Putting `const` in the declaration of a variable will denote that the variable can and should not be modified

> Compiler will catch any accidential modifications

> There are other uses of `const` in C/C++

# Increment and Decrement

C has two types of increment (`++`) and decrement (`--`) operators - post and pre-increment

Pre-increment increments the value, then uses that resultant value in an expression (if applicable)

Whereas post-increment first uses the existing value in an expression, then, increments the value 

```c
// Pre-increment
int a = 1
int b = a++

b == 1 // True
```


```c
// Post-increment
int a = 1
int b = ++a

b == 2 // True
```

The same thing applies with the unary decrement (`--`) operator

