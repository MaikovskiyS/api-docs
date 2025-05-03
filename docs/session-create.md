# Create Real Session

**POST** `PROVIDER_URL/api/sessions/real`

## Request Parameters

| Parameter      | Type   | Required | Description                                                                 |
|---------------|--------|----------|-----------------------------------------------------------------------------|
| locale        | string | ✅        | Language of the game                                                        |
| ip            | string | ✅        | User's IP address (IPv4)                                                    |
| client_type   | string | ✅        | `mobile` or `desktop`                                                       |
| casino_id     | string | ✅        | Casino identifier                                                           |
| game          | string | ✅        | Game key                                                                    |
| currency      | string | ✅        | Currency code in ISO 4217 format ([see list](https://en.wikipedia.org/wiki/ISO_4217)) |
| urls          | object [URLs](#urls) | ✅        | URLs for redirection after session end                                      |
| user          | object [User](#user) | ✅        | User parameters                                                             |
| session_token | string | optional | Session token identifier                                                    |

#### URLs
| Parameter    | Type   | Required | Description                                         |
|--------------|--------|----------|-----------------------------------------------------|
| return_url   | string | ✅        | The URL to which the user will be redirected after the game session |

#### User
| Parameter      | Type   | Required | Description                                                        |
|----------------|--------|----------|--------------------------------------------------------------------|
| id             | string | ✅        | Unique user identifier                                             |
| external_id    | string | optional | Unique user ID in the casino                                       |
| email          | string | optional | Email address                                                      |
| firstname      | string | optional | First name                                                         |
| lastname       | string | optional | Last name                                                          |
| nickname       | string | optional | Nickname                                                           |
| city           | string | optional | City                                                               |
| country        | string | optional | Country code (ISO 3166-1 alpha-2, e.g. "US", "GB")              |
| date_of_birth  | string | optional | Date of birth in `YYYY-MM-DD` format                               |
| gender         | string | optional | Gender: `m` (male), `f` (female)                                   |
| registered_at  | string | optional | User registration date in `YYYY-MM-DD` format                      |

---

## Success Response Parameters
| Parameter       | Type   | Required | Description     |
|------------|--------|----------|-----------------|
| launch_options  | object [Launch Options](#launch-options) | ✅       | Launch options |

#### Launch Options
| Parameter    | Type   | Required | Description                                  |
|--------------|--------|----------|----------------------------------------------|
| game_url     | string | ✅        | The URL to launch the game session           |

---

## Failed Response Parameters
| Parameter    | Type   | Required | Description                                  |
|--------------|--------|----------|----------------------------------------------|
| code         | int    | ✅        | Error code ([see reference](./errors.md))    |
| message      | string | ✅        | Error message                                |

---
## Success Example

_Request_
```http
POST PROVIDER_URL/api/sessions/real HTTP/1.1
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
  "game": "conquestera",
  "currency": "USD",
  "user": {
    "id": "1234567891",
    "external_id": "qsd123sds-sdscx",
    "email": "user@example.com",
    "firstname": "Peter",
    "lastname": "Smith",
    "nickname": "mrSmith",
    "city": "London",
    "country": "UK",
    "date_of_birth": "1984-05-23",
    "gender": "m",
    "registered_at": "2020-12-12"
  }
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
POST PROVIDER_URL/api/sessions/real HTTP/1.1
Content-Type: application/json
```
```json
{
  "locale": "en",
  "ip": "2.18.83.49",
  "balance": 100000,
  "urls": {
    "return_url": "https://www.casino.com/returnUrl"
  },
  "client_type": "mobile",
  "casino_id": "casino_com",
  "game": "slot",
  "currency": "USD",
  "user": {
    "id": "1234567891",
    "external_id": "qsd123sds-sdscx",
    "email": "user@example.com",
    "firstname": "Peter",
    "lastname": "Smith",
    "nickname": "mrSmith",
    "city": "London",
    "country": "UK",
    "date_of_birth": "1984-05-23",
    "gender": "m",
    "registered_at": "2020-12-12"
  }
}
```

_Response_
```http
HTTP/1.1 400 Bad Request
Content-Type: application/json
```
```json
{
  "code": 1701,
  "message": "Game not found"
}
```

## Error Codes

| Code  | Description                              |
|-------|------------------------------------------|
| 1600  | Error sending request to game server      |
| 1700  | Project not found                        |
| 1701  | Game not found                           |
| 1702  | Currency not available                   |
| 2400  | Invalid parameters or signature mismatch |
