A **transpose** of a matrix $A$, denoted by $A^T$, can be obtained by turning rows into columns and columns into rows, thus reflecting the matrix over the main diagonal:

$$
\left[
\begin{matrix}
a & b \\ c & d
\end{matrix}
\right]^T
= 
\left[
\begin{matrix}
a & c \\ b & d
\end{matrix}
\right]
$$


Also works with non-square matrices:
$$
\left[
\begin{matrix}
a & b & c & d\\
e & f & g & h
\end{matrix}
\right]^T
= 
\left[
\begin{matrix}
a & e\\
b & f\\
c & g\\
d & h\\
\end{matrix}
\right]
$$
Properties of transpose matrices:

$$(A^T)^T = A$$
$$(A+B)^T = A^T+ B^T$$
If $r$ is any scalar:

$$(rA)^T = rA^T$$
> Note that this does **not** hold true for [[Inverses of Matrices]]

$$(AB)^T = B^TA^T$$
