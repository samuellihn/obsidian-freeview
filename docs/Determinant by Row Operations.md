Based on the [[Properties of Determinants]], we know what happens to the determinant of a matrix based on what row operations are applied to it

Therefore, if transform a matrix with elementary row operations into triangular form, we can find the determinant and "backtrack" our steps to find the determinant of the original matrix

Row replacements do nothing, so no "backtracking" is required

Negation is "reversible" so negate the matrix as many times as how many row swaps you do

However, scalar multiplication is not commutative, so the new determinant will be **multiplied** by whatever you multiply the row by

So to recover the original determinant, **divide** by that scalar

$$
\det B = k\det A  = \left|\begin{matrix}
ka & kb \\
c & d 
\end{matrix}\right|
$$

Therefore, if $\det B$ is the determinant of the triangular matrix, we need to **divide** by $k$ to get the original determinant

However, since all we need is the triangular (or echelon) form, there should be no scalar multiplication necessary - only row addition and row swaps

Which leads to this general method, assuming the matrix is invertible:

$$
\det{A} = (-1)^r(product \ of \ pivots \ in \ U)$$

Where $U$ is the upper triangular matrix and $r$ is the number of row interchanges needed
