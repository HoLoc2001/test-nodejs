function bubbleSort(array) {
  const len = array.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

function removeDuplicate(array) {
  return [...new Set(array)];
}

function validatePhone(phone) {
  return phone.match(/65[0-9]{8}/);
}

function validateEmail(email) {
  return email.match(
    /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/
  );
}

export { bubbleSort, removeDuplicate, validatePhone, validateEmail };
