/**
 * ✅ BONUS EXAMPLE:
 * - Loads mock HTML
 * - Loads mock JSON
 * - Mocks a file-based API
 * - Validates output based on all sources
 */

const fs = require('fs');
const path = require('path');

// Load raw HTML and JSON mock files
const htmlMock = fs.readFileSync(path.join(__dirname, 'mocks/dealer.html'), 'utf-8');
const dealerJson = require('./mocks/dealer.json');

// ✅ MOCKING A LOCAL MODULE
jest.mock('./dealerService', () => ({
  getDataApi: jest.fn(() =>
    Promise.resolve({ zipcode: '90210', dealer: 'Beverly Hills Dealer' })
  ),
}));

// Import the mocked module
const { getDataApi } = require('./dealerService');

describe('🔧 Dealer Info Integration Test (HTML + JSON + API Mock)', () => {
  test('should load HTML mock and find dealer name', () => {
    expect(htmlMock).toContain('Beverly Hills Dealer');
    expect(htmlMock).toMatch(/<span class="zipcode">90210<\/span>/);
  });

  test('should load JSON mock and match dealer name', () => {
    expect(dealerJson.zipcode).toBe('90210');
    expect(dealerJson.dealer).toBe('Beverly Hills Dealer');
  });

  test('should return mocked API data', async () => {
    const result = await getDataApi();
    expect(result).toEqual({
      zipcode: '90210',
      dealer: 'Beverly Hills Dealer'
    });
    expect(getDataApi).toHaveBeenCalledTimes(1);
  });
});
