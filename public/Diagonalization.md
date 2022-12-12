If $A = PBP^{-1}$ for some invertible matrix $P$, then $A$ and $B$ are [[Similar Matrices]]
$$AP = PB$$
If we can find a diagonal matrix $D$ such that $A = PDP^{-1}$, then $A$ is similar to $D$, and we can use $PDP^{-1}$ to compute powers of $A$

$$
A^3 = (PDP^{-1})(PDP^{-1})(PDP^{-1})  \rightarrow
A^3 = PDP^{-1}PDP^{-1}PDP^{-1} 
A^3 = PD^3P^{-1} 
$$
Why?

Since $D$ is a diagonal matrix, it is much easier to compute powers of $D$:

Given a diagonal matrix $D$:

$$D = 
\left[
\begin{matrix}
a_{11} & ... & ... & ...\\
\vdots & a_{22} & ... & ...\\
\vdots & \vdots & a_{33} & ...\\
\vdots & \vdots & \vdots & \ddots
\end{matrix}
\right]
$$
Then

$$D^n = 
\left[
\begin{matrix}
a_{11}^n & ... & ... & ...\\
\vdots & a_{22}^n & ... & ...\\
\vdots & \vdots & a_{33}^n & ...\\
\vdots & \vdots & \vdots & \ddots
\end{matrix}
\right]
$$
To diagonalize a matrix:

Find the eigenvalues, using methods described in the [[Characteristic Equation]] or [[Eigenvalues for Large Matrices]]

Find the eigenvectors of these eigenvalues (see [[Eigenvectors and Eigenvalues]] and find the basis for the eigenspace)

The matrix $P$ is described by the vectors of the eigenbases for $A$

And the matrix $D$ is described by the eigenvalues of $A$ written on the main diagonal

It is important to maintain the correct orders for the vectors
