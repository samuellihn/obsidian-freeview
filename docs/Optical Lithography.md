![[Pasted image 20220628112152.png]]

Photoresist - photosensitive material that is deposited onto substrate
Soft bake solidifies the photoresist
Photomask blocks/allows light from passing through the mask
Then the pattern is exposed to UV light, changing the solubility of the photoresist

Then, another layer can be applied, similar to 3D printing (layer by layer)

Two types of photoresist - positive and negative resist
Positive resist - light causes the photoresist to become more soluble, so metal will be deposited where light hits
Negative resist - light causes photoresist to become less soluble, metal deposited where light doesn't hit (masked)

Defects - dust infering with patterns in the mask

The smaller the mask features are, the more dust is a problem - Dust can also mask light, interrupting metal channels and causing chips to not work (broken channels, etc.)

This is why we need a cleanroom - less dust, less impurities and risk for dust particles to contaminate mask

Class of cleanroom - how many 0.5um+ dust particles per cubic foot of air, to reduce impurities

Light is tinted, as photoresist may be sensitive to some visible wavelengths (blue) and UV. Tinted light filters out the shorter wavelengths

> Similar to a darkroom, where photographic film is sensitive to shorter wavelengths

Two ways to photomask (etch away from photoresist to define photomask)

- Shutter system, 2um minimum feature
- Electron beam (50nm minimum feature, slow, expensive)
- Direct laser write (1um minimum)

Different types of optical exposure systems:

![[Pasted image 20220628113527.png]]

- Contact
- Proximity Printing
- Projection printing - used
	- Allows image reduction - mask can be larger than the actual chip

Minimum resolution of proximity printing is based upon diffraction of light passing through the light

For projection lithography:

$$
W = k_1 \frac{\lambda}{NA}
$$

> $K_1$ is an emperical value that depends of the ability to distinguish between small changes of intensity - typically 0.75

As feature sizes decrease, numerical aperture $NA$ gets larger (better lenses) and $\lambda$ gets smaller (shorter wavelength light)

Layers need to be aligned, alignment marks are used to align the layers on a per-wafer basis

CMOS - complementary MOS

Transistors of opposite polarity are created on the same substrate

When postiively biased, NMOS is on and PMOS is off, when negative biased PMOS is on and NMOS is off

Logic circuits can use less transistors with CMOS, since it will give inverted and non-inverted output

Composition of photoresist

- Matrix or base material - resin - gives masking ability
- Sensitizer - photoactive compound, sensitive to UV light
- Solvents - adjust viscosity so the photoresist can be deposited uniformly

Photoresist is deposited on a spinner, so the centrifugal forces pull the photoresist to the edges creating a uniform layer

Optical lithography is similar to 3d printing (stereolithography)

Microstereolithography - allows fabrication of complex three-dimensional microstructures

Uses photopolymerizable polymer

Nearly IR laser light focused into resin, two photons are absorbed cross-linking polymer molecules

> Light only strongly absorbed at focal point in resin

Allows creation of 3D microstructure by focusing resin, creating microstructures in layer-by-layer fashion - **two photon stereolithography**

Another technique comes from **Microfabrica** - **eFab process**

Sacrificial photoresist creates wells that can be filled with structural metal

![[Pasted image 20220629105824.png]]

Like casting, but layer by layer

Very expensive - limited by thickness of photoresist layer, which is only ~5 microns, so a 1mm high object needs 200 layers

Nanolithography can reduce print by many times (25000), 10^15 bits stored in 1/200 inch crystal

Nanolithography - 

Uses extreme ultraviolet light

Or x-ray light, very costly because x-ray damages quartz lenses, so mirrors need to be used

Electron beam, writes on surface in direct write fashion

Also ion beam, nuclei of ion are focused onto substrates. Scans linearly, suffers from lower throughput and higher cost equipment

Proximal probes - can scribe across surface like pen writes in paper

- Scannign tunelling microscope
- Atomic force microscope

Still suffers from low throughput, since linear scan

![[Pasted image 20220629110800.png]]

Atomic force microscope - cantilever with thin probe tip, used to scan the topology of the surface

Dip-pen nanolithography - Deposits "ink" onto AFM tip that is dragged over substrate, where it leaves the tip and is covalently bonded to the structure

