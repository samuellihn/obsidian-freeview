Strong magnetic field induced by rows of coils
Magnetic field between coils cancels oiut

![[Pasted image 20220407215907.png]]

If we draw an Amperian loop around a few coils, we get this:
![[Pasted image 20220407220100.png]]
Note that the top and bottom the $dl$ and $B$ are perpendicular to the field, so they zero out when taking the dot product

However, segments $cd$ and $ab$ are parallel to the field lines, so we only need to consider those line segments, and take out the dot product

$cd$ also cancels because it is out at infinity, and the magnetic field induced by the two wires is zero at infinity. Therefore, we only need to care about $ab$

Therefore, we get (for two coils):

$$\mu_0 2i = \int_b^a{Bdl}$$

> We take out dot product because $\vec{B}$ and $\vec{dl}$ are parallel

Since at the center of the solenoid, with so many coils, the magnetic field induced by the coils is approximately straight

Therefore, we can take $B$ out of the integral:

$$\mu_0 2i = B\int_b^a{dl}$$
Then, adding up all the $dl$ we get $h$, the height of the Amperian loop

$$\mu_0 2i = Bh$$

$$B = \frac{\mu_0 2i}{h}$$
This is only for **two loops** inside of the Amperian loop

So more generically, our equation is:

$$B = \frac{\mu_0 Ni}{h}$$

> If we have more coils (more $N$) then the magnetic field is greater
> If we have more current going through the coils (more $i$) the magnetic field is also greater
> However, note that $h$ is in the denominator, so the additional coils must be packed sufficiently densely so the height doesn't increase significantly

**Turn density** of coils/loops is $n$ where $n = \frac{N}{h}$

Therefore,
$$B_{solenoid} = \mu_0 ni$$

