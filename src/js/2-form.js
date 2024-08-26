const feedBackForm = document.querySelector('.feedback-form');
let formData = {
  email: '',
  message: '',
};

const fillFormFields = () => {
  const fieldData = JSON.parse(localStorage.getItem('feedback-form'));
  if (fieldData === null) {
    return;
  }

  formData = fieldData;

  for (const key in fieldData) {
    if (fieldData.hasOwnProperty(key)) {
      feedBackForm.elements[key].value = fieldData[key];
    }
  }
  console.log(fieldData);
  console.log(feedBackForm);
};

fillFormFields();

const onFeedBackForm = event => {
  const fieldName = event.target.name;
  const fieldValue = event.target.value;
  formData[fieldName] = fieldValue;
  localStorage.setItem('feedback-form', JSON.stringify(formData));
};

const onFeedBackFormSubmit = event => {
  event.preventDefault();
  event.target.reset();
  localStorage.removeItem('feedback-form');
};

feedBackForm.addEventListener('change', onFeedBackForm);
feedBackForm.addEventListener('submit', onFeedBackFormSubmit);
