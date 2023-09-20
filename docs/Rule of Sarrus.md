Shortcut for computing [[Determinant]] of a $3 \times 3$ matrix

Given a $3 \times 3$ matrix:

$$
\left[
\begin{matrix}
a & b & c \\
d & e & f \\
g & h & i
\end{matrix}
\right]
$$

Append the first two columns of a matrix to itself:

$$
\left[
\begin{matrix}
a & b & c \\
d & e & f \\
g & h & i
\end{matrix}
\right]
\begin{matrix}
a & b \\
d & e \\
g & h 
\end{matrix}
$$

Then, add the three "main" diagonals ($aei,\  bfg,\  cdh$) and subtract the three other diagonals ($ceg,\ afh,\ bdi$)

Much easier to visualize:
![[Pasted image 20221210203754.png]]
Mathematically:

$$
\det{A} = aei + bfg + cdh - ceg - afh - bdi
$$

or, if using index notation:

$$
\det{A} = 
a_{11}a_{22}a_{33} + 
a_{12}a_{23}a_{31} + 
a_{13}a_{21}a_{32} - 
a_{31}a_{22}a_{13} - 
a_{32}a_{23}a_{11} - 
a_{33}a_{21}a_{12}
$$
