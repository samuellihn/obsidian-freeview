A [[Linear Combinations of Vectors]] of $b$ can be expressed as a matrix times a vector in the form $A\vec{x} = b$
With the columns of $A$ being the vectors being combined, and the entries in $x$ as weights:

![[Pasted image 20220915205340.png]]

> Note that $x_1 ... x_n$ is not an actual vector in space, it is simply a one-column matrix

Therefore, the matrix equation $A\vec{x} + b$ has the same solution as the [[Linear Combinations of Vectors]] equation $x_1 \vec{a_1} + x_2 \vec{a_2} + x_2 \vec{a_3}... = \vec{b}$

And therefore the same solutions as the linear equations represented by:

$$
\left[
\begin{array}{cccc|c}
\vec{a_1}&\vec{a_2}&\vec{a_3}&... &\vec{b}
\end{array}
\right]
$$

Because of this, $A\vec{x} = \vec{b}$ has a solution only if $\vec{b}$ is a linear combination of the columns of $A$

You can take the matrix [[Dot Product]] to obtain the matrix form of the system of equations

>The equation $A\vec{x}=\vec{b}$ also exhibits other properties:
>
> $$
> A(\vec{u} + \vec{v}) = Au + Av
> $$
>
> $$
> A(c\vec{u}) = c(A\vec{u})
> $$