
> For these examples, our character space is 27 characters long $a\dots z \rightarrow 0\dots 25, space \ \rightarrow 26$

The Caesar Cipher - mathematical algorithm for encrypting messages that involves shifting each letter in the plaintext by a fixed number of positions in the alphabet

The shift, or "key", is a positive integer between 1 and 26.

Given:

$x$: plaintext
$y$: ciphertext

The encryption algorithm for each character is:

$$
y = (x + b) \mod{27}
$$

> Where $b$ is the amount being shifted

To decrypt:

$$
y = (x - b) \mod 27
$$
