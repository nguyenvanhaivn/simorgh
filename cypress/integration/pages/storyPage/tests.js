import { pathOr } from 'ramda';

// For testing important features that differ between services, e.g. Timestamps.
// We recommend using inline conditional logic to limit tests to services which differ.
export const testsThatAlwaysRun = ({ service, pageType }) => {
  describe(`No testsToAlwaysRun to run for ${service} ${pageType}`, () => {});
};

// For testing features that may differ across services but share a common logic e.g. translated strings.
export const testsThatFollowSmokeTestConfig = ({ service, pageType }) => {
  describe(`testsThatFollowSmokeTestConfig to run for ${service} ${pageType}`, () => {
    it('should render a description for the page', () => {
      cy.request(`${Cypress.env('currentPath')}.json`).then(({ body }) => {
        const descriptionBlock = body.content.blocks.find(
          block => block.role === 'introduction',
        );
        const descriptionHtml = pathOr({}, ['text'], descriptionBlock);

        // strip html from the description, so we get description as plain text
        const elem = document.createElement('div');
        elem.innerHTML = descriptionHtml;
        const description = elem.innerText;
        cy.get('main p').should('contain', description);
      });
    });
  });
};

// For testing low priority things e.g. cosmetic differences, and a safe place to put slow tests.
export const testsThatNeverRunDuringSmokeTesting = ({ service, pageType }) => {
  describe(`No testsToNeverSmokeTest to run for ${service} ${pageType}`, () => {});
};
