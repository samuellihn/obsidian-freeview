**Mutable pointer to immutable (`const`) data**

```c
const int *ptr;
```

Pointer itself can be changed, data pointed to cannot

```c
ptr = newptr // Allowed
*ptr = 10    // Not allowed
```

**Immutable pointer to mutable data**

```c
int *const ptr
```

Cannot assign pointer to point to new address, but underlying data can be changed

```c
ptr = newptr // Not allowed
*ptr = 10    // Allowed
```

```c
const int *const ptr
```


