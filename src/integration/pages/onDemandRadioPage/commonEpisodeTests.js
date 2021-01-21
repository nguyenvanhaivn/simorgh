export default () => {
  it('I can see the brand title', () => {
    const brandTitleEl = document.querySelector('h1 span span:first-child');

    expect(brandTitleEl).toBeInTheDocument();
    expect(brandTitleEl.innerText).toBeTruthy();
    expect(brandTitleEl.innerText).toMatchSnapshot();
  });

  it('I can see the episode title', () => {
    const episodeTitleEl = document.querySelector('h1 span span:last-child');

    expect(episodeTitleEl).toBeInTheDocument();
    expect(episodeTitleEl.innerText).toBeTruthy();
    expect(episodeTitleEl.innerText).toMatchSnapshot();
  });

  it('I can see the episode summary', () => {
    const episodeSummaryEl = document.querySelector('main p');

    expect(episodeSummaryEl).toBeInTheDocument();
    expect(episodeSummaryEl.innerText).toBeTruthy();
    expect(episodeSummaryEl.innerText).toMatchSnapshot();
  });

  it('I can see the hero image', () => {
    const imageEl = document.querySelector('main amp-img, main img');

    expect(imageEl).toBeInTheDocument();
    expect(imageEl.getAttribute('src')).toBeTruthy();
    expect(imageEl.getAttribute('src')).toMatchSnapshot();
  });

  describe('a11y', () => {
    it('Assistive technology reads the brand and episode title as the headline', () => {
      const headlineEl = document.querySelector(
        'h1[id="content"][tabindex="-1"]',
      );

      expect(headlineEl).toBeInTheDocument();
      expect(headlineEl.innerText).toBeTruthy();
      expect(headlineEl.innerText).toMatchSnapshot();
    });
  });
};
