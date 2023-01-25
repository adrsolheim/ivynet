// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

//import axios, {AxiosError} from 'axios';
import axiod from "https://deno.land/x/axiod/mod.ts";
import { serve  } from "https://deno.land/std@0.168.0/http/server.ts";
import { corsHeaders } from "../_shared/cors.ts";

const base64encoded = btoa(Deno.env.get("BREWFATHER_USERID")+":"+Deno.env.get("BREWFATHER_KEY"))
const headers = {
  "Authorization": `Basic ${base64encoded}` 
}
const bfreq = {
  method: "GET",
  url: "https://api.brewfather.app/v1/batches",
  headers: headers
}




serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    return getAllBatches()
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ error: error.message }), {
      headers: {...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})

async function getAllBatches() {
  try {
    const res = await axiod.request(bfreq)
    const batches = res.data
    return new Response(JSON.stringify(batches), {
        headers: {...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
}

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
