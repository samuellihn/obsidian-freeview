Types can be automatically converted to each other in C, without explicit typecasting - both promotion and narrowing are automatic

When types do not match in a [[Operators in C|binary operator]], the smaller type is converted to the larger type before the operator is applied

**Operator ranking (smallest to largest):**
- `char`
- `int`
- `unsigned int`
- `long`
- `float`
- `double`

Types can (and should) be explicitly cast to each other using static casts 

```c
float a = 3.14
printf("%d\n", (int) a);
```

