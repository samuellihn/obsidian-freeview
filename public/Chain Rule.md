The chain rule is used to differentiate composite (nested) functions

If $y = f(u)$ is a differentiable function of $u$ and $u = g(x)$ is a differentiable function of $x$, then $y = f(g(x))$ is a diferentiable function of $\frac{dy}{dx} = \frac{dy}{du} \frac{du}{dx}$

$$
y' = \frac{d}{dx}[f(g(x))] = f'(g(x))g'(x)
$$

It is important to understand which function is the inner function and which is the outer function

> For $y =\sin{2x}$, $f(u) = \sin{u}$ and $u = 2x$, therefore $f'x = 2 \cos 2x$

The chain rule can be applied multiple times - it is helpful to start from the back to the front so less rearranging is required

$$
u(x) = x^2
$$

$$
v(x) = \sin{x}
$$

$$
w(x) = 6x
$$

$$
f'(x) = u'(v(w(x)) * v'(w(x)) * w'(x)
$$

$$
f'(x) = 2\sin{6x} * \cos{6x} * 6 = 12 \sin{6x} \cos{6x}
$$
