describe('search form', function() {
    'use strict';
    var form;
    var searchForm;

    beforeEach(function() {
        form = $('<div><input type="text" /><input class="submit"/></div>');
        searchForm = new SearchForm(form);
    });

    it('should construct a new form', function() {
        expect(searchForm).toBeDefined();
    });

    it('should trigger search when I click submit', function() {
        var spyEvent = spyOnEvent(document, 'search');
        form.find('.submit').click();

        expect(spyEvent).toHaveBeenTriggered();
    });
});
