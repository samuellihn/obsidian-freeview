Integers use **twos complement** representation to represent positive and negative numbers

To negate a number, take its ones complement (flip all bits) and add one to it

```
1 -> 0b0001
-1 -> 0b1110
```

Checking the first bit can tell us whether the number is positive or negative

> However, simply flipping the sign bit does not make the number negative/positive

Floats use the **IEEE 754 floating point format** to approximate a decimal number with a base and an exponent

```
<sign bit> | <<exponent>> | <<mantissa bits>> 
```

| Type     | Sign bits | Exponent bits | Mantissa |
| -------- | --------- | ------------- | -------- |
| `float`  | 1         | 8             | 23       |
| `double` | 1         | 11            | 52       |




