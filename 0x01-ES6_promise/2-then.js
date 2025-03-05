export default function handleResponseFromAPI(promise) {
  return promise.then(() => {
    return {
      status: 200,
      body: 'success',
    };
  }).catch(() => new Error()).finally(() => {
    console.log('Promise settled');
  });
}
