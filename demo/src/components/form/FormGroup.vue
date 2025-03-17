<template>
    <div class="admin-form-group">
        <slot/>
    </div>
</template>

<script>
export default {
    name: 'FormGroup',
    props: {
        label: {
            type: String,
            required: false
        }
    }
}
</script>
