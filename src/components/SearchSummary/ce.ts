import {defineCustomElement} from 'vue';
import comp from './SearchSummary.ce.vue';
const compCe = defineCustomElement(comp);
customElements.define('search-ui-vue-raw-summary', compCe);
