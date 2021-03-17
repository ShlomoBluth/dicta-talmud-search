///<reference types="cypress"/>


describe('talmud-search-tests',()=>{

    before(() => {
        cy.visit('/')
    })

    afterEach(() => {
        cy.navigateToStartPage('https://use-dicta-components-2--tender-hamilton-5d028e.netlify.app/')
     })
    

    // it('Run search in hebrew mode',()=>{
    //     cy.searchRun({text:'משה קבל תורה מסיני',collection:'תלמוד',language:'Hebrew'})
    //     //cy.searchRun('משה קבל תורה מסיני')
    //     //cy.get('.search-form > .form-control').should('contain','/^משה קבל תורה מסיני$/')
    //     cy.resultsTests('משֶׁה קִבֵּל תּוֹרָה מִסִּינַי')
    // })

    // it('Run search in english mode',()=>{
    //     cy.searchRun({text:'משה קבל תורה מסיני',collection:'תלמוד',language:'English'})
    //     // cy.setLanguageMode('English')
    //     // cy.searchRun('משה קבל תורה מסיני')
    //     cy.resultsTests('משֶׁה קִבֵּל תּוֹרָה מִסִּינַי')
    // })

    // it('Each result contains at least one word form of each search word',()=>{
    //     cy.searchRun({text:'משה קבל תורה',collection:'תלמוד',language:'Hebrew'})
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

    it('Removal of word form',()=>{
        cy.searchRun({text:'משה קבל תורה',collection:'תלמוד',language:'Hebrew'})
        cy.showAllWordForms()
        //The number in the top has 17
        cy.get('.f > span > :nth-child(2)').should('contain',17)
        //Removal of משה
        cy.get('li').contains('משה').within(()=>{
            cy.get('[type="checkbox"]').uncheck({force: true})
        })
        cy.get('[class*="loader"]').should('not.exist')
        //The number in the top has 10
        cy.get('.f > span > :nth-child(2)').should('contain',10)
        cy.eachSelectedWordFormMatrix().then(selectedWordFormMatrix=>{
            //For the first word in the search has 11 words form    
            expect(selectedWordFormMatrix[0].length).eq(11)
            //For the second word in the search has 2 words form
            expect(selectedWordFormMatrix[1].length).eq(2)
            cy.resultPagination({
                tests:'wordForms',
                data:selectedWordFormMatrix
            })
        })
        //Check of משה
        cy.get('li').contains('משה').within(()=>{
            cy.get('[type="checkbox"]').check({force: true})
        })
    })
        
       
    
    // it('Each word form appears in the results as the number of times it has been written next to word form',()=>{
    //     cy.searchRun({text:'צבי',collection:'תלמוד',language:'Hebrew'})
    //     cy.showAllWordForms()
    //     cy.wordFormsWithNumberOfAppearances()
    // })

    // it('A pair of words that come one after the other',()=>{
    //     cy.searchRun({text:'שלום בית',collection:'תלמוד',language:'Hebrew'})
    //     //Number of results
    //     cy.get('.f > span > :nth-child(2)').then($numberOfResults=>{
    //         expect(parseInt($numberOfResults.text())).to.eq(116)
    //     })
    //     cy.get('input[class*="search-form-control"]').clear({force:true})
    //     .type('"שלום בית"',{force:true})
    //     cy.get('[class*="fa-search text"]').click({force:true})
    //     cy.get('[class*="loader"]').should('not.exist')
    //     //Number of results
    //     cy.get('.f > span > :nth-child(2)').then($numberOfResults=>{
    //         expect(parseInt($numberOfResults.text())).to.eq(2)
    //     }).then(()=>{
    //         cy.showAllWordForms()
    //         cy.consecutiveWordsFormsArray().then(consecutiveWordFormsArray=>{
    //             cy.resultPagination({
    //                 tests:'wordFormsConsecutive',
    //                 data:consecutiveWordFormsArray
    //             })
    //         })
    //     })
    // })

    // it('Each result contains the specific word',()=>{
    //     cy.searchRun({text:'לַאֲרָיֹות',collection:'תלמוד',language:'Hebrew'})
    //      cy.resultPagination({
    //         tests: 'specific search',
    //         data:'לַאֲרָיֹות'
    //      })
    //  })

    

   

    // it('Each book appears in the results as the number of times it has been written next to book',()=>{
    //     cy.searchRun({text:'יום השישי',collection:'תלמוד',language:'Hebrew'})
    //     cy.showBooks()
    //     cy.selectedBooksMap().then(selectedBooks=>{
    //         //Number of books is 7    
    //         expect(selectedBooks.size).eq(7)
    //         cy.resultPagination({
    //             tests:'books',
    //             data:selectedBooks
    //         })
    //     })
    // })

    // it('Removal of book',()=>{
    //     cy.searchRun({text:'יום השישי',collection:'תלמוד',language:'Hebrew'})
    //     cy.showBooks()
    //     //remove book שמות
    //     cy.get('[class="slide-li"]').contains('ספר שמות').within(()=>{
    //         cy.get('[type="checkbox"]').uncheck({force: true})
    //         cy.get('[type="checkbox"]').should('not.be.checked')
    //     })
    //     cy.selectedBooksMap().then(selectedBooks=>{
    //         //Number of books is 6
    //         expect(selectedBooks.size).eq(6)
    //         cy.resultPagination({
    //             tests:'books',
    //             data:selectedBooks
    //         })
    //     })
    // })

    // it('Each result has at least one meaning of each search word',()=>{
    //     cy.searchRun({text:'יום השישי',collection:'תלמוד',language:'Hebrew'})
    //     cy.showMeaningsAndSynonyms()
    //     cy.eachSelectedMeaningsAndSynonymsMatrix().then(meaningsAndSynonymsMatrix=>{
    //         cy.resultPagination({
    //             tests:'selectedMeaningsAndSynonyms',
    //             data:meaningsAndSynonymsMatrix
    //         })
    //     })
    // })

    // it('Each meaning appears in the results as the number of times it has been written next to meaning',()=>{
    //     cy.searchRun({text:'הבל הבלים',collection:'תלמוד',language:'Hebrew'})
    //     cy.showMeaningsAndSynonyms()
    //     cy.eachMeaningTests() 
    // })

    // it('Each meaning and synonym appears in the results as the number of times it has been written'+
    // ' next to meaning',()=>{
    //     cy.searchRun({text:'הבל הבלים',collection:'תלמוד',language:'Hebrew'})
    //     cy.showMeaningsAndSynonyms()
    //     cy.synonymsTests()
    // })

    // it('Each result has at least one meaning or synonym of each search word',()=>{
    //     let numberOfResults
    //     cy.searchRun({text:'צבי',collection:'תלמוד',language:'Hebrew'})
    //     //num of results befor synonyms
    //     cy.get('.f > span > :nth-child(2)').then($numberOfResults=>{
    //         numberOfResults=parseInt($numberOfResults.text())
    //     }).then(()=>{
    //         cy.showMeaningsAndSynonyms()
    //         cy.selectSynonym('עֹפֶר')
    //         cy.selectSynonym('צָבָא')
    //     }).then(()=>{
    //         //num of results after synonyms
    //         cy.get('.f > span > :nth-child(2)').then($numberOfResults=>{
    //             expect(parseInt($numberOfResults.text())).to.greaterThan( numberOfResults)
    //         })
    //     }).then(()=>{
    //         cy.eachSelectedMeaningsAndSynonymsMatrix().then(meaningsAndSynonymsMatrix=>{
    //             cy.resultPagination({
    //                 tests:'selectedMeaningsAndSynonyms',
    //                 data:meaningsAndSynonymsMatrix
    //             })
    //         })
    //     })
    // })

    // it('Removal of meaning',()=>{
    //     cy.searchRun({text:'אריה',collection:'תלמוד',language:'Hebrew'})
    //     cy.showMeaningsAndSynonyms()
    //     //cy.intercept('**').as('requests')
    //     cy.get('li[class="slide-li"]').contains('אֲרִי').within(()=>{
    //         cy.get('[type="checkbox"]').uncheck({force: true})
    //         cy.get('[type="checkbox"]').should('not.be.checked')
    //     }).then(()=>{
    //         cy.get('[class*="loader"]').should('not.exist')
    //         //Check meanings update
    //         cy.get('[class*="collapse-btn"]').first().click().then(()=>{
    //             cy.get('[class="description-text"]').should('have.length',15)
    //         })
    //         cy.get('[class*="collapse-btn"]').first().click()
    //         cy.eachSelectedMeaningsAndSynonymsMatrix().then(meaningsAndSynonymsMatrix=>{
    //             cy.resultPagination({
    //                 tests:'selectedMeaningsAndSynonyms',
    //                 data:meaningsAndSynonymsMatrix
    //             })
    //         })
    //     })       
    // })

    


    // it('No meanings but there are synonyms',()=>{
    //     cy.searchRun({text:'ששון חדווה',collection:'תלמוד',language:'Hebrew'})
    //     //Results not exist
    //     cy.get('[class="result-list"]').should('not.exist').then(()=>{
    //         cy.showMeaningsAndSynonyms()
    //         //Select synonym of the word
    //         cy.get('[class="inner-ul"]').first().within(()=>{
    //             cy.selectSynonym('גִּילָה')
    //         })
    //         //Select synonym of the word
    //         cy.get('[class="inner-ul"]').first().next().within(()=>{
    //             cy.selectSynonym('רִנָּה')
    //         })
    //     }).then(()=>{
    //         //The number in the top has 6
    //         cy.get('.f > span > :nth-child(2)').then($numberOfResults=>{
    //             expect(parseInt($numberOfResults.text())).to.eq(6)
    //         })
    //     })
    //     cy.eachSelectedMeaningsAndSynonymsMatrix().then(meaningsAndSynonymsMatrix=>{
    //         cy.resultPagination({tests:'selectedMeaningsAndSynonyms',data:meaningsAndSynonymsMatrix})
    //     })
    // })

    

    // it('Search with root words',()=>{
    //     cy.searchRun({text:'ברא',collection:'תלמוד',language:'Hebrew'})
    //     cy.existsInResult('וַיִּבְרָא')
    // })

    // it('search full spelling and also get partial spelling results',()=>{
    //     cy.searchRun({text:'דָּוִיד',collection:'תלמוד',language:'Hebrew'})
    //     cy.existsInResult('דָוִד')
    // })

    // it('search partial spelling and also get full spelling results',()=>{
    //     cy.searchRun({text:'דָוִד',collection:'תלמוד',language:'Hebrew'})
    //     cy.existsInResult('דָּוִיד')
    // })

    // // it('Second person',()=>{
    // //     cy.searchRun({text:'אֹתְכָה',collection:'תלמוד',language:'Hebrew'})
    // //     cy.existsInResult('אֹותְךָ')
    // // })

    // it('Different suffixes second person that does not end with "ה"',()=>{
    //     cy.searchRun({text:'אֹותְךָ',collection:'תלמוד',language:'Hebrew'})
    //     cy.existsInResult('אֹתְכָה')
    // })

    // // it('Second person, female',()=>{
    // //     cy.searchRun({text:'גַּרְתָּה',collection:'תלמוד',language:'Hebrew'})
    // //     cy.existsInResult('גַּרְתָּ')
    // // })

    // it('Different suffixes second person, female that does not end with "ה"',()=>{
    //     cy.searchRun({text:'גַּרְתָּ',collection:'תלמוד',language:'Hebrew'})
    //     cy.existsInResult('גַּרְתָּה')
    // })

    // // it('Third person',()=>{
    // //     cy.searchRun({text:'כֻּלֹּה',collection:'תלמוד',language:'Hebrew'})
    // //     cy.existsInResult('כֻּלֹּו')
    // // })

    // it('Different suffixes third person that does not end with "ה"',()=>{
    //     cy.searchRun({text:'כֻּלֹּו',collection:'תלמוד',language:'Hebrew'})
    //     cy.existsInResult('כֻּלֹּה')
    // })

    // it('Search additional א and also get missing א results',()=>{
    //     cy.searchRun({text:'ונטמאתם',collection:'תלמוד',language:'Hebrew'})
    //     cy.existsInResult('וְנִטְמֵתֶם')
    // })

    // it('Search missing א and also get additional א results',()=>{
    //     cy.searchRun({text:'ורציתי',collection:'תלמוד',language:'Hebrew'})
    //     cy.existsInResult('וְרָצִאתִי')
    // })

    // it('Search missing ה and also get additional ה results',()=>{
    //     cy.searchRun({text:'כָּמֹוךָ',collection:'תלמוד',language:'Hebrew'})
    //     cy.existsInResult('כָמֹכָה')
    // })

    // // it('Additional ה',()=>{
    // //     cy.searchRun({text:'כָמֹכָה',collection:'תלמוד',language:'Hebrew'})
    // //     cy.existsInResult('כָּמֹוךָ')
    // // })

    // it('Interchangeable letters',()=>{
    //     cy.searchRun({text:'ימלא',collection:'תלמוד',language:'Hebrew'})
    //     cy.existsInResult('יְמַלֵּה') 
    // })

    // // it('Interchangeable letters',()=>{
    // //     cy.searchRun({text:'יְמַלֵּה',collection:'תלמוד',language:'Hebrew'})
    // //     cy.existsInResult('יִמָּלֵא')
    // // })

    // it('Interchangeable letters',()=>{
    //     cy.searchRun({text:'וארסתיך',collection:'תלמוד',language:'Hebrew'})
    //     cy.existsInResult('וְאֵרַשְׂתִּיךְ') 
    // })

    // it('Different ways the bible refers to G-d',()=>{
    //     cy.searchRun({text:'א-להים',collection:'תלמוד',language:'Hebrew'})
    //     cy.existsInResult('הָאֱלֹהִים')
    //     // cy.searchRun({text:'ה\'',language:'Hebrew'})
    //     // cy.existsInResult('הָאֱלֹהִים')
    // })

    // it('Search with numbers',()=>{
    //     cy.searchRun({text:'127',collection:'תלמוד',language:'Hebrew'})
    //     cy.existsInResult('מֵאָה')
    //     cy.existsInResult('וְעֶשְׂרִים')
    //     cy.existsInResult('וְשֶׁבַע')
    // })

    // const downloadsFolder = Cypress.config('downloadsFolder')

    // it('Html download',()=>{
    //     cy.searchRun({text:'יום השישי',page:'Start',collection:'תלמוד',language:'Hebrew'})
    //     cy.exec(' npx rimraf cypress/downloads/*')
    //     cy.removeTaamim()
    //     cy.get('[class*="dropdown-toggle"]').contains('הורדה').click()
    //     cy.get('p').contains('קובץ CSV').parent().within(()=>{
    //         cy.get('[type="radio"]').check({force:true})
    //     })
    //     cy.get('[type="submit"]').click().then(()=>{
    //         const filename = path.join(downloadsFolder, 'searchResults.csv')
    //         cy.readFile(filename,{timeout:150000}).should('have.length',19)
    //     })
    // })




})