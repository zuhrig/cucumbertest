
module.exports = function () {
  this.Given(/^I am on the preselected_flight results page$/, function () {
    var url = 'http://www.despegar.cl/cp/shop/search/C982/C3071/2016-08-19/2016-08-24/2/0/0/NA/2016-08-19/2016-08-24/2';
    var hotel = function (ec) {
      var ec = protractor.ExpectedConditions;
      return ec.visibilityOf(element.all(by.repeater('offer in tripBoard.data.hotelOffers.data.elements')), 10000);
    };

    browser.get(url);
    debugger;
    browser.ignoreSynchronization = true;
    browser.rootEl = 'dShop';
    browser.wait(hotel);
    browser.pause();
    expect(hotel_list.count()).to.be.above(1);
  });
};
