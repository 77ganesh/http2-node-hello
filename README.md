Hello World http2 (along with h2c) server & client in node


http2 is in general used with TLS.


server.js & client.js contain example code for http2 with TLS.
To generate your own cert you can use the following command

`openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes -subj '/CN=localhost'`

---------

Though browsers dont support http2 over plain text for a variety of complicated reasons (ALPN, cross protocol attacks, etc), it is indeed possible to use http2 over plain TCP without encryption.

server_h2c.js & client_h2c.js contain example code for http2 over cleartext (h2c).