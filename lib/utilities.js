/**
 * Creates the string for the authorization header to obtain a bearer token from the Twitter API
 * 
 * @param {string} apiKey - Application API key
 * @param {string} apiSecret - Application API secret
 * @return {string} - The correct format for the /oauth2/token endpoint
 */
exports.generateRequestKey = (apiKey, apiSecret) => {
    // URL encode the consumer key and the consumer secret according to RFC 1738.
    // Concatenate the encoded consumer key, a colon character ”:”, and the encoded consumer secret into a single string.
    // Base64 encode the string from the previous step.
    const encodedKey = encodeURIComponent(apiKey);
    const encodedSecret = encodeURIComponent(apiSecret);

    return Buffer.from(`${encodedKey}:${encodedSecret}`).toString('base64');
};