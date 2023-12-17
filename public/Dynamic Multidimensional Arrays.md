Multidimensional array-like structures can be dynamically allocated in two methods:

# 1D Row-major Array

Treat a 1D array as a row-major representation of a 2D array:

```c
int *a = malloc(sizeof(int) * num_rows * num_cols);
```

Then, we can index `a[r][c]` as `a[r * num_cols + c]`

# Array of Pointers

Create an array of pointers, each one pointing to a row of the array

![[Pasted image 20231009121215.png]]

This means we can address `a[r][c]` as normal

However, this is slightly more inefficient in space (since we have to store the pointers to each row) and computation (double pointer dereference)

> Can be more efficient in some cases, when we need to add more rows (don't need to realloc and move the entire memory block)

> We can also create "jagged" arrays with this method


