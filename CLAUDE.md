@AGENTS.md

## 2026-06-12 成長戦略まとめ依頼（MediaXAI, Discord）
- 調査結果: canonical/sitemap/metadataBaseが factoring-partner.pages.dev（DNS未解決・死んでいる）を向いており全148ページがインデックス不能状態。GSC未登録。独自ドメイン無し。
- 既存 corp-factoring.com は28日で4クリック（ほぼ停止）→2サイトの役割分担をMediaXAIに要確認。
- 戦略提案をDiscordに送信済み（ドメイン取得は要承認のため未着手）。

## 2026-06-13 仕上げ監査完了（残タスクリスト送付済み）
- 全151ページ機械監査。致命的: フッターから未作成8ルートへ全ページリンク切れ(/corporation/ /knowledge/* /contact/等)、/articles/と/reviews/の一覧ページ未作成、お問い合わせ導線ゼロ。重要: トップ約1,600字と薄い・about薄い・本番1ページ分古い。
- リスト: ~/.openclaw/workspace/factoring-partner-finish-checklist.md。致命的分の着手可否+ドメイン名をMediaXAIに確認中。
- 問題なし確認: title/desc固有・JSON-LD/FAQ全頁・バックボタン履歴操作ゼロ。

## 2026-06-13 致命タスク対応完了（MediaXAI承認「進めて・ドメイン後でいい」）
- リンク切れ8件解消: Footer.tsx(7件)/Header.tsx(3件:法人向け・個人事業主・基礎知識)/page.tsx(3件)を既存記事へ張替(for-corporation/for-sole-proprietor/what-is-factoring/2sha-vs-3sha/2sha-ranking/fee-guide/instant-factoring)
- 新設3ページ: /articles/(115記事13カテゴリハブ)・/reviews/(28社6タイプ)・/contact/(運営=株式会社MediaX渋谷区、架空連絡先なし、メールはTODO=要MediaXAI確認)
- broken_routes=0をビルドout全HTMLで機械検証。sitemap152URL。deploy=factoring-partner-deploy厳守でpush済み
- 残: canonical/metadataBase差替(ドメイン紐づけ時・後回し可)、トップ/about増強(B-1/B-2)、contact連絡先メール確認
