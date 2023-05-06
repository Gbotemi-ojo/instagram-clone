import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./home";

describe("App component", () => {
    it("renders correct heading", () => {
        render(<App />);
        expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);
    });
});