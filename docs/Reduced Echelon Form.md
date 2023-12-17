A matrix is in Echelon Form if: 

- Any zero rows are at the bottom
- Pivots are all equal to 1
- Any pivot is to the right of all rows above it

A matrix is in Reduced Echelon Form if:

- It is in Echelon Form, and 
- Each pivot is the only nonzero entry in its own column

A matrix has one unique reduced echelon form.

1. Obtain a pivot (make first element of first row 1)
2. Use elementary row operations to eliminate successive row
3. Repeat for all rows

See systematic procedure:

![[Pasted image 20220907115617.png]]
Go in order, or you may undo previous steps and have to redo things (right to left)

![[Pasted image 20220907121215.png]]
Infinitely many solutions:
![[Pasted image 20220907121832.png]]
