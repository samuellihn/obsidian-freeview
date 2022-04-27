An integral of a polar region can be defined as the infinite sum of infinitesimally small [[Circular Sector]]s

Therefore, the area of a polar region is:

$$A = \frac{1}{2}\int_{\theta_1}^{\theta_2}{r^2d\theta}$$
It may be easier to consider the radial symmetry of regions and manipulate the resultant values, rather than directly taking the integral of the regions

Also, look for when the graph passes through the pole (when $r = 0$) which can help determine the correct bounds of integration

A **polar rose** completes one "revolution" in the range $0 < \theta < \pi$, so make sure to consider that when finding the area.

```desmos-graph
left=-2;right=2;top=2;bottom=-2;
height=480;width=480;
---
r = \sin{3\\theta}|0 < \\theta < 3.14
```
```desmos-graph
left=-2;right=2;top=2;bottom=-2;
height=480;width=480;
---
r = \sin{2\\theta}|0 < \\theta < 6.28
```
