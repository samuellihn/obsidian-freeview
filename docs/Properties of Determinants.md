If given a $2\times 2$ matrix with a determinant:
$$\det A  = \left|\begin{matrix}
a & b\\
c & d \\
\end{matrix}\right|$$

**Any row interchange** negates the determinant

$$-\det A  = \left|\begin{matrix}
c & d \\ a & b
\end{matrix}\right|$$

> Doesn't matter which rows are being interchanged

Scalar multiplication multiplies a determinant by $k$
$$\det B = k\det A  = \left|\begin{matrix}
ka & kb \\
c & d 
\end{matrix}\right|$$

> Be careful here - the determinant of the **row** matrix is multiplied by $k$
> Thought exercise - think of what happens when you do [[Cofactor Expansion]] across that newly multiplied row (for larger matrices) - all the terms in that equation are now multiplied by $k$

Row additions **do not change the determinant**

$$\det A  = \left|\begin{matrix}
a + kc &  b + kd \\ c & d
\end{matrix}\right|$$
For multiplied matrices:

$$\det{A}\det{B} =\det{(AB)}$$
