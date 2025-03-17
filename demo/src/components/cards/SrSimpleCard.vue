<template>
    <a :href="url" class="sr-simple-card-link-wrapper">
        <div class="sr-simple-card">
            <div class="sr-simple-card__icon">
                <slot name="icon"/>
            </div>
            <div class="sr-simple-card__info">
                <div class="text-h4 sr-simple-card__info__label">
                    {{ label }}
                </div>
                <div class="sr-simple-card__info-wrapper">
                    <div class="sr-simple-card-count"
                         data-test-id="cardValue"
                    >
                        {{ count }}
                    </div>
                    <span class="sr-simple-card-info-text">
                       {{ text }}
                    </span>
                </div>
            </div>
        </div>
    </a>
</template>

<script>
export default {
    name: 'SrSimpleCard',
    props: {
        count: {
            type: Number | String,
            required: false,
            default: 0
        },
        label: {
            type: String,
            required: false
        },
        text: {
            type: String,
            required: false
        },
        url: {
            type: String,
            required: false
        }
    }
}
</script>
