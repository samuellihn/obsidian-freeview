	Input is achieved in C with the `scanf` function

`scanf` reads a formatted input and reads it into a memory location ([[Variables and Types in C]])

```c
int i;
printf("Please enter an integer: ");
scanf("%d", &i); 
printf("The value you entered is %d", i);
```

For I/O format placeholders, refer to [[Printing in C]]

> `&` is the **address [[Operators in C]]**, which provides the memory location of the specified variable

The memory location provided should be able to hold what is inputted

# Return Codes

`scanf` returns the number of input items assigned

A return value of `0` typically indicates that although input was available it was invalid (for the type provided)

This value can be helpful to determine how successful the scan was