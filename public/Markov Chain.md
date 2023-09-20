A **Markov Chain** is a linear difference equation that eventually settles into a steady state, where at very high values of $n$:

$$
x_{n+1} = x_n
$$

To find the **steady-state vector** of a Markov chain, consider:

$$
Ax_n = x_n
$$

And therefore,

$$
Ax_n = Ix_n \rightarrow Ax_n - Ix_n = 0
$$

Then, we can factor out $x_n$:

$$
(A-I)x_n=0
$$

The steady-state vector will be the basis vector of the one-dimensional [[Null Space]] of the matrix $A-I$

Or the basis vector of the [[Eigenvectors and Eigenvalues|eigenspace of]] $\lambda=1$ 
