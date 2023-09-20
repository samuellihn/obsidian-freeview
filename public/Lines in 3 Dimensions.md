You can write a line as a [[Parametric Equation]] $y = 2x-2$ by observing the behavior of the line

$$
(x(t), (y)t)
$$

$$
(-1 + 3t, -4 + 6t)
$$

Smilarly, we can do the same in three dimensions, by analyzing two points:

$$
(2, -5, 1) \rightarrow (-3, -1, 4)
$$

$$
(2 - 5t, -5 + 4t, 1 + 3t)
$$

This way, we can clearly define a line in three dimensions wtihout needing to resort to arbitrary constraints

![[Pasted image 20220925205425.png]]
> Effectively (vastly oversimplified), 
> 
> $$
> P_0 + \vec{a} = P_1
> $$

If we decompose this vector equation into three equations,

$$
x_0 + \vec{a}_x = x_1
$$

$$
y_0 + \vec{a}_y = y_1
$$

$$
z_0 + \vec{a}_z = z_1
$$

Then put in a parameter $t$ such that $\vec{a} = \vec{b}t$  where $t$ is free and $\vec{b}$ is colinear with $\vec{a}$

Called the **parametric form** of a linear equation (or vector form) (see [[Parametric Equations & Polar Coordinates MOC]] - [[Vector Function]] and [[Parametric Equation]])

If we solve for $t$ for all equations, we get the **symmetric form**:

$$
\left\{ \frac{x-2}{-5} = \frac{y-5}{4}=\frac{z-1}{3}\right\}
$$

# Relationships between lines

Two lines in $R^3$ are parallel when the **direction numbers** must be proportional

> If you think of the direction numbers as a 3-D [[Vectors MOC|vector]] representing the vector's change, these vectors must all be colinear/scalar multiples of each other

To find the intersection of lines, solve for $s$ and $t$ (the two parameters in the parametric form of two lines). They **must** agree at **all three points** for ONE given value of $s$ and $t$ for the line to intersect.

**Skew lines** are lines that are **not parallel** and **do not intersect**
