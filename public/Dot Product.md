The dot product is the sum of the component-wise multiplication of two vectors

For vectors in $R^3$ (3-dimensional space):

$$a \cdot b = a_1b_1 + a_2b_2 + a_3b_3$$

> This is an example in 2-dimensional space:
> $$\langle 5, 4 \rangle \cdot \langle 7, 3 \rangle = 3 \times 5 + 4 \times 7 = 15 + 28 = 43$$


**Note that the result of a dot product operation between two vectors is a scalar, not a vector!**

# Properties of Dot Product

| Property             | Formula                                      |
| -------------------- | -------------------------------------------- |
| Commutativity        | $a \cdot b = b \cdot a$                      |
| Distributivity       | $a \cdot (b + c) = a \cdot b + a \cdot c$    |
| Scalar Associativity | $c(a \cdot b) = (ca) \cdot b = a \cdot (cb)$ |
| Square Property      | $a \cdot a = \|a\|$                                 |
| Zero Vector          | $\vec{0} \cdot a = a \cdot \vec{0} = 0$      |

> Proof of the square property:
> $$a \cdot a = (a_1)(a_1) + (a_2)(a_2) + (a_3)(a_3) = a_1^2 + a_2^2 + a_3^2 = |a|^2$$
> Since $|a| = \sqrt{a_1^2 + a_2^2 + a_3^2}$, therefore $|a|^2 = a_1^2 + a_2^2 + a_3^2$

Due to the [[Law of Cosines]], the dot product can be used to find the angle between two vectors

$$a \cdot b = |a||b| \cos{\theta}$$
> To see applications of the dot product:
> [[Orthogonal Projections]]
> [[Work]]