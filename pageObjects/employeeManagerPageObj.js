var employeeCommands = {
    add: function (myInput) {
    this
        .click('@add')
        .click('@new')
        .clearValue('@name')
        .setValue('@name', myInput.name)
        .clearValue('@phone')
        .setValue('@phone', myInput.phone)
        .clearValue('@title')
        .setValue('@title', myInput.title)
        .clearValue('@email')
        .setValue('@email', myInput.email)
        .click('@save')
        .verify.containsText('@body', 'Darrow')
    return this
    },
    edit: function (myInput) {
        this
        .click('@darrow')
        .waitForElementVisible('@infoCard')
        .clearValue('@name')
        .setValue('@name', myInput.name)
        .clearValue('@phone')
        .setValue('@phone', myInput.phone)
        .clearValue('@title')
        .setValue('@title', myInput.title)
        .clearValue('@email')
        .setValue('@email', myInput.email)
        .click('@save')
        .click('@emp389')
        .click('@holiday')
        .verify.valueContains('@name', myInput.name)
        .verify.valueContains('@phone', myInput.phone)
        .verify.valueContains('@title', myInput.title)
        return this
    },
    cancel: function (myInput) {
        this
        .click('@holiday')
        .waitForElementVisible('@infoCard')
        .clearValue('@name')
        .setValue('@name', myInput.name)
        .clearValue('@phone')
        .setValue('@phone', myInput.phone)
        .clearValue('@title')
        .setValue('@title', myInput.title)
        .clearValue('@email')
        .setValue('@email', myInput.email)
        .click('@cancel')
        .verify.not.valueContains('@name', myInput.name)
        .verify.not.valueContains('@phone', myInput.phone)
        .verify.not.valueContains('@title', myInput.title)
        return this
    },
    search: function () {
        this
        .setValue('@search', 'Holiday')
        .verify.containsText('@body', 'Holiday')
        return this
    },
    delete: function () {
    this
        .click('@holiday')
        .click('@delete')
        .api.acceptAlert() 
        this
        .click('@emp389')
        .expect.element('@body').text.to.not.equal('Holiday')
    return this
    }
}
module.exports = {
    url:'https://devmountain-qa.github.io/employee-manager-v2/build/index.html',
    commands: [employeeCommands],
    elements: {
        emp125: {
            selector: ('[name="employee125"]')
        },
        name: {
            selector: ('[name="nameEntry"]')
        },
        phone: {
            selector: ('[name="phoneEntry"]')
        },
        title: {
            selector: ('[name="titleEntry"]')
        },
        save: {
            selector: ('#saveBtn')
        },
        infoCard: {
            selector: ('.infoCard')
        },
        email: {
            selector: ('[name="emailEntry"]')
        },
        cancel: {
            selector: ('[name="cancel"]')
        },
        delete: {
            selector: ('[name="delete"]')
        },
        search: {
            selector: ('[name="searchBox"]')
        },
        add: {
            selector: ('[name="addEmployee"]')
        },
        new: {
            selector: ( '//li[text()="New Employee"]'),
            locateStrategy: 'xpath'
        },
        emp389: {
            selector: ('[name="employee389"]')
        },
        body: {
            selector: ('.main-container')
        },
        darrow: {
            selector: ( '//li[text()="Darrow"]'),
            locateStrategy: 'xpath'
        },
        holiday: {
            selector: ( '//li[text()="Holiday"]'),
            locateStrategy: 'xpath'
        }
    }
}