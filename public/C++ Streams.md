Streams for `stdin`, `stdout`, and `stderr`: `std::cin`, `std::cout`, `std::cerr`

Written to and read from using the `<<` (stream insertion) and `>>` (stream extraction) operators

Instead of [[File IO in C|file pointers]], we prefer to use `ofstream` and `ifstream` in C++ (which represent output and input files)

```c++
std::ifstream ifile( "hello.txt" );
if (!ifile.is_open()) {
	return 1;
}
std::string word;
while( ifile >> word )
std::cout << word << std::endl;
```

`stringstream` represents a stream that reads and writes to a string, which can be useful for interpolation:

```c++
std::stringstream ss;
ss << "Hello" << ' ' << 2019 << " world";
```


