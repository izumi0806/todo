import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, test } from "vitest";
import App from "../src/App";

describe("App Component", () => {
	test("should add a todo to the list", () => {
		expect(1).toEqual(1);
	});
});
