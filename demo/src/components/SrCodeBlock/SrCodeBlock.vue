<template>
  <div class="code-block">
    <pre :class="`language-${language}`"><code ref="code">{{ code }}</code></pre>
    <v-btn icon class="copy-button" @click="copyCode">
      <v-icon>mdi-content-copy</v-icon>
    </v-btn>
    <transition name="fade">
      <span v-if="copied" class="copied-text">Másolva!</span>
    </transition>
  </div>
</template>

<script>
import Prism from "prismjs";
import "prismjs/themes/prism.css"; // Alapértelmezett Prism téma
import "prismjs/components/prism-markup.js";
import "prismjs/components/prism-javascript.js"; // További nyelvek importálhatók

export default {
  props: {
    code: {
      type: String,
      required: true
    },
    language: {
      type: String,
      default: "html" // Alapértelmezett nyelv
    }
  },
  data() {
    return {
      copied: false
    };
  },
  mounted() {
    this.highlight();
  },
  methods: {
    highlight() {
      this.$nextTick(() => {
        Prism.highlightElement(this.$refs.code);
      });
    },
    copyCode() {
      navigator.clipboard.writeText(this.code);
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
      }, 2000);
    }
  }
};
</script>

<style scoped>
.code-block {
  position: relative;
  background: transparent;
  padding: 0;
  border-radius: 0;
  color: #333;
  font-family: monospace;
  overflow-x: auto;
  font-size: 14px;
  line-height: 1.4;
}

/* Kódmező */
pre {
  background: #f0f0f0 !important; /* Még világosabb szürke */
  border: none !important;
  border-radius: 5px;
  padding: 12px 40px 12px 12px;
  font-size: 14px;
  line-height: 1.5;
  font-weight: bold; /* Félkövér betűk */
}

code {
  background: none !important;
  border: none !important;
  font-weight: bold; /* Félkövér betűk */
}

/* Másolás gomb */
.copy-button {
  position: absolute;
  top: 50%; /* Középre helyezzük */
  right: 10px; /* Elég távolság a szövegtől */
  transform: translateY(-50%); /* Pontosan középre igazítja */
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Másolás visszajelzés */
.copied-text {
  position: absolute;
  top: +5px; /* Magasabban jelenjen meg */
  right: 10px;
  background: #4caf50;
  color: white;
  padding: 6px 12px; /* Kicsit nagyobb legyen */
  border-radius: 6px;
  font-size: 13px;
  font-weight: bold;
  opacity: 1;
  z-index: 10; /* Biztosan látszódjon */
  transition: opacity 0.3s, transform 0.3s;
  transform: translateY(0);
}

/* Amikor eltűnik */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

/* Szintaxis kiemelés */
.token.tag {
  color: #007acc;
}

.token.attr-name {
  color: #d91e18;
}

.token.attr-value {
  color: #008000;
}

.token.punctuation {
  color: #666;
}

.token.keyword {
  color: #a626a4;
}
</style>
