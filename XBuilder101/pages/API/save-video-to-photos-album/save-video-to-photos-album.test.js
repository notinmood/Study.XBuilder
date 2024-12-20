// uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/
describe('API-saveVideoToPhotosAlbum', () => {
  if (process.env.uniTestPlatformInfo.startsWith('web') || process.env.uniTestPlatformInfo.toLowerCase().startsWith('ios')) {
    it('pass', async () => {
      expect(1).toBe(1);
    });
    return;
  }

  let page;
  beforeAll(async () => {
    page = await program.reLaunch('/pages/API/save-video-to-photos-album/save-video-to-photos-album');
    await page.waitFor(500);
  });

  it('test saveVideoToPhotosAlbum', async () => {
    if (process.env.uniTestPlatformInfo.startsWith('android')) {
      await program.adbCommand(
        'pm grant io.dcloud.uniappx android.permission.WRITE_EXTERNAL_STORAGE');
      await page.waitFor(500);
    }
    await page.callMethod('saveVideo');
    expect(await page.data('success')).toBe(true);
  });
});
