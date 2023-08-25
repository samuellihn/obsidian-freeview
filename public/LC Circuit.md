The **LC Circuit** has a [[Capacitance|Capacitor]] and an [[Inductors|Inductor]] in series
![[Pasted image 20220417162944.png]]

If the capacitor is charged with charge $Q_0$ and the switch is closed, the capacitor will discharge and cause a current to flow around the circuit

The inductor prevents the [[Discharging Capacitors|capacitor from discharging]] instantaneously, as it induces a voltage that is opposite that of the capacitor discharge 

![[Pasted image 20220417163315.png]]

After the capacitor has discharged, there is another change in current (since the current now decreases), therefore the inductor will induce a positive voltage

This positive voltage charges the capacitor again, then it discharges, then the cycle repeats (charge goes back and forth)

The rate at which the charge goes back and forth depends on the [[Inductance of Solenoids|Inductance]] and the [[Capacitance]]

Theoretically, in a circuit with no resistance, this oscillation will go on forever

Very similar to [[Spring Harmonics]] - when energy is put in and the switch is closed, the charge will oscillate between positive and negative

The equation for period also look similar:

$$
T = 2\pi \sqrt{\frac{L}{\frac{1}{C}}} \rightarrow 2\pi \sqrt{LC}
$$

How long the capacitor takes to be positively charged, to negatively charged, then back to positively charged

$$
f = \frac{1}{2\pi} \sqrt{\frac{1}{LC}}
$$

To find the charge in the capacitor at a given time, 

$$
q = Q_0 \cos{(\omega t)}
$$

And $\omega$ is defined as $\frac{dq}{dt}$, which is current $I$

$$
i = -Q_0 \omega \sin{(\omega t)}
$$

$Q_0 \omega$ can be defined as the max current ($I_{max}$)

EMF of the inductor is  $-L\frac{di}{dt}$, which we can get taking the derivative of $i$

$$
E_L = LQ_0 \omega^2 \cos{(\omega t)}
$$

$\omega$ is the angular velocity equal to $\frac{2\pi}{T}$. Plugging in our equation for $T$, we get:

$$
\omega = \frac{1}{\sqrt{LC}}
$$

This circuit also displays conservation of energy, where the energy between the capacitor and the inductor is always constant:

$$
\frac{1}{2}\frac{1}{C}{Q_0}^2 = \frac{1}{2}Li^2 +\frac{1}{2}\frac{1}{C}q^2
$$

> Energy is stored in the [[Electric Field]] of the capacitor, and the [[Magnetic Field in Solenoid|Magnetic Field of the Inductor]]

When the capacitor is completely discharged and a current is done flowing, the inductor has all the energy. When there is no current, the capacitor has all the energy

$$
I_{max} = Q_0\sqrt{\frac{1}{LC}}
$$

> Every mechanical property of [[Spring Harmonics]] has an electrical analogue with the LC circuit
> - $m \to L$
> - [[Spring Force|Spring constant]] $k \to \frac{1}{C}$
> - $x \to q$
> - $\omega \to i$

