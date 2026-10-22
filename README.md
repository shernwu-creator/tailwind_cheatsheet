# Tailwind 速查 · Tailwind Cheatsheet

一個以 React + Vite 打造的個人 Tailwind CSS 樣式工具庫。把日常介面最常用的 utility classes 收進同一個地方，支援即時模糊搜尋、分類瀏覽、視覺預覽與一鍵複製。

[Live Demo](https://shernwu-creator.github.io/tailwind_cheatsheet/) · [GitHub Repository](https://github.com/shernwu-creator/tailwind_cheatsheet)

![Tailwind 速查介面預覽](./docs/preview.png)

## 功能特色

- **129 個實用樣式、10 大分類**：排版、間距、顏色、Flexbox & Grid、尺寸、特效與圓角，以及響應式、滾動、動畫轉場、裁切遮罩四大進階分類。
- **進階樣式收錄**：包含 `md:grid-cols-2`、`hidden md:block`、`snap-x snap-mandatory`、`animate-bounce`、`transition-all duration-300 ease-in-out`、`hover:scale-105`、JIT `[clip-path:…]` 與漸層文字裁切。
- **即時模糊搜尋**：可搜尋 Class 名稱、原生 CSS、中文說明、標籤與色碼，並容忍 `textsm`、`ronded` 這類拼字誤差。
- **分類導覽**：桌面版固定側邊欄、行動版水平分類列，快速切換樣式群組。
- **所見即所得預覽**：字級、顏色、間距、Flex/Grid、寬高、圓角與陰影，以及斷點前後對照、滾動捕捉、即時動畫、Hover 轉場與裁切遮罩都有專屬視覺預覽。
- **點擊即可複製**：點 Class 名稱即可複製，包含成功 micro-animation、Toast 提示與剪貼簿 fallback。
- **明暗模式**：跟隨系統偏好並記住選擇，使用 CSS 變數實作一致的深色主題。
- **鍵盤操作**：`⌘/Ctrl + K` 或 `/` 聚焦搜尋，`Esc` 清除搜尋。
- **響應式與無障礙**：適配 320px 以上的螢幕，具備鍵盤焦點樣式、ARIA 標籤與降低動態效果支援。

<details>
<summary>深色模式預覽</summary>

![深色模式預覽](./docs/preview-dark.png)

</details>

## 技術組合

- React 19 + Vite 8
- Tailwind CSS 3.4（含 PostCSS 與 Autoprefixer）
- lucide-react 圖示
- 原生 CSS keyframes 動畫、Clipboard API（含 `execCommand` fallback）

## 本機啟動

需求：Node.js 20.19+、pnpm 12+

```bash
pnpm install
pnpm dev
```

開啟終端機顯示的本機網址即可使用。

## 建置與預覽

```bash
pnpm run build
pnpm preview
```

`pnpm run build` 會將 production 產物輸出至 `dist/`。

## 專案結構

```text
tailwind_cheatsheet/
├── docs/                       # README 預覽圖
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Hero.jsx            # 首頁主視覺與快速搜尋
│   │   ├── Header.jsx          # 頂部搜尋列、主題切換
│   │   ├── Sidebar.jsx         # 桌面版分類導覽
│   │   ├── MobileCategoryNav.jsx
│   │   ├── StyleCard.jsx       # 樣式卡片與複製互動
│   │   ├── StylePreview.jsx    # 各類型視覺預覽
│   │   ├── Toast.jsx
│   │   └── ...
│   ├── data/
│   │   └── tailwindClasses.js  # 樣式資料庫（唯一資料來源）
│   ├── utils/
│   │   ├── search.js           # 模糊搜尋與關聯度排序
│   │   └── clipboard.js
│   ├── App.jsx
│   ├── index.css               # Tailwind 指令、CSS 變數與動畫
│   └── main.jsx
├── index.html
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## 樣式資料格式

所有樣式集中在 [`src/data/tailwindClasses.js`](./src/data/tailwindClasses.js)，新增一筆資料即可自動出現在分類、搜尋結果與計數中：

```js
{
  id: 'text-sm',
  category: 'typography',
  className: 'text-sm',
  css: 'font-size: 0.875rem;\nline-height: 1.25rem;',
  description: '比正文略小，常用於表單標籤、補充說明與按鈕文字。',
  tags: ['字體大小', 'font size', '小字', '表單', 'label'],
  preview: {
    type: 'font',
    size: '0.875rem',
    weight: 600,
    label: '0.875rem / 1.25rem',
  },
}
```

`preview.type` 會對應到 `StylePreview.jsx` 中的預覽元件；目前支援 `font`、`weight`、`swatch`、`textColor`、`spacing`、`layout`、`dimension`、`radius`、`border`、`shadow` 等型態。

## 鍵盤快捷鍵

| 快捷鍵 | 功能 |
| --- | --- |
| `⌘/Ctrl + K` 或 `/` | 聚焦搜尋框 |
| `Esc` | 清除搜尋，再次按下可退出輸入框 |
| `Tab` / `Enter` | 以鍵盤操作分類與複製按鈕 |

## Git 倉庫

[github.com/shernwu-creator/tailwind_cheatsheet](https://github.com/shernwu-creator/tailwind_cheatsheet)
