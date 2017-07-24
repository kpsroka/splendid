function isJsonResponse(response) {
  let contentType = response.headers.get('content-type');
  return (contentType && contentType.includes('application/json'));
}

export default function CheckResponse(fetchPromise) {
  return fetchPromise.then(
      response => {
        const responsePromise = isJsonResponse(response) ? response.json() : response.text();

        if (response.ok) {
          if (isJsonResponse(response)) {
            return responsePromise;
          } else {
            return responsePromise.then(
                textResponse => {
                  console.log(`Unexpected response: ${textResponse}`);
                  throw new Error(`Server failure`)
                });
          }
        } else {
          return responsePromise.then(errorResponse => {
            if (errorResponse.message) {
              throw new Error(errorResponse.message);
            }
            else if (errorResponse) {
              throw new Error(errorResponse);
            } else {
              throw new Error(response.statusText);
            }
          });
        }
      },
      () => {
        throw new Error('Network failure');
      })
};
