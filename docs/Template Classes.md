Classes can also be defined as templates, with a similar syntax as [[Template Functions]]

```C++
template <typename T>
class Node { 
	public: 
		Node(T pay, Node *nx) : payload(pay), next(nx) { } 
		void print() const; 
	private: 
		T payload; 
		Node *next; 
};
```

Templates are **lazily instantiated** by the compiler, meaning they are only instantiated when used

Which means the compiler needs the template class to be fully defined, including **function definitions** (either inlined in the header, or included explicitly otherwise)

> This is so the compiler knows what code to generate - in other words, we can't link functions later, since the linker doesn't have anything to link

We can be including the templates at the bottom of the header file

> Typically called a `.inc` or `.inl` file


