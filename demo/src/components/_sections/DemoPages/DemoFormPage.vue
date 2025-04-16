<template>
  <v-flex id="form-page" class="sg-subsection">
    <v-flex xs12>
      <h4 class="text-h4">Form Page</h4>
    </v-flex>
    <sr-page>
      <sr-standard-layout>
        <sr-heading title="Coupon">
          <sr-primary-button outlined>Cancel</sr-primary-button>
          <sr-primary-button>Save</sr-primary-button>
        </sr-heading>
        <sr-content>
          <sr-tabs v-model="languageTab">
            <sr-language-tab
                v-for="(lang, index) in adminLanguages" :key="index"
                :href="'#tab-' + index"
                :lang="lang"
            />
          </sr-tabs>

          <sr-tabs-items v-model="languageTab">
            <sr-tab-item
                v-for="(lang, index) in adminLanguages" :key="index"
                :value="'tab-' + index">
              <v-card flat>
                <v-card-text>
                  <sr-form-row label="Coupon name" required>
                    <sr-input-field type='text' v-model="coupon.name[lang]"/>
                  </sr-form-row>

                  <sr-form-row label="Coupon description" required>
                    <sr-textarea v-model="coupon.description[lang]"/>
                  </sr-form-row>
                </v-card-text>
              </v-card>
            </sr-tab-item>
          </sr-tabs-items>

          <sr-form-divider/>

          <sr-form-row
              label="Coupon code"
              required
              help="The code the customer enters to get the discount">
            <sr-input-field type="text" v-model="coupon.code" hint="The code must be at least 3 and at most 32 characters long!"/>
            <template v-slot:extra-content>
              <sr-primary-button>Generate coupon code</sr-primary-button>
            </template>
          </sr-form-row>

          <sr-form-row label="Discount type" required help="Percentage or Fixed Amount">
            <sr-select :items="discountTypes" v-model="coupon.discountType"/>
          </sr-form-row>

          <sr-form-row
              v-if="coupon.discountType === 'F'"
              label="Fixed Amount">
            <sr-input-field type="number" v-model="coupon.total"/>
          </sr-form-row>

          <sr-form-row
              v-if="coupon.discountType === 'P'"
              label="Percentage">
            <sr-input-field type="number" v-model="coupon.discount"/>
          </sr-form-row>

          <sr-form-row label="Free shipping">
            <sr-switch value="0" v-model="coupon.freeShipping"/>
          </sr-form-row>

          <sr-form-row label="Customer groups"
                       help="Users in these customer groups will be able to redeem the coupon. If no customer group is selected, it will be available in each and every customer group.">
            <sr-simple-multi-checkbox
                :multi-checkbox-options="customerGroupCheckboxItems"
                v-model="coupon.customerGroups"
            />
          </sr-form-row>

          <sr-form-row label="Date start">
            <sr-date-picker v-model="coupon.dateStart"/>
          </sr-form-row>

          <sr-form-row label="Date end">
            <sr-date-picker v-model="coupon.dateEnd"/>
          </sr-form-row>

        </sr-content>
      </sr-standard-layout>
    </sr-page>
    <v-row>
      <v-col cols="6">
        <demo-code-block :code="demoFormPageCode"/>
      </v-col>
      <v-col cols="6">
        <demo-code-block :code="demoFormPageDataCode" language="JavaScript"/>
      </v-col>
    </v-row>
  </v-flex>
</template>

