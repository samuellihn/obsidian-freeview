A **basis** for a subspace (a [[Column Space]] or [[Null Space]] $b$ of $R^n$ is a [[Linear Independence|linearly independent]] set of $H$ that spans $H$

The **standard basis** for $R^3$ are are the three columns of the $3 \times 3$ identity matrix: $\{e_1, e_2, e_3\}$

# Basis of a null space

To find the basis for a null space given a matrix, solve the [[Homogenous System]] $A\vec{x} = 0$, and express the set in parametric vector form (see [[Homogenous System]])

> Given an $n \times m$ matrix $A$, you will get a vector with $m$ entries
> The basis for $Nul \ A$  is defined as the set of the vectors (equal to the number of free vars) in parametric vector form.

For example, if a matrix  $\left[ \begin{array}{c|c}   A & 0 \end{array} \right]$ has a solution set:

$$
x_2 
\left[ \begin{matrix}
2 \\ 1 \\ 0 \\ 0 \\ 0 
\end{matrix} \right] + 
x_4
\left[ \begin{matrix}
1 \\ 0 \\ -2 \\ 1 \\ 0
\end{matrix} \right] + 
x_5
\left[ \begin{matrix}
-3 \\ 0 \\ 2 \\ 0 \\ 1
\end{matrix} \right]
$$

Then the basis for $Nul \ A$  is:

$$
\left\{\left[ \begin{matrix}
2 \\ 1 \\ 0 \\ 0 \\ 0 
\end{matrix} \right], 
\left[ \begin{matrix}
1 \\ 0 \\ -2 \\ 1 \\ 0
\end{matrix} \right], 
\left[ \begin{matrix}
-3 \\ 0 \\ 2 \\ 0 \\ 1
\end{matrix} \right]
\right\}
$$

To find the basis of a column space given a matrix, find the pivot columns of the matrix in the echelon form (or the [[Reduced Echelon Form]] - those are the basis of the subset

> We do this because the non-pivot columns in a matrix are redundant - they can be written as linear combinations of the pivot columns

# Basis of a column space

To find the basis of a column space, find a subset of the columns of $A$ that are linearly independent - this will correspond to the pivot columns of $A$

To identify the pivot columns, reduce the matrix down to echelon form and take note of which columns have a pivot

Then, go back to the ORIGINAL matrix $A$ and extract those columns as the basis for $Col \ A$

Therefore, to find the basis for $Col \ A$, where:

$$
A = 
\left[
\begin{matrix}
1 & 3 & 3 & 2 & -9\\
-2 & -2 & 2 & -8 & 2\\
2 & 3 & 0 & 7 & 1\\
3 & 4 & -1 & 11 & -8
\end{matrix}
\right]
$$

First, find an echelon form of $A$

$$
ref(A) = 
\left[
\begin{matrix}
1 &0 & -3 & 5 & 0\\
0 & 1 & 2 & -1 & 0\\
0 & 0 &  0 & 0 & 1\\
0 & 0 &  0 & 0 & 0\\
\end{matrix}
\right]
$$

From the row echelon form of $A$, we can see that columns 1, 2 and 5 are the pivot columns of $A$

Therefore, going back to the original matrix, extract columns 1, 2, and 5 to form the basis for $Col \ A$:

$$
\left\{
\left[
\begin{matrix}
1 \\ -2 \\ 2 \\ 3
\end{matrix}
\right],
\left[
\begin{matrix}
3 \\ -2 \\ 3 \\ 4
\end{matrix}
\right],
\left[
\begin{matrix}
-9 \\ 2 \\ 1 \\ -8
\end{matrix}
\right]
\right\}
$$
