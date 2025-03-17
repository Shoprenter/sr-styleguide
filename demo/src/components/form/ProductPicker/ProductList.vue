<template>
    <v-list height="314">
        <v-list-item v-for="(product, index) in products" :key="index"
                     @click.stop="selectProduct(product)"
                     class="d-flex align-center product-picker-row p-2"
                     :class="{active: isSelected(product)}"
        >
            <v-checkbox
                :ripple="false"
                :input-value="isSelected(product)"
                hide-details
                data-test-id="productPickerCheckbox"
                @click.prevent.stop="selectProduct(product)"
            />
            <v-img :src="product.imageUrl" height="40" width="40" max-height="40" max-width="40">
                <template #placeholder>
                    <v-progress-circular indeterminate color="primary"/>
                </template>
            </v-img>
            <div class="ml-2">
                {{product.name}} - {{product.sku}}
                <div v-if="product.productAttributeInfo.label">
                    {{product.productAttributeInfo.label}}
                </div>
            </div>
        </v-list-item>
        <v-list-item v-if="loadingRow" class="justify-center">
            <v-progress-circular indeterminate color="primary" class="text-center"/>
        </v-list-item>
    </v-list>
</template>

<script>
export default {
    name: 'ProductList',
    props: {
        value: {
            required: false
        },
        products: {
            required: true
        },
        loadingRow: {
            required: true
        }
    },
    methods: {
        isSelected (product) {
            return this.value.findIndex(p => p.productId === product.productId) > -1
        },
        selectProduct (product) {
            const productInSelected = this.value.find(p => p.productId === product.productId)
            let selected = [...this.value]
            if (productInSelected) {
                selected = selected.filter(p => p.productId !== product.productId)
            } else {
                selected.push({...product})
            }
            this.$emit('input', [...selected])
        }
    }
}
</script>
