Inductance is the application of [[Faraday's Law]] and [[Lenz's Law]] to electic circuits

 If we put a solenoid in a circuit, it is called an **inductor**, which has **inductance**
 
![[Pasted image 20220414233632.png]]

If we change the value of the variable resistor we change the current in the circuit (and thus the current that goes through the solenoid), and therefore we change the [[Magnetic Field in Solenoid]] (inductor)

This means that the [[Magnetic Flux]] is changing in the solenoid, which will induce EMF and therefore a voltage will be induced in that solenoid

This effect is called **self-inductance**

If the current goes down, the magnetic field in the inductor will decrease, therefore the flux in the inductor will decrease

This will cause the inductor to induce a voltage across itself, acting like a battery (so long as current is **changing**)

![[Pasted image 20220415143347.png]]

> Current is decreasing, so the inductor will induce positive voltage across itself to try to stop the current from changing

In summary, **inductors try to prevent a change in current**, because when current changes, flux changes, and according to [[Lenz's Law]], coils don't like that and try to resist it

If current through the inductor is... | The inductor will...
---|---
Increasing | Induce a negative voltage across itself
Decreasing | Induce a positive voltage across itself
Constant | Do nothing (induce zero EMF)

![[Pasted image 20220415143722.png]]

**Inductance coils act like batteries only when the current inside them is changing**

The amount of voltage induced is:

$$V_{inductor} = -L \frac{di}{dt}$$

> $L$ is the inductance of the inductor
> $-\frac{di}{dt}$ - will always negate the change (derivative) of a current

[[Newton's Laws of Motion#Second Law of Motion]] is the mechanical analogue to inductance

$F_{net} = m \frac{dv}{dt}$ models an object's **resistance to change in velocity** (through its mechanical inertia), or its **mechanical sluggishness**

Similarly, $L$ is the electrical "inertia", or its **resistance to change in current** (electrical sluggishness)

