export const adminLogin = () => {

    cy.get('#username').type('testautoadmin13@auto.cc')
    cy.get('#password').type('qweQWE123')
    cy.get('.signin-btn').click()

}

export const addNumber = () => {

    const phoneNumbers = [
        '8884568889',
        '8884568888',
        '8884568887',
        '8884568886',
        '8884568885',
        '8884568884',
        '8884568883',
        '8884568882',
        '8884568881',
        '8884568880'
    ]

    phoneNumbers.forEach((number) => {

        cy.get('select[ng-model="data.country_id_number"]').select('+1 United States')
        cy.get('select[ng-model="data.campaign_id_number"]').select('Global DNC List')
        cy.get('#number').clear().type(number).should('have.value', number)
        cy.get('button[ng-click="addNumber()"]').click()
        cy.get('div.note-success')
            .invoke('text')
            .should('include', `Added DNC number ${number} to Global DNC List`)

    })

}