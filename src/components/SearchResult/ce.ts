import {defineCustomElement} from 'vue';
import comp from './SearchResult.ce.vue';
const compCe = defineCustomElement(comp);
customElements.define('search-ui-vue-raw-result', compCe);
