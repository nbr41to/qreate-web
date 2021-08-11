/* FIX 壊れてました */
export const dateFormat = (d: Date, format: string): string => {
  format = format.replace(/YYYY/, ('0' + d.getFullYear()).slice(-2));
  format = format.replace(/MM/, ('0' + (d.getMonth() + 1)).slice(-2));
  format = format.replace(/DD/, ('0' + d.getDate()).slice(-2));
  format = format.replace(/hh/, ('0' + d.getHours()).slice(-2));
  format = format.replace(/mm/, ('0' + d.getMinutes()).slice(-2));
  format = format.replace(/ss/, ('0' + d.getSeconds()).slice(-2));
  return format;
};
