define({
  data: '',

  postshow: function () {
    this.view.HeaderCop.lblProfile.onClick = this.profile.bind(this);
    try {
      this.data = {
        userName: this.navigationContext.userName,
        email: this.navigationContext.email,
        Gender: this.navigationContext.Gender,
        phoneNumber: this.navigationContext.phoneNumber,
        address: this.navigationContext.address,
      };
    } catch (e) {
      console.log(e);
    }
  },
  profile: function () {
    alert('Profile');
    var navProfile = new kony.mvc.Navigation('Profile');
    navProfile.navigate(this.data);
  },
});