import { readable } from 'svelte/store';
import { FunctionsHttpError, FunctionsRelayError, FunctionsFetchError } from "@supabase/supabase-js"
import { supabaseClient } from "$lib/db";
import type { Batch } from "./batch";

let batches: Batch[] = [];
// TODO: this is slow
const { data, error } = await supabaseClient.functions.invoke('bf-api')
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