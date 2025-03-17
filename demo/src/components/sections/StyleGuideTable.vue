<template>
    <v-flex class="sg-subsection">
        <v-data-table
            :headers="headers2"
            :items="desserts"
            :items-per-page="5"
        ></v-data-table>
        <pagination :total-count="desserts.length" :items-per-page="5" v-model="page" />
        <select-all-plus listed-number="100" all-number="456" v-model="allPlusSelected"></select-all-plus>
    </v-flex>
</template>

<script>
import OverlayWrapper from '../../components/table/OverlayWrapper'
import Pagination from '../../components/table/Pagination'

export default {
    components: {
        Pagination,
        OverlayWrapper
    },
    data () {
        return {
            page: 1,
            selected: [],
            stickyHeadClass: 'nemtudom honnan jön',
            headerWidth: 'nemtudom honnan jön',
            allPlusSelected: false,
            options: {
                page: 1,
                sortBy: ['name'],
                sortDesc: false
            },
            tableList: {
                elements: [
                    {
                        id: 1,
                        name: 'lorem',
                        image: 'ipsum',
                        text: 'dolor'
                    },
                    {
                        id: 2,
                        name: 'lorem',
                        image: 'ipsum',
                        text: 'dolor'
                    },
                    {
                        id: 3,
                        name: 'lorem',
                        image: 'ipsum',
                        text: 'dolor'
                    },
                    {
                        id: 4,
                        name: 'lorem',
                        image: 'ipsum',
                        text: 'dolor'
                    }
                ]
            },
            tableLoading: false,
            headers: [
                {text: 'id', value: 'id', align: 'center'},
                {text: 'név', value: 'name', align: 'center', sortable: true},
                {text: 'kép', value: 'image', align: 'center', sortable: true},
                {text: 'szöveg', value: 'text', align: 'center', sortable: false}
            ],
            headers2: [
                {
                    text: 'Dessert (100g serving)',
                    align: 'start',
                    sortable: false,
                    value: 'name'
                },
                { text: 'Calories', value: 'calories' },
                { text: 'Fat (g)', value: 'fat' },
                { text: 'Carbs (g)', value: 'carbs' },
                { text: 'Protein (g)', value: 'protein' },
                { text: 'Iron (%)', value: 'iron' }
            ],
            desserts: [
                {
                    name: 'Frozen Yogurt',
                    calories: 159,
                    fat: 6.0,
                    carbs: 24,
                    protein: 4.0,
                    iron: '1%'
                },
                {
                    name: 'Ice cream sandwich',
                    calories: 237,
                    fat: 9.0,
                    carbs: 37,
                    protein: 4.3,
                    iron: '1%'
                },
                {
                    name: 'Eclair',
                    calories: 262,
                    fat: 16.0,
                    carbs: 23,
                    protein: 6.0,
                    iron: '7%'
                },
                {
                    name: 'Cupcake',
                    calories: 305,
                    fat: 3.7,
                    carbs: 67,
                    protein: 4.3,
                    iron: '8%'
                },
                {
                    name: 'Gingerbread',
                    calories: 356,
                    fat: 16.0,
                    carbs: 49,
                    protein: 3.9,
                    iron: '16%'
                },
                {
                    name: 'Jelly bean',
                    calories: 375,
                    fat: 0.0,
                    carbs: 94,
                    protein: 0.0,
                    iron: '0%'
                },
                {
                    name: 'Lollipop',
                    calories: 392,
                    fat: 0.2,
                    carbs: 98,
                    protein: 0,
                    iron: '2%'
                },
                {
                    name: 'Honeycomb',
                    calories: 408,
                    fat: 3.2,
                    carbs: 87,
                    protein: 6.5,
                    iron: '45%'
                },
                {
                    name: 'Donut',
                    calories: 452,
                    fat: 25.0,
                    carbs: 51,
                    protein: 4.9,
                    iron: '22%'
                },
                {
                    name: 'KitKat',
                    calories: 518,
                    fat: 26.0,
                    carbs: 65,
                    protein: 7,
                    iron: '6%'
                }
            ]
        }
    },
    computed: {
        productHeadClass () {
            return this.selected.length
                ? 'bulk-action'
                : false
        }
    },
    created () {
        setTimeout(function () {
            this.tableLoading = true
        }, 1000)
    }
}
</script>
