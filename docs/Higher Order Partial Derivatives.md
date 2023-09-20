Given a function of two variables, there can be four combinations of second order [[Higher Order Derivatives]]:

The two "standard" partial derivatives:

$$
f_{xx}= \frac{\partial}{\partial x }\left(\frac{\partial f}{\partial x }\right)
$$

$$
f_{yy}= \frac{\partial}{\partial y }\left(\frac{\partial f}{\partial y }\right)
$$

These determine the rate of change of the derivative when going along the same "slice" that was used to find the first-order partial derivative

> Can determine the "concavity" of the traces that we take the first-order derivatives along

The two "mixed" partial derivatives

$$
f_{xy}= \frac{\partial}{\partial y }\left(\frac{\partial f}{\partial x }\right)
$$

$$
f_{yx}= \frac{\partial}{\partial x }\left(\frac{\partial f}{\partial y }\right)
$$

These determine how the partial derivative changes as we slide the "trace" along the other axis

Most of the time, the two mixed partial derivatives will be equal, such that the order of differentiation doesn't matter

$$
f_{xy} = f_{yx}
$$

According to **Clairaut's Theorem**, this happens when the mixed partial derivatives are both continuous. 

Extending this into even higher order derivatives, we can save a lot of time as the number of "unique" gets larger

For example, if taking a third order partial derivative:

$$
f_{xxy}
$$

And we need to find derivatives $f_{xyx}$ and $f_{yxx}$, then if $f_{xxy}$ is continuous, then we can conclude that:

$$
f_{xxy} = f_{xyx} = f_{yxx}
$$

> Note that the number of times we differentiate to each variable is important: for example, $f_{xxy} \neq f_{xyy}$!
