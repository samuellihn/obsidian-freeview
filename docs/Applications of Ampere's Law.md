Current Density $J = \frac{I}{A}$

However, note that sometimes $\mu_0$ is not the permeability of free space $\mu$, when we are trying to find the magnetic field at a point inside of a material

![[Pasted image 20220407113703.png]]

If our Amperian loop is inside material, then we should only consider the current **inside of the Amperian loop**

Therefore, 

$$
\mu J \pi r^2 = \oint{\vec{B} \cdot \vec{dl}}
$$

> $J\pi r^2$ is the current density pre area times the area of the Amperian membrane

The only $\vec{B}$ we care about is the one inside of the Amperian loop

Same scenario as the one explored in [[Ampere's Law]], where we can get rid of the dot produce since $\vec{dl}$ and $\vec{B}$ are in the same direction

> With [[Gauss's Law]], we're making the [[Surface Normal]]s and the [[Electric Field]] parallel/colinear, whereas with [[Ampere's Law]] we are making the axes of the magnetic field and wires parallel

Just like with [[Conductors in Electrostatic Equilibrium]], we need to consider the behavior of the magnetic field both inside and outside the current carrier, using two separate equations

> Consider the length/radius of the Amperian loop inside the current carrier, and then outside - they are different

Coaxial cables work because the current in the center wire and the current in the sheath are often in opposite directions, so the magnetic field vectors cancel out

Between the inner wire and conducting sheath, the magnetic field is positive, because the current of the inner wire flows through the Amperian membrane

However, if we encompass the entire Amperian membrane, there is no net current (assuming the same current is flowing through both wires), so there is no magnetic field

> Less magnetic field is good for electronics
> This only works because of the radial symmetry of the two conductors—putting two wires next to each other does not achieve this same effect
