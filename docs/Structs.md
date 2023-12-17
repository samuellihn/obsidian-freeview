A `struct` is a collection of related variables bundled into one data type

A variable in a `struct` is called a **field**, and can describe characteristics of a single unit of data

```c
struct card {
	int rank;
	char suit;
}
```

To use a struct in a program, we must precede the type with the `struct` keyword:

```c
int main(void) {
	struct card myCard = {3, 's'};
}
```

# typedef structs

If we want to just write `card myCard` like we would with other types, we can define the struct as:

```
typedef struct card {
	int rank;
	char suit;
}
```

Then we can just write `card myCard = {3, 's'};`

# structs in functions

Structs are [[Functions in C|passed by value]], but any fields (such as arrays) that are pointer types still behave as pointer types - however, we can declare struct pointers as well

To access a struct member from a struct pointer, we can use the arrow operator:

```c
myCardPtr->rank //alias for (*myCardPtr).rank
```

# Size of structs

Using the `sizeof` function on a struct will return the total size of all data types

> Beware of pointer sizes - the size of a pointer is typically equal to `sizeof(size_t)`
> **The compiler can also add padding for efficiency, especially with unequally sized data types**

# Nested structs

`struct` s can be fields of other `struct`s

> 	When doing this, it can be good to pass in a pointer to the inner `struct` so if we modify that inner `struct` elsewhere, it will propagate to the outer struct

We can also defined structs in a nested way:

```c
typedef struct {
	struct { // this struct type doesn't have a name;
		int r; // it's just used once to declare a
		int b; // field named color
		int g;
	} color;
	struct { // again, no name
			int x;
			int y;
	} position;
} pixel;
```
