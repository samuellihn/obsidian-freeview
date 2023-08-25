One application of [[Faraday's Law]]

![[Pasted image 20220413213343.png]]

When the size of the loop can change via a sliding bar that forms the fourth side of the loop

Changing the size of a loop changes the amount of [[Magnetic Flux]] going through the loop

As the magneitc flux increases, [[Lenz's Law]] tells us that a current will be induced to counteract that change in flux

> In this example, since the flux is going downward and the amount of flux increases, a counter-clockwise current will be produced (which creates upward flux)

Don't forget [[Faraday's Law]] when considering the current

$$
\Phi  = \int{\vec{B} \cdot \vec{dA}}
$$

If the sliding side is $s$ and the stationary side is $L$
![[Pasted image 20220413235947.png]]

$$
\Phi = B \int{dA} =  BLs
$$

And since $E$ (voltage) is equal to $\frac{-N d\Phi_B}{dt}$:

$$
E = \frac{-BLs}{dt}
$$

$B$ and $L$ are constant, so we are left with

$$
E = -BL \frac{ds}{dt}
$$

And the change in length per time of $s$ is just the velocity $V$:

$$
E = -BLv
$$

If we wanted to find the amount of current we would use [[Ohm's Law]]

$$
I = \frac{V}{R} \rightarrow I = \frac{BLv}{R}
$$

> We can drop the negative sign because we'll use [[Lenz's Law]] anyways to find the direction

And then, the power can be calculated. In this context, the power is **the rate at which mechanical energy is converted into electrical energy**

$$
P = I^2 R \rightarrow P = \frac{B^2L^2v^2}{R}
$$

However, because of [[Force on a Current Carrying Wire]], if the current is flowing up in the moving wire, there will be a force pulling the wire to the left

$$
F = I\vec{l}\times \vec{B} \rightarrow IlB \ because \ \vec{l} \perp \vec{B}
$$

$$
F = \frac{B^2L^2v}{R}
$$

But recall from [[Power]] that $P = Fv$, so we can plug this into our equation

$$
P = \frac{B^2L^2v}{R} v
$$

And we get our original equation for power

