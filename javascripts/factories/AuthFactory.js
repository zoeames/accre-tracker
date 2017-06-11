app.factory("AuthFactory", function($q) {
  let currentUserData = null;

  //Firebase: Determine if user is authenticated.
  let isAuthenticated = () => {
    return firebase.auth().currentUser ? true : false;
  };

  //Firebase: Return email, UID for user that is currently logged in.
  let getUser = () => {
    return firebase.auth().currentUser;
  };

  // Kills browser cookie with firebase credentials
  let logout = () => {
    firebase.auth().signOut();
  };

  //Firebase: GOOGLE - Use input credentials to authenticate user.
  let authenticateGoogle = () => {
    return $q((resolve, reject) => {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
        .then((authData) => {
          currentUserData = authData.user;
          resolve(currentUserData);
        }).catch((error) => {
          reject(error);
        });
    });
  };

  return { isAuthenticated: isAuthenticated, getUser: getUser, logout: logout, authenticateGoogle: authenticateGoogle };
});