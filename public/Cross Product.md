The cross product between two vectors in $R^3$ (3-dimensional space) is defined as:

$$
a \times b = 
\langle 
a_2b_3 - a_3b_2,
a_3b_1 - a_1b_3,
a_1b_2 - a_2b_1
\rangle
$$

# Determinant Definition

The cross product can also be defined in terms of [[Determinant|determinants]]:

$$
\begin{vmatrix}
a & b \\c & d
\end{vmatrix} = ad -bc
$$

For vectors in $R^3$, we need to use a determinant in a 3 by 3 matrix:

$$
\begin{vmatrix}
a_1 & a_2 & a_3\\
b_1 & b_2 & b_3\\
c_1 & c_2 & c_3
\end{vmatrix}
= 
a_1 
\begin{vmatrix}
b_2 & b_3 \\ c_2 & c_3
\end{vmatrix} 
-
a_2
\begin{vmatrix}
b_1 & b_3 \\ c_1 & c_3
\end{vmatrix}
+
a_3
\begin{vmatrix}
b_1 & b_2 \\ c_1 & c_2
\end{vmatrix}
$$

If we replace $a_1$, $a_2$ and $a_3$ with [[Unit Vectors]] $i, j, k$, we get, and use $a_1...a_3$ and $b_1...b_3$ as the components of vectors $a$ and $b$:

$$
\begin{vmatrix}
i & j & k \\
b_1 & b_2 & b_3\\
c_1 & c_2 & c_3
\end{vmatrix}
$$

The cross product can be defined as:

$$
a \times b = 
i
\begin{vmatrix}
b_2 & b_3 \\ c_2 & c_3
\end{vmatrix} 
-
j
\begin{vmatrix}
b_1 & b_3 \\ c_1 & c_3
\end{vmatrix}
+
k
\begin{vmatrix}
b_1 & b_2 \\ c_1 & c_2
\end{vmatrix}
$$

Which equals:

$$
a \times b = \Bigg\langle
\begin{vmatrix}
b_2 & b_3 \\ c_2 & c_3
\end{vmatrix},
-
\begin{vmatrix}
b_1 & b_3 \\ c_1 & c_3
\end{vmatrix},
\begin{vmatrix}
b_1 & b_2 \\ c_1 & c_2
\end{vmatrix}
\Bigg\rangle
$$

The cross product $a \times b$ produces a vector that is orthogonal (perpendicular) to the plane formed by ([[Linear Combinations of Vectors|spanned by]]) the two operands $a$ and $b$

> The placement of the vector result (either up or down, into or out of the page, etc.) can be found with the right hand rule (see note in [[Force on a Charged Particle in a Magnetic Field]])

The magnitude of the result of $a \times b$ is equivalent to:

$$
|a \times b| = |a||b|\sin{\theta}
$$

The magnitude of a cross product of vectors $a$ and $b$ ($|a \times b|$) is also equal to the area of a parallelogram formed by the two vectors

![[Pasted image 20221027223514.png]]

> Figure describes why

# Properties of Cross Product

| Property                     | Formula                                                           |
| ---------------------------- | ----------------------------------------------------------------- |
| **Anti**commutativity        | $a \times b = -b \times a$                                        |
| Scalar Distributivity 1      | $c(a \times b) = ca \times b = a \times cb$ where $c$ is a scalar |
| Scalar Distributivity 2      | $a \times (b + c) = a \times b + a \times c$                      |
| Dot Product Associativity    | $a \cdot (b \times c) = (a \times b) \cdot c$                     |
| Definitely Not Associativity | $a \times (b \times c) = (a \cdot c)b - (a \cdot b) c$            |

The cross product is **not commutative** and **not associative**

If vectors $a$ and $b$ are parallel and nonzero, $a \times b = 0$

> If the vectors are parallel, they don't form a parallelogram - therefore, the area of that parallelogram (nonexist) is zero.

If the vectors are perpendicular or orthogonal, $a \times b = |a||b|$ because $\sin\theta = 1$

> Applicatons of the cross product:
> [[Scalar Triple Product]]
> [[Torque]]
