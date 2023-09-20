Electric flux ($\Phi$): The amount of [[Electric Field#Field Lines]] flowing through an area

Flux of a uniform electric field through a flat surface is defined as:

$$
\Phi = \vec{E} \cdot \vec{A}
$$

Dot product of electric field vector and area vector

> Area vector is the area times $\hat{n}$, the [[Surface Normal]] of the area
> Causes scalar quantity

Can also be expressed as: $\Phi = |E|cos{\theta}|A|$, where $\theta$ is the angle between the surface vector and the Electric Field vector

Measured in $\frac{N}{C}m^2$

The amount of flux through a surface can be maximized by aligning the surface normal of the area and the field line, where $\cos{0} = 1$

For a non-uniform field, the area is being broken up into small pieces, $d\vec{A}$, of which the flux going through is $d\phi = \vec{E} * d\vec{A}$ and we are integrating (adding up) all the $d\phi$

$$
\phi = \int{d\phi} = \int{\vec{E} \cdot d\vec{A}}
$$

For a closed surface, such as a sphere with a point charge inside it, the [[Surface Normal]] is defined as being perpendicular to that surface and pointed outward

If we have a charge outside of a closed surface, it needs to enter and exit the surface, cancelling to zero (every surface normal has an opposite)

Therefore, since all outside charges zero out, the flux of a closed surface is simply the charge enclosed by the surface divided by $\epsilon_0$

$$
\Phi_{net} = \frac{q_{en}}{\epsilon_0}
$$

**Does not depend on a surface's shape, only the net amount of charge within the closed surface**

> In a closed surface, the field strength by the enclosed charge and the size of the surface will always be inversely proportional: the further we get, the less the field strength

Therefore, if we create a symmetrical closed surface around a charge, then all $d\vec{A}$ are the same and all $\vec{E}$ are the same, so then we can apply [[Gauss's Law]] which will simplify to:

$$
\frac{q_{em}}{\epsilon_0} = \vec{E} \cdot d\vec{A}
$$
