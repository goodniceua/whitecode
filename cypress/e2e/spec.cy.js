import pageobjects from '../support/pageobjects'
const {adminLogin, addNumber} = require("../support/function/testfunction");

describe('template spec', () => {

  before(() => {
    cy.on('uncaught:exception', (err) => {
      if (err.message.includes('FS is not defined')) {
        return false;
      }
    })
    Cypress.on('uncaught:exception', (err) => {
      if (err.message.includes('postMessage')) {
        return false; // Ignore this error
      }
    })
  })

  beforeEach(() => {
    cy.visit('https://admin.convoso.com')
    adminLogin()
    cy.get('[class="btn btn-default"]').filter(':visible').click()
    cy.url().should('include', 'admin-dt.convoso.com')
  })

  it ('Upload Number', () => {

    pageobjects.buttomCallCenter.click()
    pageobjects.buttomDNC.click() // open DNC page in dropdown

    cy.request('POST', 'https://admin-dt.convoso.com/dnc/search-delete').then((response) => {
      expect(response.status).to.eq(200)
    })

    pageobjects.uploadDNC.should('be.visible').click() //open upload DNC page

    addNumber()

    pageobjects.buttomCallCenter.click()
    pageobjects.buttomDNC.click()

    // select aa filter in DNC page
    pageobjects.filterCampaign.select('Campaign')
    pageobjects.filterGlobalDNC.click()
    cy.get('div[data-value="GLOBAL"]').should('be.visible').click()
    cy.wait(8000)
    pageobjects.buttonDNCSearch.click()
    cy.wait(8000)

    // we try click a button edit in list number
    pageobjects.dropdownSettingsNumber.then(element => {
      const listLength = element.length
      const underlastValue = element.length - 2
      pageobjects.dropdownSettingsNumber.eq(underlastValue).click()
      cy.get('.dropdown-menu:visible').within(() => {
        cy.contains('Edit').click()
      })
      cy.log(listLength)
    })

    //we edit a one number
    //pageobjects.inputNumberEdit.click().clear().type('8884567777')
    //pageobjects.selectCampaignEdit.select('Automation Campaign')
    //pageobjects.buttonSaveEdit.click()

    //we check a new number
    //pageobjects.buttomCallCenter.click()
    //pageobjects.buttomDNC.click()
    //pageobjects.filterCampaign.select('Campaign')
    //cy.get('input[placeholder="Click to select"]').click()
    //cy.get('div.option').contains('Automation Campaign').should('be.visible').click()
    //pageobjects.buttonDNCSearch.click()
    //cy.wait(8000)

    //we delete a added number

    //search all number in campaing/global dnc
    cy.request('POST', 'https://admin-dt.convoso.com/dnc/search').then((response) => {
      expect(response.status).to.eq(200)
    })

    //delete all number in campaing/global dnc
    cy.request('POST', 'https://admin-dt.convoso.com/dnc/search-delete').then((response) => {
      expect(response.status).to.eq(200)
    })

  })
})