Exceptions indicate that a fatal error has occurred, and there is no way to **continue executing the current code**

Exceptions auto-propagate through the call stack, **unwinding** the stack until the exception is either caught or the stack is completely bare (and the program crashes)

> Less error-prone than catching null pointers or similar

When an exception is thrown, a derivative of `std::exception` is created. The contents of the exception (typically an error message) can be accessed with the `.what()` method

A `try` block can handle exceptions that are thrown within the block, and perform actions in the `catch` block to ensure the code can continue safely

> We can `catch` a specific type of exception and perform actions based on that type of exception (specifically, `std::runtime_error`, etc.)
> Control is passed to the first `catch` block that matches the exception type

We can define our own exceptions derived from `std::exception` or its derivatives (like `std::runtime_error`)