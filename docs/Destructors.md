Destructors are called when a class is cleaned up (when a statically-allocated class goes out of scope or `delete` is called), and can be used to clean up fields of the class

If we dynamically allocated memory inside the class, we should deallocate it inside the destructor

We can declare a destructor using `~` in front of the class name

```
~Rectangle();
```

The destructor is **automatically called** when an object's lifetime ends (deallocation, out-of-scope for local variables, no references to object remaining, etc.)

