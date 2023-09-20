Vertex: Each point in a graph

Edge: A feature connecting two vertices in a graph

Adjacency: When two vertices are directly connected by an edge

Incident edges: When two edges share a node

Loop: An edge with a single endpoint (same start and end)

Multiple/parallel edges: Two or more edges assigned the same set of endpoints

Simple graph: A graph with no loops or parallel edges

A drawing of a graph must satisfy 3 properties:

1. An edge hits only one or two vertices (its endpoints)
2. A curve (edge) does not intersect itself (one-to-one), with the exception of loops
3. Two distinct edges intersect at finitely many points (can cross, but cannot be on top of each other)

A subgraph is defined by a subset of the edges and a subset of the vertices in a graph

Walk: An alternating list of vertices and edges in a graph that represents a traversal between two points

Circuit: A walk that starts and ends at the same vertex

Trail: An walk with no repeated edges (Traversals across multiple edges don't count as repeats)

Path: A walk with no repeated vertices

Cycle: A circuit whose only duplicate point is the start/end point

Distance between two nodes: The length of the shortest walk between two nodes

![[Pasted image 20230424082644.png]]

Connected graph: A graph where there is a path between any two vertices in the graph. Otherwise, disconnected

Component: Each "island" of a disconnected graph
