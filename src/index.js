
require('./index.scss');


const GOOGLE_CLIENT_ID = '966656750669-egrl08oqi6ov5c53i33u841t18571985.apps.googleusercontent.com';

const GOOGLE_AUTH2_SETTINGS = {
  client_id: GOOGLE_CLIENT_ID
};

const GOOGLE_BUTTON_OPTIONS = {
  width: 200,
  height: 40,
  longtitle: true,
  theme: 'dark'
};


window.onGooglePlatformLoad = onGooglePlatformLoad;


function onGooglePlatformLoad() {
  gapi.load('auth2', () => gapi.auth2
    .init(GOOGLE_AUTH2_SETTINGS)
    .then(() => onAuthInit())
  );
}

function onAuthInit() {
  installGoogleButton();
}

function installGoogleButton() {
  gapi.signin2.render('goog-sign-in-button', GOOGLE_BUTTON_OPTIONS);
}
