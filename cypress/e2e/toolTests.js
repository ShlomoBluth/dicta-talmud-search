///<reference types="cypress"/>




const urls = new Map();
urls.set('live',Cypress.env('LIVE_URL'))
//urls.set('dev',Cypress.env('DEV_URL')) 

const sizes= new Map();
sizes.set('desktop',[1000, 660])
sizes.set('mobile','iphone-x')


urls.forEach((urlValue,urlKey)=>{

    sizes.forEach((sizeValue,sizeKey) => {

    
        describe('toolTests '+urlKey+' '+sizeKey,()=>{
    
            beforeEach(() => {
                cy.screenSize({size:sizeValue})
                cy.visitpage({url:urlValue})
            })

            it('Run search in hebrew mode',()=>{
                cy.searchRun({text:'משה קבל תורה מסיני',collection:'תלמוד',language:'Hebrew'})
                cy.theFormOfTheText('עם ניקוד')
                cy.resultsTests('משֶׁה קִבֵּל תּוֹרָה מִסִּינַי')
            })
        
            // it('Run search in english mode',()=>{
            //     cy.searchRun({text:'משה קבל תורה מסיני',collection:'תלמוד',language:'English'})
            //     cy.resultsTests('משֶׁה קִבֵּל תּוֹרָה מִסִּינַי')
            // })
        
            // // it('Each result contains at least one word form of each search word',()=>{
            // //     cy.searchRun({text:'כמאן סבירא להו',collection:'תלמוד',language:'Hebrew'})
            // //     cy.showAllWordForms()
            // //     cy.eachSelectedWordFormMatrix().then(selectedWordFormMatrix=>{
            // //         //For the first word in the search has 2 words form
            // //         expect(selectedWordFormMatrix[0].length).eq(2)
            // //         //For the second word in the search has 4 words form
            // //         expect(selectedWordFormMatrix[1].length).eq(4)
            // //         //For the thired word in the search has 5 words form
            // //         expect(selectedWordFormMatrix[2].length).eq(2)
            // //         cy.resultPagination({
            // //             tests:'wordForms',
            // //             data:selectedWordFormMatrix
            // //         })
            // //     })
            // // })
        
            // it('Removal of word form',()=>{
            //     cy.searchRun({text:'משה קבל תורה',collection:'תלמוד',language:'Hebrew'})
            //     //The number in the top has 17
            //     cy.get('.f > span > :nth-child(2)').should('contain',17)
            //     cy.contains('277 הטיות נבחרו').should('exist')
            //     cy.showAllWordForms()
            //     //Removal of למשה
            //     cy.get('span[class="f-narkis"]').contains('למשה').parent()
            //     .siblings('[class*="chek-box-holder"]').within(()=>{
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
            //     cy.get('span[class="f-narkis"]',{timeout:70000}).contains('למשה').parent()
            //     .siblings('[class*="chek-box-holder"]').within(()=>{
            //         cy.get('[type="checkbox"]').check({force: true})
            //     })
            // })
                
               
            
            // it('Each word form appears in the results as the number of times it has been written next to word form',()=>{
            //     cy.searchRun({text:'כמאן סבירא להו',collection:'תלמוד',language:'Hebrew'})
            //     cy.showAllWordForms()
            //     cy.wordFormsWithNumberOfAppearances()
            // })
        
            // it('A pair of words that come one after the other',()=>{
            //     cy.searchRun({text:'שלום בית',collection:'תלמוד',language:'Hebrew'})
            //     //Number of results
            //     cy.get('.f > span > :nth-child(2)').then($numberOfResults=>{
            //         expect(parseInt($numberOfResults.text())).to.eq(198)
            //     })
            //     cy.visitpage({url:urlValue})
            //     cy.searchRun({text:'"שלום בית"',collection:'תלמוד',language:'Hebrew'})
            //     cy.contains('240 הטיות נבחרו').should('exist')
                
            //     //Number of results
            //     cy.get('.f > span > :nth-child(2)').then($numberOfResults=>{
            //         expect(parseInt($numberOfResults.text())).to.eq(6)
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
            //     cy.searchRun({text:'לאריות',collection:'תלמוד',language:'Hebrew'})
            //     cy.theFormOfTheText('ללא ניקוד')
            //      cy.resultPagination({
            //         tests: 'specific search',
            //         data:'לאריות'
            //      })
            //     cy.clickNikud()
            //  })
        
            
        
           
        
            // it('Each book appears in the results as the number of times it has been written next to book',()=>{
            //     cy.searchRun({text:'דהכי אשכחן',collection:'תלמוד',language:'Hebrew'})
            //     cy.showBooks()
            //     cy.selectedBooksMap().then(selectedBooks=>{
            //         //Number of books is 12    
            //         expect(selectedBooks.size).eq(12)
            //         cy.resultPagination({
            //             tests:'books',
            //             data:selectedBooks
            //         })
            //     })
            // })
        
            // it('Removal of book',()=>{
            //     cy.searchRun({text:'דהכי אשכחן',collection:'תלמוד',language:'Hebrew'})
            //     cy.showBooks()
            //     //remove book שבת
            //     cy.get('[class="slide-li"]').contains('מסכת שבת').within(()=>{
            //         cy.get('[type="checkbox"]').uncheck({force: true})
            //         cy.get('[type="checkbox"]').should('not.be.checked')
            //     })
            //     cy.selectedBooksMap().then(selectedBooks=>{
            //         //Number of books is 11
            //         expect(selectedBooks.size).eq(11)
            //         cy.resultPagination({
            //             tests:'books',
            //             data:selectedBooks
            //         })
            //     })
            // })
        
            // it('Removal of collection',()=>{
            //     cy.searchRun({text:'דהכי אשכחן',collection:'תלמוד',language:'Hebrew'})
            //     cy.showBooks()
            //     //remove collection סדר מועד
            //     cy.get('span').contains('סדר מועד').parent('a').siblings('[class*="inner-accordion-content"]')
            //     .within(()=>{
            //         cy.get('[class*="selectAll"]').within(()=>{
            //             cy.get('[type="checkbox"]').uncheck({force: true})
            //             cy.get('[type="checkbox"]').should('not.be.checked')
            //         })
            //     })
            //     cy.selectedBooksMap().then(selectedBooks=>{
            //         //Number of books is 9
            //         expect(selectedBooks.size).eq(9)
            //         cy.resultPagination({
            //             tests:'books',
            //             data:selectedBooks
            //         })
            //     })
            // })
        
            // // //////////////////////////////////////////////////////////////////////////////////////
        
            // // // it('Each result has at least one meaning of each search word',()=>{
            // // //     cy.searchRun({text:'יום השישי',collection:'תלמוד',language:'Hebrew'})
            // // //     cy.showMeaningsAndSynonyms()
            // // //     cy.eachSelectedMeaningsAndSynonymsMatrix().then(meaningsAndSynonymsMatrix=>{
            // // //         cy.resultPagination({
            // // //             tests:'selectedMeaningsAndSynonyms',
            // // //             data:meaningsAndSynonymsMatrix
            // // //         })
            // // //     })
            // // // })
        
            // // // it('Each meaning appears in the results as the number of times it has been written next to meaning',()=>{
            // // //     cy.searchRun({text:'הבל הבלים',collection:'תלמוד',language:'Hebrew'})
            // // //     cy.showMeaningsAndSynonyms()
            // // //     cy.eachMeaningTests() 
            // // // })
        
            // // // it('Each meaning and synonym appears in the results as the number of times it has been written'+
            // // // ' next to meaning',()=>{
            // // //     cy.searchRun({text:'הבל הבלים',collection:'תלמוד',language:'Hebrew'})
            // // //     cy.showMeaningsAndSynonyms()
            // // //     cy.synonymsTests()
            // // // })
        
            // // // it('Each result has at least one meaning or synonym of each search word',()=>{
            // // //     let numberOfResults
            // // //     cy.searchRun({text:'צבי',collection:'תלמוד',language:'Hebrew'})
            // // //     //num of results befor synonyms
            // // //     cy.get('.f > span > :nth-child(2)').then($numberOfResults=>{
            // // //         numberOfResults=parseInt($numberOfResults.text())
            // // //     }).then(()=>{
            // // //         cy.showMeaningsAndSynonyms()
            // // //         cy.selectSynonym('עֹפֶר')
            // // //         cy.selectSynonym('צָבָא')
            // // //     }).then(()=>{
            // // //         //num of results after synonyms
            // // //         cy.get('.f > span > :nth-child(2)').then($numberOfResults=>{
            // // //             expect(parseInt($numberOfResults.text())).to.greaterThan( numberOfResults)
            // // //         })
            // // //     }).then(()=>{
            // // //         cy.eachSelectedMeaningsAndSynonymsMatrix().then(meaningsAndSynonymsMatrix=>{
            // // //             cy.resultPagination({
            // // //                 tests:'selectedMeaningsAndSynonyms',
            // // //                 data:meaningsAndSynonymsMatrix
            // // //             })
            // // //         })
            // // //     })
            // // // })
        
            // // // it('Removal of meaning',()=>{
            // // //     cy.searchRun({text:'אריה',collection:'תלמוד',language:'Hebrew'})
            // // //     cy.showMeaningsAndSynonyms()
            // // //     //cy.intercept('**').as('requests')
            // // //     cy.get('li[class="slide-li"]').contains('אֲרִי').within(()=>{
            // // //         cy.get('[type="checkbox"]').uncheck({force: true})
            // // //         cy.get('[type="checkbox"]').should('not.be.checked')
            // // //     }).then(()=>{
            // // //         cy.get('[class*="loader"]').should('not.exist')
            // // //         //Check meanings update
            // // //         cy.get('[class*="collapse-btn"]').first().click().then(()=>{
            // // //             cy.get('[class="description-text"]').should('have.length',15)
            // // //         })
            // // //         cy.get('[class*="collapse-btn"]').first().click()
            // // //         cy.eachSelectedMeaningsAndSynonymsMatrix().then(meaningsAndSynonymsMatrix=>{
            // // //             cy.resultPagination({
            // // //                 tests:'selectedMeaningsAndSynonyms',
            // // //                 data:meaningsAndSynonymsMatrix
            // // //             })
            // // //         })
            // // //     })       
            // // // })
        
            
        
        
            // // // it('No meanings but there are synonyms',()=>{
            // // //     cy.searchRun({text:'ששון חדווה',collection:'תלמוד',language:'Hebrew'})
            // // //     //Results not exist
            // // //     cy.get('[class="result-list"]').should('not.exist').then(()=>{
            // // //         cy.showMeaningsAndSynonyms()
            // // //         //Select synonym of the word
            // // //         cy.get('[class="inner-ul"]').first().within(()=>{
            // // //             cy.selectSynonym('גִּילָה')
            // // //         })
            // // //         //Select synonym of the word
            // // //         cy.get('[class="inner-ul"]').first().next().within(()=>{
            // // //             cy.selectSynonym('רִנָּה')
            // // //         })
            // // //     }).then(()=>{
            // // //         //The number in the top has 6
            // // //         cy.get('.f > span > :nth-child(2)').then($numberOfResults=>{
            // // //             expect(parseInt($numberOfResults.text())).to.eq(6)
            // // //         })
            // // //     })
            // // //     cy.eachSelectedMeaningsAndSynonymsMatrix().then(meaningsAndSynonymsMatrix=>{
            // // //         cy.resultPagination({tests:'selectedMeaningsAndSynonyms',data:meaningsAndSynonymsMatrix})
            // // //     })
            // // // })
        
            // // /////////////////////////////////////////////////////////////////////////////
        
            // it('Search with root words',()=>{
            //     cy.searchRun({text:'ברא',collection:'תלמוד',language:'Hebrew'})
            //     cy.existsInResult('ויברא')
            // })
        
            // it('Search full spelling and also get partial spelling results',()=>{
            //     cy.searchRun({text:'דויד',collection:'תלמוד',language:'Hebrew'})
            //     cy.existsInResult('דוד')
            // })
        
            // it('Search partial spelling and also get full spelling results',()=>{
            //     cy.searchRun({text:'תקו',collection:'תלמוד',language:'Hebrew'})
            //     cy.theFormOfTheText('ללא ניקוד')
            //     cy.existsInResult('תיקו')
            // })
        
            // it('Search a word that ends with א and also get that word that ends with ה',()=>{
            //     cy.searchRun({text:'נפקה מינא',collection:'תלמוד',language:'Hebrew'})
            //     cy.theFormOfTheText('ללא ניקוד')
            //     cy.existsInResult('נפקא')
            // })
        
            // it('Search a word that ends with ה and also get that word that ends with א',()=>{
            //     cy.searchRun({text:'נפקה מינא',collection:'תלמוד',language:'Hebrew'})
            //     cy.theFormOfTheText('ללא ניקוד')
            //     cy.existsInResult('מינה')
            // })
        
            // it('Search a word that ends with ן and also get that word that ends with ם',()=>{
            //     cy.searchRun({text:'חִטִּים',collection:'תלמוד',language:'Hebrew'})
            //     //cy.theFormOfTheText('ללא ניקוד')
            //     cy.existsInResult('חִטִּין') 
            // })
        
            // // //clarify
            // // it('Search a word that ends with ן and also get that word that ends with ם',()=>{
            // //     cy.searchRun({text:'חִטִּין',collection:'תנ"ך',language:'Hebrew'})
            // //     //cy.theFormOfTheText('ללא ניקוד')
            // //     cy.existsInResult('חִטִּים','חִטִּין')
            // // })
        
            // it('Search a word and also get that word with addition',()=>{
            //     cy.searchRun({text:'מאן דאמר',collection:'תלמוד',language:'Hebrew'})
            //     cy.theFormOfTheText('ללא ניקוד')
            //     cy.existsInResult('כמאן')
            // })
        
            
        
            
        
        
        
            // // // it('Second person',()=>{
            // // //     cy.searchRun({text:'אֹתְכָה',collection:'תלמוד',language:'Hebrew'})
            // // //     cy.existsInResult('אֹותְךָ')
            // // // })
        
            // // it('Different suffixes second person that does not end with "ה"',()=>{
            // //     cy.searchRun({text:'אותך',collection:'תלמוד',language:'Hebrew'})
            // //     cy.existsInResult('אותכה')
            // // })
        
            // // // it('Second person, female',()=>{
            // // //     cy.searchRun({text:'גַּרְתָּה',collection:'תלמוד',language:'Hebrew'})
            // // //     cy.existsInResult('גַּרְתָּ')
            // // // })
        
            // // it('Different suffixes second person, female that does not end with "ה"',()=>{
            // //     cy.searchRun({text:'גרת',collection:'תלמוד',language:'Hebrew'})
            // //     cy.existsInResult('גרתה')
            // // })
        
            // // // it('Third person',()=>{
            // // //     cy.searchRun({text:'כֻּלֹּה',collection:'תלמוד',language:'Hebrew'})
            // // //     cy.existsInResult('כֻּלֹּו')
            // // // })
        
            // // it('Different suffixes third person that does not end with "ה"',()=>{
            // //     cy.searchRun({text:'כֻּלֹּו',collection:'תלמוד',language:'Hebrew'})
            // //     cy.existsInResult('כֻּלֹּה')
            // // })
        
            // // it('Search additional א and also get missing א results',()=>{
            // //     cy.searchRun({text:'רצאתי',collection:'תלמוד',language:'Hebrew'})
            // //     cy.existsInResult('רציתי')
            // // })
        
            // // it('Search missing א and also get additional א results',()=>{
            // //     cy.searchRun({text:'ורציתי',collection:'תלמוד',language:'Hebrew'})
            // //     cy.existsInResult('וְרָצִאתִי')
            // // })
        
            // // it('Search missing ה and also get additional ה results',()=>{
            // //     cy.searchRun({text:'כָּמֹוךָ',collection:'תלמוד',language:'Hebrew'})
            // //     cy.existsInResult('כָמֹכָה')
            // // })
        
            // // // it('Additional ה',()=>{
            // // //     cy.searchRun({text:'כָמֹכָה',collection:'תלמוד',language:'Hebrew'})
            // // //     cy.existsInResult('כָּמֹוךָ')
            // // // })
        
            // // it('Interchangeable letters',()=>{
            // //     cy.searchRun({text:'ימלא',collection:'תלמוד',language:'Hebrew'})
            // //     cy.existsInResult('יְמַלֵּה') 
            // // })
        
            // // // it('Interchangeable letters',()=>{
            // // //     cy.searchRun({text:'יְמַלֵּה',collection:'תלמוד',language:'Hebrew'})
            // // //     cy.existsInResult('יִמָּלֵא')
            // // // })
        
            // // it('Interchangeable letters',()=>{
            // //     cy.searchRun({text:'ארסתיך',collection:'תלמוד',language:'Hebrew'})
            // //     cy.existsInResult('ארשתיך') 
            // // })
        
            // it('Different ways the bible refers to G-d',()=>{
            //     cy.searchRun({text:'א-להים',collection:'תלמוד',language:'Hebrew'})
            //     cy.existsInResult('אֱלֹהִים')
            // })
        
            // it('Search with numbers',()=>{
            //     cy.setLanguageMode({
            //         language:'Hebrew',
            //         mobileSelector:'lang-switch'
            //       })
            //     cy.log("Run search for 4")
            //     cy.intercept('**/wordforms').as('wordformsreq')
            //     cy.get('input[id="search_box"]').clear().type('4')
            //     cy.get('button[id="mobile_search_button"]').click({force:true})
            //     cy.wait('@wordformsreq',{timeout:30000})
            //     if(urlKey.includes('dev')){
            //         cy.get('[class*=spinner]').should('not.exist')        
            //         cy.contains('אופס יש לנו בעיה נסו שנית, או בקרו באתר מאוחר יותר')
            //         .should('be.visible')
            //     }
            // })
        
            // it('No nikud',()=>{
            //     cy.searchRun({text:'מאימתי קורין',collection:'תלמוד',language:'Hebrew'})
            //     cy.theFormOfTheText('ללא ניקוד')
            //     cy.get('[class="result-li"]').first().should('contain','מאימתי קורין')
            // })
        
            // it('With nikud',()=>{
            //     cy.searchRun({text:'מאימתי קורין',collection:'תלמוד',language:'Hebrew'})
            //     cy.theFormOfTheText('עם ניקוד')
            //     cy.get('[class="result-li"]').first().should('contain','מֵאֵימָתַי קוֹרִין')
            // })
        
            // it('Increasing the font',()=>{
            //     let fontSize
            //     cy.searchRun({text:'מאימתי קורין',collection:'תלמוד',language:'Hebrew'})
            //     cy.fontSize().then(size=>{
            //         fontSize=size
            //     })
            //     cy.get('[class*=fa-search-plus]').click({force: true})
            //     cy.fontSize().then(size=>{
            //         cy.wrap(size).should('be.gt',fontSize)
            //     })
            //     cy.get('[class*=fa-search-minus]').click({force: true})
            // })
        
            // it('Font reduction',()=>{
            //     let fontSize
            //     cy.searchRun({text:'מאימתי קורין',collection:'תלמוד',language:'Hebrew'})
            //     cy.fontSize().then(size=>{
            //         fontSize=size
            //     })
            //     cy.get('[class*=fa-search-minus]').click({force: true})
            //     cy.fontSize().then(size=>{
            //         cy.wrap(size).should('be.lt',fontSize)
            //     })
            //     cy.get('[class*=fa-search-plus]').click({force: true})
            // })
        
            // it('10 results per page',()=>{
            //     cy.searchRun({text:'נפקא מינה',collection:'תלמוד',language:'Hebrew'})
            //     cy.numberOfResultInPage('10')
            //     cy.get('[class="result-li"]').should('have.length',10)
            // })
        
            // it('50 results per page',()=>{
            //     cy.searchRun({text:'נפקא מינה',collection:'תלמוד',language:'Hebrew'})
            //     cy.numberOfResultInPage('50')
            //     cy.get('[class="result-li"]').should('have.length',50)
            // })
        
            // it('100 results per page',()=>{
            //     cy.searchRun({text:'נפקא מינה',collection:'תלמוד',language:'Hebrew'})
            //     cy.numberOfResultInPage('100')
            //     cy.get('[class="result-li"]').should('have.length',100)
            // })
        
        
        
            
            
        
            // it('HTML download', { browser: '!chrome' },()=>{
            //     cy.searchRun({text:'יום השישי',collection:'תלמוד',language:'Hebrew'})
            //     cy.removeDownloadsFiles()
            //     cy.downloadFile({type:'HTML'}).then(()=>{
            //         cy.validateFile({
            //             type:'html',
            //             resNum:46,
            //             collection:'תלמוד'
            //         })
            //     })
            // })
        
            // it('HTML download do not include the שמות קדושים', { browser: '!firefox' },()=>{
            //     cy.searchRun({text:'א-להים',collection:'תלמוד',language:'Hebrew'})
            //     cy.removeDownloadsFiles()
            //     cy.downloadFile({type:'HTML',shemotKdoshim:true}).then(()=>{
            //         cy.fileDoesNotContain({type:'html',text:'אֱלֹהִים'})
            //     })
            // })
        
    
            
            // it('TXT download', { browser: '!chrome' },()=>{
            //     cy.searchRun({text:'יום השישי',collection:'תלמוד',language:'Hebrew'})
            //     cy.removeDownloadsFiles()
            //     cy.downloadFile({type:'TXT'}).then(()=>{
            //         cy.validateFile({
            //             type:'txt',
            //             resNum:46,
            //             collection:'תלמוד'
            //         })
            //     })
            // })
        
            // // // it('TXT download do not include the שמות קדושים', { browser: '!firefox' },()=>{
            // // //     cy.searchRun({text:'א-להים',collection:'תלמוד',language:'Hebrew'})
            // // //     cy.removeDownloadsFiles()
            // // //     cy.downloadFile({type:'TXT',shemotKdoshim:true}).then(()=>{
            // // //         cy.fileDoesNotContain({type:'txt',text:'אֱלֹהִים'})
            // // //     })
            // // // })
        
            // it('CSV download', { browser: '!chrome' },()=>{
            //     cy.searchRun({text:'יום השישי',collection:'תלמוד',language:'Hebrew'})
            //     cy.removeDownloadsFiles()
            //     cy.downloadFile({type:'CSV'}).then(()=>{
            //         cy.validateFile({
            //             type:'csv',
            //             resNum:46,
            //             collection:'תלמוד'
            //         })
            //     })
            // })
        
            // // it('CSV download do not include the שמות קדושים', { browser: '!firefox' },()=>{
            // //     cy.searchRun({text:'א-להים',collection:'תלמוד',language:'Hebrew'})
            // //     cy.removeDownloadsFiles()
            // //     cy.downloadFile({type:'CSV',shemotKdoshim:true}).then(()=>{
            // //         cy.fileDoesNotContain({type:'csv',text:'אֱלֹהִים'})
            // //     })
            // // })
        
            // it('Word download', { browser: '!chrome' },()=>{
            //     cy.searchRun({text:'יום השישי',collection:'תלמוד',language:'Hebrew'})
            //     cy.removeDownloadsFiles()
            //     cy.downloadFile({type:'Word'}).then(()=>{
            //         //Convert file to html
            //         cy.readFile('cypress/downloads/searchResults.docx').then(()=>{
            //              cy.exec('npm run searchResults-convert', {failOnNonZeroExit: false})
            //              cy.validateFile({
            //                  type:'html',
            //                  resNum:46,
            //                  collection:'תלמוד'
            //              })
            //          })
            //     })
            // })
        
            // // it('Word download do not include the שמות קדושים', { browser: '!firefox' },()=>{
            // //     cy.searchRun({text:'א-להים',collection:'תלמוד',language:'Hebrew'})
            // //     cy.removeDownloadsFiles()
            // //     cy.downloadFile({type:'Word',shemotKdoshim:true}).then(()=>{
            // //         //Convert file to html
            // //         cy.exec('npm run searchResults-convert', {failOnNonZeroExit: false})
            // //         cy.fileDoesNotContain({type:'html',text:'אֱלֹהִים'})
            // //     })
            // // })
        
    
        })
    })

})