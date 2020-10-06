var nzxtCatArray = require('../testAssets/nzxtCatArray')
var nzxtSearchArray = require('../testAssets/nzxtSearchArray')
module.exports = {
    beforeEach: browser => {
        browser
            pageObj = browser.page.nzxtPageObj()
            pageObj
                .navigate()
    },
    after: browser => {
        pageObj
            .end()
    },
    'Search test': browser => {
        nzxtSearchArray.forEach(test => {
            pageObj
              .search(test)
            })
    },
    'Add to cart test': browser => {
            pageObj
            .addCart(browser)
    },
    'Bld test': browser => {
        pageObj
        .bld(browser)
    },
    'Bld2 test': browser => {
        pageObj
        .bld2(browser)
    },
    'Categories test': browser => {
        nzxtCatArray.forEach(test => {
            pageObj
              .category(test)
            })
    }
}