
Magnetic field is more or less uniform inside a solenoid, so we can say that $\Phi = BA$

> Where $B$ is field inside the solenoid, which is about uniform. which is equal to $\mu_0 ni$ 
> And $A$ is the cross-sectional area of the solenoid

Therefore, the EMF (voltage) induced by the solenoid will be equal to (plugging in the [[Magnetic Field in Solenoid]] equation):
$$-N \frac{d}{dt}\Big[\mu_0 ni\pi R^2\Big]$$
Only $i$ varies with time, so:
$$-N  \mu_0 n\pi R^2\frac{di}{dt}$$

> B: [[Magnetic Field in Solenoid]] ($\mu_0 n i$)
> A: $\pi R^2$
> $N$: number of coils, since we need to consider all the areas of each coil

Which looks very similar to the equation for $V_{inductor}$. Therefore, in our equation for the induced voltage
$$L = N  \mu_0 n\pi R^2$$
Inductance depends on:
- Number of turns
- Turn density
- Radius of inductor (squared)

Or, since $n = \frac{N}{h}$,
$$L = \frac{N^2  \mu_0 \pi R^2}{h}$$
This is how we calculate the inductance given the physical characteristics of a given inductor
Very similar to how we can calculate the capacitance for [[Parallel Plate Capacitors]] given their physical dimensions

**This equation only works for a solenoid with an empty core (core with air inside)

![[Pasted image 20220416125928.png]]

The units for $L$ are **Henries**

 1 Henry equal to 1 volt per amp per second
 $$H = \frac{Volt}{\frac{Amps}{seconds}}$$

An inudctor with an inductance of 3 henries will induce a voltage of 3 volts per each 1 amp per second of current change

Direction of the induced voltage will depend on the direction of the current and whether the current is decreasing/increasing