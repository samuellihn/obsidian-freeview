Certain **first-order differential equations** are separable and can be solved by integration

**Separation of variables**
To solve, treat the $dy$ and $dx$ as the variables of integration, so we can integrate $x$ and $y$. Rearrange algebraically 

You should get:

$$
\frac{dy}{dx} = g(y)h(x) \rightarrow \int{g(y)dy} = \int{h(x)dx}
$$

Which will give you multiple constants of integration, which can be moved over to one side (usually x)

$$
G(y) + c_y = H(x) + c_x \rightarrow G(y) = H(x) + c 
$$

Then, isolate y if needed

> If you are transforming algebraically, make sure c is the right place

If given initial conditions in an initial value problem, combine the constants of integration ($C = c_x + c_y$) and solve for C given the initial condition.
