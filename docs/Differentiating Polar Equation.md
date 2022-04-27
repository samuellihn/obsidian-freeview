[[Polar Equation]]s can have their derivatives taken the same way as rectangular equations

The derivative of a polar equation can be written as the rate of change of $r$ with respect to $\theta$:

$$\frac{dr}{d\theta}$$

Useful to know the [[Derivatives of Trigonometric Functions]] to take these derivatives

If we need to find the rate of change of $x$ or $y$ with respect to $\theta$ ($\frac{dx}{d\theta})$, etc. then the [[Product Rule]] may need to be used (since we are most likely multiplying by a trig function that doesn't cancel)

The **slope of the tangent line** will still be in the rectangular form, so we still need to find $\frac{dy}{dx}$

To find $\frac{dy}{dx}$,

Convert the parametric equation into rectangular form ($x(\theta)$, $y(\theta)$), then use the [[Differentiating Parametric Equation]] with $t = \theta$:

$$\frac{dy}{dx} = \frac{\frac{dy}{d\theta}}{\frac{dx}{d\theta}}$$

Then, apply [[Product Rule]] as needed (for $x = r\cos\theta$ and $y = r\sin\theta$):
$$\frac{dy}{dx} = \frac{r(\cos\theta) + \sin\theta(\frac{dr}{d\theta})}{r(-\sin\theta) + \cos\theta (\frac{dr}{d\theta})}$$
Likewise, just like with the [[Second Derivative of Parametric Equation]]s, our second derivative looks like:

$$\frac{d^2y}{dx^2} = \frac{\frac{d}{d\theta} \frac{dy}{dx}}{\frac{dx}{d\theta}}$$
