import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import SearchBar from "@/src/pages/movies/search/SearchBar";

const mockPush = vi.fn(); // Mock the push function

// Mock the useRouter hook
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockPush, // Return the mock push function
  }),
}));

describe("SearchBar", () => {
  it("should render input field with initial value and update on typing", () => {
    const initialQuery = "Inception";
    render(<SearchBar query={initialQuery} />);

    const input = screen.getByRole("textbox", { name: /movie-search/i });
    expect(input).toHaveValue(initialQuery);

    fireEvent.change(input, { target: { value: "Batman" } });
    expect(input).toHaveValue("Batman");
  });

  it("should trigger search with debounced input", async () => {
    render(<SearchBar query="Inception" />);

    const input = screen.getByRole("textbox", { name: /movie-search/i });
    fireEvent.change(input, { target: { value: "Batman" } });

    // Fast-forward debounce timeout
    await new Promise((resolve) => setTimeout(resolve, 600));

    expect(mockPush).toHaveBeenCalledWith("/?search=Batman");
  });
});
