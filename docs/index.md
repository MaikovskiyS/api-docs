# Introduction

## Terms

| Term           | Description                                  |
|----------------|----------------------------------------------|
| Casino         | The body who works with the players          |
| Game provider  | Final content provider                       |
| PROVIDER_URL   | Games content provider API endpoint          |
| WALLET_URL     | Wallet server API endpoint                   |
| CASINO_ID      | Casino's identifier                          |
| AUTH_TOKEN     | Token used to sign messages                  |

## Before Integration

1. Provide `WALLET_URL`, `CASINO_ID`.
2. Receive `PROVIDER_URL`, `AUTH_TOKEN`, and Games List from your manager.

## Amount Format (ISO 4217)

Amounts are passed in subunits. Reference: https://www.currency-iso.org/

| Currency | Subunits | Example                |
|----------|----------|------------------------|
| USD      | 2        | 2.5 USD = `"250"`      |
| BTC      | 8        | 1 BTC = `"100000000"`  |
| ETH      | 9        | 1 ETH = `"1000000000"` |
| JPY      | 0        | 1 JPY = `"1"`          |

## Date & Timestamps

Format: **ISO 8601**

Examples:
```
2015-07-04
2013-12-18T20:03:19Z
```
