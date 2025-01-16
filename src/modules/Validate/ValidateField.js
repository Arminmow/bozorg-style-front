export const validateField = (name, value) => {
    let error = '';
  
    switch (name) {
      case 'name':
        if (value.length < 3) {
          error = 'نام باید حداقل 3 کاراکتر باشد';
        }
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          error = 'ایمیل معتبر نیست';
        }
        break;
      case 'password':
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (!passwordRegex.test(value)) {
          error = 'رمز عبور باید حداقل 8 کاراکتر داشته و شامل حروف بزرگ و کوچک باشد';
        }
        break;
      default:
        break;
    }
  
    return error;
  };
  