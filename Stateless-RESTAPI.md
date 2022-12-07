REST (REpresentational State Transfer) 

API  (Application Programmable Interface)


USES:

When designing web applications, APIs are used to incorporate data from different sources into our apps. 


What is REST

REST is an architectural style for designing APIs and is probably the most commonly used architecture for web applications.

It aims to provide a uniform interface for interaction with data by using several constraints.

REST in itself is not a protocol. 

Its a set of architectural principles, which intends to make the web more streamlined and uniform. 

REST uses JSON on top of HTTP(in most cases) to achieve this.

Resource Representation = Data + Metadata + Hypermedia Links --- Hypermedia is the engine of REST Architecture.


REST IS STATELESS

The core concept of REST is that the Server has to be completely stateless i.e. it can’t store states. 

The server loses the ability to store sessions as well. 

The session states are stored on Client-Side completely. 

Whenever a request is made to a REST API, we need to pass in the session data along with the request, as server data has no ability to store them.

In REST, every file — Image, CSS, HTML, etc. is called a resource. 

The state of a resource at a particular timestamp is called the resource representation.

Resource Representation = Data + Metadata + Hypermedia Links

The resource representation is transferred from client to server, where the server doesn’t have the ability to store previous states. 

It can just store the current state of the resource representation.

SUMMERY:

In REST architectural style, data and functionality are considered resources and are accessed using Uniform Resource Identifiers (URIs). 

The resources are acted upon by using a set of simple, well-defined operations. 

The clients and servers exchange representations of resources using HTTP

NOTE
_The client is stateful (can store and operate on states) whereas the server is completely stateless(can just store the current state)._
