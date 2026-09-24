/**
 * 主な活動（受賞・研修・論文・発表・アウトリーチ）の一次データ。
 * 追加するときは該当する配列に1件足すだけでよい。
 * 実績サマリの件数はここから自動集計される。
 */

/** Activity の先頭で目立たせる主な実績 */
export type Featured = {
  title: string
  /** 補足（開催地や役割など） */
  detail?: string
  period: string
}

export type Education = {
  period: string
  school: string
}

export type Award = {
  date: string
  title: string
  note?: string
}

export type Training = {
  date: string
  title: string
}

export type Paper = {
  role: 'first' | 'co'
  authors: string
  year: number
  journal: string
  title: string
  url?: string
}

export type TalkKind = 'oral' | 'poster' | 'public'

export type Talk = {
  role: 'first' | 'co'
  kind: TalkKind
  authors: string
  year: number
  meeting: string
  id?: string
  place: string
  date: string
  title: string
}

export type OutreachEvent = {
  year: number
  date: string
  title: string
  place?: string
}

export const featured: Featured[] = [
  {
    title: '国際天文学・天体物理学オリンピック 日本代表',
    detail: '第16回大会 出場',
    period: '2023',
  },
  {
    title: 'もしも君が杜の都で天文学者になったら SLA',
    detail: '東北大学青葉山キャンパス',
    period: '2024・2025年度',
  },
  {
    title: 'K会 天文学講師',
    detail: '河合塾本郷校 季節講習',
    period: '2025春・2026冬',
  },
  {
    title: '横浜サイエンスフロンティア高等学校 部活動指導員',
    detail: '天文部',
    period: '2026年4月〜',
  },
]

export const education: Education[] = [
  {
    period: '2026 April - 2028 March(予定)',
    school: '東京大学理学部天文学科',
  },
  {
    period: '2024 April - 2026 March',
    school: '東京大学教養学部前期過程理科一類',
  },
  {
    period: '2018 April - 2024 March',
    school: '横浜市立横浜サイエンスフロンティア高等学校・附属中学校',
  },
]

/** 所属している団体 */
export const memberships: string[] = [
  '一般社団法人日本天文学オリンピック委員会',
]

export const awards: Award[] = [
  {
    date: '2023 Aug.',
    title: '第16回国際天文学・天体物理学オリンピック 出場',
    note: '日本代表',
  },
  { date: '2023 Mar.', title: '第2回日本天文学オリンピック 金賞' },
  { date: '2023 Feb.', title: '第22回日本情報オリンピック 本選出場' },
]

export const trainings: Training[] = [
  { date: '2025 Feb.', title: '国立天文台「春の学校」' },
  {
    date: '2024 Oct.~2025 Mar.',
    title: 'アドバンスト理科 研究入門(基礎実験α) 成田研究室',
  },
  {
    date: '2022 Dec.',
    title: 'もしも君が杜の都で天文学者になったら(もし天) 第12回受講生',
  },
]

export const papers: Paper[] = [
  {
    role: 'co',
    authors: 'Ishida, Hayakawa(2nd), and 3 other co-authors',
    year: 2025,
    journal: 'OEJV, 264, 1',
    title:
      'Optical spectroscopic monitoring of the Be/White Dwarf binary candidates: γ Cas and π Aqr',
  },
]

export const talks: Talk[] = [
  {
    role: 'first',
    kind: 'poster',
    authors: '早川, 福井, and 成田',
    year: 2025,
    meeting: '日本惑星科学会2025年秋季講演会',
    id: 'P-087',
    place: '東京大学駒場キャンパス',
    date: '2025年9月3-5日',
    title: '若い系外惑星TOI-560b, cの質量決定に向けたTTV観測',
  },
  {
    role: 'first',
    kind: 'public',
    authors: '早川',
    year: 2025,
    meeting: '2025年度アドバンスト理科・アドバンスト文理融合 合同イベント',
    place: '東京大学駒場キャンパス',
    date: '2025年8月27日',
    title: '若い系外惑星TOI-560b, cの質量決定に向けたTTV観測',
  },
  {
    role: 'first',
    kind: 'public',
    authors: '早川',
    year: 2024,
    meeting: '天オリ説明会 2024',
    place: 'オンライン',
    date: '2024年10月20日',
    title: 'IOAAへの道しるべ：天文学基礎と天オリ過去問攻略',
  },
  {
    role: 'first',
    kind: 'oral',
    authors: '早川 and 7 co-authors',
    year: 2023,
    meeting: '第25回日本天文学会ジュニアセッション',
    id: '45T',
    place: '立教大学池袋キャンパス',
    date: '2023年3月14日',
    title: 'カシオペヤ座γ星の光度変化とガスリングの構造の関係',
  },
  {
    role: 'co',
    kind: 'oral',
    authors: '中道, 市川, 早川(3rd)',
    year: 2025,
    meeting: '第39回天文教育研究会年会',
    id: 'テーマ発表 T11',
    place: '慶應義塾大学日吉キャンパス',
    date: '2025年8月3-5日',
    title: '国際天文オリンピック ３年間の参加報告とその意義',
  },
  {
    role: 'co',
    kind: 'poster',
    authors: '石田, 早川(2nd) and 3 co-authors',
    year: 2025,
    meeting: '日本天文学会2025年春季大会',
    id: '恒星 N35b',
    place: '水戸市民会館',
    date: '2025年3月17-20日',
    title: '可視光分光モニター観測で探る Be 星の円盤構造 II',
  },
  {
    role: 'co',
    kind: 'oral',
    authors: '谷敷 and 3 co-authors(早川4th)',
    year: 2023,
    meeting: '第25回日本天文学会ジュニアセッション',
    id: '51T',
    place: '立教大学池袋キャンパス',
    date: '2023年3月14日',
    title: '分子雲の密度と前主系列星の質量との関係',
  },
]

