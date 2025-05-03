# Get Balance

**POST** `WALLET_URL/play`

## Request Parameters

| Parameter       | Type   | Required | Description     |
|------------|--------|----------|-----------------|
| user_id  | string | ✅       | User ID         |
| game     | string | ✅       | Game Key        |
| currency | string | ✅       | Currency code   |
| token    | string |          | Session token. This field is optional and will be send if you create Session with param session_token parameter. |

---
## Success Response Parameters

| Parameter       | Type   | Required | Description     |
|------------|--------|----------|-----------------|
| balance  | int64 | ✅       | User's current balance |

## Failed Response Parameters

| Parameter       | Type   | Required | Description     |
|------------|--------|----------|-----------------|
| code     | int | ✅       | Error code  [#reference](./errors.md) |
| message  | string | ✅       | Error message |
---

## Success Example

_Request_
```json
{
  "user_id": "123456",
  "game": "conquestera",
  "currency": "USD",
  "token": "1234567890"
}
```
_Response_  
```http
HTTP/1.1 200 OK
Content-Type: application/json
```
```json
{
  "balance": 1005
}
```

--- 
## Failed Example

_Request_
```json
{
  "user_id": "123456",
  "game": "conquestera",
  "currency": "USD",
  "token": "1234567890"
}
```
_Response_  
```http
HTTP/1.1 400 Bad Request
Content-Type: application/json
```
```json
{
  "code": 323,
  "message": "user not found"
}
```