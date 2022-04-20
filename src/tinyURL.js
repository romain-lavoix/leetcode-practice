/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    let encodedUrl = Buffer.from(longUrl, 'binary').toString('base64');
    return "http://tinyurl.com/" + encodedUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    let encodedUrl = shortUrl.split('tinyurl.com/')[1];
    return Buffer.from(encodedUrl, 'base64').toString();
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

const encoded = encode("https://leetcode.com/problems/design-tinyurl");
