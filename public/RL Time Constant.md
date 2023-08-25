Just like RC circuits have [[RC Time Constant]]s, [[RL Circuit]] have **RL time constants**, because the current growth and decay is asymptotic and does not reach a final value 

If there is a battery present in the circuit, the grpah of current will be exponential growth
if there is no battery (was disconnected), the graph of current will be exponential decay

The time constant for an [[RL Circuit]] is:

$$
\tau = \frac{L}{R}
$$

If we put this into our growth equation, we get

$$
i(\tau) = \frac{E}{R}\Bigg(1 - \frac{1}{E}\Bigg)
$$

After 1 time constant of current growth, $i$ will be equal to about $0.63 \frac{E}{R}$

$$
i(1\tau) \approx 0.63 \frac{E}{R}
$$

```desmos-graph
top=1.5;right= 10; left=0; bottom=0;
---
i = I_F - I_F e^{-\frac{R}{L}t}
I_F = 1
R = 1
L = 1
(1, 0.63)|CROSS
```
For the decay graph, for one time constant:

$$
i(\tau) = \frac{I_0}{e}
$$

After 1 time constant of decay,

$$
i(1\tau) \approx 0.37 I_0
$$

```desmos-graph
top=1.5;right= 10; left=0; bottom=0;
---
i = I_0  e^{-\frac{R}{L}t}
I_0 = 1
R = 1
L = 1
(1,0.37)|CROSS
```