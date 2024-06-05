
### 서버시작 : npm run dev

### json-server: json-server --watch db.json --port 3001

## 프로젝트 설명

리뷰 등록,수정시 이미지는 json-server 로 업로드에 한계가 있기 때문에
프로젝트의 "/src/shared/assets/uploadImg/" 해당경로에 있는 이미지만 업로드가가능합니다.

루트에있는 db.json이 db입니다.


##폴더구조
```
iron-train
├─ .eslintrc.cjs
├─ .gitignore
├─ .prettierrc
├─ README.md
├─ db.json
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ vite.svg
├─ src
│  ├─ app
│  │  ├─ baseLayout
│  │  │  ├─ GlobalStyles.tsx
│  │  │  └─ index.tsx
│  │  ├─ providers
│  │  │  ├─ QueryWrapper.tsx
│  │  │  └─ ToastProvider.tsx
│  │  ├─ router.tsx
│  │  └─ styles
│  │     ├─ design.ts
│  │     └─ index.css
│  ├─ entities
│  │  ├─ board
│  │  │  ├─ Board.tsx
│  │  │  ├─ api
│  │  │  │  └─ storeLists.ts
│  │  │  ├─ constant.ts
│  │  │  ├─ context
│  │  │  │  └─ FilterProvider.tsx
│  │  │  ├─ styles.tsx
│  │  │  ├─ type
│  │  │  │  └─ index.ts
│  │  │  ├─ ui
│  │  │  │  ├─ Card
│  │  │  │  │  ├─ Card.tsx
│  │  │  │  │  └─ styles.tsx
│  │  │  │  └─ List
│  │  │  │     ├─ ListView.tsx
│  │  │  │     └─ styles.tsx
│  │  │  └─ utill
│  │  │     └─ calculateAverages.ts
│  │  ├─ detail
│  │  │  ├─ DetailList.tsx
│  │  │  ├─ api
│  │  │  │  └─ index.ts
│  │  │  ├─ context
│  │  │  │  └─ DetailReviewProvider.tsx
│  │  │  ├─ index.ts
│  │  │  ├─ styles.tsx
│  │  │  ├─ ui
│  │  │  │  ├─ CommentChart
│  │  │  │  │  ├─ CommentChart.tsx
│  │  │  │  │  └─ styles.tsx
│  │  │  │  ├─ CommentChartList
│  │  │  │  │  ├─ CommentChartList.tsx
│  │  │  │  │  ├─ CommentChartListItem.tsx
│  │  │  │  │  └─ styles.tsx
│  │  │  │  ├─ CommentList
│  │  │  │  │  ├─ CommentList.tsx
│  │  │  │  │  └─ styles.tsx
│  │  │  │  ├─ ReviewDetail
│  │  │  │  │  ├─ ReviewDetail.tsx
│  │  │  │  │  └─ styles.tsx
│  │  │  │  └─ ReviewDetailContent
│  │  │  │     ├─ ReviewDetailContent.tsx
│  │  │  │     └─ styles.tsx
│  │  │  └─ utills.ts
│  │  ├─ header
│  │  │  ├─ Dropdown
│  │  │  │  ├─ Dropdown.tsx
│  │  │  │  ├─ constant.ts
│  │  │  │  ├─ style.tsx
│  │  │  │  └─ ui
│  │  │  │     ├─ VerticalDropdownList.tsx
│  │  │  │     └─ styles.tsx
│  │  │  ├─ Header.tsx
│  │  │  ├─ Navigator
│  │  │  │  ├─ Navigate.tsx
│  │  │  │  └─ styles.tsx
│  │  │  ├─ api
│  │  │  │  └─ index.ts
│  │  │  ├─ searchBar
│  │  │  │  ├─ SearchBar.tsx
│  │  │  │  ├─ api
│  │  │  │  │  └─ searchApi.ts
│  │  │  │  └─ styles.tsx
│  │  │  └─ styles.tsx
│  │  ├─ index.ts
│  │  └─ postReview
│  │     ├─ Post.tsx
│  │     ├─ api
│  │     │  └─ index.ts
│  │     ├─ styles.tsx
│  │     └─ utills.ts
│  ├─ main.tsx
│  ├─ pages
│  │  ├─ Detail
│  │  │  ├─ Detail.tsx
│  │  │  └─ styles.tsx
│  │  ├─ FixReview
│  │  │  └─ FixReview.tsx
│  │  ├─ Home
│  │  │  └─ Home.tsx
│  │  ├─ PostReview
│  │  │  ├─ PostReview.tsx
│  │  │  └─ styles.tsx
│  │  └─ index.ts
│  ├─ shared
│  │  ├─ apis
│  │  │  └─ axios.ts
│  │  ├─ assets
│  │  │  ├─ cafe
│  │  │  │  ├─ 1.jpg
│  │  │  │  └─ 2.jpg
│  │  │  ├─ dessert
│  │  │  │  ├─ 1.jpg
│  │  │  │  └─ 2.jpg
│  │  │  ├─ etc
│  │  │  │  └─ 1.jpeg
│  │  │  ├─ itali
│  │  │  │  ├─ 1.jpg
│  │  │  │  ├─ 2.jpg
│  │  │  │  ├─ 3.jpg
│  │  │  │  ├─ 4.jpg
│  │  │  │  └─ 5.jpg
│  │  │  ├─ japn
│  │  │  │  ├─ 1.jpg
│  │  │  │  ├─ 2.jpg
│  │  │  │  ├─ 3.jpg
│  │  │  │  ├─ 4.jpg
│  │  │  │  └─ 5.jpg
│  │  │  ├─ korea
│  │  │  │  ├─ 1.jpg
│  │  │  │  ├─ 2.jpg
│  │  │  │  ├─ 3.jpg
│  │  │  │  ├─ 4.jpg
│  │  │  │  └─ 5.jpg
│  │  │  ├─ logo.webp
│  │  │  └─ uploadImg
│  │  │     ├─ 1.jpg
│  │  │     ├─ 2.jpg
│  │  │     ├─ 3.jpg
│  │  │     ├─ 4.jpg
│  │  │     └─ 5.jpg
│  │  ├─ constants
│  │  │  └─ dropdownList.ts
│  │  ├─ hooks
│  │  │  └─ useClickOutSide.tsx
│  │  ├─ index.ts
│  │  ├─ ui
│  │  │  ├─ Modal
│  │  │  │  ├─ ModalPortal.tsx
│  │  │  │  └─ styles.tsx
│  │  │  ├─ PageNationBar.tsx
│  │  │  ├─ Toast
│  │  │  │  ├─ Toast.tsx
│  │  │  │  └─ styles.tsx
│  │  │  └─ styles.tsx
│  │  └─ utills
│  │     ├─ calculateAverageRating.ts
│  │     ├─ generateUUID.ts
│  │     ├─ renderStars.tsx
│  │     ├─ storageManage.ts
│  │     └─ truncateText.ts
│  └─ vite-env.d.ts
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```

