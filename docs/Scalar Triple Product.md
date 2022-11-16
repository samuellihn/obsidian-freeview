The scalar triple product of three vectors $a, b, c$ is defined as:

$$a \cdot (b \times c)$$
Which can be evaluated with a [[Determinant]] of a 3x3 matrix with rows as vectors $a, b, c$:

$$
\begin{vmatrix}
a_1 & a_2 & a_3\\
b_1 & b_2 & b_3\\
c_1 & c_2 & c_3
\end{vmatrix}
$$
Which corresponds to the calculation:

$$
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
> See [[Cross Product]] for more details

You can also calculate the [[Cross Product]] and [[Dot Product]] seperately (easier imo)

> Make sure you calculate the [[Cross Product]] first, then the [[Dot Product]]

The scalar triple product is equivalent to the volume of a parallelepiped, a rectangular-prism-like object where every face is a parellelogram and pairs of faces are parallel:

![[Pasted image 20221027230009.png]]

> $|b \times c|$ generates the area of the bottom face. Then the dot product of $a$ with $b \times c$ generates $|b \times c| * comp_{b \times c} a$, which is equivalent to the volume


