import Vue from "vue";
import {
  Button,
  Col,
  Container,
  Input,
  Form,
  FormItem,
  Option,
  Row,
  Select
} from "element-ui";
import lang from "element-ui/lib/locale/lang/ru-RU";
import locale from "element-ui/lib/locale";
import "element-ui/lib/theme-chalk/button.css";
import "element-ui/lib/theme-chalk/col.css";
import "element-ui/lib/theme-chalk/container.css";
import "element-ui/lib/theme-chalk/display.css";
import "element-ui/lib/theme-chalk/form.css";
import "element-ui/lib/theme-chalk/form-item.css";
import "element-ui/lib/theme-chalk/input.css";
import "element-ui/lib/theme-chalk/main.css";
import "element-ui/lib/theme-chalk/option.css";
import "element-ui/lib/theme-chalk/row.css";
import "element-ui/lib/theme-chalk/select.css";

locale.use(lang);

Vue.use(Button);
Vue.use(Col);
Vue.use(Container);
Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Option);
Vue.use(Row);
Vue.use(Select);
