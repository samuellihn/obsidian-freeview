When operating on classes, operators act like functions in C++, meaning we can redefine them in a class.

To override an operator `<S>`, we can define a function called `operator+`

These operators can be defined inside functions with `this` being the left-hand side and the first argument being the right-hand operator (if binary)

> But necessarily! They can be defined outside classes as well, although access to `private` and `protected` members is limited in this case

> Since some operators don't need to modify their parameters, this is a good place to use `const` references
> It is also typically good practice to return the result by reference so the [[Constructors|copy constructor]] doesn't have to be called

We can also overload the operator `<<` so the class we define can be inserted into an output stream

```c++
ostream& operator<<(ostream& os, const vector<int>& vec) {
```

However, we may need to access private members of the class we're printing

We can use the `friend` keyword to declare that a function is trusted by a class, and can access the private members of it:

```c++
friend ostream& operator<<(ostream& os, const Rational& r);
```

> Declare this inside the class declaration



