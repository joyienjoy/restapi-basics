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

III. HTTP PUT METHOD
     Use PUT APIs primarily to update an existing resource
     The payload contains all the attributes and its values.
     If resource does not exist, then API may decide to create a new resource
     If the request passes through a cache and the Request-URI identifies one or more currently cached entities, those entries SHOULD be treated as stale.
     Responses to PUT method are not cacheable.
     
     Possible Response Codes:
     201 - CREATED
     200 - OK (if data is modified)
     204 - NO PAYLOAD ADDED

POST VS. PUT
    POST requests are made on resource collections: http://www.application.com/users/
    PUT requests are made on a single resource: http://www.application.com/users/2

IV. HTTP DELETE METHOD
    It deletes the resources, as identified by the Request-URI
    DELETE operations are idempotent. If you DELETE a resource, it’s removed from the collection of resources.
    If the request passes through a cache and the Request-URI identifies one or more currently cached entities, those entries SHOULD be treated as stale.
    Responses to this method are not cacheable.
    
    Possible Response Code:
    200 - OK (Item deleted)
    202 - ACCEPTED (Action Queued)
    204 - NO CONTENT (uri missing the data identifier)
    404 - NOT FOUND (data already deleted)
    
    IMP: DELETE is normally used for Items in resources, but can delete the whole Collection if URI points to the collection only.
    
V. HTTP PATCH METHOD
    Performs partial update on a resource.
    The payload contains only the attribute that must be changed.
    

PUT VS PATCH:
If you see PUT requests modify a resource entity too. So to make it more precise – the PATCH method is the correct choice for partially updating an existing resource, and you should only use PUT if you’re replacing a resource in its entirety.

PREFERABLY AVOID PATCH:
    Please note that there are some challenges if you decide to use PATCH APIs in your application:
    Support for PATCH in browsers, servers, and web application frameworks is not universal. 
    IE8, PHP, Tomcat, Django, and lots of other software have missing or broken support for it.
    Request payload of a PATCH request is not straightforward as it is for a PUT request

METHODS Applicable FOR Resource collections:  http://www.application.com/users  : GET / POST

METHODS Applicable FOR Resource members (individual IDs):  http://www.application.com/users/2    : PUT / PATCH / DELETE
