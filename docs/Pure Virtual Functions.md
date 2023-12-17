We can declare abstract classes that **must** have derived classes by putting (at least one) **pure virtual functions** in the class definition

```c++
class Shape {
public:
	virtual double size() const = 0;
}
```

This sets the address of the virtual function to `nullptr`, requiring a derived (concrete) type to be created and used