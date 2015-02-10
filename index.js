exports.register = function(server, options, next) {
    endpoint = options.endpoint || '/ping';

    server.route({
        method: 'GET',
        path: endpoint,
        handler: function(request, reply) {
            reply('success');
        }
    });

    next();
};

exports.register.attributes = {
    pkg: require('./package.json')
};