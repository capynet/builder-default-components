import {defineCustomElement} from 'vue';

// 1: Import.
import SearchInput from './components/SearchInput/SearchInput.ce.vue';
import SearchSummary from './components/SearchSummary/SearchSummary.ce.vue';
import SearchSummaryFacetCheckbox from './components/SearchFacetCheckbox/SearchFacetCheckbox.ce.vue';
import SearchResult from './components/SearchResult/SearchResult.ce.vue';
import SearchPager from './components/SearchPager/SearchPager.ce.vue';

// 2: Wrap as custom element.
const SearchInputCe = defineCustomElement(SearchInput);
const SearchSummaryCe = defineCustomElement(SearchSummary);
const SearchSummaryFacetCheckboxCe = defineCustomElement(SearchSummaryFacetCheckbox);
const SearchResultCe = defineCustomElement(SearchResult);
const SearchPagerCe = defineCustomElement(SearchPager);

// 3: Inform to DOM about new components.
customElements.define('search-ui-vue-raw-input', SearchInputCe);
customElements.define('search-ui-vue-raw-summary', SearchSummaryCe);
customElements.define('search-ui-vue-raw-facet-checkbox', SearchSummaryFacetCheckboxCe);
customElements.define('search-ui-vue-raw-result', SearchResultCe);
customElements.define('search-ui-vue-raw-pager', SearchPagerCe);
