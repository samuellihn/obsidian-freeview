We can find the derivatives of inverse trigonometric functions using [[Implicit Differentiation]]

To find the derivative of $y = \sin^{-1}{x}$

Swap $x$ and $y$:

$$y = \sin^{-1}{x} \rightarrow x = \sin{y}$$
Then, implicitly differentiate:

$$\frac{d}{dx} [x] = \frac{d}{dx}[\sin{y}]$$
$$1 =  \cos(y)\frac{dy}{dx}$$


$$\frac{1}{\cos{y}} = \frac{dy}{dx} = \frac{1}{\sqrt{1 - x^2}}$$

> Since we want our derivative in terms of $x$, we need to use trigonometric rules to make this possible
> 

Function | Derivative | Function | Derivative
---|---|---|---
$y = \sin^{-1}{u}$ | $\frac{dy}{dx} = \frac{u'}{\sqrt{1 - u^2}}$ |  $y = \cos^{-1}{u}$ | $\frac{dy}{dx} = -\frac{u'}{\sqrt{1 - u^2}}$ 
$y = \tan^{-1}{u}$ | $\frac{dy}{dx} = \frac{u'}{1 + u^2}$ |  $y = \cot^{-1}{u}$ | $\frac{dy}{dx} = -\frac{u'}{1 + u^2}$
$y = \sec^{-1}{u}$ | $\frac{dy}{dx} = \frac{u'}{\|u\|\sqrt{u^2 - 1}}$| $y = \csc^{-1}{u}$ | $\frac{dy}{dx} = -\frac{u'}{\|u\|\sqrt{u^2 - 1}}$

> Note that the complement of each function is simply the negation of the derivative
> $u$ is what is contained inside inside of the original trig function (already accounts for [[Chain Rule]]). 
> If $u = x$, then $u' = 1$











