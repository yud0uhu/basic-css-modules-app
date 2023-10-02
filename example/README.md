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

.button {
  background-color: blue;
  color: white;
}

.button.active {
  background-color: red;
}
```

```tsx
// example/components/Button.tsx

import { useState } from "react";
import styles from "../styles/button.module.css";

const Button = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      className={`${styles.button} ${isActive ? styles.active : ""}`}
      onClick={handleClick}
    >
      Click me
    </button>
  );
};

export default Button;
```

CSS Modules におけるクラスセレクタは、ブラウザ上で一意のクラス名に自動変換される

```css
.button_button__WU4fg.button_active__RrQv_ {
  background-color: red;
}
.button_button__WU4fg {
  background-color: blue;
  color: white;
}
```
