var nzxtArray = require('../testAssets/nzxtArray')
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
        pageObj
        .search(browser)
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
        nzxtArray.forEach(test => {
            pageObj
              .category(test)
            })
    }
}