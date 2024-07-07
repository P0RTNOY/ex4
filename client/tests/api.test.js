// tests/api.test.js

const fetch = require('node-fetch');
const { saveUrlData } = require('../src/crawler');
const { storeUrlData, getUrlFromDB } = require('../src/storeURL');
const logger = require('../src/logger/logger');

jest.mock('../src/storeURL');
jest.mock('../src/logger/logger');

describe('API Endpoints', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should save URL data and return links', async () => {
    const url = 'https://example.com';
    const mockLinks = ['https://example.com/page1', 'https://example.com/page2'];
    
    fetch.mockResponseOnce(JSON.stringify({ url, links: mockLinks }));

    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockResolvedValue({ url, links: mockLinks }),
    };

    await saveUrlData(url, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith({ url, links: mockLinks });
  });

  test('should handle errors', async () => {
    const url = 'https://example.com';

    fetch.mockRejectOnce(new Error('Failed to fetch'));

    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await saveUrlData(url, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.json).toHaveBeenCalledWith({ message: 'Failed to fetch' });
  });
});
