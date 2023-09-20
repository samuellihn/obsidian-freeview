To compile a C program, use:

```sh
gcc <source file> -std=c99 -pedantic -Wall -Wextra
```

> `-std=c99`: follow the C99 standard
> `-pedantic`, `-Wall`, `-Wextra`: Show all errors and warnings, potential issues with code (`pedantic` is ISO standard warnings, `Wall` shows all warnings, `-Wextra` shows extra warnings)

**Always compile with these switches, and remove all errors and warnings that are shown**

**Preprocessor**:  performs preprocessing checks, processes directives like `#define`, `#include`, `#ifdef`, etc. **Makes the program compilable by including necessary dependencies, etc.**

**Compiler**: Turns the human-readable C code into **object code**, which is machine language but is not yet executable

> `.o` file

**Linker**: combines object file(s) (in the case of multi-unit projects) into an runnable executable
