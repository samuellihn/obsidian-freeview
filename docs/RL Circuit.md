An RL circuit has a resistor and inductor in series connected to a battery:

![[Pasted image 20220416133247.png]]

Once the switch is closed, the current will take time to reach its final value:
![[Pasted image 20220416133350.png]]

This is because the inductor will induce a negative voltage the switch is closed and current starts to flow, and and a decrease in voltage means a decrease in current

This graph is very similar to the voltage-time graph for [[Charging Capacitors]], except that it is a current-time graph instead, taking the form of:

$$
i = I_f - I_f e^{-kt}
$$

 This equation can be derived using [[Kirchoff's Loop Rule]]
![[Pasted image 20220416133833.png]]

 With this circuit, $E - iR - L\frac{di}{dt} = 0$ 

 We can integrate with respect to $i$ (move things around then integrate by [[u Substitution]]) 

This simplifies to $$
This simplifies to \frac{-R}{L}t = \ln{\Bigg| \frac{E - iR}{E} \Bigg|}
This simplifies to 
This simplifies to 
This simplifies to $$

Moving things around to isolate $i$:

$$
iR = E - Ee^{-\frac{R}{L}t}
$$

Then, if we divide by $R$ and since $\frac{V}{R} = I$ according to [[Ohm's Law]],

$$
i = I_F - I_F e^{-\frac{R}{L}t}
$$

> $I_F$ is the final (steady-state) current because the $E$ we are using is the stable voltage of the entire circuit

This is a growth graph with an asymptote of $I_F$ (or $\frac{E}{R}$)

```desmos-graph
top=12;right= 10; left=0; bottom=0;
---
i = I_F - I_F e^{-\frac{R}{L}t}
I_F = 10
R = 1
L = 1
```

The **steady-state** current that an RL circuit is $\frac{E}{R}$, because eventually the inductor stops reissting current and acts like a simple wire

 ![[Pasted image 20220416174753.png]]

When an inductor undergoes a sudden **decrease** in current (if we disconnect the battery voltage), the inductor will go against that decrease in current by [[Energy Stored in Inductors|inducing a voltage]] 

A current will be created in the new loop, and that current will exponentially decay

 ![[Pasted image 20220416175030.png]]

$$
i = I_0 e^{-\frac{R}{L}t}
$$

This can again be derived by [[Kirchoff's Loop Rule]], with $V_{inductor} - V_{resistor} = 0$

$$
-L\frac{di}{dt} - iR = 0 
$$

> Current is decreasing so we need to negate $V_{inductor}$ so we get a positive voltage

Moving things around so we can integrate:

$$
\frac{di}{i} = -\frac{R}{L} dt
$$

 Integrating (no integration by substitution!)

$$
\int_{i_0}^i{\frac{di}{i}}= \int_0^t -\frac{R}{L}dt
$$

$$
\ln|i| \Bigg|_{i_0}^i = -\frac{R}{L}t \Bigg|_0^t
$$

Evaluating...

$$
\frac{i}{I_0} = e^{-\frac{R}{L}t} \rightarrow i = I_0  e^{-\frac{R}{L}t}
$$

```desmos-graph
top=12;right= 10; left=0; bottom=0;
---
i = I_0  e^{-\frac{R}{L}t}
I_0 = 10
R = 1
L = 1
```

The current for this circuit will never reach zero - there is an asympotote