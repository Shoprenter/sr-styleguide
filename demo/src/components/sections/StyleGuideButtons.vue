<template>
    <v-flex>
        <div class="sg-button-list">
            <div class="sg-button-type">
                <div class="my-4">
                    <v-btn fab color="primary"><v-icon>mdi-heart</v-icon></v-btn>
                </div>
                <div class="my-4">
                    <v-btn small color="primary">Button text</v-btn>
                </div>
                <div class="my-4">
                    <v-btn color="primary">Button text</v-btn>
                </div>
                <div class="my-4">
                    <v-btn large color="primary">Button text</v-btn>
                </div>
                <v-menu offset-y>
                    <template #activator="{ on }">
                        <v-btn
                            color="primary"
                            v-on="on"
                        >
                            Dropdown
                            <v-icon small class="ml-1">mdi-chevron-down</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item
                            v-for="(item, index) in items"
                            :key="index"
                            @click="func()"
                        >
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
            <div class="sg-button-type">
                <div class="my-4">
                    <v-btn fab outlined color="primary"><v-icon>mdi-heart</v-icon></v-btn>
                </div>
                <div class="my-4">
                    <v-btn outlined small color="primary">Button outlined</v-btn>
                </div>
                <div class="my-4">
                    <v-btn outlined color="primary">Button outlined</v-btn>
                </div>
                <div class="my-4">
                    <v-btn outlined large color="primary">Button outlined</v-btn>
                </div>
                <v-menu offset-y>
                    <template #activator="{ on }">
                        <v-btn
                            color="primary"
                            v-on="on"
                            outlined
                        >
                            Dropdown outlined
                            <v-icon small class="ml-1">mdi-chevron-down</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item
                            v-for="(item, index) in items"
                            :key="index"
                            @click="func()"
                        >
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
            <div class="sg-button-type">
                <div class="my-4">
                    <v-btn small text color="primary">Button text</v-btn>
                </div>
                <div class="my-4">
                    <v-btn text color="primary">Button text</v-btn>
                </div>
                <div class="my-4">
                    <v-btn large text color="primary">Button text</v-btn>
                </div>
            </div>
            <div class="sg-button-type">
                <div class="my-4">
                    <v-btn class="admin-button-link" small text>Button link</v-btn>
                </div>
                <div class="my-4">
                    <v-btn class="admin-button-link" text>Button link</v-btn>
                </div>
                <div class="my-4">
                    <v-btn class="admin-button-link" large text>Button link</v-btn>
                </div>
            </div>
        </div>
    </v-flex>
</template>

<script>
export default {
    name: 'StyleGuideButtons',
    data: () => ({
        items: [
            { title: 'Lorem ipsum 1' },
            { title: 'Lorem ipsum 2' },
            { title: 'Lorem ipsum 3' },
            { title: 'Lorem ipsum 4' }
        ]
    })
}
</script>
