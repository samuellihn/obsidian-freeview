# Thermal oxidation

Grows film of SiO2 from film or wafer of single-crystal silicon or polysilicon

High temperature process - 700 to 1200C
Used in commercial IC and MEMS

Silicon Dioxide gives electrical and thermal isolation, can be used as sacrificial layer that can be removed by layer

> Good etch selectivity between SiO2 and plan Si

Can be used as a hard masking layer

Biocompatible

Very high electrical breakdown strength - 7000000V/cm

Low amount of undesirable charges that effect function

No pinholes to mess up etching

Silicon oxidizes two ways 

Dry oxidation
$$Si + O_2 \rightarrow SiO_2$$
Higher quality

Wet oxidation

$$Si 2H_2 O \rightarrow SiO_2 + 2H_2$$

Lower quality

Silicon is consumed - some SiO2 is built above the surface, but some digs into the surface

Film does expand from the surface (to accomodate the oxygen atoms that are added)

Density of material determines how much the silicon dioxide digs into the surface

Growth of the oxide slows down with time, until growth becomes negligible

Oxidation table:

![[Pasted image 20220629112318.png]]

The thickness of the ion (or any thin film) can be measured by the reflected light by each thin films

This is why you can see the structures of the chip reflecting different colors - this is caused by different thicknesses of the thin films

Constructive interference - enhances wavelength of reflected light

Happens when wavelength of light path length is equal to the wavelength of the light

$$2X_{ox} = \frac{k\lambda} {n}$$

> $k$ - integer (wave mode)
> $n$ - refractive index


![[Pasted image 20220629112646.png]]

# Doping

Doping is adding impurities of atoms wtih more or less valence electrons into a silicon crystal to change the resistance of the silicon

Electron donors - n-type, electron acceptors - p-type

N-type - boron, galium
P-type - phosphorous, arsenic

one method - ion implanation

High energy ion beam propels ions at a substrate which allows ions to penetrate surface of the wafer and implant itself into the silicon

> High enough energy to go into the wafer

Usually dosed into a substrate with ion implanatation, then thermal diffusion is used to redistribute the dopant levels within the wafer

Why use diffusion?

Thermally driven process to introduce dopants into the silicon crystal

Diffusion - motion of atoms from high concentration towards low concentration

Used in IC and MEMS manufacturing to control properties of silicon - electrical, chemical, mechanical response

Fick's law of diffusion - flux is dependant on the diffucivity and gradient (slope) of dopant concentration

$$J = D \frac{\sigma{N}}{\sigma{x}}$$




$$J = D \frac{\sigma{N}}{\sigma{x}}$$


When dopng, you want to avoid undesirable impurities - fast diffusers

Diffuse so fast, they diffuse deep into the silicon crystals and short out electronic devices

Gold diffuses very fast into the silicon, cuses shorts

> Cleanrooms disallow fast diffusers into the facility

Dopants come from gases - diborane, phosphine, arsine - very toxic

Solid dopant sources can also be used - Boron nitride wafers interlaced with silicon wafers, turns into gas, goes into the silicon

Silicon wafers have a thermal budget - all high temperature processes will promote diffusion

Total thermal history of wafer (previous HT processes) will affect doping profile/speed

After doping, conductivity of semiconductor crystal will be greater (lower resistivity)

[[Resistance]] is dependent on [[Resistivity]], length, cross sectional area

Then, sheet resistance can be calculated

![[Pasted image 20220629114134.png]]
$$R = \frac{\rho L}{A} = \frac{\rho}{t}\frac{L}{W} = R_s \frac{L}{W}$$
Resistance is only dependent on length/width ratio of the resistor

Sheet resistance can be calculated with [[Ohm's Law]]

# Electroplating (Electrodeposition)

Uses [[Redox-reactions]] to reduce solution metal ions into metal film on cathode surface

# Physical Vapor Deposition

Film growth achieved by accumulation of vapor onto a cooler substrate

Vapors can be generated two ways -

## Boiling vapor (evaporation)

Heating element with current passing through it, melts low-melting-temperature materials and eventually evaporates it, then condenses onto a cooler wafer (substrate)

E-beam evaporation hits material with beam of electrons, electrons absorbed by metal, gives off energy from electrons in heat, eventually melts and vaporizes. Used in very low pressure chamber (Vacuum). Used for materials with higher melting points




Sputtering 

PVD chamber - uses multiple types to go to high vacuum (microtorr)

![[Pasted image 20220629115123.png]]

Done under vacuum because of **mean free path of gas molecules**

> Average distance a molecule will travel before it colildes with another molecule

Increases with the higher vacuum (gas molecules won't hit each other and scatter, since MFP is larger than chamber)

All gas molecules will hit the substrate and not scatter

Sometimes called **line of sight deposition**, because gas molecules are shot in the light of sight to the substrate

Doesn't coat conformally in some scenarios (because the source is a point). Can be taken advantage of or be a disadvantage

![[Pasted image 20220629115609.png]]

# Plasmas and glow discharges

Plasmas are partially ionized gases with equal number of positive (gas+) and negative )e-) charges

Glow discharges are sustainable plasmas

Generates photons, which can emit UV or visible light

Glow discharges can be created with (DC or AC voltages)

Plasmas can be generated by placing gas between - and grounded voltages

Free electrons are accelerated, eventually electrons go away from gas atoms and ionize/excite gas atoms

When the electrons of the ions fall back into their non-excited states, photons are emitted

Sputtering bombards ionized gases into the substrate, shooting off molecules from the substrate

Needs enough energy to sputter atom out of the film

3D atomic billiards

But not too much energy to implant the ion into the substrate

TWo types of sputtering - non-reactive sputtering

Sputtering gas not incorporated into the flim

Reactive sputtering - sputtering gas incorporated into teh film, filiming alloys with the film

# Chemical Vapor Deposition
Controlled reactions where reactants are in gaseous/vapor form, then the products are solid form that are deposited on the substrate

Usually (gas) + (gas ) => (solid) + (gas)

Can deposit silicon dioxide, phosphorous, etc. can mix gases for doping

![[Pasted image 20220630105342.png]]

Can nucleate into new crystals (islands) or grow existing crystals

Slowest step dictates film growth rate - either reaction rate or mass flow rate (transport) - depends on conditions and reactant

![[Pasted image 20220630105502.png]]

At low gas flow rate, mass transport limited. At high flow rate, reaction limited.

![[Pasted image 20220630105523.png]]

At high temperature, transport limited. At low temperature, reaction imited

![[Pasted image 20220630105544.png]]
Depends on reactant as well

Grain size depends on deposition temp. Hotter deposition -> larger grain structure

Stresses in film after CVD, since the temperature change is different. Either the film wants to contract (tensile stress) or expand (compressive stress)

Annealing can help to reduce stress



