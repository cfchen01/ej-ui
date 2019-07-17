import {storiesOf} from '@storybook/vue'
import {number, object} from '@storybook/addon-knobs'
import {action} from '@storybook/addon-actions'
import Vue from 'vue'

import EjSearchOptions from '.'
import EjSearchSetName from '../search-set-name/'

Vue.use(EjSearchOptions)
Vue.use(EjSearchSetName)

const _conditionsOptions = [
  {
    value: 'cy1',
    label: '本部门全部资源1',
  },
  {
    value: 'cy2',
    label: '本部门全部资源2',
  },
  {
    value: 'cy3',
    label: '本部门全部资源3',
    num: 2, // 未审核数量
  },
  {
    value: 'cy4',
    label: '本部门全部资源1',
  },
  {
    value: 'cy5',
    label: '本部门全部资源1',
  },
  {
    value: 'cy6',
    label: '本部门全部资源1',
  },
  {
    value: 'cy7',
    label: '本部门全部资源1',
  },
  {
    value: 'cy8',
    label: '本部门全部资源1',
  },
]

const _cascaderOptions = [
  {
    value: 'zhinan',
    label: '指南',
    children: [
      {
        value: 'shejiyuanze',
        label: '设计原则',
        children: [
          {
            value: 'yizhi',
            label: '一致',
          }, {
            value: 'fankui',
            label: '反馈',
          }, {
            value: 'xiaolv',
            label: '效率',
          }, {
            value: 'kekong',
            label: '可控',
          },
        ],
      },
      {
        value: 'daohang',
        label: '导航',
        children: [
          {
            value: 'cexiangdaohang',
            label: '侧向导航',
          },
          {
            value: 'dingbudaohang',
            label: '顶部导航',
          },
        ],
      },
    ],
  },
]

storiesOf('Components|SearchOptions', module)
  .add('基本用法', () => ({
    template: `
      <ej-search-options :default-tag-more="true" :max-width-tag="maxWidthTag" :style="{'width': '1000px', margin: '50px auto'}">
        <template #tag-suffix>
          <ej-search-set-name @confirm="confirm"/>
        </template>
        <ej-search-option-list v-model="models.model1" label="常用条件" :options="conditionsOptions1"/>
        <ej-search-option-list :default-more="true" v-model="models.model2" label="机构名称" :options="conditionsOptions2"/>
        <ej-search-option-list v-model="models.model3" label="常用条件" :options="conditionsOptions3"/>
        <ej-search-option-cascader v-model="models.model4" label="基础资源" :options="cascaderOptions1"/>
        <ej-search-option-cascader v-model="models.model5" label="主题资源" :options="cascaderOptions2"/>
      </ej-search-options>
    `,

    props: {
      maxWidthTag: {
        default: number('maxWidthTag', 100) + '%',
      },
      conditionsOptions1: {
        default: object('ConditionsOptions1', JSON.parse(JSON.stringify(_conditionsOptions))),
      },
      conditionsOptions2: {
        default: object('ConditionsOptions2', JSON.parse(JSON.stringify(_conditionsOptions))),
      },
      conditionsOptions3: {
        default: object('ConditionsOptions3', JSON.parse(JSON.stringify(_conditionsOptions))),
      },
      cascaderOptions1: {
        default: object('CascaderOptions1', JSON.parse(JSON.stringify(_cascaderOptions))),
      },
      cascaderOptions2: {
        default: object('CascaderOptions2', JSON.parse(JSON.stringify(_cascaderOptions))),
      },
    },

    data () {
      return {
        models: {
          model1: ['cy1', 'cy3'],
          model2: [],
          model3: [],
          model4: ['zhinan', 'daohang', 'dingbudaohang'],
          model5: [],
        },
      }
    },

    watch: {
      models: {
        deep: true,
        immediate: true,
        handler (newVal) {
          let obj = {}
          for (let i in newVal) {
            obj[i] = newVal[i].join(',')
          }
          action('search')(obj)
        },
      },
    },

    methods: {
      confirm (val) {
        console.log(val)
        action('confirm')(val)
      },
    }
  }))
