**Template functions** allow definition of "families" of functions that can work regardless of what is passed in, as long as it is explicitly defined:

```C++
template<typename T>
template void fun(const T& input) { ... }
```

This will produce:

```
void fun(const int& input) { ... }
void fun(const float& input) { ... }
void fun(const char& input) { ... }
void fun(const MyClass& input) { ... }
```

and more, depending on what types are used in downstream code

Template functions should be designed when there are multiple functions for which the body (behavior) of the code is the same, but the types the functions is operating on are not.



