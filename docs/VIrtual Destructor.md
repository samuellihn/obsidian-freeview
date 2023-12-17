When [[Polymorphism]] is used in C++, the destructor of the static type is called when an object is destroyed

This can cause issues when the dynamic type has additional data that is ultimately not destroyed when the static type's destructor is called

We can fix this by making the class (and its base) have a `virtual` destructor

