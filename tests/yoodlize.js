var seeAll = {}
module.exports = {
    beforeEach: browser => {
        seeAll = browser.page.yoodilzePage()
        seeAll
            .navigate()
    },
    after: browser => {
        seeAll
            .end()
    },
    'Recreational vehicles test': browser => {
        var category = 'Recreational Vehicles'
        seeAll
            .click('@recSeeAll')
            .waitForElementVisible('@results')
            .verify.containsText('@results','category')
    },
    'Outdoor Gear test': browser => {
        var category = 'Outdoor Gear'
        seeAll
            .click('@outSeeAll')
            .waitForElementVisible('@results')
            .verify.containsText('@results','category')
    },
    'Electronics test': browser => {
        var category = 'Electronics'
        seeAll
            .click('@eleSeeAll')
            .waitForElementVisible('@results')
            .verify.containsText('@results','category')
    },
    'Party and Wedding Equipment test': browser => {
            var category = 'Party & Wedding Equipment'
            seeAll
                .click('@partySeeAll')
                .waitForElementVisible('@results')
                .verify.containsText('@results','category')
        },
    'Tools test': browser => {
        var category = 'Tools'
        seeAll
            .click('@toolsSeeAll')
            .waitForElementVisible('@results')
            .verify.containsText('@results','category')
    },
    'Clothing test': browser => {
        var category = 'Clothing'
        seeAll
            .click('@clothingSeeAll')
            .waitForElementVisible('@results')
            .verify.containsText('@results','category')
    },
    'Home and Kitchen test': browser => {
        var category = 'Home and Kitchen'
        seeAll
            .click('@homeSeeAll')
            .waitForElementVisible('@results')
            .verify.containsText('@results','category')
    },
    'Toys and games test': browser => {
        var category = 'Toys and Games'
        seeAll
            .click('@toysSeeAll')
            .waitForElementVisible('@results')
            .verify.containsText('@results','category')
    },
    'Lawn and garden test': browser => {
        var category = 'Lawn and Garden'
        seeAll
            .click('@lawnSeeAll')
            .waitForElementVisible('@results')
            .verify.containsText('@results','category')
    },
    'Sporting goods test': browser => {
        var category = 'Sporting Equipment'
        seeAll
            .click('@sportSeeAll')
            .waitForElementVisible('@results')
            .verify.containsText('@results','category')
    },
    'Dvds test': browser => {
        var category = 'DVDs'
        seeAll
            .click('@dvdSeeAll')
            .waitForElementVisible('@results')
            .verify.containsText('@results','category')
    },
    'Venues test': browser => {
        var category = 'Venues'
        seeAll
            .click('@venueSeeAll')
            .waitForElementVisible('@results')
            .verify.containsText('@results','category')
    },
    'Music test': browser => {
        var category = 'Music'
        seeAll
            .click('@musicSeeAll')
            .waitForElementVisible('@results')
            .verify.containsText('@results','category')
    },
    'Business Equipment test': browser => {
        var category = 'Business Equipment'
        seeAll
            .click('@businessSeeAll')
            .waitForElementVisible('@results')
            .verify.containsText('@results','category')
    },
    'Misc test': browser => {
        var category = 'Misc'
        seeAll
            .click('@miscSeeAll')
            .waitForElementVisible('@results')
            .verify.containsText('@results','category')
    },
    'Tools Category test': browser => {
        var category = 'Tools'
        seeAll
            .click('@toolsCat')
            .waitForElementVisible('@results')
            .verify.containsText('@results','category')
    },
    'Outdoor Gear category test': browser => {
        var category = 'Outdoor Gear'
        seeAll
            .click('@outdoorCat')
            .waitForElementVisible('@results')
            .verify.containsText('@results','category')
    },
    'Electronics Category test': browser => {
        var category = 'Electronics'
        seeAll
            .click('@eleCat')
            .waitForElementVisible('@results')
            .verify.containsText('@results','category')
    },
    // 'Party and wedding Category test': browser => {
    //     browser
    //         .useXpath()
    //         .click('//a[contains(@href,"/s?category=88")]')
    //         .waitForElementVisible('//div[contains(@class,"sc-jKVCRD jSqgxr")]')
    //         .verify.containsText('//div[contains(@class,"sc-jKVCRD jSqgxr")]','Party & Wedding Equipment')
    // },
    // 'Recreational Vehicles Category test': browser => {
    //     browser
    //         .useXpath()
    //         .click('//a[contains(@href,"/s?category=91")]')
    //         .waitForElementVisible('//div[contains(@class,"sc-jKVCRD jSqgxr")]')
    //         .verify.containsText('//div[contains(@class,"sc-jKVCRD jSqgxr")]','Recreational Vehicles')
    // },
    // 'Clothing Category test': browser => {
    //     browser
    //         .useXpath()
    //         .click('//a[contains(@href,"/s?category=74")]')
    //         .waitForElementVisible('//div[contains(@class,"sc-jKVCRD jSqgxr")]')
    //         .verify.containsText('//div[contains(@class,"sc-jKVCRD jSqgxr")]','Clothing')
    // },
    // 'Home and Kitchen Category test': browser => {
    //     browser
    //         .useXpath()
    //         .click('//a[contains(@href,"/s?category=77")]')
    //         .waitForElementVisible('//div[contains(@class,"sc-jKVCRD jSqgxr")]')
    //         .verify.containsText('//div[contains(@class,"sc-jKVCRD jSqgxr")]','Home and Kitchen')
    // },
    // 'Toys and Games Category test': browser => {
    //     browser
    //         .useXpath()
    //         .click('//a[contains(@href,"/s?category=87")]')
    //         .waitForElementVisible('//div[contains(@class,"sc-jKVCRD jSqgxr")]')
    //         .verify.containsText('//div[contains(@class,"sc-jKVCRD jSqgxr")]','Toys and Games')
    // },
    // 'Lawn and Garden Category test': browser => {
    //     browser
    //         .useXpath()
    //         .click('//a[contains(@href,"/s?category=93")]')
    //         .waitForElementVisible('//div[contains(@class,"sc-jKVCRD jSqgxr")]')
    //         .verify.containsText('//div[contains(@class,"sc-jKVCRD jSqgxr")]','Lawn and Garden')
    // },
    // 'Sporting goods Category test': browser => {
    //     browser
    //         .useXpath()
    //         .click('//a[contains(@href,"/s?category=76")]')
    //         .waitForElementVisible('//div[contains(@class,"sc-jKVCRD jSqgxr")]')
    //         .verify.containsText('//div[contains(@class,"sc-jKVCRD jSqgxr")]','Sporting Equipment')
    // },
    // 'DVDs and video games Category test': browser => {
    //     browser
    //         .useXpath()
    //         .click('//a[contains(@href,"/s?category=97")]')
    //         .waitForElementVisible('//div[contains(@class,"sc-jKVCRD jSqgxr")]')
    //         .verify.containsText('//div[contains(@class,"sc-jKVCRD jSqgxr")]','DVDs')
    // },
    // 'Venues Category test': browser => {
    //     browser
    //         .useXpath()
    //         .click('//a[contains(@href,"/s?category=92")]')
    //         .waitForElementVisible('//div[contains(@class,"sc-jKVCRD jSqgxr")]')
    //         .verify.containsText('//div[contains(@class,"sc-jKVCRD jSqgxr")]','Venues')
    // },
    // 'Music Category test': browser => {
    //     browser
    //         .useXpath()
    //         .click('//a[contains(@href,"/s?category=96")]')
    //         .waitForElementVisible('//div[contains(@class,"sc-jKVCRD jSqgxr")]')
    //         .verify.containsText('//div[contains(@class,"sc-jKVCRD jSqgxr")]','Music')
    // },
    // 'Misc Category test': browser => {
    //     browser
    //         .useXpath()
    //         .click('//a[contains(@href,"/s?category=95")]')
    //         .waitForElementVisible('//div[contains(@class,"sc-jKVCRD jSqgxr")]')
    //         .verify.containsText('//div[contains(@class,"sc-jKVCRD jSqgxr")]','Misc')
    // },
}