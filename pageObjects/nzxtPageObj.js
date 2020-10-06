var categoryCommands = {
    category: function (Input) {
        this
        .maximizeWindow()
        .click(Input.category)
        .verify.containsText(Input.verify, Input.results)
        .api.back()
        return this
    },
}
var searchCommands = {
    search: function (Input) {
        this
        .maximizeWindow()
        .click('@searchBtn')
        .clearValue('@searchField')
        .setValue('@searchField', [Input.search, this.api.Keys.ENTER])
        .verify.containsText('@page', Input.search)
        return this
    }
}
var cartCommands = {
    addCart: function () {
        this
        .maximizeWindow()
        .click('@compBtn')
        .click('@powerSupE850')
        .pause(2000)
        .click('@addToCart')
        .pause(2000)
        .click('@closePopUp')
        .click('@cart')
        .verify.containsText('@cartItem', 'E850')
        return this 
    }
}
var bldCommands = {
    bld: function () {
        this
        .maximizeWindow()
        .click('@gamePC')
        .verify.containsText('body', 'NZXT BLD')
        .click('@getStart')
        .click('@halo')
        .click('@doom')
        .click('@overwatch')
        .click('@pickPrice')
        .click('@price')
        .click('@review')
        .pause(1000)
        .click('@checkout')
        .verify.containsText('@checkoutHead', 'Information', 'Shipping', 'Payment')
        return this
    },
    bld2: function () {
        this
        .maximizeWindow()
        .click('@gamePC')
        .waitForElementVisible('body')
        .verify.containsText('body', 'NZXT BLD')
        .click('@startOver')
        .waitForElementVisible('@startOverAlert')
        .click('@startOverAlert')
        .click('@halo')
        .click('@doom')
        .click('@overwatch')
        .click('@pickPrice')
        .click('@price')
        .click('@coreSwitch')
        .click('@configure')
        .pause(1000)
        .click('@h710btn')
        .click('@coolingTab')
        .pause(1000)
        .click('@x63btn')
        .click('@motherboardTab')
        .pause(1000)
        .click('@x570btn')
        .click('@gpuTab')
        .click('@cpuTab')
        .pause(1000)
        .api.acceptAlert
        this
        .click('@ryzen9btn')
        .pause(1000)
        .click('@psuTab')
        .click('@ramTab')
        .click('@storageTab')
        .click('@more')
        .click('@nextCheckout')
        .pause(1000)
        .click('@checkout')
        .verify.containsText('@checkoutHead', 'Information', 'Shipping', 'Payment')
        return this
    }
}
module.exports = {
    url: 'https://www.nzxt.com/',
    commands: [categoryCommands, searchCommands, cartCommands, bldCommands],
    elements: {
        compBtn: {
            selector: '.products'
        },
        audioBtn: {
            selector: '.product-overview-aer-headset-ecosystem'
        },
        gameAcceBtn: {
            selector: '.categories-gaming-accessories'
        },
        pcMonBtn: {
            selector: '.camapp'
        },
        contactBtn: {
            selector: '.contacts-new'
        },
        searchBtn: {
            selector: 'i[class="fa fa-search"]'
        },
        searchField: {
            selector: '#search-field'
        },
        gamePC: {
            selector: '//a[contains(text(),"GAMING PCs")]',
            locateStrategy: 'xpath'
        },
        blog: {
            selector: '//a[contains(text(),"Blog")]',
            locateStrategy: 'xpath'
        },
        catRes: {
            selector: '.breadcrumbs'
        },
        page: {
            selector: 'div[class="category-list-container container"]'
        },
        contactHead: {
            selector: '.contacts-header'
        },
        powerSupE850: {
            selector: '//a[contains(text(),"E850")]',
            locateStrategy: 'xpath'
        },
        addToCart: {
            selector: '.add-to-cart'
        },
        cart: {
            selector: 'li[class="cart"]'
        },
        remove: {
            selector: '//a[contains(text(),"v")][2]'
        },
        cartItem: {
            selector: 'td[class="product-item first"]'
        },
        closePopUp: {
            selector: 'a[class="fancybox-item fancybox-close"]'
        },
        getStart: {
            selector: 'li[class="get-started-button"]'
        },
        halo: {
            selector: '#game-54'
        },
        doom: {
            selector: '#game-56'
        },
        overwatch: {
            selector: '#game-15'
        },
        pickPrice: {
            selector: '#link-step2'
        },
        price: {
            selector: '#price3'
        },
        coreSwitch: {
            selector: '.switchery'
        },
        review : {
            selector: '//button[contains(text(),"Review & Checkout")]',
            locateStrategy: 'xpath'
        },
        checkout: {
            selector: '//button[contains(text(),"CHECKOUT")]',
            locateStrategy: 'xpath'
        },
        checkoutHead: {
            selector: '.breadcrumb'
        },
        overviewHead: {
            selector: '.checkout-heading'
        },
        h710btn: {
            selector: '(//a[@class="btn btn-green btn-outline"])[5]',
            locateStrategy: 'xpath'
        },
        coolingTab: {
            selector: '#cooling-tab-button'
        },
        x63btn: {
            selector: '(//a[@class="btn btn-green btn-outline"])[9]',
            locateStrategy: 'xpath'
        },
        motherboardTab: {
            selector: '#motherboard-tab-button'
        },
        x570btn: {
            selector: '(//a[@class="btn btn-green btn-outline"])[17]',
            locateStrategy: 'xpath'
        },
        gpuTab: {
            selector: '#gpu-tab-button'
        },
        cpuTab: {
            selector: '(//a[contains(text(),"CPU")])[2]',
            locateStrategy: 'xpath'
        },
        psuTab: {
            selector: '#psu-tab-button'
        },
        ramTab: {
            selector: '#ram-tab-button'
        },
        storageTab: {
            selector: '#storage-tab-button'
        },
        more: {
            selector: 'a[class="btn btn-green next"]'
        },
        nextCheckout: {
            selector: 'a[class="btn btn-purple next"]'
        },
        configure: {
            selector: '//button[contains(text(),"Configure")]',
            locateStrategy: 'xpath'
        },
        startOver: {
            selector: 'li[class="start-over-button"]'
        },
        startOverAlert: {
            selector: '//button[contains(text(),"START OVER")]',
            locateStrategy: 'xpath'
        },
        ryzen9btn: {
            selector: '(//a[@class="btn btn-green btn-outline"])[23]',
            locateStrategy: 'xpath'
        }
    }
}