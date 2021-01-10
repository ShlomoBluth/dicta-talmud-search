/// <reference types="cypress"/>

////run tests on requests from talmud search run some in hebrew mode and english mode

describe('RequestsTest',()=>{

    
  before(() => {
    cy.visit('https://search.dicta.org.il/')
  })

  afterEach(() => {
    cy.go(-2)
  })
   

  
  it('Error message for response with a delay of 5 minutes when clicking the run button'+
  ' of talmud search page in hebrew mode',()=>{
    cy.talmudSearchRequest({
      language:'Hebrew',
      message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר',
      delaySeconds: 5*60
    })
  })

  it('Error message for response with a delay of 5 minutes when clicking the run button'+
  ' of talmud search page in english mode',()=>{
    cy.talmudSearchRequest({
      language:'English',
      message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר',
      delaySeconds: 60*5
    })
  })

  it('Error message for response with status code 500 when clicking the run button of talmud search'+
  ' page in hebrew mode',()=>{
    cy.talmudSearchRequest({
      language:'Hebrew',
      status:500,
      message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר'
    })
  })

  it('Error message for response with status code 500 when clicking the run button of talmud search'+
  ' page in english mode',()=>{
    cy.talmudSearchRequest({
      language:'English',
      status:500,
      message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר'
    })
  })

    

    
    
})