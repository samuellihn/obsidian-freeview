Important considerations from etching
- Etch rate
	- Fn of concentration, mixing, temperature
- Etch rate uniformity
	- Ratio of etch rate of film to mask - trade of etch rate to selectivity
- Selectivity 
	- Am I removing the material I want to remove?
- Anistropy
	- Same or different etch rate in different directions?

Isotropic - etches the same in all directions - good for large features where  sidewall slope doesn't really matter (quick, easy, cheap - wet etchant)

Anisotropic - etches faster in one direction than other - good for vertical walls (more expensive)

![[Pasted image 20220630112859.png]]

## Wet etchants

Usually a mix of acids, bases, and waters

Can be dilluted
Wide range of etch rates

Typically high amount of selectivity, selectivity can be sensitive to contamination

Typically isotropic except for some special cases

Isotropic wet etching - equal etch rate in all directions, can remove sharp edges/corners

## Anisotropic silicon etching

Different planes of the silicon crystal have different densities of silicon atoms

Crystal orientation dependent etching

Uses KOH (into OH-)

Etch rate of {110} > {100} >> {111}, because 111 density of silicon atoms is very high

Photoresist will not survive, but nitride will survive

This is why knowing the orientation of silicon crystal in the wafer is important, because the etch will go much slower in the {111} direction

![[Pasted image 20220630114446.png]]

Can create trenches with sloped walls or diamond-like structures because the crystal faces etch at different rates

Can create cantilevers with an overhead masking layer

![[Pasted image 20220630114607.png]]

## Dry etching

Etchants come from gas or vapor-phase source and are ionized inside plasma

Uses Fl or Cl based gases to etch wide variety of materials

Can also use O2 to etch organics (controlled combustion)

CF4 doesn't etch Si but will etch SiO2

SF6 also used as an etchant

Does the opposite chemical vapor deposition - gas comes in, reacts with solid, products are both in gaseous form

XeF2 - unique etchant. Has a vapor pressure (just like water)

Reactive with silicon, but doesn't etch SiO2, metals, photoresist, organic. Fast etch rate and isotropic

Etch profile depends on energy, pressure, bias, directionality, crystal orientation of substrate
Etch | Characteristics
---|---
Gas etching | Isotropic, chemical very selective
Plasma etching | Isotropic, chemical selective
Reactive ion etching | Directional, physical and chemical, somewhat selective
Sputter etcfhing | Directional, physical, low selectivity

### Deep reactive ion etching

Uses high density plasma, cycles between directional etching and conformal polymer deposition for sidewall protection

Create highly anisotropic etch profiles, very deep wells (20:1)
High etch rate, 1-2um per minute

Very high mask selectivity

![[Pasted image 20220701105210.png]]
Can create large, 3D extrusions for 2D patterns
![[Pasted image 20220701105320.png]]

![[Pasted image 20220701105542.png]]

Also good for capacitive sensing (tall features = larger "plates")

**Bulk micromachining** - etching **deep into silicon substrate**

KOH etching, DRIE, or HF etching in glass

Shapes of etch depends on etching technique, isotrophy (see above)

Capillary electrophoresis

Separation of molecules based on charge-to-mass ratio
