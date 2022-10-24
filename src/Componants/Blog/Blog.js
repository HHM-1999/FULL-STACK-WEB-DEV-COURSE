import React from 'react';


const Blog = () => {
    return (
        <div className='mt-5 container'>
            <div>
                <h3 className='bg-info bg-gradient p-2 m-4 ' > 4.1  What is `cors`?</h3>
                <h5 className='m-5'>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request.In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request. </h5>

            </div>
            <div>
                <h3 className='bg-info bg-gradient p-2 m-4 ' >4.2   Why are you using`firebase`?What other options do you have to implement authentication? </h3>
                <h5 className='m-5'>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. The options are : <li>STYTCH</li>
                    <li>Supabase</li> <li>Keycloak</li> <li>Frontegg</li> <li>Authress</li></h5>

            </div>
            <div>
                <h3 className='bg-info bg-gradient p-2 m-4 ' > Short note of Useref hook .</h3>
                <h5 className='m-5'>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.Use useRef if you need to manage focus, text selection, trigger imperative animations or integrating third-party libraries.
                </h5>

            </div>
        </div>
    );
};

export default Blog;