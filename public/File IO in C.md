To open a file, use `fopen(file, mode)`

> `file` is a filename
> `mode` is the writing mode - 'r', 'w', 'r+', 'w+'

Returns `FILE*`, pointer to `FILE` struct

> This pointer returns `NULL` if the operation fails, always check if the file pointer is NULL


`feof()` returns a nonzero value if the end of file is reached/passed

`ferror()` returns a nonzero value if the file is in an error state, or if an illegal operation is performed (read in write mode, write in read mode, etc.)

`rewind()` returns the file pointer to the beginning of the file, reading back from the start

> File I/O is sequential, behaves like a tape reader

Use `fscanf` and `fprintf` to read and write text to files. These behave like `scanf` and `printf` ([[Printing in C]], [[Input in C]])
