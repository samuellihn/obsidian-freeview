A C++ iterator is a unified interface to traverse sequentially through members of a collection.

An `iterator` traverses in sequential order, from beginning to end

A `reverse_iterator` traverses elements backwards

A `const_iterator` does not allow modification of the items accessed

We define these as **nested classes** inside the parent, with (at least) definitions for:

- Inequality: `operator!=`
- Dereference: `operator*`
- Increment: `operator++`

Then, the enclosing collection class should define `begin()` and `end()`, which return iterators to the first item and past the last item (for an array `T[n]`, the indices 0 and n)