The power going through a resistor according to [[Joule's Law]]

If we are asked to maximize the power going through an external resistor, the equation would be:

![[Pasted image 20220325235951.png]]

And therefore, the power flowing through the circuit would be:

$$
P = \Bigg(\frac{V}{R_{total}}\Bigg)^2 * R
$$

$$
P = \Bigg(\frac{V}{R + r}\Bigg)^2 * R
$$

Which gives a curve with a maximum

$$
P = \frac{V^2 R}{R^2 + 2Rr + r^2}
$$

> Note that $r$ and $V$ are given constants
We can use the [[Derivative Tests#First Derivative Test]] to find the maximum of the function (take derivative with respect to $R$)

This gives us (use the [[Quotient Rule]]):

$$
\frac{dP}{dR} = \frac{V^2(R^2 + 2Rr + r^2) - V^2 R(2R + 2r)}{(R^2 + 2Rr + r^2)^2} = 0
$$

Simplifying and eliminating the denominator, we get:

$$
v^2(-2^2+ r^2)= 0
$$

$R^2 = r^2$ or $R = r$ is when $\frac{dp}{dt} = 0$ 

> Note that in the graph of the original function, there is only one (positive) point where $\frac{dp}{dt} = 0$, therefore there is no need to check increasing/decreasing behavior, we know this is the max we are looking for

Substituting back into the power equation,

$$
P_{max} = \frac{V^2 R}{(2R)^2} \rightarrow \frac{V^2 R}{4R^2} \rightarrow \frac{V^2}{4R}
$$

In conclusion, maximum power is achieved when external resistance is equal to internal resistance in a DC circuitA

