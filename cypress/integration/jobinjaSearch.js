describe('My First Test', function () {
    it('clicking "type" navigates to a new url', function () {
        var company = []
        var urlForSearch = "https://jobinja.ir/jobs?filters%5Bjob_categories%5D%5B0%5D=%D9%88%D8%A8%D8%8C%E2%80%8C+%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D9%87%E2%80%8C%D9%86%D9%88%DB%8C%D8%B3%DB%8C+%D9%88+%D9%86%D8%B1%D9%85%E2%80%8C%D8%A7%D9%81%D8%B2%D8%A7%D8%B1&filters%5Bkeywords%5D%5B0%5D=front&filters%5Blocations%5D%5B0%5D=%D8%AA%D9%87%D8%B1%D8%A7%D9%86&sort_by=relevance_desc&page="
        var startPageNumber = 1
        var endPageNumber = 14
        for (let i = startPageNumber; i <= endPageNumber; i++) {
            cy.visit(urlForSearch + i)
            cy.get('a.c-jobListView__titleLink').each((a, b, c) => {
                company.push({
                    name: a['context']['textContent'],
                    url: a['context']['href']
                })
                checkText({
                    name: a['context']['textContent'],
                    url: a['context']['href']
                })
            })
        }
    })
})

const checkText = (company) => {
    cy.visit(company.url)
    cy.get("section.c-jobView.o-box.o-box--padded.u-marginBottom40").each((a, b, c) => {
        if (c[0]['innerText'].search("دانش بنیان") !== -1) {
            console.log("Ads Title =>", company["name"])
            console.log("Ads Url =>", company["url"])
        }
    })
}
