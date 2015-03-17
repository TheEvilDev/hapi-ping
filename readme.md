# hapi-ping

A simple hapi plugin that creates a "ping" service which can be used by clients to determine availability

## Installation

Simply install with npm and go!

    npm install hapi-ping

## Usage
Usage is very simple, simply register it as a hapi plugin, and the route will be added to your service.
Optionally, you can override the endpoint with the "endpoint" option. You can also configure what the response
body will be when the service is successful. (Generally I just return the services package.json contents, as it
    makes it easy to get service version information etc);

## Plugin Options

### `endpoint`

The route to expose the ping functionality on.

Defaults to `'/ping'`

### `response`

The response to send when an incoming request hits the ping endpoint. This can be any type of object that hapi's `reply` interface accepts or a function that returns any type of object that hapi's `reply` interface accepts. Set this to a function if the desire is to return dynamic data. Defaults to `'Success'`

## Example
```javascript
    var server = new Hapi.Server();

    server.connection({
      port: 3001
    });

    server.register({
        register: require('hapi-ping'),
        options: {
          response: require('./package.json')
        }
      },
      function(err) {
        if (err) {
          console.error('Failed to load plugin: ', err);
        }
      });

    server.start();
```
