To take the indefinite integral of a [[Vector Function]], take the integrals of each component of the function

If $F(t)$ and $G(t)$ are antiderivatives of $f(t)$ and $g(t)$, the two components of the vector function $r(t)$, then:
$$\int{r(t)} = \Big\langle \int{f(t)dt}, \int{g(t)dt} \Big\rangle = \langle F(t) + C_1, G(t) + C_2 \rangle$$
> Note that there are **two distinct** constants of integration - they will be different

Do the same thing with definite integrals:
$$\int_a^b{r(t)} = \Big\langle \int_a^b{f(t)dt}, \int_a^b{g(t)dt} \Big\rangle = \langle F(b) - F(a), G(b) - G(a)\rangle$$
> We can indicate that we will plug in $a$ and $b$ throughout the vector function, like this:
> $$\langle F(t), G(t)\rangle\Bigg|_a^b$$

Integration of a vector-valued function will always result in a vector

If given an initial value, solve for $C_1$ and $C_2$ by plugging in the initial $t_1$ and using the provided $r(t_1)$ to solve for the constants

Some problems may require double integration, solve for the constants twice (all initial conditions will be provided)

> When integrating twice, define two more **distinct** constants of integration ($C_3$, $C_4$)

