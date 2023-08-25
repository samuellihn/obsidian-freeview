Division does not exist as a matrix operation, but some matrices have inverses that can be useful for [[Solving Linear Systems]]

The inverse of a matrix $A$ is denoted by $A^{-1}$

> $A^-1$ is uniquely determined by $A$: an $A$ can only produce a **single** inverse matrix

Inverse of 2x2 matrix:

$$
A^{-1}
= 
\frac{1}{ad-bc}
\left[
\begin{matrix}
d & -b \\ -c & a
\end{matrix}
\right]
$$

> Main diagonal entries swap locations, the other entries swap signs

Matrices are can be inverted are **invertible matrices**, or **nonsingular matrices**

Non-invertible matrices are called **singular matrices**

The columns of a non-invertible matrix are [[Linear Dependence|Linearly Dependent]] (see [[Invertible Matrix Theorem]])

> Linearly Independent matrices are always invertible

Properties of inverse matrices:

$$
AB(B^{-1}A^{-1}) = BB^{-1}AA^{-1} = II =  I
$$

> Where $I$ is the $n \times n$ identity matrix

Generally, the product of a  $n \times n$ invertible matrix is invertible, and the inverse is the product of the inverses in reverse order

> If $A$ and $B$ are invertible, $(AB)^{-1}$ exists, and $(AB)^{-1}= B^{-1}A^{-1}$
 > This rule is very similar to the [[Matrix Transpose]] property

See [[Elementary Matrices]]

# General form to find $A^{-1}$

If $A$ can be transformed into $I$, then $I$ can be transformed into $A^{-1}$  using the same row operations

To find $A^{-1}$:

Augment $A$ with $I$

$$
\left[
\begin{array}{c|c}
A & I
\end{array}
\right]
$$

Use elementary row operations to transform the matrix into row reduced echelon form ($A$ will turn into $I$)

Then, where $I$ used to be will turn into $A^{-1}$

$$
\left[
\begin{array}{c|c}
A & I
\end{array}
\right]
\rightarrow
\left[
\begin{array}{c|c}
I & A^{-1}
\end{array}
\right]
$$

> This is easier than the determinant method used typically for 2 by 2 matrices

The algorithm can also  be viewed as solving for the weights $x$ that solve the [[Matrix Ax=b]] equation, where $x$ is column $j$ of the inverse matrix and $b$ is column $e_j$ of the identity matrix

$$
A
\left[
\begin{matrix}
x_1 & x_2 & x_3 &... &x_m
\end{matrix}
\right]
 = 
\left[
\begin{matrix}
e_1 & e_2 & e_3 &... &e_m
\end{matrix}
\right]
$$

Therefore, we are solving for:

$$
Ax_1 = e_1 ... Ax_m = e_m
$$

But since the sequence of elementary row operations are the same, we can do them simultaneously
