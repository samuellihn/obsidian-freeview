[[Energy]] is stored inside inductors as the magnetic field that they hold - they will induce voltage to "fight back" against a decreasing current

Given the correct conditions, an inductor will induce voltage even if there is no battery present - therefore, it has a way of storing energy

For any inductor the power stored by an inductor is the current times the voltage
$$P = iE$$
However, the [[Inductors|voltage across an inductor]] is equal to $L \frac{di}{dt}$
And since power is the rate of energy transfer ($P = \frac{dE}{dt}$),

$$P = iL\frac{di}{dt} = \frac{dE}{dt}$$
We can cancel out the $dt$ on both sides, and integrate:
$$\int_0^{i}{iLdi} = \int{dE}$$
And we get...

$$L \frac{1}{2}i^2 \Bigg|_0^i = \Delta E$$
Therefore, the energy stored inside an inductor equals:
$$ \Delta E = L \frac{1}{2}{i_f}^2 $$

Energy stored in an inductor is very similar to [[Kinetic Energy]] ($\frac{1}{2}mv^2$)

Since we established that inductance $L$ is analogous to mass $m$, and $i$ is analogous to $v$, the equations take the same form as well:
$$U_L = \frac{1}{2}Li^2$$ 
If we have a 4-henry inductor with 2 amps flowing through it at a given time, the inductor has 4 joules stored in it

