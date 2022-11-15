const FILE_TYPES = ['jpg', 'jpeg', 'png', 'svg'];

const adForm = document.querySelector('.ad-form');

const avatarImage = adForm.querySelector('.ad-form-header__preview img');
const avatarInput = adForm.querySelector('[name="avatar"]');
const photoContainer = adForm.querySelector('.ad-form__photo');
const photoInput = adForm.querySelector('[name="images"]');

const isFileType = (file) => FILE_TYPES.some((fileType) => file.name.endsWith(fileType));

const uploadAvatar = () => {
  avatarInput.addEventListener('change', () => {
    if (isFileType(avatarInput.files[0])) {
      avatarImage.src = URL.createObjectURL(avatarInput.files[0]);
    }
  });
};

const uploadPhotos = () => {
  photoInput.addEventListener('change', () => {
    if (isFileType(photoInput.files[0])) {
      const imgElement = document.createElement('img');

      photoContainer.innerHTML = '';
      photoContainer.style.position = 'relative';
      photoContainer.append(imgElement);

      imgElement.src = URL.createObjectURL(photoInput.files[0]);
      imgElement.style.position = 'absolute';
      imgElement.style.top = '50%';
      imgElement.style.transform = 'translateY(-50%)';
      imgElement.style.width = '100%';
    }
  });
};

export { uploadAvatar, uploadPhotos };
