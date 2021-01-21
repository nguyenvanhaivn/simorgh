import {
  runCommonCrossPlatformTests,
  runMediaPlayerEmbedTests,
  runTimestampTests,
} from '../../common';

export default service => {
  runCommonCrossPlatformTests(service);
  runMediaPlayerEmbedTests();
  runTimestampTests();

  const bulletedListItem = document.querySelector('main ul[role="list"] > li');

  if (bulletedListItem) {
    it('I can see a bulleted list item', () => {
      expect(bulletedListItem).toBeInTheDocument();
      expect(bulletedListItem.innerText).toBeTruthy();
      expect(bulletedListItem.innerText).toMatchSnapshot();
    });
  }

  const bulletedListItemWithLink = document.querySelector(
    'main ul[role="list"] > li > a',
  );

  if (bulletedListItemWithLink) {
    it('I can see a bulleted list item with link', () => {
      expect(bulletedListItemWithLink.getAttribute('href')).toMatchSnapshot(
        bulletedListItemWithLink.innerText,
      );
    });
  }

  describe(`Related Content`, () => {
    const relatedContentLinks = document.querySelectorAll(
      '[data-e2e="related-content-heading"] a',
    );

    if (relatedContentLinks) {
      relatedContentLinks.forEach(relatedContentLink => {
        const relatedContentText = relatedContentLink.innerText;
        const relatedContentUrl = relatedContentLink.getAttribute('href');

        it('should be in the document', () => {
          expect(relatedContentLink).toBeInTheDocument();
        });

        it('should contain text', () => {
          expect(relatedContentText).toBeTruthy();
        });

        it('should match text and url', () => {
          expect({
            text: relatedContentText,
            url: relatedContentUrl,
          }).toMatchSnapshot();
        });
      });
    }
  });
};
