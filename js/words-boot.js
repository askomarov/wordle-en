/**
 * Boot dictionary UI when present on the page.
 */
(function () {
  'use strict';
  if (window.AgentWordsSearch) {
    window.AgentWordsSearch.boot({
      locale: 'en',
      letterRe: /^[A-Z]$/,
      labels: { found: 'Found: ', total: 'Total words: ' },
    });
  }
})();
