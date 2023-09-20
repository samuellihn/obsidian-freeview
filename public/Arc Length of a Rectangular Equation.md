#APCalcBC #ApplicationIntegrals 

Adding up infinitely many secant line segments



Where $dy$ is a small change in $y$
And $dx$ is a small change in $x$
Meaning $ds$, according to the [[Pythagorean Theorem]] the length of the small line segment = $\sqrt{(dx)^2 + (dy)^2}$

And then we solve for $\frac{dx}{dy}$ by factoring out $(dx)^2$ (which is the derivative of the function $y$):

$$
ds = \sqrt{1 + \Big(\frac{dy}{dx}\Big)^2}
$$

Therefore, to add up infinitely many $ds$:

$$
s = \int_a^b{ds} \rightarrow \int_a^b{\sqrt{1 + \Big(\frac{dy}{dx}\Big)^2}} \ dx
$$

For a given function $f$, this means that the arc length from $a$ to $b$ is:

$$
\int_a^b{\sqrt{1 + f'(x)^2}\ dx}
$$

Can be used to find the distance of a path modeled by a mathematical function, or the perimeter of a function whose side is modeled by a function
