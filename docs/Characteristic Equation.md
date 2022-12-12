For an eigenvalue $\lambda$ to exist for a matrix $A$, then the [[Null Space]] of $A - \lambda{I}$ must not be $\{0\}$

Meaning that the solution of $(A-\lambda{I})x=0$ has a free variable, meaning it is missing pivot(s) (see [[Homogenous System]])

Which, according to the [[Invertible Matrix Theorem]], the matrix is singular (not invertible) and therefore the determinant is zero

> We are using a $2 \times 2$ matrix here in the example, but this rule generalizes to larger matrices - see [[Eigenvalues for Large Matrices]]

For a $2 \times 2$ matrix:

$$
\left[
\begin{matrix}
a  -\lambda& b \\ c & d - \lambda

\end{matrix}
\right]
$$

From there, find the algebraic solution set of $\lambda$ for which $\det{A} = 0$:

$$\det{A} = ad - bc = (a - \lambda)(d - \lambda) - bc = 0$$

> This (in this case, quadratic) polynomial is called the **characteristic polynomial**

Eigenvalues can have different multiplicities, as factored polynomials can have repeated factors

Given an $n \times n$ square matrix, counting multiplicities, there should be $n$ factors coming from the $nth$ order characteristic polynomial

And from there, find the eigenvector(s) corresponding to the eigenvalue(s) (see [[Eigenvectors and Eigenvalues]])
