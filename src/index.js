import AppHeader from './components/app-header'
import Icon from './components/icon'
import InfoList from './components/info-list'
import TextEditor from './components/text-editor'
import TextRenderer from './components/text-renderer'
import Timeline from './components/timeline'
import Popcard from './components/popcard'
import FlowChart from './components/flow-chart'

import Loading from './directives/loading'

export {
  AppHeader,
  Icon,
  InfoList,
  TextEditor,
  TextRenderer,
  Timeline,
  Popcard,
  FlowChart,

  Loading,
}

export default {
  install: Vue => {
    Vue.use(AppHeader)
    Vue.use(Icon)
    Vue.use(InfoList)
    Vue.use(TextEditor)
    Vue.use(TextRenderer)
    Vue.use(Timeline)
    Vue.use(Popcard)
    Vue.use(FlowChart)

    Vue.use(Loading)
  },
}
