import {storiesOf} from '@storybook/vue'
import Vue from 'vue'

import AppHeader from '.'
import BasicStory from './stories/basic.vue'
import NotificationStory from './stories/notification.vue'
import SearchStory from './stories/search.vue'
import SettingStory from './stories/setting.vue'
import UserMenu from './stories/user-menu.vue'

Vue.use(AppHeader)

storiesOf('Components|AppHeader', module)
  .add('基本用法', () => BasicStory)
  .add('消息通知', () => NotificationStory)
  .add('全局搜索', () => SearchStory)
  .add('应用设置', () => SettingStory)
  .add('用户菜单', () => UserMenu)
