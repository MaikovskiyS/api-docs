# Error Format

> All errors come with HTTP STATUS 400. In json format. The exception is the request signature
error. This error comes from HTTP STATUS 403

## Error Response Parameters

| Name       | Type   | Required | Description     |
|------------|--------|----------|-----------------|
| `code`     | int    | ✅       | Error code      |
| `message`  | string | ✅       | Error message   |
| `balance`  | int64  | optional | User's balance  |


## Example Error Response
```json
{
  "code": 100,
  "message": "Player does not have enough funds",
  "balance": 1005
}
```

## Full Error Codes Table

| Code | Message | Comment |
|------|---------|--------|
| 100  | Player does not have enough funds to process an action. | Not enough funds on the player's balance |
| 101  | Player is invalid. | Invalid player identifier |
| 105  | Player reached customized bet limit. | Player reached personal bet limit |
| 106  | Bet exceeded max bet limit. | Bet exceeds the maximum allowed limit |
| 107  | Game is forbidden to the player. | Game is not allowed for the player |
| 110  | Player is disabled. | Player account is disabled |
| 153  | Game is not available in Player's country. | Game is not available in the player's country |
| 154  | Currency is not allowed for the player. | Currency is not allowed for the player |
| 155  | Forbidden to change already set field. | Attempt to change already set email or currency |
| 400  | Bad request. Badly formatted JSON. | Invalid request format or JSON |
| 403  | Forbidden. Request signature doesn't match. | Request signature does not match (HTTP 403) |
| 404  | Not found. | Resource not found |
| 405  | Game is not available to your casino. | Game is not available for your casino |
| 406  | Gift spins are not available for your casino. | Gift spins are not available for your casino |
| 500  | Unknown error. | Unknown error |
| 502  | Unknown error in external service. | Unknown error in external service |
| 504  | Request timed out. | Request timed out |
| 600  | Game provider doesn't provide gift spins. | Game provider does not support gift spins |
| 601  | Impossible to issue gift spins in requested game. | Cannot issue gift spins for the selected game |
| 602  | You should provide at least one game to issue gift spins. | At least one game must be specified to issue gift spins |
| 603  | Bad expiration date. | Expiration date must be in the future and not exceed 1 month |
| 605  | Can't change issue state from its current to requested. | Cannot change issue state to requested |
| 606  | You can't change issue state when issue status is not synced. | Cannot change issue state while status is not synced |
| 607  | Can't issue gift spins for different game providers. | Cannot issue gift spins for different game providers |
| 610  | Invalid gift spin issue. | Invalid gift spin issue |
| 611  | Gift spin issue has already expired. | Gift spin issue has already expired |
| 620  | Gift spin issue can't be canceled. | Gift spin issue cannot be canceled |
| 700  | Requested live game is not available right now. | Requested live game is not available right now |
| 800  | Request can't be rolled back | Rollback will not be performed for this bet |
| 1254 | Internal error | Internal service error |
| 1600 | Error sending request to game server | Error sending request to game server |
| 1700 | Project not found | Project not found |
| 1701 | Game not found | Game not found |
| 1702 | Currency not available | Currency not available |
| 1703 | Error adding a new user | Error adding a new user |
| 1704 | Error creating a room | Error creating a room |
| 1706 | Error activating gift spins | Error activating gift spins |
| 1707 | The game is not available | The game is not available |
| 2000 | The game is not available for the country | The game is not available for the country |
| 2106 | Issue already exists | Issue already exists |
| 2107 | Gift issue not found | Gift issue not found |
| 2400 | Invalid parameters or signature mismatch | Invalid parameters or signature mismatch |