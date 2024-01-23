define({
  // init() {
  //   try {
  //     this.view.lblUserName.text =
  //       'UserName: ' + this.navigationContext.userName;
  //     this.view.lblEmail.text = 'Email: ' + this.navigationContext.email;
  //     this.view.lblGender.text = 'Gender: ' + this.navigationContext.Gender;
  //     this.view.lblPhone.text =
  //       'Phone Number: ' + this.navigationContext.phoneNumber;
  //     this.view.lblAddress.text = 'Address: ' + this.navigationContext.address;
  //   } catch (e) {
  //     console.log(e);
  //   }
  // },
  postshow: function () {
    try {
      var userName = this.navigationContext.userName;
      var email = this.navigationContext.email;
      var Gender = this.navigationContext.Gender;
      var phoneNumber = this.navigationContext.phoneNumber;
      var address = this.navigationContext.address;

      var dataMap = {
        flxMasterProfile: 'flxMasterProfile',
        flxProfileContainer: 'flxProfileContainer',
        lblProfile: 'lblProfile',
        lblProfileDetails: 'lblProfileDetails',
      };
      this.view.SegProfile.widgetDataMap = dataMap;
      let rowData = [
        {
          lblProfile: { text: 'userName' },
          lblProfileDetails: { text: userName },
        },
        {
          lblProfile: { text: 'email' },
          lblProfileDetails: { text: email },
        },
        {
          lblProfile: { text: 'Gender' },
          lblProfileDetails: { text: Gender },
        },
        {
          lblProfile: { text: 'phoneNumber' },
          lblProfileDetails: { text: phoneNumber },
        },
        {
          lblProfile: { text: 'address' },
          lblProfileDetails: { text: address },
        },
      ];
      this.view.SegProfile.setData(rowData);
    } catch (e) {
      console.log(e);
    }
  },
});
