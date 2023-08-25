A graph is connected when there is a path between any two points in the graph

This is easy to determine for undirected graphs, but connectivity of [[Digraphs]] is harder

> However, in digraphs, connectivity between two points **can** be unidirectional 

**Vertex Connectivity** of a graph $G$ ($\kappa (G)$)  is the minimum number of vertices that needs to be removed to disconnect a graph or create an isolated vertex

| [[Special Graphs]]            | Vertex Connectivity | Notes                      |
| ----------------------------- | ------------ | -------------------------- |
| Path                          | 1            | Any point except endpoints |
| Cycle                         | 2            | 2 Nonadjacent              |
| Complete with $n$ vertices    | $n-1$        | Isolate the last vertex    |
| Complete bipartite $K_{m, n}$ | $min(m, n)$  | Removing an entire side    |

**Edge connectivity** ($\lambda (G)$)is the number of edges that needs to be removed to disconnect a graph or isolate vertices

| [[Special Graphs]]            | Edge Connectivity | Notes              |
| ----------------------------- | ----------------- | ------------------ |
| Path                          | 1                 | Any edge           |
| Cycle                         | 2                 | Any two            |
| Complete with $n$ vertices    | $n-1$             | Isolate any vertex |
| Complete bipartite $K_{m, n}$ | $min(m, n)$       | Isolate a vertex   |

In general (see [[Graph Invariants]]):

$$
\kappa(G) \leq \lambda(G) \leq \delta(G)
$$
