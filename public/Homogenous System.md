A homogeneous system is guaranteed to at least have one solution

Usually created with $\left[\begin{array}{c}0\\0\\0\end{array}\right]$ as $b$ in [[Matrix Ax=b]]

Always consistent, but then the question becomes whether there is a **nontrivial** (not $[0 \  0 \ 0]$) solution

The system:

$$
\left[
\begin{array}{ccc|c}
1&0&-\frac{4}{3}&0\\
0&1&0&0\\
0&0&0&0\\
\end{array}
\right]
$$

Has the general solution:

$$
x_1 = \frac{4}{3}x_3, \  x_2 = 0, \  x_3 \ is \ free
$$

Everything can be expressed as $cx_3$, so we can condense it into **parametric vector form:**

$$
\vec{x} =  x_3
\left[
\begin{array}{ccc|c}
\frac{4}{3}\\0\\1
\end{array}
\right]
$$

Even a system like:

$$
\left[
\begin{array}{ccc|c}
10&-3&-2&0\\
\end{array}
\right]
$$

Has the solution $x_1 = 0.3x_2 + 0.2x_2$

Which can be expressed in parametric vector form as:

$$
\vec{x} = 
x_2 
\left[
\begin{array}{ccc|c}
0.3\\1\\0
\end{array}
\right] + 
x_3
\left[
\begin{array}{ccc|c}
0.2\\0\\1
\end{array}
\right]
$$

Simply expressing the system as combinations of the free variables

Therefore, any linear system that is **not** a homogeneous system is a has a solution set which is a **translated** form of a homogeneous system

![[Pasted image 20221016222432.png]]

Parametric vector form can also express offsets in the vector, using a constant term: 

$$
\vec{x} =  x_3
\left[
\begin{array}{ccc|c}
\frac{4}{3}\\0\\1
\end{array}
\right] + 
\left[
\begin{array}{ccc|c}
-1\\2\\0
\end{array}
\right]
$$

This constant term vector $\vec{p}$ is the translation that the solution set undergoes
