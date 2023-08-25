A relative minima can be defined as a point $(a, b)$ where $f(a, b) \leq f(x, y)$ for some region around the point $(a, b)$

Similarly, a relative maxima can be defined as a point $(a, b)$ where $f(a, b) \geq f(x, y)$ for some region around the point $(a, b)$

Just as with functions in $R^2$, functions in $R^3$ have [[Critical Points]]

However, for a critical point to exist for a function in $R^3$, both partial derivatives must equal zero, or any partial derivative could be undefined

$$
f_x = 0  \ and \ f_y = 0, \ or \ f_x \ undefined \ or \ f_y \ undefined
$$

> Same as saying the gradient vector $\nabla f = \vec{0}$ or doesn't exist

A critical point can be defined as a relative maxima/minima, undefined, or **a saddle point**

A saddle point is, in some sense, both a relative maxima and a relative minima:

Take this example: $f(x, y) = xy$
![[Pasted image 20230110172827.png]]

$(0, 0)$ is a saddle point in this case, as it's neither a relative maxima or minima

To find out what a point is, this formula should be used:

$$
D = D(a, b) = f_{xx}(a, b)f_{yy}(a, b) - f_{xy}(a, b)^2
$$

> The second term could be $f_{xy}f_{yx}$, but these are equal most of the time (see [[Higher Order Partial Derivatives]])

If $D>0$, then there is a relative minima or maxima at that point - see the sign of $f_{xx}(a, b)$ to determine the [[Concavity]] at the point to determine which

If $D<0$, the point is a saddle point

If $D = 0$, this test is inconclusive

