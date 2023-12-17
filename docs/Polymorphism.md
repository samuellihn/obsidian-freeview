Polymorphism is a concept in C++, but the member functions called are dependent on the declared (**static**) type in the code, instead of the dynamic type of the actual instance

if we want the function called to depend on the actual type of the instance, we need to declare all override and base functions as `virtual`

This will cause **dynamic binding**, where the program will look up the correct function to call during runtime, rather than a function address being baked in at compile time

> A lookup table based on the type data is used to determine function address

