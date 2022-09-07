# Types of models

Supervised - Labeled data - Direct feedback - Predict outcomes
Unsuperfised - No labels - No feedback - Find hidden structure in data
Reinforcement - Decision between actions - Reward system - Learn series of actions

Types of problems
- Classification - discrete outputs (finite # of output states)
- Regression  - continuous outputs (infinite # of output states), creates equation


# Regression models
"Line of best fit" given data points

$$h(x) = b + wx$$
> $b$ is the bias
> $x$ is the weight

Trying to minimize mean square error (between ALL data points)

# Gradient descent

Determine impact from loss and adjusting rates

Adjust weights to minimize distance from points

# Logistic regression

Find decision binary based on points
![[Pasted image 20220702123200.png]]

BInary classification uses **sigmoid function**

$$Y = \sigma(Wx + b)$$
## Activatio nfunctions

Used to map continuous outputs to discrete outputs

![[Pasted image 20220702123306.png]]

Types of data
- Training data
- Testing data
- Usually 80-20 split

![[Pasted image 20220702123744.png]]

Overfitting  - too specific
Underfitting - too general

Neural networks
- Basis of deep learning
Artificial neurons, using logistic regression
![[Pasted image 20220702124336.png]]

Weights between hidden layers

