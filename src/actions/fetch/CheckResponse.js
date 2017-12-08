function isJsonResponse(response) {
  let contentType = response.headers.get('content-type');
  return (contentType && contentType.includes('application/json'));
}

export default function CheckResponse(fetchPromise, rejectEmptyResponse=true) {
  return fetchPromise.then(
      response => {
        if (response.ok) {
          if (isJsonResponse(response)) {
            return response.json();
          } else {
            return response.text().then(
                textResponse => {
                  if (rejectEmptyResponse || textResponse.length > 0) {
                    console.log(`Unexpected response: ${textResponse}`);
                    throw new Error(`Server failure`)
                  } else {
                    return Promise.resolve(textResponse);
                  }
                });
          }
        } else {
          if (response.headers.has('X-Ui-Message')) {
            throw new Error(response.headers.get('X-Ui-Message'));
          }

          const responsePromise = isJsonResponse(response) ? response.json() : response.text();

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
