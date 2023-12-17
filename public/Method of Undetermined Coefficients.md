In non-homogenous differential equations of the type $L[y] = b(x), consider the associated homogeneous equation: $L[y] = 0$

The "complementary solution" $y_c(x)$ is the general solution of the homogenous equation $L[y] = 0$

The "particular solution" $y_p(x)$ is a solution to the non-homogeneous solution $L[y] = b(x)$

The general solution to $L[y] = b(x)$ is:

$$y(x) = y_c(x) + y_p(x)$$
The **method of undetermined coefficients** allows us to find $y_p$ when it is a constant-coefficient DE and $b(x)$ is in a "nice family"

> "Nice families" are closed with respect to differentiation
> - Exponentials
> - Polynomials
> - Linear combinations of sines and cosines

To use this method, we first solve the homogeneous DE $L[y] = 0$ using the [[Characteristic Polynomial Method]], then guess **one** solution to the DE with an **undetermined coefficient**. Then plug it into the DE and solve for that coefficient

If $b(x) = b_1(x) = b_2(x)$, and:

- y_{p_1}(x) is a solution to L[y] = b_1(x)
- y_{p_2}(x) is a solution to L[y] = b_2(x)

Then $y(x) = y_{p_1}(x) + y_{p_2}(x)$ solves $L[y] = b_1(x) + b_2(x)$

This means we can simply split up $b(x)$ if it has more than one term



