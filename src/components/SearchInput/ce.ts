import {defineCustomElement} from 'vue';
import comp from './SearchInput.ce.vue';
const compCe = defineCustomElement(comp);
customElements.define('search-ui-vue-raw-input', compCe);
