We can add and subtract numbers from pointers to jump around in memory

The size of the data doesn't have to be considered; for example, `p + 1` will add 4 bytes to the pointer if `p` is declared as an `int`

We can also copy pointers to create two references to a block of memory

The indexing operator `[]` is really just a shortcut for pointer arithmetic

`a[10]` is the same as `*(a + 10)`

We can also compare memory addresses of pointers to see if one pointer is before/after the other (useful for arrays)

`ptrdiff_t` is a bitness-conscious type that holds the difference between two pointers

> We can't use `size_t` for this because sometimes the difference can be negative
