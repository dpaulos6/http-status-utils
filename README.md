# http-status-utils

A simple utility library for HTTP status codes.

All functions receive an integer and check if it's a valid HTTP status code, then returns the respective value.  
If the received value is not an integer and not a valid HTTP status code, it will throw an exception preventing your app to compile. That way you can easily see if the problem in an API response is related to the status code and why.

Check [Usage](#usage) for further details on how to use it.

## Installation

```sh
npm install http-status-utils
```

## Usage

Normal TypeScript usage

```ts
import {
  getDescription,
  isSuccess,
  isError,
  handleHttp
} from 'http-status-utils'

// Direct usage of functions
console.log(getDescription(200)) // OK
console.log(isSuccess(200)) // true
console.log(isError(404)) // true

// Using handleHttp function
const {
  description,
  isSuccess: successStatus,
  isError: errorStatus
} = handleHttp(200)

console.log(description) // OK
console.log(successStatus) // true
console.log(errorStatus) // false
```

Example with `fetch()`

```tsx
import fetch from 'node-fetch'
import { handleHttp } from 'http-status-utils'

try {
  const response = await fetch('https://example.com/api/v1/')
  const { status } = response

  // Use handleHttp to get status code details
  const { description, isSuccess, isError } = handleHttp(status)

  if (isError) {
    console.error(`Error: ${description}`)
    return
  }

  if (!isSuccess) {
    console.log(`Received HTTP status code ${status}: ${description}`)
    return
  }

  // Parse and use the JSON data
  const data = await response.json()
  console.log('Fetched Data:', data)

  // Example of using the data.description
  console.log(`Status Description: ${description}`)
} catch (error) {
  console.error('Network Error:', error)
}
```

## API

`getDescription(code: number): string` -
Returns the description for the given HTTP status code.

`isSuccess(code: number): boolean` -
Returns true if the status code indicates success (2xx).

`isError(code: number): boolean` -
Returns true if the status code indicates an error (4xx or 5xx).

`isTeapot(code: number): boolean` -
Returns true if the status code indicates teapot (418).

`handleHttp(code: number): { description: string, isSuccess: boolean, isError: boolean }` -
Returns an object containing the description, isSuccess, and isError status for the given HTTP status code.

## Testing

If you want to test the library's functionality, you can do so by running:

```sh
npm test
```
