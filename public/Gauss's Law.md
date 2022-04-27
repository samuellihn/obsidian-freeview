The net electric flux through any imaginary closed surface is equal to the net charged enclosed within that surface divided by $\epsilon_0$

> Note: $\oint$ is a **closed surface integral**, a special type of definite integral that integrates every small part of a closed surface **without needing to define bounds**


$$ \oint{\vec{E} \cdot d\vec{A}} = \frac{q_{en}}{\epsilon_0}$$

Used to solve for the electric field at a point if we know the enclosed charge and the area (we can create a Gaussian that touches our point of interest)

If we mock a Gaussian where the direction of the electric field and the surface normal is parallel at every point, we can get:

$$\oint{EdA} = \frac{q_{em}}{\epsilon_0}$$
And if our Gaussian also has $E$ be the same at every $dA$, $E$ can be taken out of the integral as a constant, and according to the [[Fundemental Theorem of Calculus]]:

$$E \oint{dA} = EA$$

Then subsitute $A$ with whatever the surface area of the object is (for a sphere, $4\pi r^2$)

We can connect this back to the equation for the [[Electric Field]] at a point mocking a sphere at that point so $A = 4\pi r^2$:

$$E = \frac{1Q}{4\pi r^2} = \frac{KQ}{r^2}$$

> We can mock surfaces that are easy to calculate: perpendicular to charge, radially aligned, etc.

1. Draw electric field lines
2. Use symmetry to pick a Gaussian (enclosed) surface that is perpendicular to the electric field lines
3. $\oint{\vec{E} \cdot d\vec{A}}$ should turn into $E * A$, since the field will be uniform
4. Solve for $E$ by equating to $\frac{q_{en}}{\epsilon_0}$

Sometimes, we don't enclose the entire charged object with the closed surface. However, if the object is uniformly charged, we can use **density** to find $q_{en}$

$$\sigma = \frac{q_{en}}{area \ of \ Gaussian}$$
Measured in $\frac{C}{m^2}$
Then, we can replace $A$ with $a$, the area of our Gaussian, and $q_{en}$ with $\sigma * a$.
