Given a $3\times 3$ matrix, or any larger matrix:

$$
\left[
\begin{matrix}
a & b & c \\
d & e & f \\
g & h & i
\end{matrix}
\right]
$$

We can perform a technique called **cofactor expansion** to find the determinant:

Choose **any** row or column across which to perform the cofactor expansion:

> If choosing row 1, then we will perform cofactor expansion across $a, b, c$

Find the determinant of the $2 \times 2$ matrix obtained by crossing out the **row and column** the current element lies in

> First, we go to element $a$, so we cross out row 1 and column 1. This leaves us with:
>
> $$
>  \left[ \begin{matrix} e & f \\ h & i  \end{matrix} \right] 
> $$

Find the determinant of this $2 \times 2$ matrix

Multiply this determinant by the value of the current element, and add it to a sum

> Continuing the example:
>
> $$
> \det{A} = a\left|\begin{matrix} e & f \\ h & i \end{matrix}\right| + ... 
> $$

Repeat this for all other elements of the row/column chosen, but **negating** all "even" elements (2nd, 4th, etc.)

> $$
> \det{A} = a\left|\begin{matrix} e & f \\ h & i \end{matrix}\right|  - b\left|\begin{matrix} d & f \\ g & i\end{matrix}\right| + c\left|\begin{matrix} d & e \\ g & h\end{matrix}\right|
> $$

**Notice the alternating plus and minus signs**

This **recursive definition of the determinant** generalizes to larger matrices - find the determinants of the matrices produced by expanding across one row.

For example, for a $4 \times 4$ matrix, cofactor expansion will produce four $3 \times 3$ matrices. Given these four matrices, we can find their determinants by individually performing cofactor expansion on them again (recursion depth 2)

However, note that this has a time complexity of $O(n!)$ for a $n\times n$ matrix - factorial time! Cofactor expansion is **very inefficient** for larger matrices

When performing cofactor expansion, choose a row/column with the most zeroes. Since each term of the determinant takes the form $a_{ij}(stuff)$, if $a_{ij}=0$ that term can be eliminated from the determinant