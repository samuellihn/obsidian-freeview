A linear combination of vectors $y$ is the sum of vectors $v_1 ... v_n$ with respective weights $c_1 ... c_n$

$$
y = c_1 v_1 + c_2 v_2 + c_3 v_3 + ...
$$

![[Pasted image 20220912112702.png]]

You can create any vector in $R^2$ with these two vectors and respective weights, **unless they are colinear** (where you can only create different lengths of one line) or if one of these is the zero vector

> Weights don't need to be integers, they can be decimals, fractions, etc - see point $w$

Because colinear vectors are simply scaled versions of each other, they can be thought of as the same vector.

This means that you could only define vectors along a line, given one vector

This is similar in $R^3$, where if given **two non-colinear vectors**, we can only define any vector along a **plane**

$$
x_1 \left[\begin{matrix} 1 \\ -2 \\ 5\end{matrix}\right] + 
x_2 \left[\begin{matrix} 2 \\ 5 \\ 6\end{matrix}\right]
=\left[\begin{matrix} 7 \\ 4 \\ -3\end{matrix}\right]
$$

Which we can then transform into matrix form:

$$
\left[
\begin{array}{cc|c}
1&2&7\\
-2&5&4\\
5&6&-3
\end{array}
\right]
$$

If we get a consistent linear system, then $y$ is a linear combination of $x_1$ and $x_2$

And we can solve for the weights, as seen in this matrix's RREF.

$$
\left[
\begin{array}{cc|c}
1&0&3\\
0&1&2\\
0&0&0
\end{array}
\right]
$$

$$
x_1 = 3, 
x_2=2
$$

A vector equation:

$$
x_1 \vec{a_1} + 
x_2 \vec{a_2} + 
x_3 \vec{a_3} + ...
x_n \vec{a_n} = \vec{b}
$$

Has the same solution as:

$$
\left[
\begin{array}{ccccc|c}
\vec{a_1} & \vec{a_2} & \vec{a_3} & ... & \vec{a_n} &\vec{b}
\end{array}
\right]
$$

Where the $\vec{a_1}$, etc. are all column vectors

**If there is a solution, we say that vector $\vec{b}$ is in the span of $\{\vec{a_1}, \vec{a_2}, ...\}$** 

With one vector in 3D, the span is a line
With two **non-colinear** vectors in 3D, the span is a plane 
With three **non-coplanar** (or non-colinear) vectors in 3D, the vectors span $R^3$ (the entire 3-dimensional space)

> Colinear vectors are just scalar multiples of each other
> And coplanar vectors are just linear combinations of each other
