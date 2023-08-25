The least common multiple (LCM) of two positive integers $a$ and $b$ is the smallest positive integer that is a multiple of both $a$ and $b$. 

One way to find the LCM is to use the formula:

$$
\text{lcm}(a,b) = \frac{a \times b}{\text{gcd}(a,b)}
$$

where $\text{gcd}(a,b)$ is the GCD of $a$ and $b$. This formula works because the product of $a$ and $b$ is a multiple of both $a$ and $b$, and dividing by their GCD removes any common factors.

For example, let's find the LCM of 12 and 18 using the formula above:

$$
\text{lcm}(12,18) = \frac{12 \times 18}{\text{gcd}(12,18)}
$$

We can use the [[Euclidian Algorithm]] to find the GCD

$$
gcd(12, 18) = 6
$$

Therefore, $\text{lcm}(12,18) = \frac{12 \times 18}{6} = 24$.

Alternatively, you can use the prime factorization of $a$ and $b$ to find the LCM. First, write $a$ and $b$ as products of their prime factors:

$$
a = p_1^{k_1} \times p_2^{k_2} \times \cdots \times p_m^{k_m}
$$

$$
b = p_1^{l_1} \times p_2^{l_2} \times \cdots \times p_m^{l_m}
$$

where $p_1, p_2, \dots, p_m$ are the distinct prime factors of $a$ and $b$, and $k_1, k_2, \dots, k_m$ and $l_1, l_2, \dots, l_m$ are the corresponding exponents.

Then, the LCM of $a$ and $b$ is:

$$
\text{lcm}(a,b) = p_1^{\max(k_1,l_1)} \times p_2^{\max(k_2,l_2)} \times \cdots \times p_m^{\max(k_m,l_m)}
$$

For example, let's find the LCM of 12 and 18 using this method:

$$
12 = 2^2 \times 3^1
$$

$$
18 = 2^1 \times 3^2
$$

The LCM of 12 and 18 is:

$$
\text{lcm}(12,18) = 2^2 \times 3^2 = 36
$$

Note that this method can become more complicated for larger numbers with many prime factors.