class AlienForm {
  elements = {
    titleInput: () => cy.get("#title"),
    urlInput: () => cy.get("#imageUrl"),
    buttonSubmit: () => cy.get("#btnSubmit"),
    titleFeedback: () => cy.get("#titleFeedback"),
    urlFeedback: () => cy.get("#urlFeedback"),
  };

  typeTitle(title) {
    if (!title) return;
    this.elements.titleInput().type(title);
  }

  typeUrl(url) {
    if (!url) return;
    this.elements.urlInput().type(url);
  }
}

const alienForm = new AlienForm();

describe("Image Registration", () => {
  it("Submitting an image with invalid inputs", () => {
    cy.visit("/");

    alienForm.typeTitle("");
    alienForm.typeUrl("");
    alienForm.elements.buttonSubmit().click();

    alienForm.elements.titleFeedback().should(([element]) => {
      expect(element.innerText).eq("Please type a title for the image.");
    });
    alienForm.elements.urlFeedback().should(([element]) => {
      expect(element.innerText).eq("Please type a valid URL");
    });
    alienForm.elements.titleInput().should(([element]) => {
      expect(element.validity.valueMissing).to.true;
    });
    alienForm.elements.urlInput().should(([element]) => {
      expect(element.validity.valueMissing).to.true;
    });
  });
});
