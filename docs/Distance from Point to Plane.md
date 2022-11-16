Given an arbitrary point $P$  with coordinates $x, y, z$, we can find the distance to a [[Vector Equation of Planes|plane]]

To do this, project a vector $\vec{v}$ from a point $Q$  (with coordinates $x_0, y_0, z_0$) that lies on the plane to the point $P$  (which doesn't)

$$\vec{v} = \langle 
x - x_0, 
y - y_0,
z - z_0 \rangle
$$

Then, to find the minimum distance to the plane, project this vector $\vec{v}$ onto the normal vector of the plane $\vec{n}$

$$D = comp_n v = \frac{n \cdot v}{|n|}$$
$$\frac{n \cdot v}{|n|} = \frac{ax + by + cz - ax_0 - by_0 - cz_0}{a^2 + b^2 + c^2} = $$

This can be derived relatively easily - no need to memorize the formula