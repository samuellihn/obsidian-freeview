Compiled `.c` files are known as **object** `.o` files

> Generated by the **compiler**

Then, these `.o` files are **linked** by the linker to create an executable

When changing a single file, it's not necessary to recompile all source files

The `gcc -c` command creates an unlinked object file:

```sh
gcc -pedantic -std=c99 -Wall -Wextra -c main.c
gcc -pedantic -std=c99 -Wall -Wextra -c functions.c
```

Files can then be linked by calling `gcc` once again

```sh
gcc main.o functions.o
```

For larger projects, being able to selectively compile files can save time
