<template>
    <v-flex class="sg-subsection">
        <v-row>
            <v-col cols="auto">
                <sr-card
                    max-width="305"
                    title="Shoprenter Klub"
                    href="https://www.shoprenter.hu"
                    text="Ismerje meg a legújabb trendeket és szerezzen ötleteket, hogyan teheti még sikeresebbé vállalkozását."
                >
                    <template #icon>
                        <card-expert-icon />
                    </template>
                </sr-card>
            </v-col>
            <v-col cols="auto">
                <sr-card
                    max-width="305"
                    title="Webshop beállítások"
                >
                    <template #icon>
                        <card-help-icon />
                    </template>
                    <template #text>
                        <ul class="v-card__text-list">
                            <li><a href="">Általános beállítások</a></li>
                            <li><a href="">Karbantartás</a></li>
                            <li><a href="">Beléptető oldal és hirdetés</a></li>
                            <li><a href="">Belépés és regisztráció beállítások</a></li>
                            <li><a href="">Domain átirányítás</a></li>
                            <li><a href="">Megosztási beállítások</a></li>
                        </ul>
                    </template>
                </sr-card>
            </v-col>
            <v-col cols="auto">
                <sr-simple-card label="Rendelések" text="új rendelés">
                    <template #icon>
                        <card-help-icon />
                    </template>
                </sr-simple-card>
            </v-col>
        </v-row>
    </v-flex>
</template>

<script>
import CardExpertIcon from '../../components/icons/Card/CardExpertIcon'
import CardHelpIcon from '../../components/icons/Card/CardHelpIcon'
import SrCard from '../../components/cards/SrCard'
import SrSimpleCard from '../../components/cards/SrSimpleCard'

export default {
    name: 'StyleGuideTooltips',
    components: {SrSimpleCard, SrCard, CardHelpIcon, CardExpertIcon}
}
</script>
