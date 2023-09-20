**Array:** A collection of variables in a contiguous block of memory

```c
int c[12];
```

> Unlike in some other languages, array declarations go **after the variable name**

Elements in C arrays are undefined (like a buffer) until explicitly initialized

**Aggregate initialization** is possible at declaration using curly brackets. However, after initialization, aggregate **assignment** is not possible

```c
int arr[] = {1, 2, 3, 4, 5};
```

> With aggregate initialization, explicit array size can be omitted

Out-of-bounds array access produces **undefined values** beyond the boundary in C! This will lead to undefined behavior, thus always perform bound checks
