To project a vector onto another vector, we are taking the "component" of the vector we are projecting that is **colinear with** the vector we are projecting **onto**

![[Pasted image 20221027214124.png]]

# Scalar Projection
The **scalar** projection of $a$ **onto** $b$ is known as $comp_ba$

> Note the location of the vectors: $a$ is projected **onto** $b$, therefore $b$ is in the subscript


Using the [[Dot Product]]:

$$
a \cdot b = |a||b|\cos\theta \rightarrow 
\cos\theta = \frac{a\cdot b}{|a||b|}
$$

Because the vector and its projection form a right triangle (see above) with angle $\theta$ between the two vectors:

$$
\cos\theta = \frac{opp}{hyp} = \frac{comp_ba}{|a|}
$$

Therefore:

$$
\frac{comp_ba}{|a|} = \frac{a \cdot b}{|a||b|} \rightarrow comp_ba = \frac{ |a|(a \cdot b)}{|a||b|} = \frac{a \cdot b}{|b|}
$$

> Remember - this will give a **scalar**, not a vector!
 
The geometric description is a little easier, because of right-triangle trigonometry:

$$
comp_ba = |a| \cos{\theta}
$$

# Vector Projection

The vector projection ($proj_ba$) is colinear to the vector being projected onto $b$ with a magnitude equal to $comp_ba$

To find $proj_ba$, multiply a [[Unit Vectors|Unit Vector]] that is colinear wtih $b$ with $comp_ba$:

$$
proj_ba = (comp_ba)\left(\frac{b}{|b|}\right)
$$

Therefore, because $comp_ba = \frac{a \cdot b}{|b|}$:

$$
proj_ba = \frac{a \cdot b}{|b|}\left(\frac{b}{|b|}\right) = \frac{a \cdot b}{|b|^2}\vec{b}
$$