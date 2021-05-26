/**
 * Compares two values
 */
export type Comparator = (v1: any, v2: any) => number;

/**
 * Returns a Promise that will contain an array of options (label + value) given a query string
 */
export type AsyncAutocompleteDataProvider = (query: string) => Promise<Array<{ label: string, value: any }>>;

/**
 * Returns a Promise that will contain an object describing the result given a query string
 */
export type AsyncDataTableDataProvider =
	(query: string, orderBy: Array<{ key: string, direction: 'asc' | 'desc' }>, recordsPerPage: number, pageIndex: number) => Promise<AsyncDataTableDataProviderResult>;

export interface AsyncDataTableDataProviderResult {
	/** the number of available records */
	total: number,
	/** the number of records, filtered by the given query */
	filtered: number,
	/** the chunk of records to display */
	records: Array<Record<string, any>>
}

/**
 * Given the column value and its current row object, this function returns a representation of that cell
 */
export type DataTableRenderer = (value: any, row: Record<string, any>) => string | DataTableRenderWithComponent
export interface DataTableRenderWithComponent {
	/** The Svelte component that will render the cell */
	component: SvelteComponent,
	/** Props passed to the Svelte component */
	props: Record<string, any> | undefined,
	/** An "on:click" handler. Note that this handler will stop the propagation of the click event to the entire row */
	onClick: (e) => any,
	/** The text content that will be passed to the default slot of the Svelte component */
	textContent: string | undefined
}
/**
 * Given the current query, the column value and the entire row that column is part of, returns a boolean indicating
 * whether or not the current row should be displayed
 */
export type DataTableSearchCallback = (query: string, columnValue: any, row: Record<string, any>) => boolean;

/**
 * Once called, returns a Promise. While waiting for the Promise to settle (either by resolving or rejecting) the form will show a loading state
 */
export type FormSubmitCallback = () => Promise<any>;
