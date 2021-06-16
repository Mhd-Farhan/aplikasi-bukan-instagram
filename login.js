function onSignIn(googleUser) {
  const profile = googleUser.getBasicProfile();
  console.log("Nama Lengkap: " + profile.getName());
  console.log("Email: " + profile.getEmail());
  const x = document.getElementsByClassName("logged");
  let i;
  for (i = 0; i <= x.length; i++) {
    x[0].classList.remove("logged");
  }
}
function onSignOut() {
  const auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log("user signed out.");
  });
  hideDashboard();
}
function hideDashboard() {
  const x = document.getElementsByClassName("onlylogged");
  let i;
  for (i = 0; i <= x.length; i++) {
    x[i].classList.add("logged");
  }
}
function gotoDashboard() {
  window.location.replace("index.html");
}
