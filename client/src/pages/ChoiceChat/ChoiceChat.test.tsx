import React from "react";
import renderer from "react-test-renderer";
import ChoiceChat from ".";

describe("choiceChat snapshot test", () => {
  it("choiceChat must be match", () => {
    expect.assertions(1);
    const component = renderer.create(
      <ChoiceChat />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
