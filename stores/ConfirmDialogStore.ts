import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

/** 確認ダイアログの状態と操作を管理するストアの型定義 */
type ConfirmDialogStore = {
  /** ダイアログの表示／非表示状態 */
  isOpen: boolean;
  dialog: {
    /** ダイアログのタイトル */
    title: string;
    /** ダイアログの説明文 */
    description: string;
    submit: {
      /** 確認ボタンのラベル */
      label: string;
      /** 確認ボタンクリック時の処理 */
      onClick: () => void;
    };
    cancel?: {
      /** キャンセルボタンのラベル */
      label?: string;
      /** キャンセルボタンクリック時の処理 */
      onClick?: () => void;
    };
  };
  /** ダイアログを表示する関数 */
  confirmDialog: (dialog: Partial<ConfirmDialogStore["dialog"]>) => void;
};

// ダイアログのデフォルト設定
const DEFAULT_DIALOG = {
  title: "",
  description: "",
  submit: {
    label: "OK",
    onClick: () => {},
  },
  cancel: {
    label: "キャンセル",
    onClick: () => {},
  },
};

export const useConfirmDialogStore = create<ConfirmDialogStore>()(
  devtools(
    persist(
      (set) => ({
        // 初期状態：ダイアログは非表示
        isOpen: false,
        // 初期状態：デフォルトダイアログ設定
        dialog: DEFAULT_DIALOG,
        confirmDialog: (dialog) =>
          set((state) => ({
            // ダイアログを表示
            isOpen: true,
            dialog: {
              ...state.dialog,
              // 渡されたダイアログ設定をマージ
              ...dialog,
              submit: {
                ...state.dialog.submit,
                onClick: () => {
                  // カスタム確認処理を実行
                  dialog.submit?.onClick();
                  // ダイアログを閉じてリセット
                  set({ isOpen: false, dialog: DEFAULT_DIALOG });
                },
              },
              cancel: {
                ...state.dialog.cancel,
                // カスタムキャンセル設定をマージ
                ...dialog.cancel,
                onClick: () => {
                  // ダイアログを閉じてリセット
                  set({ isOpen: false, dialog: DEFAULT_DIALOG });
                },
              },
            },
          })),
      }),
      {
        // sessionStorage のキー名
        name: "useConfirmDialogStore",
        // sessionStorage に永続化
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
    {
      // DevTools での表示名
      name: "useConfirmDialogStore",
      // 開発環境でのみ DevTools を有効化
      enabled: process.env.NODE_ENV === "development",
    },
  ),
);
