const feedBackForm = document.querySelector('.feedback-form');
let formData = {
  email: '',
  message: '',
};

const fillFormFields = () => {
  const fieldData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (fieldData === null) {
    return;
  }

  formData = fieldData;

  for (const key in fieldData) {
    if (fieldData.hasOwnProperty(key)) {
      feedBackForm.elements[key].value = fieldData[key];
    }
  }
};

fillFormFields();

const onFeedBackForm = event => {
  const fieldName = event.target.name;
  const fieldValue = event.target.value;
  formData[fieldName] = fieldValue;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFeedBackFormSubmit = event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  event.target.reset();
  localStorage.removeItem('feedback-form-state');
  console.log(formData);
  formData = { email: '', message: '' };
};

feedBackForm.addEventListener('change', onFeedBackForm);
feedBackForm.addEventListener('submit', onFeedBackFormSubmit);
