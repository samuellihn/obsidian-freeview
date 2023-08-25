![[Pasted image 20220414002301.png]]
If a hoop of wire is spun inside a stationary magnetic field, an EMF will be induced and current will flow through the wire due to [[Faraday's Law]], since the flux is changing as its angle is changing

![[Pasted image 20220414002557.png]]

Turning mechanical (rotational) energy into electrical energy (current)

The [[Magnetic Flux]] through the hoop can be expressed as:

$$
\Phi = \vec{B} \cdot \vec{A}
$$

> Remember that $\vec{A}$ is the [[Surface Normal]] of the area

$$
\Phi = BA \cos{\theta}
$$

Or, if we express this in terms of angular velocity $\omega$, 

$$
\Phi = BA \cos{\omega t}
$$

And since [[Faraday's Law]] wants the derivative of magnetic flux, our induced EMF equals:

$$
\frac{-N d\Phi}{dt} \rightarrow -NBA\frac{ d}{dt}\cos{\omega t}
$$

Taking the derivative with the [[Chain Rule]]:

$$
E = NBA \omega \sin{\omega t}
$$

Therefore, to maximize the EMF when turning a generator:
- Increase $\omega$, turn it faster
- increase $N$, add more loops
- Increase $B$, make the magnetic field strong
- Increase $A$, make the loops very large

However, whatever we do, the EMF will **always be a sine wave** (alternating current)

The power we are generating is not constant [[Direct Current]], but rather [[Alternating Current]], there are ways to turn AC to DC though

