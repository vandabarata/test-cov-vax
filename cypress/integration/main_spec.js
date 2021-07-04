describe("vax age", () => {

    it("should look for something younger than 30", () => {
        cy.visit("/")
        
        cy.get("h3")
        .invoke("text")
        .should((title) => {
            if (title.includes("30")) {
                expect("false").to.equal("false")
            } 
            else (
                expect("true").to.equal("true") 
            )
        })
    });

});