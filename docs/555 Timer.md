
# 555 Timer Pinout

![[Pasted image 20221101091458.png]]


# Wiring Diagram: 
![[Pasted image 20221101091622.png]]
# Equations
![[Pasted image 20221101091718.png]]

> $R$ represents a resistor, denoted by the zigzag lines in the circuit diagram
> $C$ represents a capacitor, denoted by two parallel "plates" in the circuit diagram

**You will desire a value $T = 1 \ second$, so set $T$ to 1 and make $T_1 + T_2 = 1 \ second$**

To calculate period $T$:
$$T = 0.694(R_1 + 2R_2)C$$
To calculate time high $T_1$
$$T_1=0.694(R_1+R_2)C$$
To calculate time high $T_0$
$$T_1=0.694R_2C$$
> $k$ denotes kilo (10^3), $M$ denotes mega (10^6) (for capacitors)
> $n$ denotes nano ($10^{-9}$), $\mu$ denotes micro ($10^{-6}$), $m$ denotes milli ($10^{-3}$)

