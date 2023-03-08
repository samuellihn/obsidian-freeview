# Linear Algebra in Digital Signal Processing
### Samuel Lihn
---
# Why Discrete Time Signals?

- Growing processing power of computers
- Simplified, durable circuitry
- Processing power is getting cheaper and cheaper

---
# Discrete Time Signals

- A sequence of numbers in the vector space $S$
- Defined only on the integers and outputs a scalar value

  ![[Pasted image 20230116114633.png]]
- Represented by infinite sequence of numbers
$$\set{y_k} = \set{0.0, \  0.48, \  0.84, \  1.0, \  0.91, \  0.6, \ y_7, \ y_8, \ ... \ y_n \ ...}$$
- Represents signals in DSP
---
# Linear Difference Equations

- Weighted sum of previous values
- An $nth$ order linear difference equation takes on the general form:
$$\begin{equation}
a_0y_{k+n} + 
a_2y_{k+n-1} + 
a_3y_{k+n-2} + \ 
... \ + 
a_{n-1}y_{k+1} + 
a_ny_k = \set{z_k}
\end{equation}$$
- If the output is the zero sequence $\set{..., \ 0, 0, 0, 0, \ ...}$ the equation **homogenous**

---
# Linear Filters

- A filter is anything that takes a signal, modifies it, and outputs a new signal
- Linear filters are linear transformations $T : S \rightarrow S$
	- Additivity & homogeneity
	- Time-invariance
	- Causal

---

# Linear Filters - Example

- A **lowpass filter** is a filter that only lets low frequencies through, attenuating (reducing the amplitude of) or eliminating higher frequencies
> Music samples
- A LDE can be used as a lowpass filter:
$$
\begin{equation}
\tfrac{\sqrt{2}}{4}y_{k+2} + \tfrac{1}{2}y_{k+1} + \tfrac{\sqrt{2}}{4}y_{k} = \set{z_k} 
\end{equation}
$$

- $\set{\frac{\sqrt{2}}{4}, \frac{1}{2}, \frac{\sqrt{2}}{4}}$ are called the **filter coefficients**

---

# Testing Linear Filters

$\cos{\frac{t\pi}{4}}$ when $t$ is an integer:

![[Pasted image 20230116214316.png]]
---
# Testing Linear Filters

$\cos{\frac{t3\pi}{4}}$ when $t$ is an integer:

![[Pasted image 20230116214729.png]]

Allows low frequencies to pass through while attenuating or eliminating higher frequencies.

---

# Eliminated Frequencies

- To find which frequencies are **eliminated**, see which ones are brought to the zero sequence
- Solve the homogenous equation:
$$
\begin{equation}
\tfrac{\sqrt{2}}{4}y_{k+2} + \tfrac{1}{2}y_{k+1} + \tfrac{\sqrt{2}}{4}y_{k} = \set{0} 
\end{equation}
$$

- How? Use the **auxiliary polynomial**
- Plug in the sequence $\set{r^k}$ into the LDE, which gives a quadratic polynomial

$$
\begin{equation}
\tfrac{\sqrt{2}}{4}r^{2} + \tfrac{1}{2}r + \tfrac{\sqrt{2}}{4} = 0
\end{equation}
$$
---
- Solve for the roots of the polynomial

$$
\frac{
-\frac{1}{2} \pm \sqrt{\frac{1}{2}^2-4(\frac{\sqrt{2}}{2})(\frac{\sqrt{2}}{2})}
}{
2(\frac{\sqrt{2}}{{2}})
}
\rightarrow 
r_1 = -\tfrac{\sqrt{2}}{2}+  i\tfrac{\sqrt{2}}{2}, \ r_2 = -\tfrac{\sqrt{2}}{2}- i\tfrac{\sqrt{2}}{2}
$$
- These aren't frequencies - what do we do?
- Graphing the roots in the complex plane may give more insight


![[Pasted image 20230117204203.png|250x250]]

---
- Complex roots can be written in the form $R\left[\cos{\theta} + i\sin{\theta}\right]$, where $R$ is the magnitude of the vector and $\theta$ is the angle
- Rewrite these roots:
$$
r_1 = \cos{\tfrac{3\pi}{4}} + i\sin{\tfrac{3\pi}{4}}, \ 
r_2 = \cos{\tfrac{5\pi}{4}} + i\sin{\tfrac{5\pi}{4}}
$$
- **De Moivre's Rule** states that if complex numbers are written in the above form, then powers of these are written as $r^{k} = R\left[\cos{k\theta} + i\sin{k\theta}\right]$

