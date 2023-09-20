Multidimensional arrays can be defined in C using this syntax:

```c
// <<type>> <<name>>[dim_1][dim_2]
int table[3, 4] = {{1, 2, 3, 4}, {5, 6, 7, 8}, {9, 10, 11, 12}};
/*
table = [
	[1, 2, 3, 4],
	[5, 6, 7, 8], 
	[9, 10, 11, 12]
]
*/
```

Multidimensional arrays are stored in memory exactly like one-dimensional arrays - the only difference is convenient addressing/indexing

In memory, C arrays are stored in **row-major** order, where the first row is stored contiguously in memory, then the second...

| 0x00 |     |     |     |     |     |     |     |     |     |     | 0x48 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- |
| 1    | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  | 11  | 12   |

When specifying multidimensional arrays in memory, all sizes except the outermost must be provided

```
void sum_matrix(int list[][4], int numRows)
```

> The length of rows is essential for dimensioning the memory offset when addressing between rows
> Since there are 4 `int`s in each row, we know that each row is 16 bytes
> First row is at `addr`, second row is at `addr + 16` in memory
