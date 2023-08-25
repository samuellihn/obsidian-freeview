To test a limit in 3 dimensions, follow a path that intersects the point of interest to see the function's behavior along the path

$$
\lim_{(x, y) \to (0, 3)} = \frac{1-\cos{x}}{x (x+3)}
$$

$$
\lim_{(x, y) \to (0, 3)} = \frac{1-\cos{x}}{x (x+3)} \ along \ y = 3 \rightarrow 
\lim_{(x, y) \to (0, 3)} = \frac{1-\cos{x}}{x (x+3)}
$$

If the limit along two paths do not agree, then that limit does not exist

However, if the limit along two paths does agree, than that limit **may possibly** exist, but we cannot make the conclusion that it does.

To confirm that a limit does indeed exist, we would need to test every possible path, which is impractical/impossible

Another method is required to confirm the existence of a limit in 3D:

- Distill the problem down to [[Cylindrical Coordinates]] by replacing $x$ and $y$ with their definition in polar coordinates, thereby turning the two-variable limit into a single-variable limit
- Use [[Epsilon-Delta Definition of a Limit]]