Read [[Planes in 3 Dimensions]]

The [[Surface Normal]] (normal vector) of a plane is orthogonal (perpendicular) to the plane

The normal vector of a plane is therefore orthogonal to any vector that lies in the plane

The dot product of the normal vector $\vec{n}$ and vector $\vec{v}$ is therefore 0:

Given any point $x, y, z$ which forms vector $\vec{r}$ and any point $x_0, y_0, z_0$ which forms vector $\vec{r_0}$, that are both on the plane:

The vector $r - r_0$ is therefore on the plane, and is orthogonal with normal vector $\vec{n}$. Therefore:

$$n \cdot (r-r_0) = 0$$
$$n = \langle a, b, c \rangle$$
$$r = \langle x, y, z \rangle$$
$$r_0 = \langle x_0, y_0, z_0 \rangle$$
Decomposing the equation:

$$\langle a, b, c \rangle \cdot \langle x - x_0, y - y_0, z - z_0 \rangle$$

Evaluating the dot product:

$$a(x - x_0) + b(y - y_0) + c (z - z_0)$$
Distributing and recombining:

$$ax + by + cz + (-ax_0 -by_0 - cz_0) = 0 \rightarrow ax + by + cz + d = 0 \ where \ d = -ax_0 -by_0 - cz_0$$

