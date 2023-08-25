Value | Charging | Discharging
--- | --- | ---
$Q_C$ Charge in capacitor | Increasing | Decreasing
$i$ Current across resistor | Decreasing | Decreasing
$V_C$ Voltage across capacitor | Increasing | Decreasing
$V_R$ Voltage across resistor | Decreasing | Decreasing

It will (theoretically) take an infinite amount of time for a [[Discharging Capacitors]] to reach zero 

Therefore, for RC circuits, the **time constant** is used to quantify the rate of charge or discharge 

> Similar to [[Half-Life]], where we pick a proportion where we measure the time a decaying value to get to that proportion

The **time constant** of an RC circuit is:

$$
\tau = RC
$$

> Prove the units, it works!

Therefore, the charge at one time constant is, using our [[Discharging Capacitors]] equation,

$$
q = Q_0 e^{\frac{-RC}{RC}} \rightarrow q = \frac{Q_0}{e}
$$

Or, the time it takes for the charge in the capacitor to decay to about $q = 0.37Q_0$ (about a third of original charge)

For [[Discharging Capacitors]], we use the same time constant, except our equation simplifies to:

$$
q = Q_f\Big(1 - \frac{1}{e}\Big)
$$

The time it takes for a capacitor to charge to around 0.63 of its final charge

