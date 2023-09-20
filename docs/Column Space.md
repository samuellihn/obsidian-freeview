A column space is a [[Subspace of Rn]] comprised of the set of all [[Linear Combinations of Vectors]] of the columns of a matrix $A$, denoted by $Col \ A$

If:

$$
A = \left[\begin{matrix}
\vec{a_1} & 
\vec{a_2} & 
\vec{a_3} & 
... & \vec{a_n}
\end{matrix}
\right]
$$

Then

$$
Span\{ \vec{a_1}, \vec{a_2}, \vec{a_3}
... \vec{a_n}\} = Col \ A$$

To find if a certain vector $\vec{b}$ is in a column space, create the [[Matrix Ax=b]] $\left[\begin{array}{c|c} A & \vec{b}\end{array} \right]$ and solve to see if it is consistent

Therefore, $Col \ A$ is defined is the set of all $\vec{b}$ for which $A\vec{x} = \vec{b}$
