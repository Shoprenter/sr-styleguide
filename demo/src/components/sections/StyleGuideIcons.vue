<template>
    <div class="sg-subsection">
        SR iconset: <br>
        <a href="https://www.figma.com/file/sxiFT2xrUa9NPP9xpU7nRx/sr_iconset" target="_blank">https://www.figma.com/file/sxiFT2xrUa9NPP9xpU7nRx/sr_iconset</a><br>
        Search: <br>
        <a href="https://app.streamlineicons.com/streamline-regular" target="_blank">https://app.streamlineicons.com/streamline-regular</a>
        <div class="sg-block">
            <div class="sg-iconset">
                <div>
                    <v-icon>$helpCircleOutline</v-icon>
                </div>
                <div>
                    <v-icon>$mail</v-icon>
                </div>
                <div>
                    <v-icon>$duplicate</v-icon>
                </div>
                <div>
                    <v-icon>$checkboxOn</v-icon>
                </div>
                <div>
                    <v-icon>$checkboxOff</v-icon>
                </div>
                <div>
                    <v-icon>$checkboxIndeterminate</v-icon>
                </div>
                <div>
                    <v-icon>$radioOn</v-icon>
                </div>
                <div>
                    <v-icon>$radioOff</v-icon>
                </div>
                <div>
                    <v-icon>$addCircleOutline</v-icon>
                </div>
                <div>
                    <v-icon>$export</v-icon>
                </div>
                <div>
                    <v-icon>$import</v-icon>
                </div>
                <div>
                    <v-icon>$filter</v-icon>
                </div>
                <div>
                    <v-icon>$info</v-icon>
                </div>
                <div>
                    <v-icon>$magnify</v-icon>
                </div>
                <div>
                    <v-icon>$trashCan</v-icon>
                </div>
                <div>
                    <v-icon>$pencil</v-icon>
                </div>
                <div>
                    <v-icon>$lightning</v-icon>
                </div>
                <div>
                    <v-icon>$openInNew</v-icon>
                </div>
                <div>
                    <v-icon>$srSuccessIcon</v-icon>
                </div>
                <div>
                    <v-icon>$srErrorIcon</v-icon>
                </div>
                <div>
                    <v-icon>$findIcon</v-icon>
                </div>
                <div>
                    <v-icon>$package</v-icon>
                </div>
                <div>
                    <v-icon>$padlockOutline</v-icon>
                </div>
                <div>
                    <v-icon>$warningCircleOutline</v-icon>
                </div>
                <div>
                    <v-icon>$errorCircleOutline</v-icon>
                </div>
                <div>
                    <v-icon>$successCircleOutline</v-icon>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HelpCircleOutline from '../../components/icons/HelpCircleOutlineIcon'
import MailIcon from '../../components/icons/MailIcon'
import DuplicateIcon from '../../components/icons/DuplicateIcon'
import CheckboxOn from '../../components/icons/CheckboxOnIcon'
import CheckboxOff from '../../components/icons/CheckboxOffIcon'
import CheckboxIndeterminate
    from '../../components/icons/CheckboxIndeterminateIcon'
import AddCircleOutline
    from '../../components/icons/AddCircleOutlineIcon'
import ExportIcon from '../../components/icons/ExportIcon'
import ImportIcon from '../../components/icons/ImportIcon'
import MagnifyIcon from '../../components/icons/MagnifyIcon'
import FilterIcon from '../../components/icons/FilterIcon'
import InfoIcon from '../../components/icons/InfoIcon'
import TrashIcon from '../../components/icons/TrashIcon'
import PencilIcon from '../../components/icons/PencilIcon'
import LightningIcon from '../../components/icons/LightningIcon'
import OpenInNewIcon from '../../components/icons/OpenInNewIcon'

export default {
    name: 'StyleGuideIcons',
    pencil: {
        component: PencilIcon
    },
    openInNew: {
        component: OpenInNewIcon
    },
    addCircleOutline: {
        component: AddCircleOutline
    },
    helpCircle: 'mdi-help-circle',
    helpCircleOutline: {
        component: HelpCircleOutline
    },
    checkboxOn: {
        component: CheckboxOn
    },
    checkboxOff: {
        component: CheckboxOff
    },
    checkboxIndeterminate: {
        component: CheckboxIndeterminate
    },
    trashCan: {
        component: TrashIcon
    },
    duplicate: {
        component: DuplicateIcon
    },
    mail: {
        component: MailIcon
    },
    export: {
        component: ExportIcon
    },
    import: {
        component: ImportIcon
    },
    magnify: {
        component: MagnifyIcon
    },
    filter: {
        component: FilterIcon
    },
    info: {
        component: InfoIcon
    },
    lightning: {
        component: LightningIcon
    }
}
</script>
