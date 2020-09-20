var testPage = {}
module.exports = {
    beforeEach: browser => {
        testPage = browser.page.checkpoint2PageObj()
        testPage
            .navigate()
    },
    after: browser => {
        testPage
            .end()
    },
    'Evens and Odds Valid test': browser => {
        var input = '12,13'
        var results1 = '12'
        var results2 = '13'
        testPage 
            .click('@evenOddInput')
            .setValue('@evenOddInput',input)
            .click('@evenOddBtn')
            .verify.containsText('@evenResults',results1)
            .verify.containsText('@oddResults',results2)
    },
    'Evens and Odds invalid test': browser => {
        var input = 'not,numbers'
        var results1 = 'Evens: []'
        var results2 = 'Odds: [null,null]'
        testPage 
            .click('@evenOddInput')
            .setValue('@evenOddInput',input)
            .click('@evenOddBtn')
            .verify.containsText('@evenResults',results1)
            .verify.containsText('@oddResults',results2)
    },
    'Evens and Odds nothing test': browser => {
        var input = ''
        var results1 = 'Evens: [null]'
        var results2 = 'Odds: []'
        testPage 
            .click('@evenOddInput')
            .setValue('@evenOddInput',input)
            .click('@evenOddBtn')
            .verify.containsText('@evenResults',results1)
            .verify.containsText('@oddResults',results2)
    },
    'Filter object valid test': browser => {
        var input = 'hairColor'
        var results ='{ "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }'
        testPage
            .click('@objectInput')
            .setValue('@objectInput',input)
            .click('@objectBtn')
            .verify.containsText('@objectResults',results)
    },
    'Filter object invalid test': browser => {
        var input = 'Jimmy Joe'
        var results ='Filtered: []'
        testPage
            .click('@objectInput')
            .setValue('@objectInput',input)
            .click('@objectBtn')
            .expect.element('@objectResults').text.to.equal(results)
    },
    'Filter object nothing test': browser => {
        var input = ''
        var results ='Filtered: []'
        testPage
            .click('@objectInput')
            .setValue('@objectInput',input)
            .click('@objectBtn')
            .expect.element('@objectResults').text.to.equal(results)
    },
    'Filter String valid test': browser => {
        var input = 'M'
        var results = '[ "Melody", "Mark", "Maddy" ]'
        testPage
            .click('@stringInput')
            .setValue('@stringInput',input)
            .click('@stringBtn')
            .verify.containsText('@stringResults',results)
    },
    'Filter String invalid test': browser => {
        var input = '8'
        var results = 'Filtered Names: []'
        testPage
            .click('@stringInput')
            .setValue('@stringInput',input)
            .click('@stringBtn')
            .expect.element('@stringResults').text.to.equal(results)
    },
    'Filter String nothing test': browser => {
        var input = ''
        var results = 'Filtered Names: [ "James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy" ]'
        testPage
            .click('@stringInput')
            .setValue('@stringInput',input)
            .click('@stringBtn')
            .expect.element('@stringResults').text.to.equal(results)
    },
    'Palindrome valid test': browser => {
        var input = 'tacocat'
        var results = 'true'
        testPage
            .click('@palInput')
            .setValue('@palInput',input)
            .click('@palBtn')
            .verify.containsText('@palResults',results)
    },
    'Palindrome invalid test': browser => {
        var input = 'batman'
        var results = 'false'
        testPage
            .click('@palInput')
            .setValue('@palInput',input)
            .click('@palBtn')
            .verify.containsText('@palResults',results)
    },
    'Palindrome nothing test': browser => {
        var input = ''
        var results = 'true'
        testPage
            .click('@palInput')
            .setValue('@palInput',input)
            .click('@palBtn')
            .verify.containsText('@palResults',results)
    },
    'Sum valid test': browser => {
        var input1 = '21'
        var input2 = '40'
        var results = '61'
        testPage
            .click('@sumInput1')
            .setValue('@sumInput1',input1)
            .click('@sumInput2')
            .setValue('@sumInput2',input2)
            .click('@sumBtn')
            .verify.containsText('@sumResults',results)
    },
    'Sum invalid test': browser => {
        var input1 = 'ab'
        var input2 = 'cd'
        var results = 'Sum: 0'
        testPage
            .click('@sumInput1')
            .setValue('@sumInput1',input1)
            .click('@sumInput2')
            .setValue('@sumInput2',input2)
            .click('@sumBtn')
            .expect.element('@sumResults').text.to.equal(results)
    },
    'Sum nothing test': browser => {
        var input1 = ''
        var input2 = ''
        var results = 'Sum: 0'
        testPage
            .click('@sumInput1')
            .setValue('@sumInput1',input1)
            .click('@sumInput2')
            .setValue('@sumInput2',input2)
            .click('@sumBtn')
            .expect.element('@sumResults').text.to.equal(results)
    }
}