CARBON POCKET INTELLIGENCE v1.0

這是可以部署在 HTTPS 網址、加入 iPhone 主畫面的 PWA 網站。

部署（最簡單）
1. 打開 https://app.netlify.com/drop （建議在 Mac 上操作）。
2. 把整個 CarbonPocket-iPhone-PWA.zip 拖進去；如介面不接受 ZIP，解壓縮後拖入資料夾 carbon-pocket-site。
3. 複製產生的 *.netlify.app 網址；在 iPhone Safari 開啟。
4. Safari 分享 → 加入主畫面 → 打開為網頁 App → 加入。
5. 在 App 裡按右上方齒輪 → 選擇 CTS Private Data Pack JSON，即可載入完整真實案例。

資料與安全
- 請「不要」上傳 CarbonPocket_CTS_PrivateDataPack.json 到 Netlify 或任何公開網站！
- ZIP 僅包含 app 程式碼以及虛構展示資料，不含公司 CTS 真實資料。
- 真實 CTS 檔案獨立提供，請在本人授權的裝置匯入。
- App 沒有分析平台、登入、追蹤程式或後端請求。資料使用 IndexedDB 存在目前瀏覽器的本機儲存空間，不額外加密。
- 曾經儲存在 Safari 的資料，不會自動同步到其他裝置，請記得匯出備份。
- 這是個人 MVP，歷史預估節能不是實際績效，請核對原始來源與工況。

來源資料：CTS database_aii brand_as of 2026 Q3.xlsx
資料包內容：7,828 改善方案、530 工廠紀錄、可用年度能源／用水項目。
不含聯絡人、電話、電子信箱及地址。
