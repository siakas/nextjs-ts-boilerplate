# Next.js TypeScript Boilerplate

Next.js と TypeScript をベースとしたモダンなウェブアプリケーション開発用のボイラープレートです。

## 主な技術スタック

- **Next.js 15** - React フレームワーク
- **React 19** - UI ライブラリ
- **TypeScript** - 型安全性
- **Tailwind CSS** - スタイリング
- **ESLint & Prettier** - コード品質とフォーマット
- **Zustand** - 状態管理
- **Zod** - スキーマバリデーション

## UI コンポーネント

- **shadcn/ui** - アクセシブルなプリミティブコンポーネント
- **Lucide React** - アイコンライブラリ
- **CVA (Class Variance Authority)** - バリアントベースのスタイリング

## セットアップ

### 前提条件

- Node.js 22.14.0
- npm

### インストール

```bash
npm install
```

## 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# プロダクションサーバー起動
npm run start

# リンター実行
npm run lint

# パッケージの更新確認（インタラクティブ）
npm run lib:update
```

## パッケージマネージャーについて

このプロジェクトでは npm を使用しています。理由は pnpm v10 において VSCode 利用時に ESLint が正しくエラー表示をしない不具合があるためです。

詳細: https://github.com/pnpm/pnpm/issues/8378

## 開発開始

1. リポジトリをクローン
2. `npm install` で依存関係をインストール
3. `npm run dev` で開発サーバーを起動
4. ブラウザで http://localhost:3000 を開く
