jasmine.getFixtures().fixturesPath = "test/fixtures/";

var fixtures = [
    "index.html"
];

$(function() {
    fixtures.forEach(function(fixture) {
        var box = readFixtures(fixture);
        $(box).appendTo($("body"));
    }); 
});

