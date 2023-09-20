C strings are structured as arrays of characters (in contiguous memory) with a **null terminator** `\0` (`0x00`)

> When copying or otherwise manipulating strings, do not forget to include the null terminator

If we move the null terminator forward in the string, that will "cut" the string and most string functions will treat it as such (although the memory behind will still be allocated)

`<string.h>` header file includes useful string functions

`strlen` function returns the number of characters in the string (before and not including `\0`)
