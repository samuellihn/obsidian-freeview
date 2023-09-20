Read [[Linear Difference Equation]]

When systems without a true "steady state" are present (when the system doesn't converge to one state vector), analysis of all eigenvalues is required to determine long-term behavior

Find the [[Eigenvectors and Eigenvalues]] of the stochastic matrix

Then, write the initial state $x_0$ as a composition of the eigenvalues:

$$
x_0 = c_1v_1 + c_2v_2
$$

Therefore, the state vector can be described as:

$$
x_k = c_1(\lambda_1)^kv_1 + c_2(\lambda_2)^kv_2
$$

Therefore, our statevector $x_k$ can be described as an addition of two [[Geometric Series]] (times a vector)

And we can analyze the coefficients (in this case, the eigenvalues) to determine the long-term behavior of the system

> Similar to [[Geometric Series Test]]

Depending on the long-term behavior of the system, the origin can be an **attractor, repeller, or saddle point**

| Origin as | Behavior                                                                 | Cause                                                            |
| --------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| Attractor | All values approach $0$ ($statevector \to \vec{0}$)                      | $\lambda_1 < 1, \lambda_2 < 1$                                   |
| Repeller  | All values approach $\infty$ ($statevector \to \vec{\infty}$)            | $\lambda_1 < 1, \lambda_2 < 1$                                   |
| Saddle    | Values do both (attraction then repulsion, or repulsion then attraction) | $\lambda_1 < 1, \lambda_2 > 1$ or $\lambda_1 > 1, \lambda_2 < 1$ |
