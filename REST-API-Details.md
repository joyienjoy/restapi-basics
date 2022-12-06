Definition:
REST stands for representational state transfer and is a software architecture style that defines a pattern for client and server communications over a network. 
REST is not a specification but a set of guidelines on how to architect a network-connected software system.

Why:
REST provides a set of constraints for software architecture to promote performance, scalability, simplicity, and reliability in the system.

REST Architectural Constraints:

1. Stateless: The server won’t maintain any data/metadata between requests from the client.
2. Client-server: The client and server must be decoupled from each other, allowing each to develop independently.
3. Cacheable: The data retrieved from the server should be cacheable either by the client or by the server.
4. Uniform interface: The server will provide a uniform interface for accessing resources without defining their representation.
5. Layered system: The client may access the resources on the server indirectly through other layers such as a proxy or load balancer.
6. Code on demand (optional): The server may transfer code to the client that it can run, such as JavaScript for a single-page application.


REST WEB SERVICE:
1. Any web service that adheres to REST architecture constraints. 
2. These web services expose their data to the outside world through an API. 
3. REST APIs provide access to web service data through public web URLs.

Example: https://api.github.com/users/<username>   -- this shows all metadata about a particular github account

HTTP METHODS
1. REST APIs listen for HTTP methods to know which operations to perform on the web service’s resources. 
2. A resource is any data available in the web service that can be accessed and manipulated with HTTP requests to the REST API.

I. HTTP GET METHOD
    Use GET requests to retrieve resource representation/information only ( Don't use it to modify data).
    It do not change the resource’s state or data (safe methods)
    It is idempotent (Making multiple identical requests must produce the same result every time)
    If the Request-URI refers to a "Process", Output of the process shall be returned as the entity in the response.
    
    Possible Response Codes:
        1. 200 - OK
        2. 404 - NOT FOUND
        3. 400 - BAD REQUEST

II. HTTP POST METHOD
    Use POST APIs to create an entry in the resources. 
    A Payload with all atributes is must in this.
    Responses to this method are not cacheable unless the response includes appropriate Cache-Control or Expires header fields.
    POST can change the representation of resources. (Not a safe method)
    It is not idempotent, and invoking two identical POST requests will result in two different resources containing the same info with new ids.
    
    Possible Response Codes:
        1. 200 - OK
        2. 204 - NO DATA TO POST

III. 
