# AICLAB 網站（重新整理版）

這一版保留原網站的主要視覺語言：灰色頁面背景、白色內容區、綠色導覽列、Times/serif 風格標題，以及原本的研究圖片與所有主要資料。

## 最常改的檔案

日常最常修改的資料已分開：

- `js/data/news.js`
- `js/data/members.js`
- `js/data/courses.js`
- `js/data/publications.js`

較少修改的教授資料、研究方向、Funded Research、Thesis 等內容在：

`js/data/core.js`

網站顯示邏輯在：

`js/site.js`

整站外觀在：

`css/default.css`

HTML 頁面本身只留下共用骨架，因此不需要再把大量 Word/inline CSS 貼進每個 HTML。

## 新增 News

打開 `js/data/news.js`，找到最外層陣列，在陣列**最下面**新增：

```js
{
  "title": "新的消息標題",
  "details": "消息內容"
}
```

請注意前一筆資料後面要有逗號。網站會自動把陣列反向顯示，所以最後新增的資料會跑到最上面。

## 新增 Member

打開 `js/data/members.js`，找到對應的 `phd`、`master`、`alumniPhd`、`alumniMaster`。
在 `items` 最下面加入：

```js
{
  "name": "王小明 (Hsiao-Ming Wang)",
  "year": "2026"
}
```

校友可再加：

```js
"company": "TSMC"
```

最後新增的一筆會顯示在該表格最上方。

## 新增 Course

打開 `js/data/courses.js`，在陣列最下面新增：

```js
{
  "year": 2026,
  "semester": "Fall",
  "name": "Analog Integrated Circuit Design"
}
```

## 新增 Publication

打開 `js/data/publications.js`，選擇 Patent / Journal Paper / Book and Book Chapter / Conference Paper，
在該分類的 `items` 最下面加入一個字串：

```js
"Author, \"Paper Title,\" Journal, 2026."
```

最後新增的一筆會顯示在該分類最上方。

## Funded / Dissertation 頁面開關

不必再複製「有內容 / 無內容」HTML。直接在 `js/data/core.js` 最前面的 `settings` 修改：

```js
"showFunded": true,
"showDissertation": true
```

改成 `false` 時，導覽列會隱藏該頁；直接開頁面也只會顯示 unavailable。

## 本機預覽

VS Code 安裝 Live Server 後，對 `HOME.html` 按右鍵 → **Open with Live Server**。

也可以直接雙擊 HTML；本版沒有伺服器端程式，HTML/CSS/JS 都是靜態檔案。

## 部署

確認本機無誤後，把整個資料夾內容覆蓋到 IIS 網站根目錄即可。一般修改 HTML/CSS/JS 不需要重新啟動 IIS；若瀏覽器看起來仍是舊版，可先 Ctrl+F5 強制重新整理。
