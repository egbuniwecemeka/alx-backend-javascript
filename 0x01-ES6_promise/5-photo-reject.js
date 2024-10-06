export default function uploadPhoto(filename) {
    return new Promise((resolve, reject) => {
        if (filename) {
            reject(Error(`Error: ${filename} cannot be processed`));
        } else {
            resolve(`File ${filename} upload successful`);
        }
    });
}