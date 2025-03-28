import SrProgressBarStep
    from '../../../components/milestone-indicators/multi-step-progress-bar/SrProgressBarStep/SrProgressBarStep.vue'
import SrMultiStepProgressBar
    from '../../../components/milestone-indicators/multi-step-progress-bar/SrMultiStepProgressBar/SrMultiStepProgressBar.vue'

export default {
    install (Vue, options = {}) {
        Vue.component('SrMultiStepProgressBar', SrMultiStepProgressBar)
        Vue.component('SrProgressBarStep', SrProgressBarStep)
    }
}
