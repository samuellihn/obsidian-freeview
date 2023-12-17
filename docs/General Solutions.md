Once a system's augmented matrix is in [[Reduced Echelon Form]], a **general solution** can be generated.

However, some variables can still be **free variables**, where they act as parameters and defining them (as arbitrary numbers) will define the rest of the variables

> Free variables can be expressed as:
> 
> $$
> x_{k} = x_{k}, x \in \mathbb{R}
> $$

With free variables, there will be infinitely many solutions. Take this system, in row reduced echelon form:

$$
\Bigg[
\begin{matrix}
1 & 2 &3 \\
0 & 0 & 0
\end{matrix}
\Bigg]
$$

In this case, $x_2$ is a free variable, and $x_1$'s value is determined by the value assigned to $x_2$
The columns without pivots are free variables, and can be assigned a value ($x_2$ and $x_4$)

$$
\left[
\begin{array}{ccccc|c}
1&6&0&3&0&0\\
0&0&1&-4&0&5\\
0&0&0&0&1&7
\end{array}
\right]
$$

We can then generate (infinitely many) solutions with arbitrary inputs (parameters) of $x_2$ and $x_4$

Once the solution set is defined in terms of constants and free variables, the system is solved
