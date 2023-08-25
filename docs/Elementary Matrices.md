Elementary matrices are the identity matrix with **a single elementary row operation** 

>Columns are always [[Linear Dependence|Linearly Independent]]

Multiplying any elementary matrix (that has had an elementary row operation done to it) by an equivalently sized matrix $A$ is equivalent to doing that elementary row operation directly on $A$

$$
I ( R_3 \rightarrow 5R_3) = 
\left[
\begin{matrix}
1 & 0 & 0\\
0 & 1 & 0\\
0 & 0 & 5
\end{matrix}
\right]
$$

$$
I ( R_3 \rightarrow 5R_3) \cdot
\left[
\begin{matrix}
a&b&c\\d&e&f\\g&h&i
\end{matrix}
\right]
 = 
\left[
\begin{matrix}
a&b&c\\d&e&f\\5g&5h&5i
\end{matrix}
\right]
$$

If $A$ can be transformed into $I$ with elementary matrices/elementary row operations, then $I$ can be transformed into $A^{-1}$ using the same operations, but in reverse

$$
(E_p ... E_3E_2E_1)A = I
$$

$$
A^{-1} = I(E_p ... E_3E_2E_1) = E_p ... E_3E_2E_1
$$

> This is very similar to the method used to find inverse matrices in [[Inverses of Matrices#General form to find $A {-1}$]] - relating $A$ and $I$ with elementary row operations, and playing them back in reverse


