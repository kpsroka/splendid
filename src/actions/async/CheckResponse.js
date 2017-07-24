export default function CheckResponse(fetchPromise) {
  return fetchPromise.then(
      response => {
        if (response.ok) {
          let contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            return response.json();
          } else {
            return response.text().then(
                textResponse => {
                  console.log(`Unexpected response: ${textResponse}`);
                  throw new Error(`Server failure`)
                });
          }
        } else {
          return response.text().then(errorResponse => {
            if (errorResponse) {
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
