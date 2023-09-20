The matrix of a linear transformation acting on vectors in $R^n$ is completely dependent on what it does to columns of the $n \times n$ identity matrix $e_1 ...e_n$

Given $T(\vec{x}) = A\vec{x}$  for all $\vec{x}$ in $R^n$

$$
A = \left[\begin{matrix}T(\vec{e_1} &T(\vec{e_2})& T(\vec{e_3})& ... &T(e_n)]
\end{matrix}\right]
$$

Where $e_1 ... e_n$ are the column of the $n$-dimensional identity matrix

This can be used to come up with general transformation matrices for common geometric transformations:

Example: To rotate a vector about the origin for any angle $\theta$:

$$
\left[
\begin{matrix}
\cos\theta & \sin\theta\\
\sin\theta & -\cos\theta\\
\end{matrix}
\right]
$$

When doing multiple fundamental transformations, this can be approached two ways:

# Compound Transformation

If we are doing a transformation $T(x)$ which involves doing a transformation $T_1$ and then a transformation $T_2$

Method 1: 
1. Find the images of $e_1...e_n$ under transformation $T_1$
2. Feed those images $T_1(e_1)...T_1(e_n)$ into $T_2$, then those images $T_2(T_1(e_1))...T_2(T_1(e_n))$ are the columns of the matrix $T(x)$

$$
T(x)=
\left[
\begin{matrix}
T_2(T_1(e_1)) & ... & T_2(T_1(e_n))
\end{matrix}
\right]
$$

Method 2:
1. Find the images of $e_1...e_n$ under transformation $T_1$
2. Generate a transformation matrix $T_1$ from $\left[\begin{matrix}T_1(e_1) & ... & T_1(e_n)\end{matrix}\right]$
3. Find the images of $e_1...e_n$ under transformation $T_2$
2. Generate a transformation matrix $T_2$ from $\left[\begin{matrix}T_2(e_1) & ... & T_2(e_n)\end{matrix}\right]$
4. Multiply the matrices **in reverse order of the transformation**:

$$
T(x) = T_2 \cdot T_1
$$
