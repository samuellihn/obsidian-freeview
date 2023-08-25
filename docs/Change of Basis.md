Given a basis vector (see [[Coordinates of Subspaces]]) $[x]_B$, which is a nonstandard basis (NOT $e_1 ... e_n$), and another basis $[x]_C$ in another nonstandard basis, we can convert between them:

Given $[x]_B =   \left[ \begin{matrix} 3\\1 \end{matrix} \right]$ and $[x]_C =   \left[ \begin{matrix} 6\\4 \end{matrix} \right]$

Then $x = 3b_1 + 1b_2$ and $x = 6c_1 + 4c_2$

To convert between them given equations relating vectors $b$ and $c$:

$$
b_1 = 4c_1 + c_2
$$

$$
b_2 = -6c_1+ c_2
$$

Substitute in:

$$
x = 3(4c_1+c_2) + 1(-6c_1 + c_2) \rightarrow  6c_1 + 4c_2 = \left[\begin{matrix}
6\\4
\end{matrix}\right]
$$

This can be generalized into a matrix equation:

$$
[x]_C = 
\left[
\begin{matrix}
[b_1]_C & [b_2]_C 
\end{matrix}
\right]
\left[
\begin{matrix}
[x]_B
\end{matrix}
\right]
$$

Or, in our example:

$$
[x]_C = 
\left[
\begin{matrix}
4 & -6 \\ 1 & 1
\end{matrix}
\right]
\left[
\begin{matrix}
3 \\1 
\end{matrix}
\right]
$$

This matrix is the **change-of-coordinates** matrix from  bases $B$ to $C$ 

$$
P_{C\leftarrow B} = 
\left[
\begin{matrix}
[b_1]_C & 
[b_2]_C 
& \cdots & 
[b_n]_C 
\end{matrix}
\right]$$


If we want to go the other direction, from $C$ to $B$:

$$P_{B \leftarrow C} = (P_{C\leftarrow B})^{-1}$$

To find a change-of-coordinates matrix given four basis vectors:

Augment, like you're finding an [[Inverses of Matrices|inverted matrix]]

$$

\left[
\begin{array}{cc|cc}
c_1 & c_2 & b_1 & b_2
\end{array}
\right]

$$


Then row reduce, until:


$$

\left[
\begin{array}{c|c}
I & P_{C\leftarrow B}
\end{array}
\right]

$$

