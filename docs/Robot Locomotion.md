Four types of motion

- Differential drive
	- Two wheels - not as powerful
- Skid steer drive
	- Powerful, many motors
	- Uses skidding of wheels to steer - loss of accuracy
- Steering drive
	- Lots of planning ahead to go to correct orientation
- Tricycle drive
	- Fast line following
	- Inherently unstable

Navigation skills 

- Dead reckoning
	- Turn to direction of target, drive in a straight line
	- Or, follow predetermined (pre-calculated) instructions to get to a point
	- Error adds up, no way to self-correct
- Grid
	- Sensing a grid in the environment, just like following cells in graph paper
- Line following
	- Optical
		- Use two light sensors to follow a dark line
		- When using one light sensor, it is difficult to correct, since the robot doesn't know which direction to correct
			- Instead, edge of the line is followed
				- Edge of the line will reflect a different amount of light than the completely black/completely white, easier to follow
- Wall following
	- Similar to line following, but vertical and with a distance sensor
- Beacon
	- Similar to how GPS works
- Compass
