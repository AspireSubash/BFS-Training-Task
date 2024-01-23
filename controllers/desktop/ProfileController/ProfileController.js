define({
  init() {
    try {
      this.view.lblUserName.text =
        'UserName: ' + this.navigationContext.userName;
      this.view.lblEmail.text = 'Email: ' + this.navigationContext.email;
      this.view.lblGender.text = 'Gender: ' + this.navigationContext.Gender;
      this.view.lblPhone.text =
        'Phone Number: ' + this.navigationContext.phoneNumber;
      this.view.lblAddress.text = 'Address: ' + this.navigationContext.address;
    } catch (e) {
      console.log(e);
    }
  },
});
