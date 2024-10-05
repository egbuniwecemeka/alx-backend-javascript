export default function getResponseFromAPI() {
<<<<<<< HEAD
  return new Promise((resolve, reject) => {
    // async action goes here

    // Boolean check for function check on async operation's
    // success or failure
    if (true) {
      resolve('API call was successful');
    } else {
      reject(Error('API call was unsuccessful'));
    }
  });
=======
    return new Promise((resolve, reject) => {
        //async action should go here

        //dynamic variable for success or failure
        const succesOrFailure = Math.random() >= 0.5;

        // Boolean check for function check on async operation's
        // success or failure
        if (succesOrFailure) {
            resolve('API call was successful');
        }
        else {
            reject(Error('API call was unsuccessful'));
        }
    });
>>>>>>> 7c5bb616f946619caad4b5c4e7a7caceac5923a5
}
