# Create Demo Session

**POST** `PROVIDER_URL/api/sessions/demo`

> In demo mode, no requests should be sent to the wallet.

## Request Parameters

| Name            | Type   | Required | Description                  |
|-----------------|--------|----------|------------------------------|
| locale          | string | ✅        | Language of the game         |
| ip              | string | ✅        | User's IP address (IPv4)     |
| client_type     | string | ✅        | `mobile`, `desktop`          |
| casino_id       | string | ✅        | Casino ID                    |
| game            | string | ✅        | Game Key                     |
| urls            | object [URLs](#urls) | ✅        | Where user is redirected after session end |



#### URLs
| Parameter      | Type   | Required | Description                                                                                   |
|----------------|--------|----------|---------------------------------------------------------------------------------------------|
| `return_url`   | string | ✅        | The URL to which the user will be redirected after game session |

---
## Success Response Parameters
| Parameter       | Type   | Required | Description     |
|------------|--------|----------|-----------------|
| `launch_options`  | object [Launch Options](#launch-options) | ✅       | Launch options |

#### Launch Options
| Parameter       | Type   | Required | Description     |
|------------|--------|----------|-----------------|
| `game_url`  | string | ✅       | The URL opened by the player creates a game session |
---
## Failed Response Parameters
| Parameter       | Type   | Required | Description     |
|------------|--------|----------|-----------------|
| `code`     | int | ✅       | Error code [#reference](./errors.md) |
| `message`  | string | ✅       | Error message |

---
## Success Example  

_Request_
```http
POST WALLET_URL/api/sessions/demo HTTP/1.1
Content-Type: application/json
```
```json
{
"locale": "en",
"ip": "2.18.83.49",
"urls": {
    "return_url": "https://www.casino.com/returnUrl"
},
"client_type": "mobile",
"casino_id": "casino_com",
"game": "conquestera"
}
```

_Response_
```http
HTTP/1.1 200 OK
Content-Type: application/json
```
```json
{
"launch_options": {
   "game_url": "https://games.prod.gamebeat.cloud/conquestera/index.html"
}
}
```

## Failed Example

_Request_
```http
POST WALLET_URL/api/sessions/demo HTTP/1.1
Content-Type: application/json
``` 
```json
{
"locale": "en",
"ip": "2.18.83.49",
"urls": {
    "return_url": "https://www.casino.com/returnUrl"
},
"client_type": "watch",
"casino_id": "casino_com",
"game": "conquestera"
}
```

_Response_
```http
HTTP/1.1 400 Bad Request
Content-Type: application/json
```
```json
{
"code": 2400,
"message": "clientType must be one of the following values: mobile, desktop"
}
```

## Error Codes
| Code|Description|
|-----|-------------------------------------------------------|
| 1600  | Error when sending a request to create a session in the game server |
| 1700  | The project was not found |
| 1701  | The game was not found |
| 1702  | Currency not available |
| 1703  | Error adding a new user |
| 1704  | Error creating a room |
| 1706  | Error activating gift spins |
| 1707  | The game is not available |
| 2000  | The game is not available for the country |
| 2400  | Error in the request or the request signature. Occurs in cases where one or more parameters were passed incorrectly, as well as in cases where an incorrect request signature value was passed, or the signature was not passed at all |