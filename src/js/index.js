import '@laylazi/bootstrap-rtl/dist/js/bootstrap.min';
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.css';
import 'jquery/dist/jquery';
import 'popper.js/dist/popper'
import '../sass/style.scss';
import '@fortawesome/fontawesome-free/js/all'
import { data } from 'jquery';


var date = new Date();
var year = date.getFullYear();
document.getElementById("date").innerHTML = year