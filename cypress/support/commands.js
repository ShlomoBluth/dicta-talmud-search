

Cypress.Commands.add('clickNikud',()=>{
  cy.get('[class*="text-select f-narkis"] > :nth-child(2)').click({force: true})
})

Cypress.Commands.add('resultsTests',(text)=>{
  cy.get('[class*="loader"]').should('not.exist')
  let nakdanResults=''
  cy.get('[class="sentence-holder"]').first().within(()=>{
    cy.get('b').parent().then($restOfTheSentence=>{
      nakdanResults=$restOfTheSentence.text()
    })
  }).then(()=>{
      expect(nakdanResults.substring(0,nakdanResults.length-1))
      .contains(text)
  }) 
})


Cypress.Commands.add('talmudSearchRequest',({url,language,status=200,message='',delaySeconds=0})=>{
  cy.intercept('POST', url, {
    delayMs:1000*delaySeconds,
    statusCode: status
  })
  //cy.setLanguageMode(language)
  if(message.length>0){
    cy.contains(message,{timeout:1000*delaySeconds}).should('not.exist')
  }  
  cy.searchRunforReq({text:'משה קבל תורה מסיני',language:language,delay:true})
  if(delaySeconds>0){
    cy.get('body').then(($body) => {
      cy.get('[class*="loader"]',{timeout:1000*delaySeconds}).should('not.exist')
      cy.contains(/Loading|טוען נתונים/g,{timeout:1000*delaySeconds}).should('not.exist')
    })
  }

  if(message.length>0){
    cy.contains(message).should('exist')
  }   
    
})

Cypress.Commands.add('setLanguageMode',(language)=>{
    cy.get('body').then(elem => {
      let languageMode
      if(language=='Hebrew'){
        languageMode='he'
      }else if(language=='English'){
        languageMode=''
      }
      let classAttr 
      if(elem.attr("class").substring(0,2)=='he'){
        classAttr=elem.attr("class").substring(0,2)
      }else{
        classAttr=''
      }
      if(classAttr!=languageMode)
      {
        cy.get('a').contains(/^English$|^עברית$/g).click({force: true});
      }
      if(languageMode=='he'){
        cy.get('a').contains(/^English$/).should('exist')
      } else{
        cy.get('a').contains(/^עברית$/).should('exist')
      }
    })
})