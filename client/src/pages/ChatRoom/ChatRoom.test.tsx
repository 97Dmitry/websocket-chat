import React from "react";
import renderer from "react-test-renderer";
import ChatRoom from ".";

describe("chatRoom snapshot test", () => {
  it("chatRoom must be match", () => {
    expect.assertions(1);
    const component = renderer.create(
      <ChatRoom />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
