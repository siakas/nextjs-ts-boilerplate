これは [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) で構築された [Next.js](https://nextjs.org/) のプロジェクトです。

## はじめに

まず、開発サーバを起動します。

```bash
npm run dev
# または
yarn dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開き、結果を確認します。

`pages/index.tsx` を修正することでページの編集を開始できます。ファイルを編集すると、ページが自動的に更新されます。

[API ルート](https://nextjs.org/docs/api-routes/introduction) は [http://localhost:3000/api/hello](http://localhost:3000/api/hello) でアクセスできます。このエンドポイントは `pages/api/hello.ts` で編集することができます。

`pages/api` ディレクトリは `/api/*` にマッピングされます。このディレクトリのファイルは React ページではなく、[API ルート](https://nextjs.org/docs/api-routes/introduction) として扱われます。

## もっと詳しく

Next.js の詳細については、次のリソースを参照してください。

- [Next.js Documentation](https://nextjs.org/docs) - Next.js の機能と API について学びます
- [Learn Next.js](https://nextjs.org/learn) - インタラクティブな Next.js のチュートリアルです

[Next.js のリポジトリ](https://github.com/vercel/next.js/) もご確認ください。あなたのフィードバックやコントリビューションをお待ちしています。

## Vercel でデプロイする

Next.js のアプリをデプロイする最も簡単な方法は、Next.js のクリエイターが提供する [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) を利用することです。

詳しくは [Next.js deployment documentation](https://nextjs.org/docs/deployment)をご覧ください。
