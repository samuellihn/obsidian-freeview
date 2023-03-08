Represents the rate of a change of a function along a linear path "direction" defined by a vector

Previously with [[Partial Derivatives]] the only two directions we differentiated along are parallel to the $x$ and $y$ axes ($f_x$ and $f_y$ respectively)

With directional derivatives, we can differentiate along any direction defined by any arbitrary vector

Given a [[Unit Vectors|unit vector]] $\vec{u}$ with components $\left\langle a, b \right\rangle$, the directional derivative:

$$D_{\vec{u}} f(x, y) = f_x(x, y)a + f_y(x, y)b$$

Note that the vector $\vec{u}$ must be a unit vector, for this computation to be correct

This can be generalized to functions of more than two variables:

$$
D_\vec{u}f(x, y, z) = 
f_x(x, y, z)a+
f_y(x, y, z)b+
f_z(x, y, z)c
$$

We can also write this as a [[Dot Product]] of the direction vector $\vec{u}$ and a vector of the partial derivatives of $f$:

For three variables, as seen above:

$$
D_\vec{u}f(x, y, z) = 
\langle f_x, f_y, f_z\rangle \cdot \langle a, b, c \rangle
$$ 
> This expands to the form we see above!

> Interestingly, the [[Partial Derivatives]] we've taken along the $x$ and $y$ axes can be thought of as directional derivatives along the standard basis vectors ($i, j$)
> $$\langle f_x, f_y \rangle \cdot \langle 1, 0 \rangle \rightarrow f_x$$
> $$\langle f_x, f_y \rangle \cdot \langle 0, 1 \rangle \rightarrow f_y$$

For two-variable functions:

$$
D_\vec{u}f(x, y) = 
\langle f_x, f_y\rangle \cdot \langle a, b\rangle
$$ 
The vector of all the partial derivatives (seen above) is called the **gradient vector of $f$**,  or the **gradient of $f$**, denoted by $\nabla f$

$$\nabla f = \langle a, b \rangle$$
The maximum value of $D_\vec{u}f(x, y)$ is given by $|\nabla f(x, y)|$ and occurs in the direction of $\nabla f(x, y)$

> When $\vec{u}$ is pointing in the same direction as $\nabla f$

This is because of the property of the dot product, given that $D_\vec{u} f= \nabla f \cdot u$

$$
|\nabla f| |\vec{u}| \cos\theta \rightarrow
|\nabla f|\cos\theta 
$$$$
\cos\theta = 1 \ when \ \theta = 0
$$
So when $\nabla f$ and $\vec{u}$ align with each other, the maximum rate of change of $f(x, y)$ at that point is given by $|\nabla f(x, y)|$

