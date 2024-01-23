define({
  postshow: function () {
    this.view.bdyLogin.btnLogin.onClick = this.view.bdyLogin.login.bind(this);
    this.view.bdyLogin.btnEnrol.onClick =
      this.view.bdyLogin.navigator.bind(this);
    this.view.hdnHeader.lblLogin.onClick = this.unhideLogin.bind(this);
  },

  unhideLogin: function () {
    this.view.bdyLogin.setVisibility(true); 
  },
});
