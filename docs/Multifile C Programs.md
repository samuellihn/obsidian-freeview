We can split up our code into multiple files with header files.

These can include [[Functions in C|functions]] to modularize our code into different files

Functions should be **declared** in header `.h` files and compiled in C `.c` files

```c
//functions.h
int add(int a, int b);
```

```c
//functions.c
int add(int a, int b) {
	return a + b;
}
```

Then, we can include the header file in our main C file:

```c
//main.c
#include "functions.h"
//rest of code .......
```

When compiling, we need to make sure to compile **both** C files

```sh
gcc -pedantic -std=c99 -Wall -Wextra main.c functions.c
```

This will include and link both files