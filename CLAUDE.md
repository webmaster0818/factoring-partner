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

## 2026-06-25 ③moat続き: 業者DB→レビュー送客＋公式確認済バッジ✅（MediaXAI「続けよう」）
- DirectoryTable.tsxにREVIEW_SLUGマップ(28社)を追加し、DB内の会社名を /reviews/<slug>/ にリンク=「DB→reviews→ranking」のCV funnelを開通(従来DBは送客リンク0だった)。手数料を2026年6月に公式確認した28社に「✓手数料 公式確認済」バッジを表示し審査済み度合いを可視化＋凡例追記
- 残21社(うりかけ堂/Next One/JPS等=レビュー未作成)はリンク無し・バッジ無し(正直表示)。架空データ/料金/業者文言不変更
- build156/sitemap lastmod(company-directory)→2026-06-25・deploy両push・本番でバッジ/reviewリンク/送客先200をcurl検証
- 残③候補: 絞り込みに「手数料◯%以下」レンジ・確認済のみ表示トグル / DB↔ranking相互リンク / GSC観測後CTR

## 2026-06-25 ③moat続き: DB絞り込み拡張＋DB↔ranking相互リンク✅（MediaXAI「進めよう」）
- DirectoryTable: 「手数料 公式確認済みの会社のみ」トグル＋「手数料の下限(すべて/1/2/3/5%以下)」フィルタを追加(非公開はしきい値指定時に自動除外)。絞り込み軸が会社名/対象/オンライン/公開のみ/確認済のみ/手数料下限＋4並び替えに
- DB↔ranking相互リンク開通: company-directory末に「おすすめランキングを見る」CTA、ranking状況ナビ末に「49社+の審査済み業者データベースで絞り込む」導線。収益核⇔DBの回遊強化
- build156/sitemap lastmod(company-directory,ranking)→2026-06-25・deploy両push・本番でfilter/CTA/相互リンクをcache回避curl検証
- 残③候補: 各社の確認日を個別表示・対応エリア列追加・GSC観測後CTR。①索引はGSCコンソール(ユーザー操作)

## 2026-06-25 戦略A 内部リンク強化（MediaXAI「Aで」＝全記事→収益核/moat導線）✅
- GSC実データで判明: factoringは集客前(barely indexed・主要40-99位・imp1桁)で刈り取り対象ほぼ0。よってUI微調整でなく「moatへの権威集約=内部リンク」を選択。監査結果: 全115記事が/ranking/にはリンク済だが、moat2つが孤立(company-directory=1記事のみ・simulator=本文0/Headerのみ)
- 対応: ①Header navに「会社一覧(company-directory)」追加・Footerコンテンツ列に「審査済み業者DB」「手数料シミュレーター」追加→全156ページからmoatへsite-wideリンク ②71記事(関連記事コメント有)の本文にスクリプトで「あわせて使いたいツール・データ」=simulator/業者DB/ranking導線ブロックを一括挿入
- 結果: company-directoryへのリンク 1→72記事+Header/Footer、simulatorも本文71+Header/Footer。架空データ/料金/業者文言不変更・導線追加のみ。build156/sitemap lastmod71記事→2026-06-25・deploy両push・GSC sitemap再送信済(indexing促進)
- ※正直な現状: 本施策は土台強化で、効果はindexing/評価が育ってから。中長期の本丸はドメイン不一致(hyogo-shihoushoshi.jp=司法書士)の解消(要MediaXAI判断)

## 2026-06-25 P1-1 インデックス棚卸し（MediaXAI「推奨進めよう」＝P1-1着手）✅
- GSC URL Inspection API(gsc-api/gsc_inspect.py新設・全153URL実査定)で実態判明: indexed51(33%)/crawled-not-indexed24(16%)/unknown未クロール78(51%)。★収益核/moatが全て未index=ranking(crawled未登録)・simulator(未クロール)・company-directory業者DB(未クロール)。トップのみindex
- タイプ別: reviews 9/4/16・articles 39/16/60・固定 2/3/0。問題2種=「発見」(unknown78→内部リンク[本日実施]+sitemap分割+登録リクエスト)と「品質/信頼」(crawled-not-indexed24→P1-2 E-E-A-Tで採用させる)
- 実施: sitemap種類別4分割(sitemapindex+core8/reviews29/articles116)してGSCへ4本再送信・deploy両push。CFのbot403回避でinspectは公開sitemapでなくローカルpublic/sitemap.xmlを読む実装
- MediaXAIにコンソール作業依頼: 登録リクエスト(API無・コンソール限定)を収益核→moat→主要レビュー/記事の優先順10件。私側は登録リクエスト不可のためここだけ手作業
- 次推奨: P1-2 E-E-A-T(運営者=情報メディア明示/methodologyページ/実在監修)でcrawled-not-indexed24本を採用させる。GSCトークンにURL Inspection API有効と判明=今後の各サイトindex診断に使える

