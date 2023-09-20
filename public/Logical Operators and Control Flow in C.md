Logical operators:

| Operator | Name |
| -------- | ---- |
| `&&`     | AND  |
| \|\|     | OR   |
| `!`      | NOT  |

> For description, see first part of [[Logical Connectives]]

# Conditionals

C has `if` and `switch` statements

`if` statements functional in a fairly standard way in C

**Be careful not to accidentally assign inside an `if` statement in C - assignments in C are expressions, which may result in a "condition" being always true or false!**

```c
// This is effectively if(0)
if (x = 0) { // Assignment instead of == equality
	printf("This never executes because of above error!!\n");
}
```

# Loops

`while (condition){}`: Can iterate zero or more times, as long as `condition` is true

`do {} while (condition)`: Will iterate one or more times, checks if condition is true at **end** of each execution

`for (initialize; condition; update)`: `initialize` happens once (first), then `condition` is checked before running loop, and `update` is run after each loop execution

- `break` will immediately exit a loop
- `continue` will immediately proceed to the next loop iteration

> Try to be clean with loops - only use `break` and `continue` when another type of loop implementation is not possible (as that would usually be cleaner)
