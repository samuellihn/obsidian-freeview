A set of vectors $\{\vec{v_1}, \vec{v_2},... \vec{v_n}\}$ is linearly independent if a matrix of a [[Homogenous System]] with those vectors as columns has only the trivial solution

> Linear independence if 
> 
> $$

x_1 \vec{a_1} + 
x_2 \vec{a_2} + 
x_3 \vec{a_3} + ...
x_n \vec{a_n} = \vec{0}$$
> **Has only the trivial solution**


Otherwise, it is linearly dependent




If the vectors  $\{\vec{v_1}, \vec{v_2},... \vec{v_n}\}$ as columns of a matrix A $\left[\begin{matrix}\vec{v_1} &\vec{v_2} &\vec{v_3} &...&\vec{v_n}\end{matrix}\right]$ have a nontrivial solution to $b = \left[\begin{matrix} 0\\...\\0\end{matrix}\right]$ in the equation [[Matrix Ax=b]] where $A\vec{x} = \vec{0}$ and the system is **consistent**

>  A set of vectors $\{\vec{v_1}, \vec{v_2},... \vec{v_n}\}$ is linearly dependent there are nonzero weights $c_1, c_2, ... c_n$ such that $c_1\vec{v_1} + c_2\vec{v_2} + c_3\vec{v_3} + c_n\vec{v_n} = 0$

# General Cases

A set of one vector $\vec{v}$ is linearly dependent if and only if $\vec{v} \neq \vec{0}$

> A set of vectors $\{\vec{v_1}, \vec{v_2},... \vec{v_n}\}$ is linearly dependent if and only if some vector $v_m$ is a linear combination of the preceding vectors
> **Not every vector in a linearly independent set is a linear combination of its preceding vectors!**

Therefore, for sets of two or more vectors, the set is linearly **dependent** if some vector in the set is spanned by all the other vectors

> For two vectors, the set is linearly dependent if and and only if the vectors are colinear (there is no other way for the second vector to be a linear combination of the first)

# Automatic Cases

If the matrix created by a set of vectors (as columns) has more columns than rows, the set is automatically linearly dependent (more vectors than dimensionality of vector)

> Says nothing about inverse case (less or equal vectors than dimensionality)

> This is why a [[Linear Transformation]] cannot be one-to-one if it reduces the dimensionality ($T(x): R^n \rightarrow R^m$ where $m<n$)

If the zero vector $\vec{0}$ is in the set, the set is automatically linearly dependent

> The coefficient the zero vector can be anything, so it always has nontrivial solutions


 
