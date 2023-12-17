The `=` operator has two meanings:

**Initialization**: `int a = 4`
**Assignment:** `a = 5`

In classes, initialization calls the appropriate constructor (copy, etc.) depending on what is on the right of the side - this is automatically defined

The assignment operator is also implicitly defined, and performs a **shallow copy** (member-wise `=`) of the instance members

> This can be problematic when some members are pointers, as the underlying data is not copied

# Rule of 3

If we have a non-trivial destructor (one that uses `delete`):

1. We must explicitly define a copy constructor
2. We must explicitly define an assignment operator, that **deallocates the members to be replaced** and **deep-copies dynamically allocated members**


