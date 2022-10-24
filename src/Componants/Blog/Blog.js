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
                <h3 className='bg-info bg-gradient p-2 m-4 ' >4.3  How does the private route work?</h3>
                <h5 className='m-5'>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                </h5>

            </div>
            <div>
                <h3 className='bg-info bg-gradient p-2 m-4 ' >4.4 What is Node? How does Node work?</h3>
                <h5 className='m-5'>Node.js is designed to build scalable network applications.It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                </h5>

            </div>
        </div>
    );
};

export default Blog;