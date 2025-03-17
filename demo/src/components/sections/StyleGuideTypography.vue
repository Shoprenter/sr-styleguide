<template>
    <v-flex>
        <v-flex class="sg-subsection" column wrap>
            <v-flex xs12>
                <h2>Fonts</h2>
            </v-flex>
            <v-flex>
                <v-flex class="font-family-box d-inline-flex pa-2 font-weight-bold white--text text-uppercase">
                    Roboto Font Family
                </v-flex>
            </v-flex>
            <v-flex class="font-family-list">
                <span class="font-family-normal font-weight-thin">Roboto Thin</span>
                <span class="font-family-italic font-weight-thin font-italic">Roboto Thin Italic</span>
            </v-flex>
            <v-flex class="font-family-list">
                <span class="font-family-normal font-weight-light">Roboto Light</span>
                <span class="font-family-italic font-weight-light font-italic">Roboto Light Italic</span>
            </v-flex>
            <v-flex class="font-family-list">
                <span class="font-family-normal">Roboto Regular</span>
                <span class="font-family-italic font-italic">Roboto Regular Italic</span>
            </v-flex>
            <v-flex class="font-family-list">
                <span class="font-family-normal font-weight-medium">Roboto Medium</span>
                <span class="font-family-italic font-weight-medium font-italic">Roboto Medium Italic</span>
            </v-flex>
            <v-flex class="font-family-list">
                <span class="font-family-normal font-weight-bold">Roboto Bold</span>
                <span class="font-family-italic font-weight-bold font-italic">Roboto Bold Italic</span>
            </v-flex>
            <v-flex class="font-family-list">
                <span class="font-family-normal font-weight-black">Roboto Black</span>
                <span class="font-family-italic font-weight-black font-italic">Roboto Black Italic</span>
            </v-flex>
            <div class="sg-block">
                <p>Helper classes:</p>
                <ul class="list-styled">
                    <li><code>.font-italic</code></li>
                    <li><code>.font-weight-thin</code></li>
                    <li><code>.font-weight-light</code></li>
                    <li><code>.font-weight-regular</code></li>
                    <li><code>.font-weight-medium</code></li>
                    <li><code>.font-weight-bold</code></li>
                    <li><code>.font-weight-black</code></li>
                </ul>
            </div>
        </v-flex>
        <v-flex class="sg-subsection" column wrap>
            <v-flex xs12>
                <h2>Headers</h2>
            </v-flex>
            <v-flex>
                <div class="headings-table">
                    <div class="headings-table-title">
                        <h3>Type/Usage</h3>
                        <h3>Font size</h3>
                        <h3>Font weight</h3>
                        <h3>Example</h3>
                    </div>
                    <div class="headings-table-content">
                        <div v-for="(h, k, i) in headings" :key="i" class="headings-table-row">
                            <div>
                                <h3>{{ k }}</h3>
                                <code>.text-{{ k }}</code>
                            </div>
                            <div>
                                <h5>{{ h.size }}rem</h5>
                                <h5>{{ 16 * h.size }}px</h5>
                            </div>
                            <h5>{{ h.weight }}</h5>
                            <div :class="`text-${k}`">Lorem ipsum dolor sit amet consectetur adipiscing elit</div>
                        </div>
                    </div>
                </div>
            </v-flex>
        </v-flex>
        <v-flex class="sg-subsection" column wrap>
            <v-flex xs12>
                <h2>Opacity</h2>
            </v-flex>
            <v-flex>
                <div>
                    <p class="text--primary">
                        High-emphasis has an opacity of 87%.
                    </p>
                    <p class="text--secondary">
                        Medium-emphasis text and hint text have opacities of 60%.
                    </p>
                    <p class="text--disabled">
                        Disabled text has an opacity of 38%.
                    </p>
                </div>
                <div class="sg-block">
                    <p>Helper classes:</p>
                    <ul class="list-styled">
                        <li><code>.text--primary</code></li>
                        <li><code>.text--secondary</code></li>
                        <li><code>.text--disabled</code></li>
                    </ul>
                </div>
            </v-flex>
        </v-flex>
        <v-flex class="sg-subsection" column wrap>
            <v-flex xs12>
                <h2>Links</h2>
            </v-flex>
            <v-flex>
                <a href="#">Example link</a>
            </v-flex>
        </v-flex>
    </v-flex>
</template>

<script>
export default {
    data: () => ({
        headings: {
            'display-1': {
                'size': 3.125,
                'letter-spacing': 0,
                'line-height': 1.5,
                'weight': 700
            },
            'display-2': {
                'size': 2.1875,
                'letter-spacing': 0,
                'line-height': 1.5,
                'weight': 700
            },
            'display-3': {
                'size': 1.875,
                'letter-spacing': 0,
                'line-height': 1.5,
                'weight': 500
            },
            'h1': {
                'size': 1.625,
                'letter-spacing': 0,
                'line-height': 1.5,
                'weight': 300
            },
            'h2': {
                'size': 1.375,
                'letter-spacing': 0,
                'line-height': 1.5,
                'weight': 400
            },
            'h3': {
                'size': 1.25,
                'letter-spacing': 0,
                'line-height': 1.5,
                'weight': 500
            },
            'h4': {
                'size': 1.125,
                'letter-spacing': 0,
                'line-height': 1.5,
                'weight': 400
            },
            'h5': {
                'size': 1,
                'letter-spacing': 0,
                'line-height': 1.5,
                'weight': 400
            },
            'h6': {
                'size': 0.875,
                'letter-spacing': 0,
                'line-height': 1.5,
                'weight': 700
            },
            'subtitle-1': {
                'size': 0.875,
                'letter-spacing': 0,
                'line-height': 1.5,
                'weight': 500
            },
            'subtitle-2': {
                'size': 0.8125,
                'letter-spacing': 0,
                'line-height': 1.5,
                'weight': 500
            },
            'body-1': {
                'size': 0.875,
                'letter-spacing': 0,
                'line-height': 1.5,
                'weight': 400
            },
            'body-2': {
                'size': 0.8125,
                'letter-spacing': 0,
                'line-height': 1.5,
                'weight': 400
            },
            'caption': {
                'size': 0.75,
                'letter-spacing': 0,
                'line-height': 1.5,
                'weight': 400
            },
            'button': {
                'size': 0.8125,
                'letter-spacing': 0,
                'line-height': 1.5,
                'weight': 500
            },
            'overline': {
                'size': 0.75,
                'letter-spacing': 0,
                'line-height': 1.5,
                'weight': 400
            }
        }
    })
}
</script>
