///<reference types="cypress"/>


describe('basicTests',()=>{

    before(() => {
        cy.visit('https://talmudsearch.dicta.org.il/')
    })

    afterEach(() => {
        cy.go(-2)
      })
    

    it('Run search in hebrew mode',()=>{
        cy.setLanguageMode('Hebrew')
        cy.searchRun('משה קבל תורה מסיני')
        cy.resultsTests('משֶׁה קִבֵּל תּוֹרָה מִסִּינַי')
    })

    it('Run search in english mode',()=>{
        cy.setLanguageMode('English')
        cy.searchRun('משה קבל תורה מסיני')
        cy.resultsTests('משֶׁה קִבֵּל תּוֹרָה מִסִּינַי')
    })

})