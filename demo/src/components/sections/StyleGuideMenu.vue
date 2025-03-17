<template>
    <div class="admin-style-guide__menu">
        <v-list flat>
            <v-list-item-group>
                <v-list-item
                    v-for="section in sections" :key="section.text"
                >
                    <div v-if="section.components">
                        <v-list-item-content
                            @click="$vuetify.goTo(section.goTo, {offset: 100})">
                            {{section.text}}
                        </v-list-item-content>
                        <v-list-item-group>
                            <v-list-item
                                v-for="component in section.components" :key="component.text"
                                @click="$vuetify.goTo(component.goTo, {offset: 110})"
                            >
                                <v-list-item-content>
                                    {{component.text}}
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                    </div>
                    <div v-else>
                        <v-list-item-content
                            @click="$vuetify.goTo(section.goTo, {offset: 100})"
                        >
                            {{section.text}}
                        </v-list-item-content>
                    </div>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </div>
</template>

<script>
export default {
    name: 'StyleGuideMenu',
    data () {
        return {
            sections: [
                {text: 'Colors', goTo: '#colors'},
                {text: 'Typography', goTo: '#typography'},
                {text: 'Layout', goTo: '#layout'},
                {text: 'Components',
                    goTo: '#components',
                    components: [
                        {text: 'Buttons', goTo: '#buttons'},
                        {text: 'Input forms', goTo: '#input-forms'},
                        {text: 'Form rows', goTo: '#form-rows'},
                        {text: 'Alerts', goTo: '#alerts'},
                        {text: 'Tooltips', goTo: '#tooltips'},
                        {text: 'Icons', goTo: '#icons'},
                        {text: 'Cards', goTo: '#cards'},
                        {text: 'Tables', goTo: '#tables'},
                        {text: 'Dialogs', goTo: '#dialogs'}
                    ]
                }
            ]
        }
    }
}
</script>
