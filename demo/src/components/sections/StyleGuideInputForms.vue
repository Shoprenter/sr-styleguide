<template>
    <v-flex>
        <v-row>
            <v-col>
                <form-group>
                    <form-row label="Here is the label">
                        <v-text-field
                            hint="This is a hint"
                            persistent-hint
                            outlined
                            dense
                        />
                    </form-row>
                    <form-row label="Here is the label">
                        <v-text-field
                            outlined
                            dense
                            error-messages="Here is an error"
                        />
                    </form-row>
                </form-group>
            </v-col>
        </v-row>
        <div class="sg-block">
            <v-row>
                <v-col cols="12" sm="3">
                    placeholder normal
                </v-col>
                <v-col cols="12" sm="3">
                    placeholder dense
                </v-col>
                <v-col cols="12" sm="3">
                    label
                </v-col>
                <v-col cols="12" sm="3">
                    label dense
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="3">
                    <v-text-field outlined clearable placeholder="v-text-field"/>

                    <div class="mb-5">
                        <v-select
                            :items="selectItems"
                            v-model="selectStatus"
                            placeholder="v-select"
                            outlined hide-details
                            clearable
                            menu-props="offset-y"
                        >
                            <template #selection="{index}">
                                <span v-if="index === 0">{{selectStatus.length}} selected</span>
                            </template>
                        </v-select>
                    </div>

                    <v-autocomplete
                        :items="selectItems2"
                        v-model="selectStatus2"
                        placeholder="v-autocomplete"
                        outlined hide-details
                        multiple clearable
                    >
                        <template #selection="{index}">
                            <span v-if="index === 0">{{selectStatus2.length}} selected</span>
                        </template>
                    </v-autocomplete>
                </v-col>
                <v-col cols="12" sm="3">
                    <v-text-field dense outlined clearable placeholder="v-text-field"/>

                    <div class="mb-5">
                        <v-select
                            :items="selectItems"
                            v-model="selectStatus"
                            placeholder="v-select"
                            outlined hide-details
                            dense clearable
                            menu-props="offset-y"
                        >
                            <template #selection="{index}">
                                <span v-if="index === 0">{{selectStatus.length}} selected</span>
                            </template>
                        </v-select>
                    </div>

                    <v-autocomplete
                        :items="selectItems2"
                        v-model="selectStatus2"
                        placeholder="v-autocomplete"
                        dense outlined hide-details
                        multiple clearable
                    >
                        <template #selection="{index}">
                            <span v-if="index === 0">{{selectStatus2.length}} selected</span>
                        </template>
                    </v-autocomplete>
                </v-col>
                <v-col cols="12" sm="3">
                    <v-text-field outlined clearable label="v-text-field"/>

                    <div class="mb-5">
                        <v-select
                            :items="selectItems"
                            v-model="selectStatus"
                            label="v-select"
                            outlined hide-details
                            clearable
                            menu-props="offset-y"
                        >
                            <template #selection="{index}">
                                <span v-if="index === 0">{{selectStatus.length}} selected</span>
                            </template>
                        </v-select>
                    </div>

                    <v-autocomplete
                        :items="selectItems2"
                        v-model="selectStatus2"
                        label="v-autocomplete"
                        outlined hide-details
                        multiple clearable
                    >
                        <template #selection="{index}">
                            <span v-if="index === 0">{{selectStatus2.length}} selected</span>
                        </template>
                    </v-autocomplete>
                </v-col>
                <v-col cols="12" sm="3">
                    <v-text-field dense outlined clearable label="v-text-field"/>

                    <div class="mb-5">
                        <v-select
                            :items="selectItems"
                            v-model="selectStatus"
                            label="v-select"
                            outlined hide-details
                            dense clearable
                            menu-props="offset-y"
                        >
                            <template #selection="{index}">
                                <span v-if="index === 0">{{selectStatus.length}} selected</span>
                            </template>
                        </v-select>
                    </div>

                    <v-autocomplete
                        :items="selectItems2"
                        v-model="selectStatus2"
                        label="v-autocomplete"
                        dense outlined hide-details
                        multiple clearable
                    >
                        <template #selection="{index}">
                            <span v-if="index === 0">{{selectStatus2.length}} selected</span>
                        </template>
                    </v-autocomplete>
                </v-col>
            </v-row>
        </div>
        <div class="sg-block">
            <h4>Checkbox:</h4>
            <form-row :label="`v-checkbox component`">
                <v-row>
                    <v-col cols="1">
                        <v-checkbox
                            hide-details
                            :ripple="false"
                            v-model="checkbox1"
                        ></v-checkbox>
                    </v-col>
                    <v-col cols="2">
                        value: {{ checkbox1 }}
                    </v-col>
                </v-row>
            </form-row>
            <form-row :label="`v-checkbox disabled`">
                <v-row>
                    <v-col cols="1">
                        <v-checkbox
                            disabled
                            hide-details
                            :ripple="false"
                            :value="false"
                        ></v-checkbox>
                    </v-col>
                    <v-col cols="2">
                        value: false
                    </v-col>
                </v-row>
            </form-row>
            <form-row :label="`v-simple-checkbox component`">
                <v-row>
                    <v-col cols="1">
                        <v-simple-checkbox
                            :ripple="false"
                            v-model="checkbox2"
                        ></v-simple-checkbox>
                    </v-col>
                    <v-col cols="2">
                        value: {{ checkbox2 }}
                    </v-col>
                </v-row>
            </form-row>
            <form-row :label="`v-simple-checkbox disabled`">
                <v-row>
                    <v-col cols="1">
                        <v-simple-checkbox
                            disabled
                            :ripple="false"
                            :value="false"
                        ></v-simple-checkbox>
                    </v-col>
                    <v-col cols="2">
                        value: false
                    </v-col>
                </v-row>
            </form-row>
            <form-row class="mt-8" :label="`indeterminate checkbox`">
                <sr-switch :ripple="false" v-model="indeterminate" dense inset label="Indeterminate"></sr-switch>
            </form-row>
            <v-checkbox :ripple="false" :indeterminate="indeterminate" readonly label="Indeterminate checkbox"></v-checkbox>
        </div>
        <div class="sg-block">
            <h4>Switches:</h4>
                <form-row>
                    <sr-switch
                        :ripple="false"
                        v-model="switch1"
                        inset
                        :label="`Switch: ${switch1.toString()}`"
                    ></sr-switch>
                </form-row>
                <form-row>
                    <sr-switch
                        :ripple="false"
                        v-model="switch2"
                        dense inset
                        :label="`Switch dense: ${switch2.toString()}`"
                    ></sr-switch>
                </form-row>
        </div>
        <div class="sg-block">
            <h4>Radio buttons:</h4>
            <form-row>
                <v-radio-group v-model="radioGroup">
                    <v-radio
                        :ripple="false"
                        color="primary"
                        :key="1"
                        :label="`Radio 1`"
                        :value="1"
                    ></v-radio>
                    <v-radio
                        :ripple="false"
                        color="primary"
                        :key="2"
                        :label="`Radio 2`"
                        :value="2"
                    ></v-radio>
                    <v-radio
                        :ripple="false"
                        color="primary"
                        :key="3"
                        :disabled="true"
                        :label="`Radio Disabled`"
                        :value="3"
                    ></v-radio>
                </v-radio-group>
            </form-row>
        </div>
        <div class="sg-block">
            <h4>Date picker:</h4>
            <v-row>
                <v-col cols="12" sm="6" md="4" lg="4" xl="4">
                    <date-picker v-model="defaultDate"/>
                </v-col>
            </v-row>
        </div>
    </v-flex>
</template>

<script>
import DatePicker from '../../components/form/DatePicker'
export default {
    name: 'StyleGuideInputForms',
    components: {
        DatePicker
    },
    data: () => ({
        selectItems: [
            {text: 'Lorem ipsum 1', value: '1'},
            {text: 'Lorem ipsum 2', value: '2'},
            {text: 'Lorem ipsum 3', value: '3'}
        ],
        selectItems2: [
            {text: 'Lorem ipsum 1', value: '1'},
            {text: 'Lorem ipsum 2', value: '2'},
            {text: 'Lorem ipsum 3', value: '3'}
        ],
        selectStatus: 0,
        selectStatus2: 0,
        indeterminate: false,
        checkbox1: true,
        checkbox2: true,
        radioGroup: 1,
        switch1: true,
        switch2: true,
        defaultDate: new Date().toISOString().substr(0, 10)
    })
}
</script>
