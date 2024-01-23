define({
  preshow: function () {
    this.view.lblReset.onClick = this.reset.bind(this);
    this.view.lblSubmit.onClick = this.validate.bind(this);
  },

  reset: function () {
    this.view.tfdusername.text = '';
    this.view.txtPassword.text = '';
    this.view.txtEmail.text = '';
    this.view.txtPhoneNumber.text = '';
    this.view.txtareaAddress.text = '';
  },
  validate: function () {
    const userName = this.view.tfdusername.text;
    const password = this.view.txtPassword.text;
    const email = this.view.txtEmail.text;
    const phoneNumber = this.view.txtPhoneNumber.text;
    const address = this.view.txtareaAddress.text;
    if (
      userName.trim() === '' ||
      password.trim() === '' ||
      email.trim() === '' ||
      phoneNumber.trim() === '' ||
      address.trim() === ''
    ) {
      alert('Please fill all the Necessary Fields');
      return;
    }
    const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (
      !usernameRegex.test(userName) ||
      !passwordRegex.test(password) ||
      !emailRegex.test(email)
    ) {
      alert('Invalid Credentials');
      return;
    }
    if (phoneNumber.length < 10 || phoneNumber.length > 10) {
      alert('Invalid Phone Number');
      return;
    }
    alert('Form Submitted');
    this.submit();
  },
  submit: function () {
    const navigater = new kony.mvc.Navigation('Home');
    const data = {
      userName: this.view.tfdusername.text,
      email: this.view.txtEmail.text,
      Gender: this.view.rdbGender.selectedKey,
      phoneNumber: this.view.txtPhoneNumber.text,
      address: this.view.txtareaAddress.text,
    };

    navigater.navigate(data);
  },
});
