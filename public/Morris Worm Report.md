# Historical Malware Project: The Morris Worm

Samuel Lihn
Cybersecurity 11

## Introduction

The Morris Worm was a computer worm that infected 10% of the 60,000 computers connected to ARPANET at that time. A computer worm is a type of malware that can replicate itself and spread throughout a network without a centralized host. The worm affected computers connected to the Advanced Research Projects Agency Movement, including research computers at the Pentagon, NASA, Berkeley, Stanford and MIT. This piece of malware is notable because of how early it was released—it was deployed in 1988, one year before the inception of the World Wide Web. The worm was not the first computer virus, but it was the first worm spread over a computer network. 

## Impact and Intent

The worm did not harm any computers it infected; in fact, it did not contain any code capable of deleting files or causing other harm to a computer. However, the process of replication and propagation caused the virus to consume computing resources, which slowed down research and mail delivery inside between the affected institutions. The worm caused no lasting damage aside from the economic damage resulting from computer downtime.

Functionally, the worm exploited a vulnerability in Sun Microsystems and VAX systems, namely vulnerabilities in the BSD Unix e-mail delivery software, `sendmail`. It utilized an input buffer overflow technique to inject and run malicious code from `sendmail`. From there, the virus propagated through TCP and SMTP connections to other computers on the ARPANET network.

## Punishment and Morality

The lack of lasting damage resulting from his hack can classify the hack as a “white hat” hack. Its creator, Robert Tappan Morris, a 23-year-old Cornell University Graduate who had hacked into a MIT computer to release the worm, was inadvertently exposed to the *New York Times* by one of his friends. Morris was the first individual to be indicted under the 1986 Computer Fraud and Abuse Act, which made unauthorized access to protected computers unlawful. He received a $10,500 fine, three years of probation, and three years of community service.

The motivations behind this cyberattack remain morally ambiguous, as it informed the technology community of the vulnerabilities in their systems and caused no lasting harm. However, his arrest under the Computer Fraud and Abuse Act suggests that his attack was not only criminal but a risk to people and the government. The moral ambiguity of so-called "white hat" hacking remains prevalent to this day, with demonstrations that raise awareness of cybersecurity vulnerabilities usually only presented in an academic setting.

## Sources

fbi.gov: [The Morris Worm: 30 Years Since First Major Attack on the Internet](https://www.fbi.gov/news/stories/morris-worm-30-years-since-first-major-attack-on-internet-110218)
welivesecurity.com: [Five interesting facts about the Morris worm (for its 25th anniversary)](https://www.welivesecurity.com/2013/11/06/five-interesting-facts-about-the-morris-worm-for-its-25th-anniversary/) 
wired.com: [July 26, 1989: First Indictment Under Computer Fraud Act](https://www.wired.com/2011/07/0726first-computer-fraud-indictment/)
limn.it: [THE MORRIS WORM](https://limn.it/articles/the-morris-worm/)
spaf.cerias.erdue.edu: [The Internet Worm Program: An Analysis](https://spaf.cerias.purdue.edu/tech-reps/823.pdf)
