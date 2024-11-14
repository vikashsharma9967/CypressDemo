import cypress from 'cypress'
import {Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I open login page',() =>{
    cy.visit('https://www.google.com/')
})

When('I submit login',() =>{
    cy.visit('')
})

Then('I should see homepage',() =>{
    cy.visit('')
})
