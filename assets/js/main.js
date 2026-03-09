import loader from './helpers/loader.js';
import activeMenu from './components/selected_menu.js';
import scroll from './components/scroll.js';
import resetToHome from './helpers/reload_page.js';
import sendEmail from './helpers/send_form.js';
import updateCopyrightYear from './helpers/date_updater.js';

loader();

activeMenu();

scroll();

resetToHome();

sendEmail();

updateCopyrightYear();
