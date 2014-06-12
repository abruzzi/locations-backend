var Search = function() {};

Search.prototype.fetch = function(query) {
    'use strict';
    var dfd;

    if(!query) {
        dfd = $.Deferred();
        dfd.resolove([]);
        return dfd.promise();
    }

    return $.ajax('/locations/' + query, {
        dataType: 'json'
    }).then(function(resp) {
        return resp;
    });
}
