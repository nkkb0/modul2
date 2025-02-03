export default function validateEmail(email) {
  if (email.includes('@') && email.includes('.')) {
    const a = email.split('@');
    if (a[0].length > 0) {
      const b = a[1].split('.');
      if (b[0].length > 0 && b[1].length > 0) {
        return true;
      } return false;
    } return false;
  } return false;
}
