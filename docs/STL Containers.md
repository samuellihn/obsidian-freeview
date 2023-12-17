# Vector

`std::vector` represents a variable-length array, stored in a contiguous block of memory but automatically resized and moved as needed

> Difference between **reserved** and **allocated** memory: Cannot index memory that is reserved (using `std::vector.reserve(n)`), only memory that is allocated (`std::vector.resize(n)`)

Can be treated as an array, or iterated over with an **iterator** ("smart pointer"):

## Iterators

```cpp
for(std::vector<string>::iterator it = names.begin();
	it != names.end(); it++) {
	cout << *it << endl;
}
```

Other iterators like `cbegin` (`const` iterator, similar to [[const Pointers]])  or `rbegin` (reverse iterator) are available, depending on use

Safer than raw pointers

# Map

`std::map` represents a collection of key-value pairs, similar to a `dict` in Python

Both the key and value can be of any primitive or class type

`std::map` is sorted by ascending order of the keys (keys are sorted using standard compare function)

Iterators can be used to iterate over the sorted `map`, with same options as vector iterator (`const` and reverse iterators)

# Pair and Tuple

`std::pair` and `std::tuple` represent a fixed-size collection of **heterogeneous** values (`std::pair` holds two values, `std::tuple` an arbitrary number of values)

Elements of `std::pair` can be accessed and mutated with `pair.first` and `pair.second`, and pairs can be created with `std::make_pair`

Elements of `std::tuple` can be accessed with the `std::get<n>(tuple)` function, which accesses (but cannot mutate) the nth member of the tuple




