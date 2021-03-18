import Vue from "vue";
import { Button } from "element-ui";
import lang from "element-ui/lib/locale/lang/ru-RU";
import locale from "element-ui/lib/locale";
import "element-ui/lib/theme-chalk/button.css";

locale.use(lang);

Vue.use(Button);
