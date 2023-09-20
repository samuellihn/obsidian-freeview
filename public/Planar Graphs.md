**Planarity** is whether you can draw a graph without crossing lines

> **A graph is planar if it can be drawn without any edges crossing**

This can be shown by providing a valid drawing of the graph

**Kuratowski's Theorem**: A graph $G$ is not planar $\iff$ $g$ contains a subgraph homeomorphic to $K_5$ or $K_{3, 3}$

> These are the two prototype non-planar graphs

**Crossing Number:** Minimum number of crossings in a graph $G$, denoted $cr(G)$

> Examples:
> 
> $$
> cr(K_4) = 0
> $$
> 
> $$
> cr(K_5) = 1
> $$
> 
> $$
> cr(K_6) = 3
> $$

> $$
> cr(K_{2, 2}) = 0
> $$
> 
> $$
> cr(K_{2, 3}) = 1
> $$
> 
> $$
> cr(K_{2, 4}) = 0
> $$
> 
> $$
> cr(K_{2, n}) = 0
> $$

**Euler's Formula:** Relates the numbers of edges, vertices, and regions for a planar graph

$$
|V| + |R| - 2 = |E|
$$

> **The graph must be a planar graph and the drawing must be a planar drawing of the graph.**
