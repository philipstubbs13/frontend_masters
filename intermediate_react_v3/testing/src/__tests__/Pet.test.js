import { expect, test } from "@jest/globals";
import { StaticRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import Pet from "../Pet";

test("displays a default thumbnail", async () => {
  const pet = render(
    <StaticRouter>
      <Pet />
    </StaticRouter>
  );

  const petThumbnail = await pet.findByTestId("thumbnail");

  expect(petThumbnail.src).toContain("none.jpg");
});

test("displays a non-default, correct thumbnail", async () => {
  const pet = render(
    <StaticRouter>
      <Pet images={["1.jpg", "2.jpg", "3.jpg"]} />
    </StaticRouter>
  );

  const petThumbnail = await pet.findByTestId("thumbnail");

  expect(petThumbnail.src).toContain("1.jpg");
});
