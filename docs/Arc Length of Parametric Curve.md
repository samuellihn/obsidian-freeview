The **arc length** of a smooth curve $C$ represented by [[Parametric Equation]]s from $t = a$ to $t= b$ is equal to length $L$:

$$
L = \int_a^b{\sqrt{\Big(\frac{dx}{dt}\Big)^2 + \Big(\frac{dy}{dt}\Big)^2}}dt
$$

To derive this equation, take the [[Arc Length of a Rectangular Equation]] equation, change the bounds of integration, then replace $\frac{dy}{dx}$ with the [[Differentiating Parametric Equation|Derivative of a Parametric Equation]]

$$
L = \int_a^b{\sqrt{1 +\Bigg(\frac{\frac{dy}{dt}}{\frac{dx}{dt}}\Bigg)^2}}dx
$$

Then, obtain a common denominator, and combine the fractions:

$$
L = \int_a^b{\sqrt{\frac{ \Big(\frac{dx}{dt}\Big)^2+ \Big(\frac{dy}{dt}\Big)^2}{\Big(\frac{dx}{dt}\Big)^2}}}dx
$$

Then, cancel the $\frac{dx}{dt}$ by multiplying and dividing by $dt$:

$$
L = \int_a^b{\sqrt{\frac{ \Big(\frac{dx}{dt}\Big)^2+ \Big(\frac{dy}{dt}\Big)^2}{\Big(\frac{dx}{dt}\Big)^2}}}\frac{dx}{dt}dt \rightarrow \int_a^b{\sqrt{\Big(\frac{dx}{dt}\Big)^2 + \Big(\frac{dy}{dt}\Big)^2}}dt 
$$