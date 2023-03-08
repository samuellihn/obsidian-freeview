The Euclidean algorithm is a method for finding the greatest common denominator (GCD) of two numbers. The algorithm works by repeatedly dividing the larger number by the smaller number, and using the remainder as the new smaller number in the next iteration. The process continues until the remainder is zero, at which point the GCD is the last non-zero remainder.

Suppose we want to find the GCD of two positive integers $a$ and $b$, where $a > b$. We can write:

$$
a = bq_1 + r_1,
$$

where $q_1$ is the quotient of the division, and $r_1$ is the remainder. Since $r_1 < b$, we can repeat the process using $b$ and $r_1$ as the new numbers:

$$
b = r_1q_2 + r_2,
$$

where $q_2$ is the quotient of the division, and $r_2$ is the remainder. Again, since $r_2 < r_1$, we can continue the process until we reach a remainder of zero:

$$
r_{k-2} = r_{k-1}q_k + 0,
$$

See [[Divisibility]]

where $r_{k-1} > r_k > 0$. The GCD of $a$ and $b$ is the last non-zero remainder, which is $r_{k-1}$.


We can write the entire process using the following recursive algorithm:

$$
\text{gcd}(a,b) = 
\begin{cases}
b & \text{if } a \equiv 0 \\
\text{gcd}(b, a \mod b) & \text{otherwise}
\end{cases}
$$

where $\equiv$ denotes "is equal to" and $\mod{b}$  denotes the modulus operator. The algorithm can be implemented using a while loop or recursively.
