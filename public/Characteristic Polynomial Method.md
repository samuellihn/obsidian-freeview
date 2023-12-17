Used for solving **nth-order, constant-coefficient differential equations**

The **characteristic polynomial** of an nth-order DE in the form:

$$
a_ny^{(n()} + a_{n-1}y^{(n-1)} + \dots + a_2y'' + a_1y' + a_ny = 0
$$

is:

$$
p(r) = a_nr^n + a_{n-1} r^{n-1} + \dots + a_2r^2 + a_1r + a_0
$$

This can be factored into $p$ distinct roots:

$$
p(r) = a_n(r-r_1)^{n_1} 
 (r-r_2)^{n_2}\dots
 (r-r_p)^{n_p}
 $$
 These roots are either real or in complex conjugate pairs, that represent terms of the solution:

| Root type                                      | Solution                                                                                                                     |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Real and simple root ($n_i = 1$):  $r$         | $e^{rx}$                                                                                                                     |
| Real root with multiplicity $m$:  $r$          | $e^{rx}, xe^{rx}, \dots x^{m-1}e^{rx}$                                                                                       |
| Complex and simple root: $r = a+ib$            | $e^{ax} \cos{bx}, e^{ax} \sin{bx}$                                                                                           |
| Complex root with multiplicity $m$: $r = a+ib$ | $e^{ax} \cos{bx}, e^{ax} \sin{bx}, xe^{ax} \cos{bx}, xe^{ax} \sin{bx}, \dots x^{m-1}e^{ax} \cos{bx}, x^{m-1}e^{ax} \sin{bx}$ |

