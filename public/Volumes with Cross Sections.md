#APCalcBC #ApplicationIntegrals 

Cross sections are perfect squares, with a flat base (the graph) 
**Not** a prism - sides are not parallel

if $y_1$ and $y_2$ are the top and bottom bounding functions of an area,

And $A(s) = s^2$

The volume of a solid with square cross sections is given as:

$$\int_a^b{(y_1 - y_2)^2}dx$$

In general, the volume of a solid whose cross-sectional areas can be found by function $A(s)$ is, where $s=y_1 - y_2$:

$$\int_a^b{A(y_1 - y_2)}dx$$

For triangles, pay attention to which side is side $s$, and calculate the other dimensions from there

> For cross sections perpendicular to the x-axis: integrate in terms of x
> For cross sections perpendicular to the y-axis: integrate in terms of y

Shape | Integral
-----| -------
Square | $\int_a^b{s(x)^2} \ dx$
Isoceles Right Triangle (side)| $\int_a^b{\frac{x^2}{2}} \ dx$
Icoseles Right Triangle (hypotnuse)| $\int_a^b{\frac{x^2}{4} \ dx}$
Equilateral Triangle | $\int_a^b{x^2 * \frac{\sqrt{3}}{4}} \ dx$
Semicircle| $\int_a^b{x^2 * \frac{\pi}{8}} \ dx$

Any function that accepts a side length and produces an area can be used, just draw out the shape to find the relation
> Can be any geometric shape, so long as it accepts x or $s(x)$
