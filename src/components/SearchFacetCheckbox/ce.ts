import {defineCustomElement} from 'vue';
import comp from './SearchFacetCheckbox.ce.vue';
const compCe = defineCustomElement(comp);
customElements.define('search-ui-vue-raw-facet-checkbox', compCe);