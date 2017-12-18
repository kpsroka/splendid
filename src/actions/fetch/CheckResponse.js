function isJsonResponse(response) {
  const contentType = response.headers.get('content-type');
  return (contentType && contentType.includes('application/json'));
}

export default function CheckResponse(fetchPromise, rejectEmptyResponse = true) {
  return fetchPromise.then(
      (response) => {
        const headerUiMessage = response.headers.has('X-Ui-Message') ? response.headers.get('X-Ui-Message') : '';
        if (response.ok) {
          if (isJsonResponse(response)) {
            return response.json().then(json => Promise.resolve({ response: json, msg: headerUiMessage }));
          } else {
            return response.text().then(
                (textResponse) => {
                  if (rejectEmptyResponse || textResponse.length > 0) {
                    // eslint-disable-next-line no-console
                    console.log(`Unexpected response: ${textResponse}`);
                    throw new Error('Server failure');
                  } else {
                    return Promise.resolve({ response: textResponse, msg: headerUiMessage });
                  }
                }
            );
          }
        } else {
          if (headerUiMessage !== '') {
            throw new Error(headerUiMessage);
          }

          const responsePromise = isJsonResponse(response) ? response.json() : response.text();

          return responsePromise.then(
              (errorResponse) => {
                if (errorResponse.message) {
                  throw new Error(errorResponse.message);
                } else if (errorResponse) {
                  throw new Error(errorResponse);
                } else {
                  throw new Error(response.statusText);
                }
              }
          );
        }
      },
      () => { throw new Error('Network failure'); }
  );
}
