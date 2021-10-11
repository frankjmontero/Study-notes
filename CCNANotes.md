
### TCP/IP 5-LAYER MODEL

1. **Physical Layer.** The devices that interconnect. Including cables and their specifications and the specifications to communicate.

2. **Data Link.** (Network Interface, Network Access Layer). Protocols or common ways to define the signals transmitted by the physical layer. Ex.: Ethernet, this standard also covers the protocols to get data to nodes on the same network.

3. **Network. (Internet Layer).** Allows communications between networks through routers. Ex. Internet. Its most famous protocol is IP.

4. **Transport.** Sorts out which client and server programs are supposed to get the data transported by the network layer. MOst common is TCP (Transmission Control Protocol). 

5. **Application Layer.** Like HTTP, SMPT.

We can compare the layers with packets being delivered:
> The physical is the delivery truck, the data link is how the delivery truck gets from one intersection to the next over and over, network identifies which roads need to be taken to get from address A to B, the transport layer makes sure the delivery knows how to knock on your door to tel you the packet was delivered and the application layer is the content of the package itself.


### CABLES

- **CROSSTALK.** In a copper cable we have twisted coper wires that alloow data to he transmitted by variation in the voltage of the electrical signal that travels them. Crosstalk is when an electrical pulse on one wire is accidentally detected on another wire. THe receiving end is not able to understand the date causing a network error.

- **CAT6.** These cables have more strick rules on how they avoid crosstalk, however due to way the wires inside are arrange they lenght they allow is shorter when used in fast networks.
  
- **Fiber-optic cables.** Fiber cables contain individual optical fibers, which are tiny tubes made out of glass about the width of a human hair. These tubes of glass can transport beams of light. Unlike copper, which uses electrical voltages, fiber cables use pulses of light to represent the ones and zeros of the underlying data.

### HUBS AND SWITCHES

- **Hub.** A hub is a physical layer device that allows for connections from many computers at once. All the devices connected to a hub will end up talking to all other devices at the same time. It's up to each system connected to the hub to determine if the incoming data was meant for them, or to ignore it if it isn't. 

- **Collision domain.** A collision domain, is a network segment where only one device can communicate at a time. If multiple systems try sending data at the same time, the electrical pulses sent across the cable can interfere with each other. This causes these systems to have to wait for a quiet period before they try sending their data again. Layer 1.

-**Switch.** A switch is very similar to a hub but a switch can actually inspect the contents of the ethernet protocol data being sent around the network. Determine which system the data is intended for and then only send that data to that one system. Layer 2.

-**LAN, or local area network.** Interconnected computers on a single network.

-**Router**. A router is a device that knows how to forward data between independent networks. a router can inspect IP data to determine where to send things. Routers store internal tables containing information about how to route traffic between lots of different networks all over the world. Layer 3. 

-**Core ISP routers** These don't just handle a lot more traffic than a home or small office router, they also have to deal with much more complexity in making decisions about where to send traffic. A core router usually has many different connections to many other routers. Routers share data with each other via a protocol known as BGP, or border gateway protocol, that let's them learn about the most optimal paths to forward traffic. 

### Network Layer

- *MAC Addresses*. Are mainly use for LAN nodes to comunicate but are not an effective way for nodes to locate each other across the internet.
- *IP Addresses*. These are attached to the network a node is connected to and no the node or device itself. The MAC in your will always be the same no matter where you are connected by the IP will be assign to it by each network you connect to.
- *DHCP (Dynamic Host Configuration Protocol)*. Technology through which Dynamic IPs are assign to connected devices in a network.

