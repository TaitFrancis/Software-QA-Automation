var empArray = require('../testAssets/employeeManagerArray')
module.exports = {
    beforeEach: browser => {
        employeePage = browser.page.employeeManagerPageObj()
        employeePage
            .navigate()
    },
    after: browser => {
        employeePage
            .end()
    },
    'Add Employee test': browser => {
        employeePage
            .add(empArray[2])
    },
    'Employee edit test': browser => {
        employeePage
            .edit(empArray[0])
    },
    'Employee cancel edit test': browser => {
            employeePage
                .cancel(empArray[1])
    },
    'Search test': browser => {
        employeePage
            .search()
    },
    'Delete Employee test': browser => {
        employeePage
            .delete()
    },
}