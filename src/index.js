import AppHeader from './components/app-header'
import AppNotification from './components/app-notification'
import AppSetting from './components/app-setting'
import AppSearch from './components/app-search'
import AppUserMenu from './components/app-user-menu'
import Icon from './components/icon'
import InfoList from './components/info-list'
import TextEditor from './components/text-editor'
import TextRenderer from './components/text-renderer'
import Timeline from './components/timeline'
import Popcard from './components/popcard'
import TaskFlow from './components/task-flow'
import TagList from './components/tag-list'
import Highlight from './components/highlight'
import SearchInput from './components/search-input'
import SearchList from './components/search-list'
import SearchSelect from './components/search-select'
import SearchSetName from './components/search-set-name'
import SearchOptions from './components/search-options'
import SearchOptionItem from './components/search-options/item'
import SearchOptionList from './components/search-options/list'
import SearchOptionSelect from './components/search-options/select'
import SearchOptionCascader from './components/search-options/cascader'
import SearchOptionRadio from './components/search-options/radio'
import UserCard from './components/user-card'

import NavMenu from './components/nav-menu'
import NavSubmenu from './components/nav-submenu'

import Loading from './directives/loading'

export {
  AppHeader,
  AppNotification,
  AppSearch,
  AppSetting,
  AppUserMenu,
  Icon,
  InfoList,
  TextEditor,
  TextRenderer,
  Timeline,
  Popcard,
  TaskFlow,
  TagList,
  Highlight,
  SearchInput,
  SearchList,
  SearchSelect,
  SearchSetName,
  SearchOptions,
  SearchOptionItem,
  SearchOptionList,
  SearchOptionSelect,
  SearchOptionCascader,
  SearchOptionRadio,
  UserCard,

  NavMenu,
  NavSubmenu,

  Loading,
}

export default {
  install: Vue => {
    Vue.use(AppHeader)
    Vue.use(AppNotification)
    Vue.use(AppSearch)
    Vue.use(AppUserMenu)
    Vue.use(Icon)
    Vue.use(InfoList)
    Vue.use(TextEditor)
    Vue.use(TextRenderer)
    Vue.use(Timeline)
    Vue.use(Popcard)
    Vue.use(TaskFlow)
    Vue.use(TagList)
    Vue.use(Highlight)
    Vue.use(SearchInput)
    Vue.use(SearchList)
    Vue.use(SearchSelect)
    Vue.use(SearchOptions)
    Vue.use(Card)

    Vue.use(NavMenu)
    Vue.use(NavSubmenu)

    Vue.use(Loading)
  },
}
