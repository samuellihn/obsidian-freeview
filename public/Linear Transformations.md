Linear transformations with [[Matrix Ax=B]]

You can use a matrix multiplication to transform a vector into another vector

$$A\vec{x} = \vec{b}$$

$\vec{x}$ is transformed into $\vec{b}$  via multiplication via matrix $A$

These vectors do not hvae to be the same size

$$
\left[
\begin{matrix}
1&2&3\\
4&5&6
\end{matrix}
\right]
\left[
\begin{matrix}
7\\8\\9
\end{matrix}
\right] 
= 
\left[
\begin{matrix}
11\\12
\end{matrix}
\right] 
$$

If transferring a 3-element vector to a 2-element vector, we can describe this as

$$T: R^3 \rightarrow R^2$$

A $m \times n$ matrix $A$ performs a transformation $T: R^n \rightarrow R^m$ with $T(x) = A\vec{x}$

$R^n$ is the domain, and $R^m$ is the **codomain**

The **range** is a **subset of** $R^m$

> A matrix operation may **not** be able to produce all points in $R^m$
> This is why $R^m$ is not the range

We can determine whether a resultant vector $b$ is in the range of $T$ using the [[Matrix Ax=B]] augmentation and seeing if **a** solution exists  (system is consistent)

$\vec{x}$ is called the **pre-image**, whereas $\vec{b}$ (post-transformation) is called the **image**

**What makes a transformation a linear transformation?**
- **No curves** - colinear points stay colinear
- **Retain Parallelism** - parallel lines stay parallel

Or

$$T(\vec{0}) = \vec{0}$$ 
Must produce the origin when given the origin - must stay in place
$$T(c\vec{u}  + d\vec{v}) = cT(\vec{u}) + dT(\vec{v})$$Must  vector addition and scalar multiplication

**Anything that can be represented as a matrix satisfies these two conditions**

