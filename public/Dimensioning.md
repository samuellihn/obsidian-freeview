**Dimensions** are added to drawing to specify the **size and location of features**

Parts of a dimension:

![[Pasted image 20231014205850.png]]


Each dimension **must appear exactly once**, and there cannot be any redundant dimensions

> Tolerances will conflict if a part is overdimensioned

General rules:
- Dimensions **must be placed outisde the object**
- Dimension lines cannot be connected to object edges - only extension lines
- Dimension lines also cannot cross - but extension lines can
- Angles are 90 degrees under otherwise specified

For round features:
- Dimension **rounds, arcs, and fillets** with their **radii** (Using the R symbol)
- Dimension **holes** and **fully circular features** with their **diameter** (Using the Ø symbol)
- Put center marks on **all** round/circular features

Holes (drilled):
- Only dimensioned where they **appear as circles** (no hidden lines)
- Must be located by their **centers (no tangents)**
- Symbols:
	- ↧ depth
	- ⌵ countersink
	- ⌴ counterbore
- Can also dimension holes on a **bolt circle**, or specify dimensions of multiple holes (4X, etc.)

Slots:
- Dimensioned by their length and width
- Radius is not explicitly specified

![[Pasted image 20231014214210.png]]

In the ANSI standard:

- The dimension value is placed **inside** the dimension line (not on top or beside it)
- For values less than 1, there is **no leading zero** (".50" instead of "0.50" )
	- Unless the drawing is in metric

Try to keep dimensions **between** orthographic dimension lines

