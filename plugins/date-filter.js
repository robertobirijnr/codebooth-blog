import moment from 'moment'
import Vue from 'vue'

Vue.filter('formatDate',function(value,formatType = 'LL'){
    if(!value) return ''
    return moment(value).format(formatType)
  })