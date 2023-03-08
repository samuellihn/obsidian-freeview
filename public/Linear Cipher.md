> For these examples, our character space is 27 characters long $a\dots z \rightarrow 0\dots 25, space \ \rightarrow 26$

The linear cipher is similar to a [[Shift Cipher]], but includes both a scaling factor and a shift

To encrypt:

$$y = (ax + b) \mod{27}$$

Slightly stronger than the Caesar/shift cipher, as an additional element

Still susceptible to lexical analysis (patterns of double letters, etc.)

To decrypt, solve for x:


$$y = (ax + b) \mod{27}$$

$$y -b = ax \mod{27}$$

$$a^{-1}(y -b) = x \mod{27}$$

> Note that this is the **modular inverse** of $a$

