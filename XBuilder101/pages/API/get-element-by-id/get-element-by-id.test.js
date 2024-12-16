const PAGE_PATH = "/pages/API/get-element-by-id/get-element-by-id";
let page;

describe("getElementById", () => {
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH);
    await page.waitFor('view');
  });
  it("getElementByNotExistId", async () => {
    const res = await page.callMethod("getElementByNotExistId");
    expect(res).toBe(null);
  });
  it("changeStyle", async () => {
    await page.callMethod("changePageHeadBackgroundColor");
    await page.callMethod("changeTextColor");
    await page.callMethod("changeViewStyle");
    await page.waitFor(500);
    const image = await program.screenshot({fullPage: true});
    expect(image).toSaveImageSnapshot();
  });
  /**
   * 检测元素offsetLeft属性值域
   */
  it("checkElementOffsetLeft", async() => {
    const res = await page.callMethod("getTextOffsetLeft");
    expect(res).toBe(0);
  })
});
