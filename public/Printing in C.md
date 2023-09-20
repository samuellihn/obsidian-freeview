`printf` function in C can print literal or formatted values to `stdout`.

Formatted values can be specified with **placeholders**

```c
printf("There are %d students in class.", 36);
```

Placeholders start with `%` and contain additional information

Data Type Placeholders

| Letter | Type           | Notes (!!)               |
| ------ | -------------- | -------------------- |
| `d`    | decimal        | `ld` for `long int`  |
| `u`    | unsigned       | `lu` for `long uint` |
| `f`    | floating point | `lf` for `double`    |
| `c`    | character      |                      |
| `s`    | string         |                      |

> For all printf specifiers and modifiers, refer to https://cplusplus.com/reference/cstdio/printf/


> To print a `%` character without it being confused for a format string, use two `%` characters as the escape sequence: 

```c
printf("100%%\n")
```

> `100%`


