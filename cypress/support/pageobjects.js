class pageobjects {
    get usernameInput() {
        return cy.get('#username')
    }

    get passwordInput() {
        return cy.get('#password')
    }

    get buttomLogin() {
        return cy.get('.signin-btn')
    }

    get buttomCallCenter() {
        return cy.get('a.dropdown-toggle').find('span').contains('Call Center')
    }

    get buttomDNC() {
        return cy.get('a').contains('DNC')
    }

    get uploadDNC() {
        return cy.get('a[href="/dnc/upload"]')
    }

    get selectCountryIDNumber() {
        return cy.get('select[ng-model="data.country_id_number"]')
    }

    get selectCampaingIDNumber() {
        return cy.get('select[ng-model="data.campaign_id_number"]')
    }

    get inputNumber() {
        return cy.get('#number')
    }

    get buttonAddNumber() {
        return cy.get('button[ng-click="addNumber()"]')
    }

    get filterCampaign() {
        return cy.get('select[name="form[\'filterOption\']"]')
    }

    get filterGlobalDNC() {
        return cy.get('div[ng-if="filter.type == 2 && selectFilters[filter.option]"]')
    }

    get buttonDNCSearch() {
        return cy.contains('button', 'Search')
    }

    get dropdownSettingsNumber() {
        return cy.get('[class="btn btn-info dropdown-toggle"]')
    }

    get inputNumberEdit() {
        return cy.get('input[ng-model="data.CurrentGeneralOptions.phone_number"]')
    }

    get selectCampaignEdit() {
        return cy.get('select[ng-model="data.CurrentGeneralOptions.campaign_id"]')
    }

    get buttonSaveEdit() {
        return cy.get('button[ng-click="save()"]')
    }

}

module.exports = new pageobjects()