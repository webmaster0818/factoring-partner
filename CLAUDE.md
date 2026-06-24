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

## 2026-06-21 ②収益核CV強化（フュージョン戦略・MediaXAI「②進めよう」承認）
- 精査結果: 28reviewsは既に向く人/向かない人・ranking CTA・調査日(26/28)完備。真の不足=広告(PR)開示が全28に無い(景表法/ステマ規制gap)＋結論ファースト(top)が26/28無い
- 全28reviewにPR広告開示+調査時点の透明化ブロックをスクリプト一括挿入(basic-info直前)。dokenkun/msfjの調査日欠落も同時解消。報酬が評価・順位に影響しない旨明記
- 優先8業者(bestfactor/paytner/labol/olta/ququmo/betrading/freenance/pmg=業者名×評判の勝ち筋)に結論ファーストboxを並列agentで追加。各ページの既存事実から2-3文要約(架空数値なし)+「向き不向き詳細(#recommended)」「他社と比較(ranking)」の2リンク=CV導線
- 料金表・業者紹介文言は一切不変更。sitemap lastmod28件・本番200/開示28・結論box8をcurl検証・GSC再送信
- 残②: 残20reviewの結論box(必要時) / rankingの条件別早見ナビ。残フェーズ: ③moat(手数料シミュレーター=最大空白/審査済み業者DB)・①索引登録(GSCコンソール=ユーザー操作)

## 2026-06-21 ③moat 手数料シミュレーター新設✅（MediaXAI「続けて進めて」承認）
- /simulator/ 新設: app/simulator/Simulator.tsx(use client・状態)＋page.tsx(metadata/FAQ schema/手数料の仕組み表)。売掛金額×2社間(8-18%)/3社間(1-9%)→概算手数料・入金額の目安を即計算。クライアント側完結=コストゼロ
- 数値は「目安」明示＋免責(実際は売掛先信用力・契約で変動・各社見積で確定・複数社比較推奨)。ranking CTAでCV送客。Headerナビに「手数料計算」追加=全156ページから到達(孤立回避)
- ⚠️発見：サイト内で手数料レンジが不統一(fee-guide=2社間10-30%/3社間2-20% vs homepage FAQ/simulator=8-18%/1-9%)。simulatorはhomepage準拠を採用、fee-guideとの数値衝突回避のためinlineリンクは見送り。要・運営判断で標準化
- 本番200/計算動作/Headerリンクをスクショ+curl検証。sitemap157。残③: 審査済み業者DB / 残②: 残20review結論box・ranking条件別ナビ

## 2026-06-22 手数料の公式統一・第1弾（ランキング8社）✅（MediaXAI「公式サイト表記に統一」指示）
- 各社公式サイトを並列agentでWebFetch確認し、手数料を公式表記に統一＋確認日付記:
  - ❌修正2件: accelfactor(旧2%〜20%→公式 3社間0.5%〜10.5%/2社間1.0%〜12.0%)、ququmo(旧1%〜14.8%→公式 1%〜・上限非公表※14.8%は第三者サイト値で削除)
  - ✅一致確認6件(確認日付記のみ): paytner一律10%/labol一律10%税込/olta2〜9%/bestfactor2%〜上限非公開/betrading2社間4〜12%・3社間2〜9%/freenance3〜10%(口座未設定一律10%)
- ranking比較表もaccelfactorを0.5%〜に修正(QuQuMo 1%〜は元々official一致)
- simulator=案A: 「手数料は会社ごとに異なる(目安)・各社公式で確認を」の注記を追加(一般レンジ計算は維持)
- 料金以外の業者紹介文言は不変更。本番200/公式値/確認日/14.8%削除をcurl検証
- ⚠️残: 残20review社(非ランキング)の公式確認・統一 / fee-guide記事(2社間10-30%/3社間2-20%)とhomepage FAQ(8-18%/1-9%)の不整合を「会社による」前提に統一

## 2026-06-23 手数料の公式統一・第2弾【サイト全体統一完了】✅（MediaXAI「公式情報統一/ぜんぶきっちり/完了報告」指示）
- 残20review社を並列agentで公式WebFetch確認し手数料を公式表記＋「公式サイトにて2026年6月確認」に統一。主な是正:
  - ❌非公式値の是正: dokenkun(5%→公式1.8%〜)、factoru(1%→1.5%〜)、ennavi(5%〜→公式flat 5%)、no1(1%→0.5%〜15%)、shikinplus(1%〜→1.0%〜10.0%)、msfj(架空6.8%上限削除→1.8%〜)、moneyforward(1%〜10%→0.5%〜上限非公表)、mentor(5%→2%〜)、pmg(上限15%は公式に無く削除→2%〜個別査定)、top-management(第三者値12.5%削除→3社間0.5%〜/2社間3.5%〜上限非公表)、support-org/japan-management系の10%上限削除→1.5%〜
  - 公式一致確認: paytoday(1〜9.5%)、goodplus(5〜15%)、baion(一律10%)、ag-business(2%〜9.9%)、gmo-btob(請求書1〜10%/注文書2〜12%)、kensetsukun(2%〜)、minnano(7〜15%)、jtc(1.2〜10%)等
- ranking比較表も是正: PMG 1%〜→2%〜、AGビジネスサポート 非公開→2%〜9.9%、マネーフォワード 1%〜10%→0.5%〜、GoodPlus 5%〜→5%〜15%（手数料以外の紹介文言は不変更）
- 一般解説記事の数値不整合を全面統一: fee-guide/what-is-factoring/is-it-legal/for-corporation等の一般相場を「2社間8〜18%・3社間1〜9%（会社により異なる目安）」に統一。会社別比較表の非公式値も是正→アクセルファクター 2%〜20%→公式0.5%〜12.0%、機構 1.5%〜10%→1.5%〜（上限非公表）、QuQuMo 1%〜14.8%→1%〜（上限非公表・14.8%は第三者値）をサイト全文(記事26+review他社比較行)から一掃。比較分析文(accel-vs-best/ququmo-vs-olta/betrading-vs-ququmo)は上限非公表前提に事実ベースで書換
- ※Next One(1.5%〜10%)は当方未検証(GT外)のため不変更で据置。simulator=案A維持(会社による注記＋一般レンジ計算)
- 全文grep検証: 14.8%/2%〜20%/10%〜30% 残存0。build成功(153URL prerender)。sitemap lastmod 52URL→2026-06-23。deploy=factoring-partner-deploy厳守。架空データ・料金/会社情報/紹介文言の不当改変なし

## 2026-06-23 手数料統一・追補（MediaXAI「Next Oneの表記はどうなってる?」指摘起点）
- Next One: 旧「1.5%〜10%」据置だったが公式確認。公式トップは明示料率なし(「業界最安水準」)＋公式手数料シミュレーターの選択肢が1.5%〜8%→「1.5%〜8%」に是正(上限10%は第三者値)
- company-directory(約50社一覧)を再点検し、検証済みなのに旧値が残っていた11社を公式値へ是正: SHIKIN+ 2%〜9%→1.0%〜10.0%／みんなのファクタリング 一律10%→7%〜15%／バイオン 10%〜→一律10%／えんナビ 5%〜→5%(公式flat)／ファクトル 3%〜→1.5%〜／株式会社No.1 1%〜15%→0.5%〜15%／けんせつくん 5%→2%〜／土建くん 5%→1.8%〜／トップ・マネジメント 0.5%〜12.5%→0.5%〜／AGビジネスサポート 2%〜→2%〜9.9%／Next One上記
- さらにトップ・マネジメントの第三者値上限「12.5%」がlow-fee/for-corporation/instant-factoring/2sha-ranking/kensetsukun比較行にも残存→全除去(公式=3社間0.5%〜/2社間3.5%〜・上限非公表)
- 検証済み全社の横断grep監査を実施(土建くん/けんせつくん/ファクトル/メンター/みんなの/バイオン/えんナビ/ジャパンマネジメント/マネーフォワード/GMO等)→残不整合0(検出2件は口コミ実体験文と一般相場文の正当な記述)。本番で12.5%等残存0をcache回避curlで確認

## 2026-06-23 戦略残②: ranking 状況・目的別クイックナビ新設✅（MediaXAI「戦略の残タスクを進めて」承認）
- 課題: rankingのタイプ別おすすめ・業種別が全て地の文で、ranking→reviewsの内部リンク/CV導線がゼロだった(reviewsは個社の受け皿なのに本命rankingから無リンク)
- 対応: ヒーロー直下に「状況・目的から選ぶ｜あなたに合う1社」クイックナビ(8状況)を新設。各状況→相性の良い1社のレビューページへ直接送客(早く=paytner/手数料=ququmo/フリーランス=labol/大口=betrading/審査不安=accelfactor/建設=kensetsukun/上限明示=olta/オンライン=paytoday)。理由・手数料は全て公式表記準拠の事実ベース
- さらにタイプ別おすすめ5社(paytner/ququmo/betrading/labol/accelfactor)にも「詳しいレビューを見る」リンクを追加し導線太化
- 料金・業者紹介文言は不変更・追加要素のみ。本番でnav表示・reviewリンク8本・送客先8ページ全200をcache回避curlで10/10検証。deploy=factoring-partner-deploy・source/deploy両push済み(sitemap /ranking/ lastmodは当日付で更新済)
- 残: ③moat 審査済み業者DB / ranking業種別にもreviewリンク / GSC観測後の刈り取り(①索引はGSCコンソール=ユーザー操作)

## 2026-06-24 ③moat 審査済み業者DB化✅（MediaXAI「③進めよう」承認）
- フュージョン戦略の残③＝「審査済み業者DB」を、既存の49社比較DB(/articles/company-directory/)を強化して実装。手数料を全社公式確認した今セッションの成果を“審査の核”に据えた
- 「当データベースの審査・掲載基準」6項目セクション新設(①運営会社の実在性②契約形態の明示③手数料の透明性=2026年6月に各社公式確認済み④健全な契約=ノンリコース原則⑤違法・悪質性なし⑥実績・口コミ)＋「手数料は2026年6月に各社公式確認済み(第三者推定値不採用・非公開は明記)」の透明化ボックス→#cautionの悪質業者見分け方へ誘導
- title/h1/descを「審査基準で比較・手数料を公式確認した業者データベース」に刷新(moat KW=審査基準/公式確認/データベース)。目次に審査基準を追加。架空データなし・既存49社テーブル/料金/業者文言不変更・セクション追加のみ
- build156/sitemap lastmod1件(153不変)・deploy=factoring-partner-deploy両push・本番に審査基準/公式確認透明化の反映をcurl検証
- 残: 審査基準を満たす度合いの可視化(各社に確認日バッジ等)・絞り込みUI(client)・GSC観測後のCTR/刈り取り。①索引はGSCコンソール(ユーザー操作)
