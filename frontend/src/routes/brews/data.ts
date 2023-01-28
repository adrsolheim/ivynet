import { readable } from 'svelte/store';
import { FunctionsHttpError, FunctionsRelayError, FunctionsFetchError } from "@supabase/supabase-js"
import { supabase } from "../../supabaseClient";
import type { Batch } from "./batch";

let batches: Batch[] = [];
console.log('fetching data from brewfather...')
const { data, error } = await supabase.functions.invoke('bf-api')
if (error instanceof FunctionsHttpError) {
	console.log('Function returned an error', error.message)
} else if (error instanceof FunctionsRelayError) {
	console.log('Relay error:', error.message)
} else if (error instanceof FunctionsFetchError) {
	console.log('Fetch error:', error.message)
} else {
	batches = data;
}
export let batchStore = readable([], (set) => {
	set(batches);
});

