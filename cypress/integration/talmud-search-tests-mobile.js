///<reference types="cypress"/>






describe('talmud-search-tests-mobile',()=>{

    before(()=>{
        cy.visit('/')
    })

    beforeEach(() => {
        cy.viewport("iphone-x")
        //cy.visit('/')
    })

    // afterEach(() => {
    //     cy.get('[class="title inner-header-logo-title"]').click({force:true})
    //     //cy.navigateToStartPage('https://use-dicta-components-2--tender-hamilton-5d028e.netlify.app/')
    // })

    // it('Run search in hebrew mode',()=>{
    //     cy.searchRun({text:'משה קבל תורה מסיני',collection:'תלמוד',language:'Hebrew'})
    //     cy.resultsTests('משֶׁה קִבֵּל תּוֹרָה מִסִּינַי')
    // })

    // it('Run search in english mode',()=>{
    //     cy.searchRun({text:'משה קבל תורה מסיני',collection:'תלמוד',language:'English'})
    //     cy.resultsTests('משֶׁה קִבֵּל תּוֹרָה מִסִּינַי')
    // })

    // it('Each result contains at least one word form of each search word',()=>{
    //     cy.searchRun({text:'כמאן סבירא להו',collection:'תלמוד',language:'Hebrew'})
    //     cy.showAllWordForms()
    //     cy.eachSelectedWordFormMatrix().then(selectedWordFormMatrix=>{
    //         //For the first word in the search has 8 words form
    //         expect(selectedWordFormMatrix[0].length).eq(8)
    //         //For the second word in the search has 15 words form
    //         expect(selectedWordFormMatrix[1].length).eq(15)
    //         //For the thired word in the search has 8 words form
    //         expect(selectedWordFormMatrix[2].length).eq(8)
    //         cy.resultPagination({
    //             tests:'wordForms',
    //             data:selectedWordFormMatrix
    //         })
    //     })
    // })

    // it('Removal of word form',()=>{
    //     cy.searchRun({text:'משה קבל תורה',collection:'תלמוד',language:'Hebrew'})
    //     cy.showAllWordForms()
    //     //The number in the top has 17
    //     cy.get('.f > span > :nth-child(2)').should('contain',17)
    //     //Removal of למשה
    //     cy.get('li').contains('למשה').within(()=>{
    //         cy.get('[type="checkbox"]').uncheck({force: true})
    //     })
    //     cy.get('[class*="loader"]').should('not.exist')
    //     //The number in the top has 16
    //     cy.get('.f > span > :nth-child(2)').should('contain',16)
    //     cy.eachSelectedWordFormMatrix().then(selectedWordFormMatrix=>{
    //         //For the first word in the search has 7 words form    
    //         expect(selectedWordFormMatrix[0].length).eq(7)
    //        //For the second word in the search has 15 words form
    //        expect(selectedWordFormMatrix[1].length).eq(15)
    //        //For the thired word in the search has 8 words form
    //        expect(selectedWordFormMatrix[2].length).eq(8)
    //         cy.resultPagination({
    //             tests:'wordForms',
    //             data:selectedWordFormMatrix
    //         })
    //     })
    //     //Check of למשה
    //     cy.get('li').contains('למשה').within(()=>{
    //         cy.get('[type="checkbox"]').check({force: true})
    //     })
    // })

    it('Each word form appears in the results as the number of times it has been written next to word form',()=>{
        cy.searchRun({text:'כמאן סבירא להו',collection:'תלמוד',language:'Hebrew'})
        cy.showAllWordForms()
        cy.wordFormsWithNumberOfAppearances()
    })
})