<script>
export default {
    name: 'DemoFormPage',
    props: ['customerGroupOptions'],
    data () {
        return {
            languageTab: 'tab-0',
            adminLanguages: ['hu', 'en'],
            discountTypes: [
                { text: 'Percentage', value: 'P' },
                { text: 'Fixed Amount', value: 'F' }
            ],
            coupon: {
                name: {},
                description: {},
                code: '',
                discountType: 'F',
                total: 0,
                discount: 0,
                freeShipping: 0,
                customerGroups: [],
                dateStart: new Date().toISOString().split('T')[0],
                dateEnd: ''
            },
            demoFormPageDataCode: '    data () {\n' +
                '        return {\n' +
                "            languageTab: 'tab-0',\n" +
                "            adminLanguages: ['hu', 'en'],\n" +
                '            discountTypes: [\n' +
                "                { text: 'Percentage', value: 'P' },\n" +
                "                { text: 'Fixed Amount', value: 'F' }\n" +
                '            ],\n' +
                '            coupon: {\n' +
                '                name: {},\n' +
                '                description: {},\n' +
                "                code: '',\n" +
                "                discountType: 'F',\n" +
                '                total: 0,\n' +
                '                discount: 0,\n' +
                '                freeShipping: 0,\n' +
                '                customerGroups: [],\n' +
                "                dateStart: new Date().toISOString().split('T')[0],\n" +
                "                dateEnd: ''\n" +
                '            }\n' +
                '       }',
            demoFormPageCode:
              '<sr-page>\n' +
              '      <sr-standard-layout>\n' +
              '        <sr-heading title="Coupon">\n' +
              '          <sr-primary-button outlined>Cancel</sr-primary-button>\n' +
              '          <sr-primary-button>Save</sr-primary-button>\n' +
              '        </sr-heading>\n' +
              '        <sr-content>\n' +
              '          <sr-tabs v-model="languageTab">\n' +
              '            <sr-language-tab\n' +
              '                v-for="(lang, index) in adminLanguages" :key="index"\n' +
              '                :href="\'#tab-\' + index"\n' +
              '                :lang="lang"\n' +
              '            />\n' +
              '          </sr-tabs>\n' +
              '\n' +
              '          <sr-tabs-items v-model="languageTab">\n' +
              '            <sr-tab-item\n' +
              '                v-for="(lang, index) in adminLanguages" :key="index"\n' +
              '                :value="\'tab-\' + index">\n' +
              '              <v-card flat>\n' +
              '                <v-card-text>\n' +
              '                  <sr-form-row label="Coupon name" required>\n' +
              '                    <sr-input-field type=\'text\' v-model="coupon.name[lang]"/>\n' +
              '                  </sr-form-row>\n' +
              '\n' +
              '                  <sr-form-row label="Coupon description" required>\n' +
              '                    <sr-textarea v-model="coupon.description[lang]"/>\n' +
              '                  </sr-form-row>\n' +
              '                </v-card-text>\n' +
              '              </v-card>\n' +
              '            </sr-tab-item>\n' +
              '          </sr-tabs-items>\n' +
              '\n' +
              '          <sr-form-divider/>\n' +
              '\n' +
              '          <sr-form-row\n' +
              '              label="Coupon code"\n' +
              '              required\n' +
              '              help="The code the customer enters to get the discount">\n' +
              '            <sr-input-field type="text" v-model="coupon.code" hint="The code must be at least 3 and at most 32 characters long!"/>\n' +
              '            <template v-slot:extra-content>\n' +
              '              <sr-primary-button>Generate coupon code</sr-primary-button>\n' +
              '            </template>\n' +
              '          </sr-form-row>\n' +
              '\n' +
              '          <sr-form-row label="Discount type" required help="Percentage or Fixed Amount">\n' +
              '            <sr-select :items="discountTypes" v-model="coupon.discountType"/>\n' +
              '          </sr-form-row>\n' +
              '\n' +
              '          <sr-form-row\n' +
              '              v-if="coupon.discountType === \'F\'"\n' +
              '              label="Fixed Amount">\n' +
              '            <sr-input-field type="number" v-model="coupon.total"/>\n' +
              '          </sr-form-row>\n' +
              '\n' +
              '          <sr-form-row\n' +
              '              v-if="coupon.discountType === \'P\'"\n' +
              '              label="Percentage">\n' +
              '            <sr-input-field type="number" v-model="coupon.discount"/>\n' +
              '          </sr-form-row>\n' +
              '\n' +
              '          <sr-form-row label="Free shipping">\n' +
              '            <sr-switch value="0" v-model="coupon.freeShipping"/>\n' +
              '          </sr-form-row>\n' +
              '\n' +
              '          <sr-form-row label="Customer groups"\n' +
              '                       help="Users in these customer groups will be able to redeem the coupon. If no customer group is selected, it will be available in each and every customer group.">\n' +
              '            <sr-simple-multi-checkbox\n' +
              '                :multi-checkbox-options="customerGroupCheckboxItems"\n' +
              '                v-model="coupon.customerGroups"\n' +
              '            />\n' +
              '          </sr-form-row>\n' +
              '\n' +
              '          <sr-form-row label="Date start">\n' +
              '            <sr-date-picker v-model="coupon.dateStart"/>\n' +
              '          </sr-form-row>\n' +
              '\n' +
              '          <sr-form-row label="Date end">\n' +
              '            <sr-date-picker v-model="coupon.dateEnd"/>\n' +
              '          </sr-form-row>\n' +
              '\n' +
              '        </sr-content>\n' +
              '      </sr-standard-layout>\n' +
              '    </sr-page>\n'

        }
    },
    computed: {
        customerGroupCheckboxItems () {
            this.customerGroupOptions.map((item) => {
                item.label = item.text
                return item
            })

            return this.customerGroupOptions
        }
    }

}
</script>
