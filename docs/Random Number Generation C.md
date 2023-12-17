The `rand` function generates pseudorandom integers between 0 and `RAND_MAX`

To seed the `rand` function, use `srand`

> Default value for the seed is 1
> We can call `srand(time(0))` to seed the value based on current time, but we must `#include <time.h?`

To "shift" around the number we want to generate, we can use the [[Operators in C|modulus operator]] to limit the range of numbers

> Or cast it into a floating point number to generate a random `float`
