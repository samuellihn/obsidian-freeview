Can calculate the magnetic field due to a current element

![[Pasted image 20220405224211.png]]

Using an infinitely small segment of wire $dl$, we can find the contribution of the magnetic field at that point:

$$\vec{dB} = \frac{\mu_0}{4\pi} \frac{Idl \sin{\theta}}{r^2}$$

However, we need to get $\sin{\theta}$ and $r^2$ into terms of $dl$, since that's our variable of [[Integrals|integration]]. We can do this with basic trig:

$r^2 = a^2 + y^2$ (Pythagorean Theorem)
$\sin\theta = \frac{a}{h} = \frac{a}{\sqrt{a^2+y^2}}$

Then, we can assemble out integral with $y$ as our variable of integration:

$$dB = \frac{\mu_0 Ia}{4\pi} \int_{-\infty}^{\infty}{\frac{dy}{(y^2 + a^2)^{3/2}}}$$
Integrating that, we get:

$$B = \frac{\mu_0I}{2\pi a}$$

