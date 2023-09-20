The `main` function in C can accept [[Functions in C|function arguments]] to take in arguments from the command line

```c
int main(int argc, char* argv[]) {

}
```

`argc` is the number of arguments given, for which the executable name is one of them

> Therefore, it is always >= 1 (`./a.out` counts as one)

From there, `argv` is an array of strings that represent the function arguments

> Again, the executable name is the first entry

