import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/svelte";
import {describe, expect, it, test} from 'vitest';

import Home from "./Home.svelte";


describe.concurrent("Home", () => {
    test("contain home title and logo", () => {
        render(Home, {});
    
        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByAltText("Eldon logo")).toBeInTheDocument();

    })
})
