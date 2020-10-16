import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Container from '../components/el-container.vue';

Vue.use(ElementUI);

export default {
  title: '表格',
};

export const toStorybook = () => ({
  components: { Container },

  template: '<Container/>',
});

toStorybook.story = {
  name: '表格',
};
