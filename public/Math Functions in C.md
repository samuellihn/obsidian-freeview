Additional math functions are available in C in the `<math.h>` header:


| Function           | Operation                                      |
| ------------------ | ---------------------------------------------- |
| sqrt(x)            | $\sqrt{x}$                                     |
| pow(x, y)          | $x^y$                                          |
| exp(x)             | $e^x$                                          |
| log(x)             | $\ln x$                                        |
| log10(x)           | $\log_{10} x$                                  |
| ceil(x) / floor(x) | round up / down to nearest integer             |
| sin(x)             | sine (other trigonometric functions available) |

All these functions have argument type `double`, but an `int` or `float` can be passed too (with type coercion since C is weakly typed)

> **You must compile programs using the math function with the `-lm` switch to link the math library to the program!**