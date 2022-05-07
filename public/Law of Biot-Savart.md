Can calculate the magnetic field due to a current element

![[Pasted image 20220405224211.png]]

Used to find the magnetic field due to a wire at a point (usually the wire will be straight, simplifying things significantly)



Using an infinitely small segment of wire $dl$, we can find the contribution of the magnetic field at that point:

$$\vec{dB} = \frac{\mu_0}{4\pi} \frac{Idl \sin{\theta}}{r^2}$$

![[Pasted image 20220505094938.png]]

However, we need to get $\sin{\theta}$ and $r^2$ into terms of $dl$ (assuming $a$ is the distance away form the wire), since that's our variable of [[Integrals|integration]]. We can do this with basic trig:

> We do this because for each $dl$, $\theta$ and $r$ changes, so we need to write these as functions of $l$ (and $a$, which is a constant)


$r^2 = a^2 + l^2$ (Pythagorean Theorem)
$\sin\theta = \frac{a}{h} = \frac{a}{\sqrt{a^2+l^2}}$

Then, we can assemble out integral with $y$ as our variable of integration:

$$dB = \frac{\mu_0 Ia}{4\pi} \int_{-\infty}^{\infty}{\frac{dl}{(l^2 + a^2)^{3/2}}}$$
Integrating that, we get:

> Can't be integrated by simple [[u Substitution]]

$$B = \frac{\mu_0I}{2\pi a}$$

Some problems are much simpler to do, like finding the magnetic field at a center of a circle (constant $r$, $\sin\theta = 1$ always) 

Important to model symmetry (like with the circle) and make things constant as much as possible



