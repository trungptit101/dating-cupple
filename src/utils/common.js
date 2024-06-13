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
  return `${new Date(time).toLocaleDateString()} ${new Date(
    time
  ).toLocaleTimeString()}`;
}

export function isNumber(evt, key) {
  const keysAllowed = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
  if (!keysAllowed.includes(key)) {
    evt.preventDefault();
  }
}