export const outreachEvents: OutreachEvent[] = [
  {
    year: 2026,
    date: '4月26日',
    title: 'こどもフェスタ プラネタリウム投影',
    place: '平塚市博物館',
  },
  {
    year: 2026,
    date: '4月12日',
    title: '日本天文学オリンピック 代表研修 講師',
    place: 'オンライン',
  },
  {
    year: 2026,
    date: '4月~',
    title: '横浜サイエンスフロンティア高等学校 天文部部活動指導員',
  },
  { year: 2026, date: '1月~', title: 'アストロアカデミア講師' },
  {
    year: 2026,
    date: '1月4-7日',
    title: 'K会 冬季講習「予選直前！天文学オリンピック問題演習会」講師',
    place: '河合塾本郷校',
  },
  {
    year: 2025,
    date: '12月21-27日',
    title: 'もしも君が杜の都で天文学者になったら SLA',
    place: '東北大学青葉山キャンパス',
  },
  {
    year: 2025,
    date: '8月7-9日',
    title: '自然に学ぶみんなの学校2025 スタッフ',
    place: 'さいたま市立舘岩少年自然の家',
  },
  {
    year: 2025,
    date: '8月1-2日',
    title: '100歳の望遠鏡”ロング・トム”で月を観よう！ 講師助手',
    place: '大佛次郎記念館',
  },
  {
    year: 2025,
    date: '4月27日',
    title: 'こどもフェスタ プラネタリウム投影',
    place: '平塚市博物館',
  },
  {
    year: 2025,
    date: '4月12-13日',
    title: '日本天文学オリンピック 代表研修 講師',
    place: '平塚市博物館',
  },
  {
    year: 2025,
    date: '3月28-31日',
    title:
      'K会 春季講習「天文学を概観する~天文学オリンピックを通じて~」講師',
    place: '河合塾本郷校',
  },
  {
    year: 2024,
    date: '12月22-28日',
    title: 'もしも君が杜の都で天文学者になったら SLA',
    place: '東北大学青葉山キャンパス',
  },
  {
    year: 2024,
    date: '11月22-24日',
    title: '駒場際ドームツアースタッフ',
    place: '東京大学駒場キャンパス',
  },
  {
    year: 2024,
    date: '4月20-21日',
    title: '日本天文学オリンピック 代表研修 講師',
    place: '平塚市博物館',
  },
]

/** 高校生以前の活動（年表になじまない記述） */
export const earlyOutreach: string[] = [
  '高校にて, 天文部に所属. 高2時に部長を務める. 観測や研究活動に加え, 天文教室や星を見る会等の活動も行う.',
  '瀬谷サイエンスクラブ スタッフ',
]

export const talkKindLabel: Record<TalkKind, string> = {
  oral: '口頭講演',
  poster: 'ポスター講演',
  public: '一般向け講演会',
}

/** 年ごとにまとめたアウトリーチ（新しい年が先） */
export function outreachByYear(): { year: number; events: OutreachEvent[] }[] {
  const years = Array.from(new Set(outreachEvents.map((e) => e.year))).sort(
    (a, b) => b - a
  )
  return years.map((year) => ({
    year,
    events: outreachEvents.filter((e) => e.year === year),
  }))
}

/** トップページ・ハブで使う実績サマリ（筆頭・共著の内訳つき） */
export const highlights = {
  awards: awards.length,
  papers: {
    total: papers.length,
    first: papers.filter((p) => p.role === 'first').length,
    co: papers.filter((p) => p.role === 'co').length,
  },
  talks: {
    total: talks.length,
    // 一般向け講演は筆頭であることが自明なので、筆頭の件数には数えない
    first: talks.filter((t) => t.role === 'first' && t.kind !== 'public').length,
    co: talks.filter((t) => t.role === 'co').length,
  },
  outreach: outreachEvents.length,
}
