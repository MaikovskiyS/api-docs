# Security  

All requests should be signed using `HMAC-SHA256` with `AUTH_TOKEN` as key and request body as message.

Header:  
`X-REQUEST-SIGN: <signature>`

If the signature is invalid, the server will respond with HTTP **403 Forbidden**.

```python
# Pseudocode
body = '{"field": "value"}'
token = 'security_token'
sign = HMAC_SHA256(token, body)
```
