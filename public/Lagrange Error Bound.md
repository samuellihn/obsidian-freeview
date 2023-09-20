Error between the [[Taylor Polynomials]] approximation $T_n(x)$ and the actual $f(x)$ will be less than or equal to:

$$
\frac{|x-c|^{n+1}}{(n+1)!} \times max|f^{n+1}(z)|
$$

> Error is an absolute value
> $c$ is the point the series is centered aroun
> $n$ is the degree of the Taylor polynomial
> $f^{n+1}(x)$ is the $n+1$th derivative of the function, and we are finding the maximum value the function takes on in the interval $z$
> $z$ is an interval between $x$ and $c$ (so we are finding the max value on that interval between $x$ and $c$

So for $sin(x)$ where $x = 70$ and $c = 22\pi$:

```desmos-graph
right=70;
left=69;
---
y = \sin(x) 
```
