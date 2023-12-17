The **Wronskian** of two functions $f_1(x)$ and $f_2(x)$ is the function:

$$W(x) = \begin{vmatrix}
f_1(x) & f_2(x)  \\ 
f'_1(x) & f'_2(x)  \\ 
\end{vmatrix}$$

$y_1(x)$ and $y_2(x)$ are linearly independent $\iff$ $W(x) = 0$ for all $x$

We can use the Wronskian to find a particular solution $y_p(x)$ if $b(x)$ is not from a nice family

If $\beta = \{ y_1(x), y_2(x)\}$  is a basis of solutions for $y''(x) + p(x)y'(x) + q(x) = 0$ (the homogenous equation $L[y] = 0$, then a particular solution is:
$$y_p(x) = u_1(x)y_1(x) + u_2(x)y_2(x)$$

Where:

$$
u_1(x) = -\int{\frac{y_2(x)f(x)}{W(x)}}
$$

$$
u_2(x) = \int{\frac{y_1(x)f(x)}{W(x)}}
$$

> Where $W(x)$ is the Wronskian of $f_1(x)$  and $f_2(x)$
> And $f(x) = \frac{b(x)}{a_2(x)}$