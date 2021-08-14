export const dateFormat = (format: string, date?: Date): string => {
  if (!date) {
    date = new Date();
  }
  format = format.replace(/YYYY/, date.getFullYear().toString());
  format = format.replace(/MM/, ('0' + (date.getMonth() + 1)).slice(-2));
  format = format.replace(/DD/, ('0' + date.getDate()).slice(-2));
  format = format.replace(/hh/, ('0' + date.getHours()).slice(-2));
  format = format.replace(/mm/, ('0' + date.getMinutes()).slice(-2));
  format = format.replace(/ss/, ('0' + date.getSeconds()).slice(-2));
  return format;
};
