Classes can be defined in C++ with the `class` keyword
```cpp
class Rectangle {
public:
	double width;
	double height;
	
	void print() const {
		cout << "width=" << width << ", height=" << height << endl;
	}
	
	double area() const {
		return width * height;
	}
};
```

Using `const` in a member function declares that the function will not modify any member fields 

Fields can be `private`, `public`, or `protected` - fields are `private` by default

Class declaration should be declared in a `.h` file, and function definitions should be defined in an associated `.cpp` file, using the fully qualified (`ClassName::methodName`) name of the member function

> A function defined in the header is called an *inlined* function (different from inline-compiled functions)


