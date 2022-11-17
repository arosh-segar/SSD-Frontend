import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MessageInput from "./components/message/MessageInput";
import FileInput from "./components/file/FileInput";

describe("MessageInput", () => {
  it("should render message component", () => {
    render(<MessageInput />);
    var messageContainer = screen.getByTestId("message-container");
    expect(messageContainer).toBeInTheDocument();
  });
});

describe("FileInput", () => {
  it("should render file component", () => {
    render(<FileInput />);
    var messageContainer = screen.getByTestId("file-container");
    expect(messageContainer).toBeInTheDocument();
  });
});
