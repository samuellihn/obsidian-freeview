According to [[Kirchoff's Loop Rule]], $V_C + V_R = 0$

![[Pasted image 20220330222114.png]]

We can substitute that with:

$$
\frac{q_C}{C} - iR = 0
$$

> Note that q and i are lowercase, that is because they will be variable

To get a single variable, $i = \frac{dq_c}{dt}$. However, since $i$ is decreasing ([[Discharging Capacitors]]), it will be negative, so to compensate for that we'll negate it again:

 $$
 \frac{q_C}{C} + \frac{dq}{dt}R = 0
 $$  

 From there, we can turn this into something we can [[Integrals|Integrate]]:  

 $$
 \int_{0}^{t}{\frac{-dt}{RC}} = \int_{Q_0}^q{\frac{dq}{q_C}}
 $$  

 Turns into:  

 $$
 \frac{-t}{RC} = \ln{q} - \ln{Q_0} \rightarrow \frac{-t}{RC} = \ln{\frac{q}{Q_0}} 
 $$

Then some manipulation to isolate $q$, and:

$$
q= Q_0 e^{\frac{-t}{RC}}
$$

> Note that this looks like the equation at [[Discharging Capacitors]]!
> $k$ is actually $\frac{1}{RC}$

Looks something like this:

```desmos-graph
left=-0; bottom=0;
right=50; top=15;
---
q= Q_0 e^{\frac{-t}{RC}}
Q_0 = 10
R = 1
C = 10
```

Also, this means that current $i$ is simply:

$$
i = -\frac{dq}{dt}
$$