describe("Menu Widget", function() {

    it("Permits you to select one item from the menu", function() {
        loadFixtures("test_fixture.html");
        spyOn($, "ajax").and.callFake(function(configuration){
            configuration.success({bacon: 5.12})
        });
        var widget = new MenuWidget();
        $("[data-item-name=bacon]").click()
        expect($("#total").text()).toEqual("$5.12");
    });
});