## 2026-06-25 P1-2 E-E-A-T（MediaXAI「進めてください」）✅
- crawled-not-indexed24本を“採用させる”ための信頼信号を強化。★架空の監修者・資格は作らず、編集部体制の事実のみ（fusion留保＝実在・許諾済みのみ厳守）
- /verification-policy/ 新設＝「情報の調査・検証ポリシー」。手数料の公式確認プロセス(2026年6月全社公式確認・第三者値不採用・非公開は明記・確認日)/掲載審査6基準/評価6基準/編集検証体制(一次情報ベース・複数名レビュー・料金は承認制・定期再確認)/広告PR開示/免責を集約した“引用資産”。WebPage+Organization schema・about/DB/rankingへ相互リンク
- Footerに運営者明示(株式会社MediaX＝情報メディアであり業者・貸金業者でない＋手数料は2026年6月公式確認)＋検証ポリシーリンクを全156ページ表示。Footerサイト情報・ranking状況ナビにもリンク。about(運営者情報)は6/14時点で既に位置づけ/編集方針/基準/免責/広告開示を完備
- build157/sitemap-coreにverification-policy追加・再送信・deploy両push
- ※新設verification-policyも初期はunknown→次回indexリクエスト対象に追加。残P1: P1-3ハブ&スポーク(6クラスタpillar+残44記事moat導線+社数基準明示)・P1-4意図別内部リンク再配線。MediaXAI側コンソールの登録リクエスト10件と並行で収益核の再評価が早まる

## 2026-06-26 P1-3 ハブ&スポーク/moat導線網羅（MediaXAI「続けてください」）✅
- 残43記事へ「あわせて使いたいツール・データ」(simulator/業者DB/ranking)ブロックをスクリプト挿入(関連セクション/rankingCTAをアンカーに堅牢挿入)→全115中114記事(DB自身除く)にmoat導線が網羅。前回71＋今回43
- 業者DB冒頭に社数の役割を明示=「DB49社で俯瞰→ranking15社(厳選)→reviews28社(詳細)」+検証ポリシーへの導線(社数基準の明確化＝fusion指摘の15/28/49不整合を解消、かつ意図別内部リンク)
- build157/sitemap-articles lastmod44件→2026-06-26・再送信・deploy両push。架空データ/料金/文言不変更・導線追加のみ
- 残P1: P1-4(内部リンクの意図別“分岐”=手数料記事→DB/simulator、即日→ranking、法律→注意喚起＋DB を記事タイプ別にmoatブロックを出し分け)。MediaXAI側コンソール登録リクエスト(収益核10件+verification-policy)と並行で再評価が早まる

## 2026-06-26 P1-4 内部リンクの意図別分岐（MediaXAI「すすめて！！」）✅→P1完了
- 114記事のmoat導線を検索意図別に出し分け(遷移先=simulator/DB/rankingは同じ、優先順と導入文を最適化): 即日4→ランキング優先/手数料6→シミュレーター優先/業種16・比較15・法律11→業者DB優先/対象5→ランキング優先/その他57=標準。スクリプトでカテゴリ判定→ブロック再生成
- build157/sitemap-articles lastmod一括2026-06-26・deploy両push・本番で各カテゴリ導入文をcurl検証
- ★P1(土台)完了: P1-1棚卸し+sitemap4分割/P1-2 E-E-A-T+検証ポリシー/P1-3 moat全網羅+社数明示/P1-4意図別分岐。残律速=GSCコンソール登録リクエスト(MediaXAI)+再クロール待ち。次=再クロール後にgsc_inspect.pyで再計測→効果測定→P2(striking-distance最適化/「49社手数料実態調査」レポートで被リンク資産化)

## 2026-06-27 P2着手: 独自データのリンク資産化＝手数料実態調査レポート（MediaXAI「p2進めて」）✅
- P2最大の柱＝被リンク/指名ゼロ(最大の弱点)への打ち手として、49社の公式確認手数料を「引用される一次調査」に転換。/articles/factoring-fee-survey-2026/ 新設
- 数値は company-directory の49社配列からPythonで実集計(捏造なし・公式確認値のみ・非公開は非公開と明記): 手数料公表44/49社(90%)・非公開5社(セゾン/三菱UFJ/請求QUICK/ファクタリングベスト/見直し本舗)・公表下限の最小0.5%(4社=アクセル/トップマネジメント/MF/No.1)・中央値2.0%・下限分布(1%未満4/1%台11/2%台11/3%以上18)・一律10%が3社(ペイトナー/ラボル/バイオン)・約半数は下限のみ公表・対象法人44/個人36/online◎18/即日以内44(分単位6)
- 被リンク資産設計(白帽のみ): ★Article+Dataset+FAQ schema(Review/AggregateRating星評価は入れない=自己宣伝/捏造リスク回避の合意厳守)＋「引用・転載について」+クレジット例で外部引用の導線。景表法配慮の「数字の正しい読み方」(下限≠実手数料・契約形態で変動・保証しない)
- 内部リンク: 記事一覧ハブ(手数料カテゴリ先頭)・fee-guide(相場節にcallout)・company-directory(透明化box)から本調査へ。hub totalCount計算値が116になり metadata「115記事」→「116記事」に整合
- 架空データ/料金/業者文言不変更(新規+導線のみ)。build/sitemap-articles 116→117(index lastmod更新)・deploy=factoring-partner-deploy両push・本番200/sitemap/fee-guideリンクをcache回避curl検証・GSC再送信
- 残P2: P2-1 striking-distance(11-40位集中最適化・但し再クロール前は母数薄)/P2-2 既存記事SERP適合・カニバリ統合/P2-3 DB条件ページ静的化(実質情報ある場合のみ)。推奨=コンソール登録リクエスト(収益核+本調査URL)→gsc_inspect再計測→striking-distance
