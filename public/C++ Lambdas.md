A **functor** is an object that behaves like a function, but has runtime-defined data that it depends on that is **not** passed as an argument

> In other words, a functor "captures" data and uses it to define behavior of the function

These can be defined precisely with lambdas:

```c++
[captures](argument list) {statements}
```

For a simple comparator function, this could be:
```c++
[](int i1, int i2){return i1 < i2}
```

The compiler decides what the type of the lambda is during compile time

> We can use the `auto` keyword when assigning a lambda to a variable to allow for compile-time type inference - this also allows us to use the same lambda multiple times with different types

The contents within the brackets describe what is **captured** from the surrounding environment, and can be captured by value or by reference (with a `&` prefix) 

> If we just put a `&` inside the brackets, we capture all variables by reference

