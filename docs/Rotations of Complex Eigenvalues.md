When a matrix that represents a [[Rotation as Linear Transformation]] is inthe form:

$$
C = 
\left[
\begin{matrix}
a & -b \\ b & a
\end{matrix}
\right]
$$
Then the eigenvalues of $C$ are $a \pm bi$

Then, $r = |\lambda| = \sqrt{a^2 + b^2}$ (the magnitude of the complex eigenvalues)

For which:

$$
A = 
r
\left[
\begin{matrix}
a/r & -b/r \\ b/r & a/r
\end{matrix}
\right]
= 
\left[
\begin{matrix}
r & 0 \\ 0 & r
\end{matrix}
\right]
\left[
\begin{matrix}
\cos\theta & -\sin\theta \\ \sin\theta & \cos\theta
\end{matrix}
\right]
$$

Where $\theta$ is the angle of rotation

As seen above, this transformation can be seen as composition of the rotation through the angle $\theta$ and a scaling by $r = |\lambda|$

It is also easier to diagonalize these matrices, as:

$$
P = 
\left[
\begin{matrix}
\Re v_1 & \Im v_1
\end{matrix}
\right]
$$
So if $A$ is the composition of a rotation and a scaling, then $A = PCP^{-1}$ and $C$ is the rotation "inside" $A$

This can generalize to higher dimensions - if $A$ is a $3 \times 3$ matrix with complex eigenvalues, then there is a plane on $\Re^3$ where $A$ acts as a rotation

