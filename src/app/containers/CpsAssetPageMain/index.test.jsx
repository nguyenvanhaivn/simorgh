import React from 'react';
import { StaticRouter } from 'react-router-dom';
import {
  matchSnapshotAsync,
  suppressPropWarnings,
} from '@bbc/psammead-test-helpers';
import { ServiceContextProvider } from '#contexts/ServiceContext';
import { RequestContextProvider } from '#contexts/RequestContext';
import CpsAssetPageMain from '.';
import preprocessor from '#lib/utilities/preprocessor';
import pidginPageData from '#data/igbo/cpsAssets/afirika-23252735';
import { preprocessorRules } from '#app/routes/getInitialData/cpsAsset';

describe('CpsAssetPageMain', () => {
  it('should match snapshot', async () => {
    // TODO: Remove the prop warnings
    // https://github.com/bbc/simorgh/issues/4396
    // https://github.com/bbc/simorgh/issues/4397
    suppressPropWarnings(['TextContainer']);
    suppressPropWarnings(['ParagraphContainer']);
    suppressPropWarnings(['isExternal', 'InlineLinkContainer']);
    suppressPropWarnings(['ParagraphContainer']);

    const pageData = await preprocessor(pidginPageData, preprocessorRules);

    await matchSnapshotAsync(
      /*
        for the value it would bring, it is much simpler to wrap a react-router Link in a Router, rather than mock a Router or pass some mocked context.
      */
      <StaticRouter>
        <ServiceContextProvider service="igbo">
          <RequestContextProvider
            bbcOrigin="https://www.test.bbc.co.uk"
            isAmp={false}
            pageType="MAP"
            pathname="/igbo/afirika-23252735"
            service="igbo"
            statusCode={200}
          >
            <CpsAssetPageMain service="igbo" pageData={pageData} />
          </RequestContextProvider>
        </ServiceContextProvider>
      </StaticRouter>,
    );
  });
});
