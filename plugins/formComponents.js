import Vue from 'vue'

import FormInput from '@/components/form/FormInput'
import FormNumber from '@/components/form/FormNumber'
import FormTextarea from '@/components/form/FormTextarea'
import FormCheckbox from '@/components/form/FormCheckbox'
import FormSelect from '@/components/form/FormSelect'
import FormSelectAutocomplete from '@/components/form/FormSelectAutocomplete'
import FormDatePicker from '@/components/form/FormDatePicker'
import FormFile from '@/components/form/FormFile'
import FormPreview from '@/components/form/FormPreview'

import DateFilter from '@/components/filters/DateFilter'
import NumberFilter from '@/components/filters/NumberFilter'
import SelectFilter from '@/components/filters/SelectFilter'
import TextFilter from '@/components/filters/TextFilter'
import LabelsFilter from '@/components/filters/LabelsFilter'
import ComboFilter from '@/components/filters/ComboFilter'

Vue.component('ComboFilter', ComboFilter)
Vue.component('DateFilter', DateFilter)
Vue.component('SelectFilter', SelectFilter)
Vue.component('TextFilter', TextFilter)
Vue.component('NumberFilter', NumberFilter)
Vue.component('LabelsFilter', LabelsFilter)

Vue.component('FormInput', FormInput)
Vue.component('FormNumber', FormNumber)
Vue.component('FormTextarea', FormTextarea)
Vue.component('FormCheckbox', FormCheckbox)
Vue.component('FormSelect', FormSelect)
Vue.component('FormSelectAutocomplete', FormSelectAutocomplete)
Vue.component('FormDatePicker', FormDatePicker)
Vue.component('FormFile', FormFile)
Vue.component('FormPreview', FormPreview)
