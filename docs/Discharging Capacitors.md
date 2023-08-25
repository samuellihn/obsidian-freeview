A capacitor is discharged when the two plates of a capacitor are bridged (through a resistor or not, doesn't matter) and the electron differential is rebalanced

However, if a resistor is there, it will stop the capacitor from discharging to quickly ([[Resistance]] decreases [[Drift Velocity]] of the electrons)

Therefore, the capacitor takes time to discharge

> Larger [[Resistance]] means the electrons are slowed down more, so discharge time is lesser
> Larger [[Capacitance]], the more time the capacitor will take to discharge (since the potential difference is larger for a given charge on a smaller capacitor)

![[Pasted image 20220330082204.png]]

However, resistor discharge and charge is not linear
> Once a few electrons leave, [[Electrical Potential]] of the capacitor decreases, so the "pressure" on the remaining electrons to leave lessons

![[Pasted image 20220330082433.png]]

Charge never truly releases zero (there will be a point where the potential difference across the capacitor is not enough to further discharge the capacitor)

In the same principle, the current will follow the similarly shaped curve because current is $\frac{Q}{t}$

Once the loop is closed, the voltage across the capacitor needs to equal the voltage across the resistor ([[Kirchoff's Loop Rule]])

Initial voltage is:

$$
C = \frac{Q_0}{V_0} \rightarrow V_0 = \frac{Q_0}{C}
$$

Initial current will be:

$$
I_0 = \frac{Q_0}{RC}
$$

All values will decay when a capacitor discharges

$$
i = I_0 e^{-kt}
$$

```desmos-graph
left=0; bottom=0;
right=10; top=10;
---
i = I_0 e^{-kt}
I_0 = 10
k = 0.5
```
