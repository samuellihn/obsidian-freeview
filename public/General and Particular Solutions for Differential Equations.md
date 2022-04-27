#APCalcBC #DifferentialEquations 

# General solutions
Function with a constant of integration, not a definite function

**Separation of variables**
To solve, treat the $dy$ and $dx$ as the variables of integration, so we can integrate $x$ and $y$. Rearrange algebraically 

You should get:

$$\frac{dy}{dx} = g(y)h(x) \rightarrow \int{g(y)dy} = \int{h(x)dx}$$
Which will give you multiple constants of integration, which can be moved over to one side (usually x)

$$G(y) + c_y = H(x) + c_x \rightarrow G(y) = H(x) + c $$

Then, isolate y if needed
> If you are transforming algebraically, make sure c is the right place

# Particular solution
Given a point, asked to find the exact function by plugging in after splitting the differential equation
Given an initial solution, solve for c

Can be done right after integrating, or after algebraically transforming to find the general solution

Watch for signs, especially for square roots, make sure the signs agree

Sometimes we will get $\int{\frac{dy}{y}} \rightarrow ln|y|$, so make sure you know exponent rules