C++ references alias existing data, with specific rules that differ from [[Pointers]]

1. Cannot be NULL
2. Must be initialized upon declaration
3. Immutable - reference cannot be changed

A reference for type `T` is declared as `T&`

When calling a function with reference parameters, no additional syntax is needed

```c++
void swap(int &a , int &b) {
	int temp = a;
	a = b;
	b = temp;
}

// swap(a, b);
```

Functions can use a mix of reference and pass-by-value parameters

Only pass by pointer (as in C) if needed (rarely)


