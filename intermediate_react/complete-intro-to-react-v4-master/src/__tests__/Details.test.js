import React from "react";
import { create } from "react-test-renderer";
import Details from "../Details";

test("snapshot", () => {
  const c = create(<Details />);
  expect(c.toJSON()).toMatchSnapshot();
});

// test("snapshot", () => {
//   const c = create(<Details />);
//   expect(c.toJSON()).toMatchInlineSnapshot(`
// <h1>
//   loading …
// </h1>
// `);
// });
