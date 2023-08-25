#APCalcBC #DifferentialEquations 

# Exponential Growth

If we are given a differential equation in which an amount is **growing at a rate proportional to its value**:

$$
\frac{dy}{dt} = ky
$$

> This is, by definition, exponential growth

And an initial condiiton:

$$
y(0) = A
$$

Then:

$$
y = Ae^{kt}
$$

Derivation: [[Derivation of Exponential Growth]]

# Logistic Growth

$$
\frac{dy}{dt}=ky(a-y) \ or \ \frac{dy}{dt}=ky(1 - \frac{y}{a})
$$

For initially exponential growths that "level off" at a certain point

General solution is:

$$
y = \frac{a}{1+be^{-akt}}
$$

First half looks like an exponential, but it has a point of inflection where it then looks like logarithmic growth as y gets closer and closer to the value $a$

y is concave up from $0 < y < \frac{a}{2}$
y is concave down from $\frac{y}{2} < y < a$

> Point of inflection exists when $y = \frac{a}{2}$, and $y$ is increasing here at its greatest rate
> $y = a$ is called the carrying/limited capacity
> $y(t)$ is always increasing

Derivation: too fucking hard 