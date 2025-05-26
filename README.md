# React + Vite

<!-- 주석
    미리보기 : Ctrl+Shift+V
-->

 ## 📦 기술 스택 버전
 **Stack**: React + Vite + Vanilla Extract + React Query + React Router + Recoil + typescript
```bash
npm install react@18.2.0 react-dom@18.2.0
npm install react-router-dom@7.5.3
npm install @tanstack/react-query@5.75.4
npm install recoil@0.7.7
npm install -D vite@5.4.19

npm install
```

| 라이브러리                | 버전 예시           |
|------------------------|-------------------|
| React                  | `18.2.0`          |
| Vite                   | `5.4.19`          |
| recoil                 | `0.7.7`           |
| React Router DOM       | `7.5.3`           |
| @tanstack/react-query  | `5.75.4`          |
| Vanilla Extract CSS    | `1.17.1`          |


## 🚀 설치 방법
1. **React + Vite 프로젝트 생성**
    ```bash
    npm create vite@latest . -- --template react-ts
    ```

2. **recoil, react-router-dom 설치**
    ```bash
    npm install recoil @tanstack/react-query react-router-dom
    ```

3. **Vanilla Extract 및 Vite 플러그인 설치***
    ```bash
    npm install -D @vanilla-extract/css @vanilla-extract/vite-plugin
    ```
4. **Vite 설정 파일 수정**
    `vite.config.ts`에 아래 플러그인 추가:
    ```ts
    import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';
    import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

    export default defineConfig({
      plugins: [react(), vanillaExtractPlugin()],
    });
    ```

> ⚠️ 버전 수정 시 `npm intall` 실행 필수!

### 🧩 추천 VS Code 확장팩

> 프로젝트 개발에 도움이 되는 확장팩 리스트입니다.

- [**ES7+ React/Redux/React-Native snippets**](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)  
  React 컴포넌트 템플릿 생성 단축키 (`rafce`, `rfc` 등) 지원

- [**Prettier - Code formatter**](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)  
  코드 포맷 자동 정리 및 스타일 일관성 유지

- [**ESLint**](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)  
  코드 품질 검사, 오류/경고 표시로 버그 방지

## 📁 폴더 구조 예시
```bash
src/
├── assets/              # 이미지, 폰트, 아이콘 등 정적 파일
├── components/          # 재사용 가능한 UI 컴포넌트들 (Button, Input 등)
  ├── common             # 공통 사용 컴포넌트
  ├── layout             # layout 컴포넌트
  └── menu               # 메뉴 컴포넌트 
├── context/             # React Context 관련 폴더
├── data/                # Menu 등 ts 데이터
├── hooks/               # 커스텀 훅들 (useFetch, useLocalStorage 등)
├── images/              # 이미지 파일들
├── pages/               # 페이지 컴포넌트들 (Home, About 등)
├── store/               # Recoil 전역 상태 관리
├── styles/              # 전역 스타일 (Vanilla Extract 포함)
├── utils/               # 유틸리티 함수들 (formatDate, fetchData 등)
├── App.tsx              # 최상위 컴포넌트
└── main.tsx             # 엔트리 포인트
```

 ## ✨ 기능 소개

 - 🔗 페이지 간 라우팅 (React Router)
 - 📦 서버 상태 관리 (React Query)
 - 🧠 전역 상태 관리 (Recoil)
 - 🎨 Vanilla Extract로 스타일링

---

## 🛠 개발 계획

- [] 게시글 CRUD 기능
- [] 미니 게임 생성
  - [] 짱껨뽀
- []Dark Mode 기능 추가
<!-- 
- [ ] 게시글 CRUD 기능 추가
- [ ] 반응형 디자인 적용
- [ ] Dark Mode 기능 추가
- [ ] 상태 관리 고도화 (Zustand Slice 등) 
-->

---

## 🔗 배포 링크

<!-- > 👉 [배포 URL 바로가기](https://your-deploy-link.com) -->

_(배포 후 링크를 여기에 붙여주세요)_

---

<details>
  <summary>💡 VS Code 미리보기 팁 (클릭)</summary>

  Markdown 파일은 `Ctrl + Shift + V` 단축키로 미리보기를 볼 수 있어요!
</details>