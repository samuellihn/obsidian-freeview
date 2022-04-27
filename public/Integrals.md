#APCalcBC #IntegrationIntro
An integral from $a$ to $b$ of $f(x)$with respect to $x$:
$$\int_{a}^{b} f(x) \ dx$$

> $a$ and $b$ are called the **lower** and **upper limit**
> $f(x)$ is called the **integrand**
> $dx$ is called the **variable of integration** (independent variable of integrand)

An integral expressed as an infinite reimman sumdoes not depend on which type of Reimann sum: If there are infinitely many rectangles, all the area is covered

By definintion, a definite integral is defined as:
$$\int_{a}^{b} * f(x) \ dx =
\lim_{n \to \infty}\sum_{i = 1}^{n}f(x_i)\Delta x=
\lim_{n \to \infty}\sum_{i = 1}^{n} [f(a + \frac{(b - a)i}{n})] * \frac{b-a}{n}$$

Or, with the left [[Reimann Sums|Reimman Sum]]:

$$\int_{a}^{b} * f(x) \ dx =
\lim_{n \to \infty}\sum_{i = 1}^{n}f(x_{i-1})\Delta x=
\lim_{n \to \infty}\sum_{i = 0}^{n-1} [f(a + \frac{(b - a)i}{n})] * \frac{b-a}{n}$$

Neither are more or less accurate: When defined either way, they are **exact values**

