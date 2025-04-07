<template>
    <v-breadcrumbs class="admin-breadcrumbs" :items="breadcrumbs" v-if="breadcrumbs.length">
        <template #item="{item}">
            <v-breadcrumbs-item
                :href="item.href"
                :to="item.to"
                exact
                :disabled="false"
                v-if="!item.last"
            >
                {{ item.text }}
            </v-breadcrumbs-item>
            <li v-else>
                <a href="javascript:{}" class="v-breadcrumbs__item" @click="reloadPage">
                    {{item.text}}
                </a>
            </li>
        </template>
        <template #divider>
            <v-icon>mdi-chevron-right</v-icon>
        </template>
    </v-breadcrumbs>
</template>

<script>
import './SrBreadcrumb.scss'

export default {
    name: 'SrBreadcrumb',
    computed: {
        breadcrumbs () {
            try {
                const lastIndex = this.$route.meta.breadcrumbs.length - 1
                return this.$route.meta.breadcrumbs.map((breadcrumb, index) => ({
                    ...breadcrumb,
                    text: (this.translate(breadcrumb.text)).replace(/:(.*)/, (matches, p1) => {
                        return this.$route.params[p1]
                    }),
                    disabled: false,
                    last: index === lastIndex
                }))
            } catch (e) {
                return []
            }
        }
    },
    methods: {
        reloadPage () {
            location.reload()
        }
    }
}
</script>
