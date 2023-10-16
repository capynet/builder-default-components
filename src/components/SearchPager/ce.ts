import {defineCustomElement} from 'vue';
import comp from './SearchPager.ce.vue';
const compCe = defineCustomElement(comp);
customElements.define('search-ui-vue-raw-pager', compCe);
