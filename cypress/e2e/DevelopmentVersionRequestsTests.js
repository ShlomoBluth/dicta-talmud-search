/// <reference types="cypress"/>

////run tests on requests from talmud search run some in hebrew mode and english mode

let sizes = ['iphone-x',[1000, 660]]



sizes.forEach((size) => {

  describe('DevelopmentVersionRequestsTests',()=>{

    
    beforeEach(() => {
      cy.screenSize({size:size})
      cy.visitpage({url:'/'})
    })
     
  
    it('Error message for textAnalysis response with a delay of 5 minutes when clicking the run button'+
    ' of talmud search page in hebrew mode',()=>{
      cy.talmudSearchRequest({
        url:'/textAnalysis',
        language:'Hebrew',
        message:'אופס יש לנו בעיה נסו שנית, או בקרו באתר מאוחר יותר',
        delaySeconds:  60*5
      })
    })

    it('Error message for textAnalysis response with a delay of 5 minutes when clicking the run button'+
    ' of talmud search page in english mode',()=>{
      cy.talmudSearchRequest({
        url:'/textAnalysis',
        language:'English',
        message:'Oops. Something went wrong Please try again later',
        delaySeconds: 60*5
      })
    })

    it('Error message for textAnalysis response with status code 500 when clicking the run button of talmud search page'+
    ' in hebrew mode',()=>{
      cy.talmudSearchRequest({
        url:'/textAnalysis',
        language:'Hebrew',
        status:500,
        message:'אופס יש לנו בעיה נסו שנית, או בקרו באתר מאוחר יותר'
      })
    })

    it('Error message for textAnalysis response with status code 500 when clicking the run button of talmud search page'+
    ' in english mode',()=>{
      cy.talmudSearchRequest({
        url:'/textAnalysis',
        language:'English',
        status:500,
        message:'Oops. Something went wrong Please try again later'
      })
    })


  

    it('Error message for search response with a delay of 5 minutes when clicking the run button'+
    ' of talmud search page in hebrew mode',()=>{
      cy.talmudSearchRequest({
        url:'/search',
        language:'Hebrew',
        message:'אופס יש לנו בעיה נסו שנית, או בקרו באתר מאוחר יותר',
        delaySeconds:  60*5
      })
    })

    it('Error message for search response with a delay of 5 minutes when clicking the run button'+
    ' of talmud search page in english mode',()=>{
      cy.talmudSearchRequest({
        url:'/search',
        language:'English',
        message:'Oops. Something went wrong Please try again later',
        delaySeconds: 60*5
      })
    })

    it('Error message for search response with status code 500 when clicking the run button of talmud search page'+
    ' in hebrew mode',()=>{
      cy.talmudSearchRequest({
        url:'/search',
        language:'Hebrew',
        status:500,
        message:'אופס יש לנו בעיה נסו שנית, או בקרו באתר מאוחר יותר'
      })
    })

    it('Error message for search response with status code 500 when clicking the run button of talmud search page'+
    ' in english mode',()=>{
      cy.talmudSearchRequest({
        url:'/search',
        language:'English',
        status:500,
        message:'Oops. Something went wrong Please try again later'
      })
    })
    
    it('Error message for books response with a delay of 5 minutes when clicking the run button'+
    ' of talmud search page in hebrew mode',()=>{
      cy.talmudSearchRequest({
        url:'/books',
        language:'Hebrew',
        message:'אופס יש לנו בעיה נסו שנית, או בקרו באתר מאוחר יותר',
        delaySeconds:  60*5
      })
    })

    it('Error message for books response with a delay of 5 minutes when clicking the run button'+
    ' of talmud search page in english mode',()=>{
      cy.talmudSearchRequest({
        url:'/books',
        language:'English',
        message:'Oops. Something went wrong Please try again later',
        delaySeconds: 60*5
      })
    })

    it('Error message for books response with status code 500 when clicking the run button of talmud search page'+
    ' in hebrew mode',()=>{
      cy.talmudSearchRequest({
        url:'/books',
        language:'Hebrew',
        status:500,
        message:'אופס יש לנו בעיה נסו שנית, או בקרו באתר מאוחר יותר'
      })
    })

    it('Error message for books response with status code 500 when clicking the run button of talmud search page'+
    ' in english mode',()=>{
      cy.talmudSearchRequest({
        url:'/books',
        language:'English',
        status:500,
        message:'Oops. Something went wrong Please try again later'
      })
    })  

    it('Error message for wordforms response with a delay of 5 minutes when clicking the run button'+
    ' of talmud search page in hebrew mode',()=>{
      cy.talmudSearchRequest({
        url:'/wordforms',
        language:'Hebrew',
        message:'אופס יש לנו בעיה נסו שנית, או בקרו באתר מאוחר יותר',
        delaySeconds:  60*5
      })
    })

    it('Error message for wordforms response with a delay of 5 minutes when clicking the run button'+
    ' of talmud search page in english mode',()=>{
      cy.talmudSearchRequest({
        url:'/wordforms',
        language:'English',
        message:'Oops. Something went wrong Please try again later',
        delaySeconds: 60*5
      })
    })

    it('Error message for wordforms response with status code 500 when clicking the run button of talmud search page'+
    ' in hebrew mode',()=>{
      cy.talmudSearchRequest({
        url:'/wordforms',
        language:'Hebrew',
        status:500,
        message:'אופס יש לנו בעיה נסו שנית, או בקרו באתר מאוחר יותר'
      })
    })

    it('Error message for wordforms response with status code 500 when clicking the run button of talmud search page'+
    ' in english mode',()=>{
      cy.talmudSearchRequest({
        url:'/wordforms',
        language:'English',
        status:500,
        message:'Oops. Something went wrong Please try again later'
      })
    })  
  
      
      
  })
})
