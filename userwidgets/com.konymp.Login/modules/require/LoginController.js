define({
  navigator: function () {
    alert('Enrol Now');
    var navigation = new kony.mvc.Navigation('SiginUpForm');
    navigation.navigate();
  },

  login: function () {
    const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let username = this.view.txtUserName.text.trim();
    let password = this.view.txtPassword.text.trim();
    if (username.trim() === '' || password.trim() === '') {
      alert("Username or Password can't be empty");
      return;
    }
    if (usernameRegex.test(username) && passwordRegex.test(password)) {
      if (username === 'Subash27' && password === 'Subash123@') {
        alert('Login successful');
        var navigation = new kony.mvc.Navigation('Home');
        navigation.navigate();
        this.view.txtUserName.text = '';
        this.view.txtPassword.text = '';
      } else {
        alert('Incorrect Username/Password');
        this.view.txtUserName.text = '';
        this.view.txtPassword.text = '';
      }
    } else {
      alert('Incorrect Username/Password');
      this.view.txtUserName.text = '';
      this.view.txtPassword.text = '';
    }
  },
});
