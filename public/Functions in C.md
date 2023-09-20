

Some predefined functions have been the [[Math Functions in C]] and [[File IO in C]] functions

Custom functions can be defined in C to modularize programs:

```c
int func(int a, int b) {
	return a + b;
}
```

Function parameters and return values receive and send back information to/from functions

> Sometimes, a function with no arguments can be written as `func(void)`, or just `func()`

# Passing by Value

Primitive ([[Variables and Types in C]]) data types are **passed by value**, meaning that a copy of the value is given to the function

> Therefore, it is impossible to modify the argument values themselves back in main, unless we explicitly pass by reference

# Function Prototypes

Functions typically need to appear **before** the `main` function to satisfy the compiler. However, we can **declare** the function with the **function prototype** in order to put the function definition after:

```c
float func(int x, int y);

int main(void) {
	func();
}

float func(int x, int y) {
	return x + y;
}
```

> Parameter names in the function prototype are optional, but can give extra information

# Passing by Reference

For larger data types like arrays and `struct`s, we can pass a reference (pointer) to a function so the function can know where to look for data

```c
#include <stdio.h>
int total(int n[], int len) {
	int tot = 0;
	for(int i = 0; i < len; i++) {
		tot += n[i];
	}
	return tot;
}

int main() {
	int evens[6] = {0, 2, 4, 6, 8, 10};
	printf("%d\n", total(evens, 6));
	return 0;
}
```

> We cannot use `sizeof` inside a function to determine array length, as `sizeof` will return the size of the pointer instead of the array (as it doesn't know this raw pointer refers to an array). This is why we also need to pass in the number of elements.

Since arrays are passed by reference, modifying them in the function will modify the original data

We cannot return an array from a function, as it will cause a **dangling pointer**, where a pointer refers to data that doesn't exist anymore.

> Instead, we can pass in a reference to be modified by the function. 