$$
{r_1}^k = \cos{\tfrac{k3\pi}{4}} + i\sin{\tfrac{k3\pi}{4}}, \ 
{r_2}^k = \cos{\tfrac{k5\pi}{4}} + i\sin{\tfrac{k5\pi}{4}}
$$
- Exactly what we need - periodic functions (frequencies)!

$$
\set{\cos{\tfrac{k3\pi}{4}}}, \ \set{\sin{\tfrac{k3\pi}{4}}}, \ 
\set{\cos{\tfrac{k5\pi}{4}}}, \ \set{\sin{\tfrac{k5\pi}{4}}}
$$
- This tells us that our eliminated frequencies are $\set{\cos{\tfrac{k3\pi}{4}}}$ (shown previously) and $\set{\cos{\tfrac{k5\pi}{4}}}$

---

Since we've already seen that $\set{\cos{\tfrac{k3\pi}{4}}}$ gets eliminated, let's try running $\set{\cos{\tfrac{k5\pi}{4}}}$ through the filter

![[Pasted image 20230117213200.png]]
---
# LDE as Matrix

Any linear difference equation given in the form:
$$
\begin{equation}
a_0y_{k+n} + 
a_2y_{k+n-1} + 
a_3y_{k+n-2} + \ 
... \ + 
a_{n-1}y_{k+1} + 
a_ny_k = \set{z_k}
\end{equation}
$$ 
Can be written as a matrix equation $\vec{x_{k+1}} = A\vec{x_k}$ such that:
$$
\vec{x} = 
\begin{bmatrix}
y_k\\
y_{k+1}\\
y_{k+2}\\
\vdots\\
y_{k+n-1}\\
\end{bmatrix}\ \ \ \ \ 
 A = 
\begin{bmatrix}
0 & 1 & 0 & \dotsm & 0\\
0 & 0 & 1 & & 0\\
\vdots & & & \ddots & \vdots\\
0 & 0 & 0 & & 1\\
a_n & a_{n-1} & a_{n-2} & \dotsm & a_1
\end{bmatrix}
$$


---
# Linear Filter as Matrix

We can therefore write our LDE-based linear filter as a matrix equation, where:
$$ 
\vec{x_k} = 
\begin{bmatrix}
y_k\\
y_{k+1}\\
y_{k+2}\\
\end{bmatrix}\ \ \ \ \ 
 A = 
\begin{bmatrix}
0 & 1 & 0\\
0 & 0 & 1\\
\tfrac{\sqrt{2}}{4} & \tfrac{1}{2} & \tfrac{\sqrt{2}}{4}
\end{bmatrix}
$$
We can use this form while computing our outputs programatically

---
# Applications

---
This lowpass filter can be used to turn this square wave represented by $\cos{\frac{t}{4}} - \frac{1}{3}\cos{\frac{3t}{4}} + \frac{1}{5}\cos{\frac{5t}{4}}$ into a sine wave

![[Pasted image 20230117222155.png]]![[Pasted image 20230117213032.png]]
---

# Filtering Music

We can apply this lowpass filter to a clip of music using this code:

```python
import numpy as np
from scipy.io import wavfile

filter = np.array(  
    [[0, 1, 0],
      [0, 0, 1],
      [np.sqrt(2)/4, 0.5, np.sqrt(2)/4]])

sampling_rate, wavdata = wavfile.read("music.wav")
wavdata = np.transpose(wavdata)
output_l = np.zeros(len(wavdata[0]))
output_r = np.zeros(len(wavdata[1]))

order = 3

for i in range(len(wavdata) - (order-1)):

  output_l[i] = (filter @ wavdata[0][i:i+order])[-1]
  output_r[i] = (filter @ wavdata[1][i:i+order])[-1]

outdata = np.array([output_l.astype(np.int16), output_r.astype(np.int16)])
outdata=  np.transpose(outdata)

wavfile.write("output.wav", 44100, outdata)
```

---
Notice that the top of the spectra are darker in the second image - this means that the higher frequencies are less loud - you may be able to hear the difference as well
![[Pasted image 20230120144403.png]]
![[Pasted image 20230120144427.png]]

