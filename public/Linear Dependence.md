A set of vectors $\{\vec{v_1}, \vec{v_2},... \vec{v_n}\}$ is linearly dependent **if and only if** one of the vectors is a linear combination of the others.

Otherwise, it is linearly dependent

OR

A set of vectors $\{\vec{v_1}, \vec{v_2},... \vec{v_n}\}$ is linearly dependent there are weights $c_1, c_2, ... c_n$ such that $c_1\vec{v_1} + c_2\vec{v_2} + c_3\vec{v_3} + c_n\vec{v_n} = 0$

OR

If the vectors  $\{\vec{v_1}, \vec{v_2},... \vec{v_n}\}$ as columns of a matrix A $\left[\begin{matrix}\vec{v_1} &\vec{v_2} &\vec{v_3} &...&\vec{v_n}\end{matrix}\right]$ have a nontrivial solution to $b = \left[\begin{matrix} 0\\...\\0\end{matrix}\right]$ in the equation [[Matrix Ax=B]] where $A\vec{x} = \vec{0}$ and the system is **consistent**

> See [[Homogenous System]]

If you have $n$ vectors in $R^n$, there will **need to be** a free variable for the system to have a nontrival solution and thus be linearly dependent

If you have $<n$ vectors and $R^n$, some need to be multiples of the other (so they can lie on the same $R^{n-1}$ dimensional object) (see [[Linear Combinations of Vectors]])

If you have a zero vector $\vec{0}$ in the set, the set is automatically linearly dependent as the coefficient for that zero vector can be anything (always has a nontrivial solution)

 