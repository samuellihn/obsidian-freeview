**Motor Effect**: by moving a wire through a magnetic field, a current can be induced through the wire

A magnetic field will exert force on a current carrying wire (see [[Force on a Current Carrying Wire]])

This is called the **motor effect** where electrical energy is converted to mechanical energy

The opposite also applies, if you take mechanical energy and force a wire through a magnetic field, current can be generated

> Electrons in the wire are moving through magnetic field, so therefore a current will be generated (see [[Force on a Charged Particle in a Magnetic Field]]), assume the wire is the charged particle and see where the current is going

If you use the right-hand rule, be careful that the flow of electrons down the wire is **opposite** the flow of conventional current!

Galvanometer measure very small currents, we often needit when applying Faraday's law since our currents are not very large

Because of the motor effect, if we move a magnet through a coil of wire, so long as the magnet is moving current will flow through the wire

**Faraday's Law** makes this quantitative, with the equation:

$$
E_{induced} = \frac{-d\phi_B}{dt}
$$

> Remember that $E$ is simly voltage ([[Electrical Potential Energy]])

Voltage induced around a loop of wire will equal the inverse of the change in [[Magnetic Flux]] over time (how fast the flux changes in the loop)

Also, since $\frac{d\phi}{dt}$ is just the instantaieous rate of change of flux, we can also write this as:

$$
E_{induced \ avg} = \frac{-\Delta\phi_B}{\Delta t}
$$

If there are more than Faradian loop, the amount of induced voltage is multiplied by the number of coils

$$
E_{ind} = -N\frac{d\phi_B}{dt}
$$

> Where $N$ is the number of coils within the changing flux

Additionally, the induced voltage is also equal to:

$$
\oint{\vec{E}\cdot \vec{dl}}
$$

In summary, to induce a current in a loop of wire, $\Phi_B$ needs to be changed:

And since $\Phi_B = \int{\vec{B} \cdot \vec{dA}}$
To induce current we can:
1. Increase or decrease $\vec{B}$
2. Increase or decrease $\vec{A}$
3. Change direction of $\vec{A}$ with respect with  $\vec{B}$ (which will change $\Phi$ because of the dot product)

Changing the orientation of $\vec{A}$ and $\vec{B}$ is how generators induce current, since changing the orientation of a Faradian loop changes the flux assuming the magnetic field stays still

> Make sure that the magnetic field and surface normal is what changes, just rotating the Faradian loop will not do anything if the orientation of the [[Surface Normal]] doesn't change


This is the second part of Faraday's Law: 

$$
E_{ind} = \oint{\vec{E} \cdot \vec{dl}}
$$

Very similar to [[Electrical Potential as Path Integral]] - voltage is equal to the path integral of the force the field puts on a charged particle

> Note that $E$ is the electric field **on the Faradian loop**
> And the $dl$ are infinitesimally small lengths that **make up** the Faradian loop

However, if we use $$
However, if we use V_{ab} = \int_a^b{\vec{E} \cdot \vec{dl}}
However, if we use $$

around a circle, we will get zero

We won't get zero with Faraday's law because this isn't an electrostatic field!

We can use the two sides of [[Faraday's Law]] to solve for things on either sides:

$$
\oint{\vec{E}\cdot \vec{dl}} = -N\frac{d\Phi}{dt}
$$

> Solve the field similarly to other dot product problems like [[Gauss's Law]] or [[Magnetic Flux]] - field is parallel to $\vec{dl}$ so we can get rid of the dot product, $\vec{E}$ wil probably be uniform because of radial symmetry, so we can end up with $E* l$

