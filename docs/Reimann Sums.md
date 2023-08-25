#APCalcBC #IntegrationIntro

Reimann sums "sample" the value of the curve to provide an estimate



LRAM: Left endpoint rectangular approximation method

Create rectangles with the top left corner touching the curve
![[Pasted image 20211209092409.png]]
If the function is increasing, underestimate. If the function is decreasing, overestimate

RRAM: Right endpoint![Pasted image 20211209092409.png](app://local/C%3A%5CUsers%5Csamli%5COneDrive%5CNotes%5CSamuel%20Lihn%5CPasted%20image%2020211209092409.png?1639059849112)

Top right corner touches the curve
![[Pasted image 20211209092517.png]]
if the function is increasing, this is an overestimate. if it is decreasing, this is an underestimate

MRAM: Use middle height to touch the curve

Neither an underesimate or overestimate, depends on the curve
Gives a better approximation than LRAM and RRAM

![[Pasted image 20211209092532.png]]

Trapezoidal method: Create a trapezoid for each interval and calculate the area of the trapezoids and sum them

Under/overestimate depends on [[Concavity|concavity]]
Concave up: overestimate
Concave down: underestimate

![[Pasted image 20211209092423.png]]

the smaller the interval, the more accurate the approximation is


The width of each rectangle on the interval $(a, b)$ is y, or $\Delta x$, the change in $x$ between each rectangle
And the height is $f(x')$, depending on where we choose to measure the height
Therefore, the Reimman sum would be:

$$
\Delta x * f(x_1) + \Delta x * f(x_2) + \Delta x * f(x_3)...
$$

Which we can express in summation notation like this:

$$
\frac{b-a}{n} * \sum_{i=1}^{n}f(a + i*(\frac{b-a}{n}))
$$

Ideally, $n \to \infty$ so $\Delta x \to 0$
The limit that expresses this is called an [[Integrals]]