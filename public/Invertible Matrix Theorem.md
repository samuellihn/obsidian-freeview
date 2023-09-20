These statements are either all true or all false, in the case of an $n \times n$ **square** matrix

a. **$A$ Is an invertible matrix**

b. **$A$ is row equivalent to the $n \times n$ identity matrix

> You can transform $A$ into $I$ with only elementary row operations (see [[Inverses of Matrices]])

c. **$A$ has $n$ pivot positions** 

> So we can transform it into $I$

d. **The [[Matrix Ax=b|equation]] $Ax=0$ has only the [[Homogenous System|trivial solution]]**

> Because there is no free variable, because there are $n$ pivots

e. **The columns of $A$ form a [[Linear Dependence| linearly independent]] set** 

> Because $Ax=0$ has only trivial solution 

f. **The [[Linear Transformation]] $x \to Ax$ is one-to-one**

> Because the columns are linearly independent - see [[Matrix of a Linear Transformation]]

g. The linear transformation $x\to Ax$ has at least one solution for each $b$ in $R^n$

> An "onto" [[Linear Transformation]] (see item i)

h. **The columns of $A$ span $R^n$**

> Because there are three pivots, or because of linear independence

i. The linear transformation $x \to Ax$ maps $R^n$ onto $R^n$ 

> Because the columns of $A$ span $R^n$ - see [[Linear Transformation]], there is a linear combination of the columns of $A$ for any $b$ in $R^n$

j, k. There is an $n \times n$ matrix $C$ such that $CA = I$, and an $n \times n$ matrix such that $AD = I$ 

> If $A$ has an inverse ($C$ or $D$), than it is commutatively multiplicable to the Identity matrix
> Typically, $C=D$, because a matrix has one unique inverse

l. $A^T$ is an invertible matrix

m. The columns of $A$ form a basis for $R^n$

> Same amount of pivot (columns) as columns in the matrix, also spans $R^n$

n. $Col \ A = R^n$

> [[Column Space]] - see above, entry (m)

o. $dim \ Col \ A = n$

> [[Dimension of a Subspace]] - basis has $n$ vectors

p. $rank \ A = n$

> [[Rank of a Matrix]] - see above, entry (o)

q. $Nul \ A = \{0\}$

> See [[Rank of a Matrix]] and entry (n) - the matrix has $n$ pivots, and no free variables, and thus a zero null space

r. $dim \ Nul \ A = 0$ 

> See [[Rank of a Matrix]] and entry (p)

s. The number 0 is **not** an [[Eigenvectors and Eigenvalues|eigenvalue]] of $A$

> As is the case for a triangular matrix, or a matrix with $n$ pivots

t . The [[Determinant|determinant]] of $A$ is **not** zero

> See [[Characteristic Equation]]
