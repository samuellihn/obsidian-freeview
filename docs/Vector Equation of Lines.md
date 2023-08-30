Read [[Lines in 3 Dimensions]] if haven't already

The **vector form of a line** $\vec{r}$ takes the form $\vec{r_0} + t\vec{v}$

It is very similar to the parametric equation(s) for a line, but with $x, y, z$, equations put into vectors:

Given parametric equations:

$$
x = x_0 + \vec{a}_xt
$$

$$
y = y_0 + \vec{a}_yt
$$

$$
 z= z_0 + \vec{a}_zt
$$

The vector equation for that line is:

$$
\vec{r} = \vec{r_0} + t\vec{a}
$$

Which breaks down to:

$$
\vec{r} = 
\langle x_0, y_0, z_0 \rangle
+
t\langle a_x, a_y, a_z \rangle
$$

To convert the vector form into symmetric equations, it helps to break it into parametric equations and convert the vector form that way

If not, the general form of the symmetric equations is the same:

$$
\frac{x - x_0}{a_x} = 
\frac{y - y_0}{a_y} = 
\frac{z - z_0}{a_z}
$$

A line in vector form can also be used to express a line segment, by putting bounds on $t$

To do this, first find the vector form of a line that goes through points $P$ and $Q$, using the vector $\vec{PQ}$ (or some scalar multiple)

Then constrain $t$ to a value which corresponds with the first point $P$  when plugged into the vector form, and another value which corresponds to the second point $Q$ when plugged into the vector form.

If $\vec{r}$ denotes the vector form of the line, and $a$ and $b$ are upper and lower bounds:

$$
\vec{r}(a) = P
$$\$$
$$

\vec{r}(b) = Q$$
Then,

$$
\bar{PQ}= \vec{r}(t) \ when  \  \{ a < t < b\}
$$ 
