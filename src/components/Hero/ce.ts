import {defineCustomElement} from 'vue';
import comp from './Hero.ce.vue';
const compCe = defineCustomElement(comp);
customElements.define('builder-default-component-hero', compCe);
