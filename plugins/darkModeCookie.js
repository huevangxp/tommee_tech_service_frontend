export default function ({ $vuetify, $cookies }) {
    const darkModeCookie = $cookies.get('mode');
    if (darkModeCookie) {
      $vuetify.theme.dark = darkModeCookie;
    }
  }