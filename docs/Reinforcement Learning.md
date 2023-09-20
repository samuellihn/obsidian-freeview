Supervised learning - training data is labeled (knows the answer)

Unsupervised learning - training data is not labeled (doesn't know the answer, robot determines by characteristics)

Self-supervised learning - combination of both, 2 steps


Reinforcement learning

Based on how animals and humans learn in the real world

Good thing -> reward, bad thing -> penalty or no reward

The agent will try to maximize rewards (in the real world, to survive)

State machine to represent this interaction: 

![[Pasted image 20220701144631.png]]

Bellman equation (Q-learning):

$$
q^{new}(s, a) = (1 - \alpha)q(s, a) + \alpha(R_{t+1} + \gamma max(s', a') )
$$

Difficulty in defining the states for the problem (good state, bad state, etc.)

States need to be discretized - can do so in tabular format

Action |Action 1 | Action 2
---|---|---
States | ------|------
State 1  | consequence | consequence
State 2 | consequence | consequence
etc. | penalty? | reward?

In cart-pole problem, Action 1 would be moving the cart to the left, Action 2 to the right (only two actions)

Then the AI can choose which action will result in the best consequence (least penalty or highest reward)

Neural network + reinforment learning = deep reinforcement learning
