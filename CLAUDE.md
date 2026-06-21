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

## 2026-06-14 推奨タスクB-1/B-2完了✅（MediaXAI「推奨タスク進めよう」承認・問い合わせフォームは現状維持）
- トップ増強(page.tsx): ①ファクタリングとは/融資との違い2列 ②2社間3社間の比較表 ③メリット/デメリット2列(honest) ④偽装ファクタリング・給与ファクタリング・償還請求権の注意喚起(金融庁言及・YMYL安全) ⑤選び方6ポイント ⑥FAQ4→7問(借入との違い/2社3社/給与FT)。本文約1,600字→大幅増、ヘッドKW「ファクタリング」受け皿強化
- about増強: 「当サイトの位置づけ(業者でも貸金業者でもない情報メディア)」「評価・比較の基準6項目」「情報の参照について(法令=民法/金融庁の公的情報・各社=公式情報)」の3セクション追加。⚠料金保護ルール遵守で運営会社テーブル(株式会社MediaX等)は不変更
- 法的記述は債権譲渡(民法466条)・貸金業非該当・給与FT規制を正確に・数値は全て「目安/一般に」とhedge。deploy=factoring-partner-deploy厳守、本番(factoring-partner-deploy.pages.dev)で全セクション200確認。sitemap lastmod(/、/about/)更新(domainはpages.dev据置=紐づけ時に一括差替)
- 残推奨: ドメイン確定後のcanonical/metadataBase一括差替+GSC登録(要ドメイン名)、contact連絡先メール(フォームは現状維持指示)

## 2026-06-20 独自ドメイン紐づけ完了✅（MediaXAI承認「うん、大丈夫。すすめて！」）
- 公開ドメイン hyogo-shihoushoshi.jp（ultra-domain.jp購入→CF Pagesにカスタムドメイン）紐づけ。本体+www両方200/SSL有効を確認
- コード側: canonical/metadataBase/OGP/JSON-LD/sitemap/robotsの自ドメイン参照を旧factoring-partner.pages.dev→hyogo-shihoushoshi.jpに一括統一(1385箇所)。外部引用リンク(faclog.jp等28+他)は不変更。本番curl検証(canonical/sitemap152/旧ドメイン0)
- GSC: 所有権確認はCF Pagesが.htmlを308除去するためFILE方式NG→**META方式**(layout.tsx verification.google)に切替。siteverification API insert→VERIFIED、sites().add()でプロパティ追加(siteOwner)、sitemap送信完了。全自動(gsc-token=siteverification scope有)
- ⚠️ドメイン名hyogo-shihoushoshi.jp(兵庫・司法書士)とサイト内容(ファクタリング)は不一致だがMediaXAI承認の上で確定。将来別ドメインに変える場合は同手順で再置換
- 残: トップ/about増強(B-1/B-2は6/14実施済)・GSC観測後のCTR改善。問い合わせフォームは現状維持指示
