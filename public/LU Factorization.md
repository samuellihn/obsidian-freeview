LU (lower-upper) factorization is a method of [[Solving Linear Systems]] that breaks up a matrix $A$ into $L$ and $U$ factors that can reduce the number of operations needed to solve a system

$A$ is an $m \times n$ rectangular or square matrix that can be reduced to row echelon form **without row interchanges**

L, an $m \times m$ **square, invertible** matrix, takes the form of a **unit** lower triangular matrix (see [[Matrix Terms]]):

$$
\left[
\begin{matrix}
1 & 0 & 0 & 0\\
* & 1 & 0 & 0\\
* & * & 1 & 0\\
* & * & * & 1 \\
\end{matrix}
\right]
$$
$U$, an $m \times n$  matrix, is an echelon form of A (for example:)

$$
\left[
\begin{matrix}
P & * & *& * & *\\
0 & P & *&* &*\\
0 & 0 & 0 & P & * \\
0 & 0 & 0 & 0 & P
\end{matrix}
\right]
$$
To solve an [[Matrix Ax=b]] equation with an LU factorization:

$$Ax = b \rightarrow LUx=b$$
Therefore:

$$Ux = y$$
$$Ly= b$$
Solve $Ly = b$ for $y$, and then $Ux = y$ for $x$

These take less operations because the matrices are both triangular

To create an $LU$ factorization:

1. Reduce $A$ to an echelon form $U$ using row replacement operations
2. Construct matrix $L$ such that the same sequence of row replacement operations used above reduce $L$ to $n \times n$ identity matrix $I$

To do this, reduce $A$ into echelon form $U$, paying special attention to the entries **below the current pivot of interest** used to create zeroes in that column

Then, copy all those entries into $L$, and make the matrix unit lower triangular (make all entries on the main diagonal 1)

Verify by ensuring $LU=A$

pg. 126-7