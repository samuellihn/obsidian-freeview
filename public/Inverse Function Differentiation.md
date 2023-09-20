[[Implicit Differentiation]] can be used to take the derivative of an inverse function - just switch $y$ and $x$ and use implicit differentiation to find $\frac{dy}{dx}$

However, there is a faster way:

$$
{f^{-1}}'(x) = \frac{1}{f'(f^{-1}(x))}
$$

The $f^{-1}(x)$ swaps the $y$ value into its corresponding $x$ value, then we take the reciprocal of the derivative

Note that this is **not** the [[Chain Rule]]
