[[Kirchoff's Loop Rule]] equation:

$$
E - iR - \frac{q}{C} = 0
$$

![[Pasted image 20220330223957.png]]

Then, again substituting $i$ for $\frac{dq}{dt}$

$$
E - \frac{dq}{dt}R - \frac{q}{C} = 0
$$

Rearranging terms (remember that capital terms are constants)

$$
\int_0^t{\frac{dt}{R}}=\int_0^q{\frac{dq}{E - \frac{q}{c}}}
$$

Then we integrate:

$$
\frac{t}{R}  = 
$$ 

> Use [[u Substitution]] with $u = E - \frac{q}{c}$ and $-Cdu = dq$

$$
\frac{-t}{RC} = \ln{|E - \frac{q}{C}|} - \ln{|E|} \rightarrow Ee^{\frac{-t}{RC}}=E-\frac{q}{C}
$$

Isolating $q$ algebraically:

$$
q = CE - CEe^\frac{-t}{RC}
$$

Then, because $CE = Q_0$ ([[Capacitance]]),

$$
q = Q_0 - Q_0 e^{\frac{-t}{RC}}
$$

Looks like:

```desmos-graph
left=0; bottom=0;
top=15; right=40;
---
q = Q_0 - Q_0 e^{\frac{-t}{RC}}
Q_0 = 10
R = 1
C = 5
```

To find current, take the derivative:

$$
\frac{dq}{dt} = i = \frac{Q_0}{RC}e^{\frac{-t}{RC}}
$$
