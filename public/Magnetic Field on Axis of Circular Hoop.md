![[Pasted image 20220407225113.png]]

Apply the [[Law of Biot-Savart]] and break the ring into many tiny $dl$

![[Pasted image 20220407225458.png]]

The $z$ components of each magnetic field vector $\vec{dB}$ will cancel, leaving only all the $x$ components

The equation for the $\vec{dB}_x$ will therefore be:

$$\vec{dB}_x =\frac{\mu_0 I dl \sin\theta_1}{4\pi r^2} \cos\theta_1$$
> $\theta_1$ is just the angle between $dl$ and $r$, which in this case is just 90 degrees, so $\sin\theta_1$ is 1 so it can cancel out
> Also, $\cos\theta_2$ doesn't change for all $dl$ since the angle is always the same, so we can pull that out of the integral
> Neither does $r$, since all $dl$ are the same distance away from the point
$$B =\frac{\mu_0 I \cos\theta}{4\pi r^2} \int{dl}$$
Or, since $l = 2\pi R$, 
$$B =\frac{\mu_0 I \cos\theta}{2 r^2}  R$$

Also, $\cos\theta$ is actually $\frac{R}{r}$
![[Pasted image 20220407230445.png]]
$$B =\frac{\mu_0 I R^2}{2 r^3}$$

Don't forget that $r = R^2 + x^2$ ([[Pythagorean Theorem]])

