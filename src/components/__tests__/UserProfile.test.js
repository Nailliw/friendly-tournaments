import { render, screen } from "@testing-library/react";
import App from "../../App";

describe("When everything is ok", () => {
  test("Should show personal info when isShowPersonalInfo props equals true", () => {
    render(<App />);
    const fromScreen = screen.getByText("OI");
    expect(fromScreen).toBeInTheDocument;
  });
});
