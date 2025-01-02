# http-status-utils

A simple utility library for HTTP status codes.

All functions receive an integer, check if it's a valid HTTP status code, and then return the respective value.  
If the received value is not an integer or not a valid HTTP status code, it will throw an exception, preventing your app from compiling. This way, you can easily see if the problem in an API response is related to the status code and why.

Check [Usage](#usage) for further details on how to use it.

## Installation

```sh
npm install http-status-utils
```

## Usage

### Simple Example

```ts
import { getDescription, isSuccess } from 'http-status-utils'

// Example: Get description of HTTP status code 200
console.log(getDescription(200)) // Output: OK

// Example: Check if HTTP status code 200 is a success
console.log(isSuccess(200)) // Output: true
```

### Advanced Example with `fetch()`

```ts
import fetch from 'node-fetch'
import { handleHttp } from 'http-status-utils'

async function fetchData() {
  try {
    const response = await fetch('https://example.com/api/v1/')
    const { status } = response

    // Use handleHttp to get status code details
    const { description, isSuccess, isError, isTeapot } = handleHttp(status)

    if (isError) {
      console.error(`Error: ${description}`)
      return
    }

    if (isTeapot) {
      console.log(`Received HTTP status code ${status}: ${description}`)
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
}

// Call the function to fetch data
fetchData()
```

### Using `handleHttp`

```ts
const result = handleHttp(200)
console.log(result.description) // Output: OK
console.log(result.isSuccess) // Output: true
console.log(result.isError) // Output: false
console.log(result.isTeapot) // Output: false
```

## API

### `getDescription(code: number): string`

Returns the description for the given HTTP status code.

**Example:**

```ts
console.log(getDescription(200)) // Output: OK
console.log(getDescription(404)) // Output: Not Found
```

### `isSuccess(code: number): boolean`

Returns true if the status code indicates success (2xx).

**Example:**

```ts
console.log(isSuccess(200)) // Output: true
console.log(isSuccess(404)) // Output: false
```

### `isError(code: number): boolean`

Returns true if the status code indicates an error (4xx or 5xx).

**Example:**

```ts
console.log(isError(200)) // Output: false
console.log(isError(404)) // Output: true
```

### `isTeapot(code: number): boolean`

Returns true if the status code indicates teapot (418).

**Example:**

```ts
console.log(isTeapot(418)) // Output: true
console.log(isTeapot(200)) // Output: false
```

### `handleHttp(code: number): { description: string, isSuccess: boolean, isError: boolean, isTeapot: boolean }`

Returns an object containing the respective details for the given HTTP status code.

**Example:**

```ts
const result = handleHttp(200)
console.log(result.description) // Output: OK
console.log(result.isSuccess) // Output: true
console.log(result.isError) // Output: false
console.log(result.isTeapot) // Output: false
```

## Testing

This section provides information on how to test the functionalities of the http-status-utils project. Follow the steps below to ensure that all components are working as expected:

1. **Unit Tests**: Run the unit tests to verify the correctness of individual functions and methods.
2. **Integration Tests**: Execute integration tests to ensure that different parts of the application work together seamlessly.
3. **Manual Testing**: Perform manual testing to catch any issues that automated tests might miss.

Make sure to review the test results and address any failures or errors. Keeping the tests up-to-date with the latest changes in the codebase is crucial for maintaining the reliability of the project.

If you want to test the library's functionality, you can do so by running:

```sh
npm test
```
