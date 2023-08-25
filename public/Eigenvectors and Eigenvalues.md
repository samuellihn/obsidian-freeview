An **eigenvector of a matrix** is a vector, which if transformed by the matrix, stays on its own span

> In other words, an eigenvector is transformed into a scalar multiple of itself when multiplied by the matrix

The scalar that represents that multiplication is called the eigenvector - see the below example:

Given a matrix $A$ and vector $v$, where $Av = 2v$, the effective of mulitplying $A$ by $v$ is the same as multiplying $v$ by $2$

We call $v$ an **eigenvector of $A$** and $2$ an **eigenvalue** 

$$
\left[
\begin{matrix}
3 & -2 \\ 1 & 0
\end{matrix}
\right]
\left[
\begin{matrix}
2 \\1
\end{matrix}
\right]
 = 
\left[
\begin{matrix}
4 \\ 2
\end{matrix}
\right]
$$

$$
2
\left[
\begin{matrix}
2 \\1
\end{matrix}
\right]
 = 
\left[
\begin{matrix}
4 \\ 2
\end{matrix}
\right]
$$

**We call a nonzero vector $\vec{x}$ and a scalar $\lambda$ an eigenvector-eigenvalue pair for matrix $A$ when $Ax = \lambda{x}$ **

It is easy to find an eigenvalue given an eigenvector - transform the vector with the matrix and determine the ratio between the two vectors (see above)

However, if given a eigenvalue to find an eigenvector, it is a little harder

$$
A\vec{x} = 7\vec{x}\rightarrow A\vec{x} - 7\vec{x} = 0
$$

However, you cannot factor out $\vec{x}$ in this state, as $A$ is a matrix and $7$ is a scalar

$$
 (A- 7)\vec{x} = 0 \rightarrow invalid!
$$

Insert an identity matrix, so we can transform that scalar into a matrix:

$$
A\vec{x} = 7I\vec{x}\rightarrow (A - 7I)\vec{x} = 0
$$

Then, given the equation

$$
(A - 7I)\vec{x} = 0
$$

All vectors in the [[Null Space]] of $A - 7I$ are eigenvectors that correspond to the eigenvalue $7$

If the null space exists and is larger than $\{0\}$, then:

$$
\lambda \ is \ an \ eigenvalue \ of A
$$

> The [[Null Space]] of $(A-\lambda{I}$ is also called the **eigen space of $A$  corresponding to $\lambda$**

**The eigenvalues for a triangular matrix are the entries on its main diagonal**

> **ONLY USE THIS METHOD IF** the matrix is already in echelon form - you CANNOT row reduce a matrix into echelon form to find its eigenvalues. Use the [[Characteristic Equation]] instead if the matrix is not in echelon form

> Don't need to all be unique values - eigenvalues can have multiplicities
