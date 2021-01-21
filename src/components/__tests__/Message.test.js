import { render, screen } from "@testing-library/react";
import { Message } from "../global/CardMessages/Message";

const messageTest = {
  name: "Felipe",
  message:
    "Aliquam non justo in neque suscipit sodales. Curabitur ipsum sem, semper eget ligula vitae, tempus pretium sem. Aliquam at metus nunc. Duis congue lacus sed facilisis condimentum. Integer maximus nibh a sapien gravida, nec gravida nisl bibendum. Mauris leo risus, bibendum in ultricies a, pharetra quis felis. Duis sit amet tempus tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

describe("When everything is ok", () => {
  test("Should render name in message card", async () => {
    render(<Message personMessage={messageTest} />);
    const nameinScreen = screen.getByText(messageTest.name);

    expect(nameinScreen).toBeInTheDocument();
  });

  test("Should render message text in message card", async () => {
    render(<Message personMessage={messageTest} />);
    const messageinScreen = screen.getByText(messageTest.message);

    expect(messageinScreen).toBeInTheDocument();
  });
});
