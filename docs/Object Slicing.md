If an object of derived class type is assigned or copied to its base type, all the data unique to only the derived class is "sliced" out and ignored

> Happens when we call assignment and copy constructor

This can be problematic when we assume the derived data **and functions** are still there - can lead to calling the wrong function

w