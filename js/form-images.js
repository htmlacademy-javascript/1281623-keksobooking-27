const FILE_TYPES = ['jpg', 'jpeg', 'png', 'svg'];
const DEFAULT_AVATAR_SRC = 'img/muffin-grey.svg';

const adForm = document.querySelector('.ad-form');
const avatarImage = adForm.querySelector('.ad-form-header__preview img');
const avatarInput = adForm.querySelector('[name="avatar"]');
const photoContainer = adForm.querySelector('.ad-form__photo');
const photoInput = adForm.querySelector('[name="images"]');

const isFileType = (file) => FILE_TYPES.some((fileType) => file.name.endsWith(fileType));

const setAvatarFile = () => {
  avatarInput.addEventListener('change', () => {
    const file = avatarInput.files[0];
    if (isFileType(file)) {
      avatarImage.src = URL.createObjectURL(file);
    }
  });
};

const setPhotoFile = () => {
  photoInput.addEventListener('change', () => {
    const file = photoInput.files[0];
    if (isFileType(file)) {
      const imgElement = document.createElement('img');

      photoContainer.innerHTML = '';
      photoContainer.style.position = 'relative';
      photoContainer.append(imgElement);

      imgElement.src = URL.createObjectURL(file);
      imgElement.style.position = 'absolute';
      imgElement.style.top = '50%';
      imgElement.style.transform = 'translateY(-50%)';
      imgElement.style.width = '100%';
    }
  });
};

const resetAvatarAndPhoto = () => {
  avatarImage.src = DEFAULT_AVATAR_SRC;
  photoContainer.innerHTML = '';
};

export { setAvatarFile, setPhotoFile, resetAvatarAndPhoto };
