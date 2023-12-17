The **lifetime** of a [[Variables and Types in C|variable]] is the period of time in which a value exists in memory

The **scope** of a variable is the region of code where the variable name is usable

**Local variables** are variables declared inside functions, and are destroyed when the function ends

> More precisely, local variables are declared inside "blocks" of `{}` that control the scope

Variables in an inner scope can be **shadowed** or hidden by a variable in an inner scope:

```c
int main(void) {
	int i = 12;
	for (int i = 0; i < 10; i++) {
		// inner i shadows outer i
		printf("%d\n", i);
	}
}
```

`static` variables follow the same **scope** rules as local variables, but have a perpetual **lifetime** that exists through the program. 

**`static` variables are automatically initialized to zero**

 > Only one "instance" of a static variable exists in a running process - it is a memory location that **stays in place** (thus "static")

**Global variables** are declared outside of any function block (even outside `main`) and are program-scoped, so they can be accessed anywhere in the program

In general, global variables are discouraged, as they can be accessed and modified **anywhere** in a program (also set to zero on initialization)

> To explicitly refer to a global variable inside a function, use the `extern` keyword

Generally discouraged, as they are difficult to track and can cause conflicts - Kills modularity, readability, testability, reusability, etc.

> Unless your program is hardware-constrained as is the case with embedded programming
