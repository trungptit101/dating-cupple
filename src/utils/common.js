export function convertBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}

export function convertDatetimeFormat(time) {
  return `${new Date(time).toLocaleDateString()} ${new Date(time).toLocaleTimeString()}`
}
