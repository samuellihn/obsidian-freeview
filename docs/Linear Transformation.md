Linear transformations with [[Matrix Ax=b]]

You can use a matrix multiplication to transform a vector into another vector

A matrix is an object that "acts on" a vector - **transforms it**

$$
A\vec{x} = \vec{b}
$$

$\vec{x}$ is transformed into $\vec{b}$  via multiplication via matrix $A$

> The input and output do not need to be the same size - linear transformations can change the dimensionality of vectors

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

$$
T: R^3 \rightarrow R^2
$$

A $m \times n$ matrix $A$ performs a transformation $T: R^n \rightarrow R^m$ with $T(x) = A\vec{x}$

> Because of the properties of matrix multiplication

$R^n$ is the domain, and $R^m$ is the **codomain**

The **range** is a **subset of** $R^m$

> A matrix operation may **not** be able to produce all points in $R^m$
> This is why $R^m$ is not the range

We can determine whether a resultant vector $b$ is in the range of $T$ using the [[Matrix Ax=b]] augmentation and seeing if **a** solution exists  (system is consistent)

$\vec{x}$ is called the **pre-image**, whereas $\vec{b}$ (post-transformation) is called the **image**

**What makes a transformation a linear transformation?**
- **No curves** - colinear points stay colinear
- **Retain Parallelism** - parallel lines stay parallel

Or

$$
T(\vec{0}) = \vec{0}
$$ 

- **Must produce the origin when given the origin - must stay in place**

 $$
 T(c\vec{u}  + d\vec{v}) = cT(\vec{u}) + dT(\vec{v})
 
 
 
 $$

- **Must obey vector addition and scalar multiplication**

Anything that can be represented as a matrix satisfies these two conditions. A matrix transformation is a linear transformation, and vice versa

A linear transform from $R^n$ to $R^m$ is **onto** $R^m$ if each vector $b$ in $R^m$ is the image of some vector $x$ in $R^n$

> In other words, if the range of the transformation is the codomain $R^m$, the transformation is mapping

It is **not onto** when there is no solution for **any** $b$ in $R^m$ 

> $T$ is onto $R^m$ if and only if the columns of its matrix span $R^m$

A linear transformation is **one-to-one** if each vector  if each vector $b$ in $R^m$ is the image of **one (and only one)** $x$ in $R^n$

> Similar to one-to-one function - passes horizontal and vertical line test, each solution has a **unique** input. 
> If $T(x) = 0$ only has the trivial system (see [[Homogenous System]]), $T(x)$ is one-to-one (and vice versa)

A linear transformation with matrix $A$ is one-to-one if the columns of $A$ are [[Linear Dependence|Linearly Independent]]

> A linear transformation where $m < n$ (reduces dimensionality) cannot be one-to-one (see [[Linear Dependence#Automatic Cases]])
