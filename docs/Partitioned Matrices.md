Partitioned matrices are arrays of matrices "augmented" next to each other

For example, matrix $A$ is made of matrices $W, X, Y, Z$:

$$
 
A=
\left[
\begin{array}{c|c}
W & X\\
\hline
Y & Z
\end{array}
\right]
$$

This can be used to solve for entire matrices in terms of other matrices - useful for splitting up a large matrix problem into smaller ones

> Useful to get a large matrix to fit in memory

Matrices can also be broken with following notation:

$$
 
A= 
\left[
\begin{array}{c|c}
A_{11} & A_{12} & A_{13}\\
\hline
A_{21} & A_{22} & A_{23}
\end{array}
\right]
$$

Multiplication of blocks of partitioned matrices also follows the row-column rule (see [[Matrix Multiplication]]). For example, assuming the blocks have sizes that can be multiplied:

$$
 
\left[
\begin{array}{c|c}
A_{11} & A_{12} & A_{13}\\
\hline
A_{21} & A_{22} & A_{23}
\end{array}
\right]
\left[
\begin{array}{c|c}
B_{11} & B_{12}\\
\hline
B_{21} & B_{22}\\
\hline
B_{31} & B_{32}\\
\end{array}
\right]
= 
\left[
\begin{array}{c|c}
A_{11}B_{11}+
A_{12}B_{21}+
A_{13}B_{31}
& 
A_{11}B_{12}+
A_{12}B_{22}+
A_{13}B_{32}
\\
\hline
A_{21}B_{11}+
A_{22}B_{21}+
A_{23}B_{31}
& 
A_{21}B_{12}+
A_{22}B_{22}+
A_{23}B_{32}\\
\end{array}
\right]
$$

You can perform any [[Matrix Multiplication]] and [[Inverses of Matrices|Matrix Inversion]] using block matrices just as well as regular matrices, as well as apply the [[Invertible Matrix Theorem]] to the inner matrices to determine invertibility

# Special Cases

Partitioned matrices can be upper/lower **block** triangular (see [[Matrix Terms]])

**A partitioned matrix with nonzero matrices only on the main diagonal is invertible if those nonzero entries are also invertible**
