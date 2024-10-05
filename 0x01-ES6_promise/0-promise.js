export default function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        //async action goes here

        // Boolean check for function check on async operation's
        // success or failure
        if (true) {
            resolve('API call was successful');
        }
        else {
            reject('API call was unsuccessful');
        }
    });
}
