### vue + storybook + elementUI组件库入门讲解

**storybook只是UI组件的说明文档**

1、 vue-cli 创建一个 Vue 项目

```
vue create  storybook-vue-element

cd storybook-vue-element

npm i 

npm run serve 
```

2、安装 element-ui

```
npm i element-ui -S
```

3、在 main.js 中写入以下内容：

```
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

4、增加与 @storybook 相关的依赖 

```
cnpm install @storybook/vue -S 

cnpm install vue-loader vue-template-compiler @babel/core babel-loader babel-preset-vue -S 
```

5、在 package.json 增加一个 script 



```
{

  "scripts": {

    "storybook": "start-storybook"

  }

}
```

6、目录

![image-20201016102545447](C:\Users\huantm\AppData\Roaming\Typora\typora-user-images\image-20201016102545447.png)

7、main.js

```
const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(js|mdx)'],
  webpackFinal: async (config, { configType }) => {
    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    // Return the altered config
    return config;
  },
};

参考官网https://storybook.js.org/docs/react/configure/overview配置
```

8、0-App.stories.js

```
import App from '../App.vue';

export default {
  title: 'App',
};

export const toStorybook = () => ({
  components: { App },

  template: '<App />',
});

toStorybook.story = {
  name: 'app',
};

```

9、App.vue 代码修改

```
<template>
  <div id="app">
    <div id="nav">
      <div class="home">
        <img alt="Vue logo" src="./assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
      </div>
    </div>
  </div>
</template>


<script>
import HelloWorld from '../src/components/HelloWorld'; //  注意报错

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

注意：源代码中<router-link>storybook无法解析
```

10、运行

```
npm run serve

npm run storybook
```

