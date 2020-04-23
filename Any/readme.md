# RPC

> Remote Procedure Call (RPC) is a protocol that one program can use to request a service from a program located in another computer on a network without having to understand the network's details. A procedure call is also sometimes known as a function call or a subroutine call.

# gRPC

> In gRPC a client application can directly call methods on a server application on a different machine as if it was a local object, making it easier for you to create distributed applications and services. As in many RPC systems, gRPC is based around the idea of defining a service, specifying the methods that can be called remotely with their parameters and return types. On the server side, the server implements this interface and runs a gRPC server to handle client calls. On the client side, the client has a stub (referred to as just a client in some languages) that provides the same methods as the server.

![alt text](./img/grpc.svg "refreshscope")

https://grpc.io/docs/guides/




devam et:

https://gokit.io/examples/
https://dzone.com/articles/writing-a-microservice-in-golang-which-communicate
https://github.com/go-kit/kit
https://dev.to/napolux/how-to-write-a-microservice-in-go-with-go-kit-a66
https://tour.golang.org/moretypes/13




----------

# Protocol Buffers


Protocol buffers are a language-neutral, platform-neutral extensible mechanism for serializing structured data.


https://developers.google.com/protocol-buffers


----


# XHR Module (Rewrite)

The XHR module enables the developer to send HTTP or HTTPS requests to a remote web server and load the response data back into the Event Handler. 

The maximum recursion limit you can do is 3 - hops from one Function to another, using publish or fire, you can execute a maximum of three Functions.

# Virtual dom RN (Rewrite)

React creates an in-memory data structure cache, computes the resulting differences, and then updates the browser’s displayed DOM efficiently. This allows developers to write code as if the entire page is rendered on each change while the React libraries only render subcomponents that actually change.

# Interaction Manager  (Rewrite)

The InteractionManager is the native module responsible for deferring the execution of a function until an “interaction” has finished. We can call InteractionManager.runAfterInteractions(() => {...}) to handle this deferral. We can also register our own interactions.

InteractionManager is very important because React Native has two threads. There is a JavaScript UI thread which handles drawing updates to the screen, and another thread used for all tasks not on the UI thread. Since there is only one thread for making UI updates, it can get overloaded and drop frames, especially during things like navigation screen animations. We use the InteractionManager to ensure that our function is executed after these animations occur so that we do not drop frames on the UI thread. Trying to draw a new screen while it is being animated is often too much for the thread to handle.

