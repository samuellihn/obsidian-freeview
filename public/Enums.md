An `enum` is a type that has values restricted to a certain range, which can be used to create explicitly named constants

These values are integer numbers or bitfields

```
enum Color { red,  green,  blue };
```

We can explicitly set the values of the entries, and also specify the underlying type:

```
enum Color : char { red = 20,  green,  blue };
```

However, these are C-style enums, and are weakly typed, meaning they can be implicitly casted to `int`s or even other enums

**Scoped enums** are treated like classes, and are strongly typed

```
enum class Color { red,  green,  blue };
```

These cannot be implicitly casted into their underlying type, but can still be explicitly casted (using `(T)` syntax or `static_cast<T>`)