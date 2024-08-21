class AlienForm {
  elements = {
    titleInput: () => cy.get("#title"),
    urlInput: () => cy.get("#imageUrl"),
    buttonSubmit: () => cy.get("#btnSubmit"),
    titleFeedback: () => cy.get("#titleFeedback"),
    urlFeedback: () => cy.get("#urlFeedback"),
    listImages: () => cy.get("#card-list article"),
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

const imageURL =
  "https://cdn.mos.cms.futurecdn.net/eM9EvWyDxXcnQTTyH8c8p5-1200-80.jpg";

describe("Image Registration", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Submitting an image with invalid inputs", () => {
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

  it("Submitting an image with valid inputs using enter key", () => {
    alienForm.typeTitle("Alien BR");
    alienForm.typeUrl(imageURL);

    alienForm.elements.urlInput().type("{enter}");

    alienForm.elements.listImages().should("have.length", 4);
    alienForm.elements.titleInput().should("have.value", "");
    alienForm.elements.urlInput().should("have.value", "");
    const localStorage = cy.getAllLocalStorage();
    localStorage.then((data) => {
      expect(data).to.deep.equal({
        "https://erickwendel.github.io": {
          "tdd-ew-db": JSON.stringify([
            { title: "Alien BR", imageUrl: imageURL },
          ]),
        },
      });
    });
  });
});
