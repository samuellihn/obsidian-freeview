
In the definition of a matrix multiplication $AB$, each column of a matrix $B$ can be viewed as a vector $[\vec{b_1} \ \vec{b_2} \ \vec{b_3} \ ... \ \vec{b_n}]$,  and the result is:

$$
AB = A
\left[
\begin{matrix}
\vec{b_1} &\vec{b_2}&\vec{b_3} & ... & \vec{b_n}
\end{matrix}
\right] = 
\left[
\begin{matrix}
A\vec{b_1} &A\vec{b_2}&A\vec{b_3} & ... & A\vec{b_n}
\end{matrix}
\right]
$$

Therefore, a matrix multiplication can be viewed as subsequent vector multiplications of the form [[Matrix Ax=b]]

> Each column $A\vec{b}_j$ is a linear combination of the columns of matrix $A$ with weights denoted by $\vec{b_j}$
Properties of matrix multiplication:

Can also multiply matrices with the [[Dot Product]]

> Called the **row-column rule**

Matrix multiplication is **not commutative**:

$$
AB \neq BA
$$

> In the product $AB$, we can say that $A$ is right-multiplied **by** $B$, or that $B$ is **left-multiplied** by $A$

Cancellation is not generally true for matrix multiplication. It **cannot  be concluded** that $AB = AC$ means that $B=C$
