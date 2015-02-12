exports.register = function(server, options, next) {
    endpoint = options.endpoint || '/ping';
    response = options.response || 'Success';

    server.route({
        method: 'GET',
        path: endpoint,
        handler: function(request, reply) {
            reply(response);
        },
        config: {
            description: 'Simple endpoint to determine service availability. Returns 200 if successful. No required parameters, simply "ping it"'
        }
    });

    next();
};

exports.register.attributes = {
    pkg: require('./package.json')
};