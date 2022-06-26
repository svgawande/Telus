import "@testing-library/cypress/add-commands";
import "cypress-xpath";

import * as test_data from "./cypress/fixtures/data.json";
import UIHelper from "../utils/ui_helper";

context("Actions", () => {
  before(() => {
    cy.visit("https://www.telusinternational.ai/cmp");
  });
  it("validate landing page", function () {
    cy.contains("Welcome back!");
  });

  it("should login to telus", function () {
    cy.findAllByPlaceholderText("Email").type(test_data.default_user.email);
    cy.contains("Continue").click();
    cy.findAllByPlaceholderText("Password")
      .should(`exist`)
      .type(test_data.default_user.pass);
    cy.contains("Sign in").click();
  });

  it("should be navigated to My profile", function () {
    cy.wait(5000);
    cy.get(".sui-nav-settings").click();
    cy.contains("My Profile").click();
    cy.url().should(
      "eq",
      "https://www.telusinternational.ai/cmp/contributor/userprofile/basic-info"
    );
    cy.contains("Basic Information").should("exist");
  });

  it("Should be able to edit contact info", function () {
    cy.contains("Contact Info").should("exist");
    cy.wait(2000);
    cy.get(
      ".figma-section-header-text-margin > .col-lg-2 > .sui-rounded"
    ).click();
    cy.findByPlaceholderText("First name *").clear();
    var first_name = UIHelper.randtext();
    cy.findByPlaceholderText("First name *").type(first_name);
    cy.contains("Save").click();
    cy.contains(staddr)
  });

  it("should be able to edit location", function () {
    cy.contains("Location").should("exist");
    cy.get(":nth-child(1) > :nth-child(1) > .col-lg-2 > .sui-rounded").click();
    cy.findByPlaceholderText("Street address (optional)").clear();
    var staddr = UIHelper.randtext();
    cy.findByPlaceholderText("Street address (optional)").type(staddr);
    cy.contains("Save").click();
    cy.contains(staddr)
    cy.wait(2000);
  });

  it("Should set primary language", function () {
    cy.contains("Languages").should("exist").click();
    cy.url().should(
      "eq",
      "https://www.telusinternational.ai/cmp/contributor/userprofile/languages"
    );
    cy.wait(2000);
    cy.get(".col-auto > .row").click();
    cy.xpath(
      '//div[@id="edit-language-form"]//div[contains(text(),"Language*")]//parent::div//parent::div//div[contains(@class, "sui-c-input-dropdown__indicators")]'
    ).type("English");
    cy.wait(5000);
    cy.contains("English (Gambia)").click();
    cy.xpath(
      '//div[@id="edit-language-form"]//div[contains(text(),"Language*")]//parent::div//parent::div//div[contains(@class, "sui-c-input-dropdown__indicators")]'
    ).type("{enter}");
    cy.wait(2000);
    cy.contains("Save").click();
  });

  it("should add other language", function () {
    cy.contains("Add").click();
    cy.xpath(
      '//div[@id="new-language-form"]//div[contains(text(),"Type language and select*")]//parent::div//parent::div//div[contains(@class, "sui-c-input-dropdown__indicators")]'
    ).type("apanese (Japan)");
    cy.wait(5000);
    cy.contains("Japanese (Japan)").click();
    cy.xpath(
      '//div[@id="new-language-form"]//div[contains(text(),"Type language and select*")]//parent::div//parent::div//div[contains(@class, "sui-c-input-dropdown__indicators")]'
    ).type("{enter}");
    cy.wait(2000);
    cy.xpath(
      '//div[@id="new-language-form"]//div[contains(text(),"Select proficiency level*")]//parent::div//parent::div//div[contains(@class, "sui-c-input-dropdown__indicators")]'
    ).click();
    cy.wait(2000);
    cy.contains("Full working proficiency").click();
    cy.contains("Save").click();
  });
});
