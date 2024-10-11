import { test, expect } from "@playwright/test";

test("has title 'Easy billing'", async ({ page }) => {
  await page.goto("http://localhost:3500/");

  await expect(page).toHaveTitle("Easy billing");
});
