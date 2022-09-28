
General form of quadric surfaces:
$$Ax^2+By^2+Cz^2+Dxy+Exz+Fyz+Gx+Hy+Iz+J=0$$

# Summary
Equation | Characteristic | Surface | Orientation
---|---|---|---
$\frac{x^2}{a^2} + \frac{y^2}{b^2} + \frac{z^2}{c^2} = 1$ | No minus signs | Ellipsoid 
$\frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z^2}{c^2} = 0$ | No linear terms | Elliptic cone | Opens along axis of negative term
$\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ | Only two terms | Cylinder | Runs along axis of missing term
$\frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z^2}{c^2} = 1$ | One minus sign | One-sheet hyperboloid | Opens along axis of negative term
$-\frac{x^2}{a^2} - \frac{y^2}{b^2} + \frac{z^2}{c^2} = 1$ | Two-minus signs | Two-sheet hyperboloid | Opens along axis of **positive** term
$\frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z}{c} = 0$ | One linear term and two quadratic terms with same sign| Elliptic Parabloid | Opens along axis of linear term
$\frac{x^2}{a^2} - \frac{y^2}{b^2} - \frac{z}{c} = 0$ | One inear terms, two quadratic terms with opposite signs| Hyperbolic Parabloid | Opens along axis of linear term (both ways, 90 degrees offset from each other)

# Ellipsoid
![[Pasted image 20220925210351.png]]
$$\frac{x^2}{a^2} + \frac{y^2}{b^2} + \frac{z^2}{c^2} = 1$$
Observe that if $x$, $y$, or $z$ is set to zero, the **trace** on the $xy$ plane, etc. is the standard form of an ellipse

> This is how quadric surfaces should be visualized on paper - by determining the traces on the three base planes

If $a=b=c$ then we get a sphere - see [[Spheres and Cylindrical Surfaces]]

> Note - this equation will **always be** centered at the origin unless additional terms are added

# Cone

![[Pasted image 20220925211049.png]]
$$\frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z^2}{c^2} = 0$$

The cone will "open" in the axis that corresponds to the negative term

Trace in $xy$ plane will be a point at origin:  $x^2 + y^2 = 0$

We can isolate the top and bottom by explicitly solving for the axis of the negative term:

$$z = \sqrt{c^2\left(\frac{x^2}{a^2} + \frac{y^2}{b^2}\right)}$$

(Add $-$ in front of the square root for bottom half)

# Cylinder

![[Pasted image 20220925211531.png]]

A circle on the $xy$ plane, projected to $z = \infty$ and $z = -\infty$

All characteristics of 2D circle/ellipse apply

Will run along axis that is not present in equation (makes sense - this dimension is unbound)

# One-sheet Hyperboloid

$$\frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z^2}{c^2} = 1$$
![[Pasted image 20220925211926.png]]

Traces: 
- Ellipse/circle on $xy$ plane (on the two positive terms)
- Hyperbolas (can be different) on $xz$ plane (different signs)

Opens along axis of negative term

> Note: different from cone because it equals 1 instead of 0, allowing for the trace at $z = 0$ to be a circle

# Two-sheet Hyperboloid

![[Pasted image 20220925212811.png]]

$$-\frac{x^2}{a^2} - \frac{y^2}{b^2} + \frac{z^2}{c^2} = 1$$
**No trace in xy-plane**: there are no values of $x$ and $y$ that will produce a value $>1$, as they are both squared and negated. The equation does not hold true until $\frac{z^2}{c^2}\geq 1$

Traces are hyperbolas in in other planes just like [[#One-sheet Hyperboloid]]. However, they are oriented in a different way as the negative term is swapped

This surface opens along the axis of the **positive** term

The top or bottom can be isolated in a similar method to [[#Cone]]s (explicitly solving for $z$)

# Elliptic Parabaloid

![[Pasted image 20220925213547.png]]

$$\frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z}{c} = 0$$

Trace is a point at $z = 0$, as $x$ and $y$ must both equal zero

From there, opens up with cross-sections as ellipses (if rearranged and $z$ set to arbitrary number, we get the ellipse general equation)

$$\frac{x^2}{a^2} + \frac{y^2}{b^2} = \frac{z}{c}$$

The linear terms determines the axis that the surface opens along

The linear term can also have its sign flipped to flip the surface across the plane (in thsi case, a negative $c$ would make the surface open downwards)

# Hyperbolic Parabloid
![[Pasted image 20220925214429.png]]
$$\frac{x^2}{a^2} - \frac{y^2}{b^2} - \frac{z}{c} = 0$$
The central parabola will open up along the axis of the linear term

Traces:
- The trace along the $xy$ plane is a **degenerate hyperbola** ($\frac{x^2}{a^2} - \frac{y^2}{b^2} = 0$), or a pair of intersecting lines (see [here](https://www.chegg.com/learn/calculus/precalculus/degenerate-hyperbola))
- The trace along the other two planes are parabolas, one negative and one positive (because of the opposite signs of the two quadratic terms)

Note that the parabolas **both** get larger as we go away from the origin, one will be clearer than the other because of the drawing of the surface

