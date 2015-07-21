var Search = function() {};

Search.prototype.fetch = function(query) {
    'use strict';
    var dfd;

    if(!query) {
        dfd = $.Deferred();
        dfd.resolve([]);
        return dfd.promise();
    }

    return $.ajax('/locations?location=' + query, {
        dataType: 'json'
    }).then(function(resp) {
        return resp;
    });
}
