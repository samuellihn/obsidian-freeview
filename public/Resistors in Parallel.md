The resistance for resistors in parallel is:

$$
\frac{1}{R_{total}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3}...
$$

Or, in simpler terms,

$$
R_{total} = \frac{R_1 \times R_2 \times R_3...}{R_1 + R_2 + R_3...}
$$

![[Pasted image 20220322184223.png]]

According to [[Kirchoff's Junction Rule]], the current is distributed among the three paths (and therefore the three resistors)

$$
I_T = I_1 + I_2 + I_3
$$

And for an equivalent resistor (pretend the junction only has one branch)

$$
I_T = \frac{V}{R_T}
$$

Therefore, since according to [[Kirchoff's Loop Rule]] the voltages for all three "loops" will be the same,

$$
\frac{V}{R_T} = \frac{V}{R_1}  + \frac{V}{R_2} + \frac{V}{R_3} 
$$

Cancelling out $V$,

$$
\frac{1}{R_T} = \frac{1}{R_1}  + \frac{1}{R_2} + \frac{1}{R_3} 
$$

Then, algebraic manipulation:

$$
\frac{1}{R_T} = \frac{R_2 R_3}{R_1 R_2 R_3}  + \frac{R_1 R_3}{R_1 R_2 R_3} + \frac{R_1 R_2}{R_1 R_2 R_3}  = \frac{R_1 R_2 + R_1 R_3 + R_2 R_3}{R_1 R_2 R_3}
$$

$$
\frac{R_1 R_2 R_3}{R_1 + R_2 + R_3}
$$