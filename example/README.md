# Example

### [テンプレートリテラル](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Template_literals)を用いて記述する

```css
  <div className={`${styles.classB} ${styles.classC}`}></div>
```

- 固定の class 名を付与する場合

```css
<div className={`classD ${styles.classE} ${styles.classF}`}></div>
```

- 条件付きで記述する場合

```css
<div className={`${styles.classG}` ${isApply ? styles.classH : ''}`}></div>
```

## 例 : 動的に style を書き換える

```css
/* example/styles/button.module.css */

.buttonWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 48px;
  border-radius: 50px;
  background-color: rgb(245, 205, 0);
  color: rgb(0, 0, 0);
  font-weight: 700;
  padding: 0.25em 1em;
  cursor: pointer;
  transition: all 0.2s;
}

.buttonWrapper:active {
  transition-duration: 0.05s;
  box-shadow: 0 0 0.2em #0003;
  transform: scale(0.95);
  filter: brightness(0.9) contrast(1.2);
}

.icon {
  content: "🐻";
  display: inline-block;
  padding-right: 0.5em;
}

@media screen and (max-width: 360px) {
  .icon {
    content: "🐱";
  }
}
```

```tsx
// example/components/Button.tsx

import { useState, useEffect } from "react";
import PhotoListComponent from "../components/PhotoListComponent";

const App = () => {
  const [text, setText] = useState("");
  const [photoList, setPhotoList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then(setPhotoList);
  }, []);

  return (
    <div style={{ margin: "32px", textAlign: "center" }}>
      <div>
        <label htmlFor="text">[text]</label>
        <input
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <PhotoListComponent text={text} photoList={photoList} />
      </div>
    </div>
  );
};

export default App;
```

CSS Modules におけるクラスセレクタは、ブラウザ上で一意のクラス名に自動変換される

```css
.button_buttonWrapper__4xpvy:active {
  transition-duration: 0.05s;
  box-shadow: 0 0 0.2em #0003;
  transform: scale(0.95);
  filter: brightness(0.9) contrast(1.2);
}
.button_buttonWrapper__4xpvy {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 48px;
  border-radius: 50px;
  background-color: rgb(245, 205, 0);
  color: rgb(0, 0, 0);
  font-weight: 700;
  padding: 0.25em 1em;
  cursor: pointer;
  transition: all 0.2s;
}
```
