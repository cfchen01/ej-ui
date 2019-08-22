import {storiesOf} from '@storybook/vue'
import Vue from 'vue'

import Icon from '..'
import BasicStory from './basic.vue'

Vue.use(Icon)

storiesOf('Components|Icon', module)
  .add('基本用法', () => BasicStory)
