exports.register = function(server, options, next) {
    endpoint = options.endpoint || '/ping';
    response = options.response || 'Success';

    server.route({
        method: 'GET',
        path: endpoint,
        handler: function(request, reply) {
            reply(response);
        }
    });

    next();
};

exports.register.attributes = {
    pkg: require('./package.json')
};