Each vector in a [[Subspace of Rn]] can be written in one unique way as a linear combination of the [[Basis of a Subspace|basis vectors]]

If vectors $\{b_1 ... b_p\}$ are a basis for a subspace $H$, then any vector $v$ in $H$ can be generated with coordinates $\{c_1 ... c_p\}$

This can be distilled down to a vector of weights for each basis vector, denoted as the $\beta$-coordinate vector

$$
[x]_\beta = 
\left[
\begin{matrix}
c \\ \vdots \\ c_p
\end{matrix}
\right]
$$

> Assuming the basis is denoted as $\beta$

Given this information, for any vector $v$ in subspace $H$:

$$
\beta
[x]_\beta = v
\rightarrow
\left[
\begin{matrix}
b_1 & ... & b_p
\end{matrix}
\right]

\left[
\begin{matrix}
c \\ \vdots \\ c_p
\end{matrix}
\right] = v
$$

The coordinate vector has $p$ dimensions, where $p$ is the dimensionality of subspace $H$, even if $H$ lies in a larger dimension

> For example, if $H$ is a plane, then $[x]_\beta$ is a 2-dimensional vector even though $H$ may be in $R^3$

