Dynamic memory lives on the heap, outside of function-scope stack frames (see [[Pointers]])

The size of this memory can also be allocated at runtime.

Data in dynamically-allocated memory lives outside of any scope block, and we can control how long it lives

However, this means that the memory can live as long as we want it to - so we need to deallocate it

The `malloc()` function allocates memory on the heap, and returns a pointer to the allocate memory:

```c
int *i = malloc(sizeof(int));
```

If the operation is successful, `i` will return a pointer to the memory we just allocated (If not, it will return a pointer to `NULL`)

**To free memory, we use the `free()` function to release the memory**

So the workflow for allocating memory is:

```c
int *i = malloc(sizeof(int));

if (i == NULL); // Check if error allocating memory

/*
Use the memory...
*/

free(i);

i = NULL; // Set the pointer back to NULL to prevent accidental access (that can haunt us later..)

```

The `realloc()` function will either expand an existing block of memory, or find a new spot for a larger block of memory

```c
int *i = malloc(sizeof(int) * 10*);
int *p = realloc(sizeof(int) * 1000*);
```

However, we still need to copy the data over manually (if it moves the block of memory)

> We can tell by the pointer that `realloc()` returns - if it's the same, then our existing data is still valid

```c
// Expanding an array:

int *p = malloc(sizeof(int) * 10*);
int *q = realloc(p, sizeof(int) * 1000*);

if (p != q) { // Realloc moved our memory block - deep copy all the data
	for (int i = 0; i < 10; i++) {
		q[i] = p[i];
	}
	free(p); // Deallocate the old memory
	p = q; // Then, we can reassign our pointer, and p points to our new, expanded array
}
```

`calloc()` behaves the same as `malloc`, except it initializes all bits in the memory to 0.
