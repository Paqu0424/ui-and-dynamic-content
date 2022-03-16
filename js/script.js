const txtInput = document.getElementById('txtInput');
const btnAdd = document.getElementById('btnAdd');
const outputList = document.getElementById('outputList');
const feedback = document.getElementById('feedback');

btnAdd.addEventListener('click', () => {
  if (txtInput.value) {
    const itemToAdd = document.createElement('li');
    itemToAdd.textContent = txtInput.value;
    outputList.appendChild(itemToAdd);
    txtInput.value = '';
    feedback.textContent = '';
  } else {
    feedback.textContent = 'Nothing Added!';
  }
});
