**Never leave variables uninitialized!** Undefined is BAD

`unsigned` does not need to be `unsigned int`, just `unsigned` is OK

Characters hold one-byte characters and are functionally 8-bit integers

Booleans can be `true` or `false` and are more or less synonymous with integers, where 0 means false and nonzero means true

> Booleans don't really exist in C, so `char`s (or 8-bit `uint`s) are typically used in place of such
> This is a different mindset that stricter languages like Python and C#/Java.


# Character Library

The **C character library** contains many useful character analysis/manipulation functions

```c
#include <ctype.h>
```

- Boolean analysis functions (`isalpha`, `isdigit`), etc.
- Conversion functions (`toupper`, `tolower`)
