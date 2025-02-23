---
title: "JavaScript と TypeScript の違い"
date: "2025-02-23"
description: "JavaScript と TypeScript の違いについてまとめたものです。"
image: images/ai_girl_02.jpg
---

# JavaScript と TypeScript の違い

## 1. **基本の違い**
| 項目         | JavaScript | TypeScript |
|-------------|------------|------------|
| **型定義** | なし | あり（静的型付け） |
| **コンパイル** | 不要（そのまま実行） | 必要（トランスパイル後に実行） |
| **エラーチェック** | 実行時エラー | コンパイル時に検出 |
| **コード補完** | 限定的 | 型情報に基づく補完が可能 |
| **オブジェクト指向** | プロトタイプベース | クラスベースの OOP をサポート |
| **利用目的** | 小規模開発、柔軟性重視 | 大規模開発、保守性向上 |

---

## 2. **サンプルコードの比較**
### **JavaScript**
```javascript
function add(a, b) {
  return a + b;
}

console.log(add(5, "10")); // "510"（文字列として結合される）
```

### **TypeScript**
```typescript
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, "10")); // コンパイルエラー（型が一致しない）
```
🛑 **JavaScript では実行時にエラーが発生しないが、TypeScript はコンパイル時にエラーを検出できる。**

---

## 3. **インターフェースの使用**
### **JavaScript**
```javascript
const user = {
  name: "John",
  age: 25
};

function greet(user) {
  return `Hello, ${user.name}`;
}

console.log(greet(user)); // "Hello, John"
```
🔴 **関数の引数 `user` にどんなオブジェクトでも渡せてしまう。**

### **TypeScript**
```typescript
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "John",
  age: 25
};

function greet(user: User): string {
  return `Hello, ${user.name}`;
}

console.log(greet(user)); // "Hello, John"
```
✅ **型を定義することで、予期しないオブジェクトの受け入れを防げる。**

---

## 4. **クラスの利用**
### **JavaScript**
```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

const person = new Person("Alice");
console.log(person.greet()); // "Hello, my name is Alice"
```

### **TypeScript**
```typescript
class Person {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(): string {
    return `Hello, my name is ${this.name}`;
  }
}

const person = new Person("Alice");
console.log(person.greet()); // "Hello, my name is Alice"
```
🔒 **TypeScript では `private` を使ってクラスのプロパティをカプセル化できる。**

---

## 5. **開発環境での違い**
| 項目 | JavaScript | TypeScript |
|------|------------|------------|
| **エディタの補完** | 限定的 | 型情報に基づいて強力な補完 |
| **バグの検出** | 実行時 | コンパイル時 |
| **コードの安全性** | 低い | 高い |
| **初期セットアップ** | 不要 | `tsconfig.json` の設定が必要 |

---

## 6. **どちらを選ぶべきか？**
| 開発規模 | 選択推奨 |
|---------|------------|
| 小規模プロジェクト・スクリプト | **JavaScript** |
| 大規模プロジェクト・長期運用 | **TypeScript** |

✅ **TypeScript は保守性が高く、大規模開発向き。**  
✅ **JavaScript はすぐに使えるが、型エラーによるバグのリスクがある。**

---

## 🎯 **結論**
- **型の安全性や保守性が求められる場合は TypeScript を選ぶ**
- **短期間で動作するものを作る場合は JavaScript を使う**
- **JavaScript の知識があると TypeScript への移行がスムーズ**

**📌 TypeScript を導入することで、エラーを事前に防ぎ、開発効率を向上させることができる！**
