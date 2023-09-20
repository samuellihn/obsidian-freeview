A difference equation is a discrete time series that produces vectors $$
A difference equation is a discrete time series that produces vectors x_0, x_1, ... x_k
A difference equation is a discrete time series that produces vectors 
A difference equation is a discrete time series that produces vectors 
A difference equation is a discrete time series that produces vectors 
A difference equation is a discrete time series that produces vectors $$

Such that $x_1 = Ax_0$, and $x_2 = Ax_1$, and so on

Like a [[Geometric Series]], but with vectors and a matrix instead of numbers and a scalar

The **flow matrix** models how the values move from frame to frame

> Columns of the flow matrix add to one

Columns represent the inputs, whereas rows represent the outputs

Then, given an initial value $x_0$ and transformation matrix $A$ to find the values after $k$ cycles:

$$
x_k = A^{k}x_0
$$

The vectors in the series are called the **state vectors**, and the matrix that transforms them is called the **stochastic matrix**


A **Markov Chain** is a LDE-defined system with a steady state, or equilibrium state
