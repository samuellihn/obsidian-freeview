We can use the keyword `override` in a derived class function declaration to explicitly state our intention to override one of the base class's functions.

If our overridden function signature doesn't match a signature of the base class, we will get an error

Prevents function hiding, where we're calling the wrong function due to [[Object Slicing]]