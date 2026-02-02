import type { Question } from "./types";

/**
 * priority:
 * 1 = 最重要（5問でGenerate解放）
 * 2 = 品質向上（+5問で10問）
 * 3 = 詳細（こだわり層向け）
 *
 * labels:
 *   ja = 日本語UI
 *   en = English UI
 *
 * tags:
 *   OpenAI Images API に投げる英語プロンプト断片
 */

export const QUESTIONS: Question[] = [

  /* =========================
   * Tier 1 : 最重要（5）
   * ========================= */

  {
    id: "age",
    priority: 1,
    required: true,
    title: { ja: "年齢の印象", en: "Age impression" },
    options: [
      {
        id: "adult_20s",
        labels: { ja: "20代に見える", en: "Looks in her 20s" },
        tags: ["adult woman in her 20s"]
      },
      {
        id: "adult_30s",
        labels: { ja: "30代に見える", en: "Looks in her 30s" },
        tags: ["adult woman in her 30s"]
      },
      {
        id: "adult_40s",
        labels: { ja: "40代に見える", en: "Looks in her 40s" },
        tags: ["adult woman in her 40s"]
      }
    ]
  },

  {
    id: "hair_color",
    priority: 1,
    required: true,
    title: { ja: "髪色", en: "Hair color" },
    options: [
      {
        id: "blonde",
        labels: { ja: "ブロンド", en: "Blonde" },
        tags: ["blonde hair"]
      },
      {
        id: "black",
        labels: { ja: "ブラック", en: "Black" },
        tags: ["black hair"]
      },
      {
        id: "brown",
        labels: { ja: "ブラウン", en: "Brown" },
        tags: ["brown hair"]
      },
      {
        id: "red",
        labels: { ja: "レッド", en: "Red" },
        tags: ["red hair"]
      }
    ]
  },

  {
    id: "outfit",
    priority: 1,
    required: true,
    title: { ja: "服装カテゴリ", en: "Outfit category" },
    options: [
      {
        id: "elegant_dress",
        labels: { ja: "エレガントなドレス", en: "Elegant dress" },
        tags: ["elegant evening dress"]
      },
      {
        id: "casual_chic",
        labels: { ja: "カジュアルシック", en: "Casual chic" },
        tags: ["casual chic outfit"]
      },
      {
        id: "fashion_forward",
        labels: { ja: "モード・前衛的", en: "Fashion-forward" },
        tags: ["fashion-forward outfit"]
      }
    ]
  },

  {
    id: "pose",
    priority: 1,
    required: true,
    title: { ja: "ポーズ", en: "Pose" },
    options: [
      {
        id: "over_shoulder",
        labels: { ja: "振り向き", en: "Looking over shoulder" },
        tags: ["standing 3/4 turned away", "looking over the shoulder"]
      },
      {
        id: "front",
        labels: { ja: "正面", en: "Facing camera" },
        tags: ["standing facing camera"]
      },
      {
        id: "walking",
        labels: { ja: "歩いている", en: "Walking" },
        tags: ["walking pose"]
      }
    ]
  },

  {
    id: "location",
    priority: 1,
    required: true,
    title: { ja: "ロケーション", en: "Location" },
    options: [
      {
        id: "luxury_resort_night",
        labels: { ja: "高級リゾート（夜）", en: "Luxury resort at night" },
        tags: ["outdoor luxury resort at night"]
      },
      {
        id: "city_night",
        labels: { ja: "都会の夜", en: "City at night" },
        tags: ["city street at night"]
      },
      {
        id: "rooftop",
        labels: { ja: "ルーフトップ", en: "Rooftop" },
        tags: ["rooftop bar at night"]
      }
    ]
  },

  /* =========================
   * Tier 2 : 品質向上（+5）
   * ========================= */

  {
    id: "hair_style",
    priority: 2,
    title: { ja: "髪型", en: "Hairstyle" },
    options: [
      {
        id: "sleek_straight",
        labels: { ja: "ストレート", en: "Sleek straight" },
        tags: ["sleek straight hair"]
      },
      {
        id: "soft_waves",
        labels: { ja: "ウェーブ", en: "Soft waves" },
        tags: ["soft wavy hair"]
      },
      {
        id: "updo",
        labels: { ja: "アップスタイル", en: "Updo" },
        tags: ["elegant updo hairstyle"]
      }
    ]
  },

  {
    id: "makeup",
    priority: 2,
    title: { ja: "メイク", en: "Makeup style" },
    options: [
      {
        id: "soft_glam",
        labels: { ja: "ソフトグラム", en: "Soft glam" },
        tags: ["soft glamorous makeup", "neutral tones"]
      },
      {
        id: "bold_glam",
        labels: { ja: "強めグラム", en: "Bold glam" },
        tags: ["bold glamorous makeup"]
      },
      {
        id: "natural",
        labels: { ja: "ナチュラル", en: "Natural" },
        tags: ["natural makeup"]
      }
    ]
  },

  {
    id: "lighting",
    priority: 2,
    title: { ja: "ライティング", en: "Lighting" },
    options: [
      {
        id: "direct_flash",
        labels: { ja: "直フラッシュ", en: "Direct flash" },
        tags: ["direct flash photography"]
      },
      {
        id: "cinematic_soft",
        labels: { ja: "シネマ調（柔）", en: "Cinematic soft light" },
        tags: ["cinematic soft lighting"]
      },
      {
        id: "neon",
        labels: { ja: "ネオン", en: "Neon lighting" },
        tags: ["neon lighting"]
      }
    ]
  },

  {
    id: "camera_distance",
    priority: 2,
    title: { ja: "カメラ距離", en: "Camera distance" },
    options: [
      {
        id: "close",
        labels: { ja: "近い", en: "Close-up" },
        tags: ["close-up portrait"]
      },
      {
        id: "medium",
        labels: { ja: "中距離", en: "Medium shot" },
        tags: ["medium shot"]
      },
      {
        id: "full_body",
        labels: { ja: "全身", en: "Full body" },
        tags: ["full body shot"]
      }
    ]
  },

  {
    id: "mood",
    priority: 2,
    title: { ja: "全体の雰囲気", en: "Overall mood" },
    options: [
      {
        id: "elegant_confident",
        labels: { ja: "上品で自信的", en: "Elegant and confident" },
        tags: ["elegant", "confident", "cinematic"]
      },
      {
        id: "romantic",
        labels: { ja: "ロマンチック", en: "Romantic" },
        tags: ["romantic", "soft mood"]
      },
      {
        id: "edgy",
        labels: { ja: "エッジィ", en: "Edgy" },
        tags: ["edgy", "fashion editorial style"]
      }
    ]
  },

  /* =========================
   * Tier 3 : 詳細（残り）
   * ========================= */

  {
    id: "skin_texture",
    priority: 3,
    title: { ja: "肌の質感", en: "Skin texture" },
    options: [
      {
        id: "realistic",
        labels: { ja: "リアル", en: "Realistic" },
        tags: ["highly detailed realistic skin texture"]
      },
      {
        id: "smooth",
        labels: { ja: "スムース", en: "Smooth" },
        tags: ["smooth flawless skin"]
      }
    ]
  },

  {
    id: "body_type",
    priority: 3,
    title: { ja: "体型", en: "Body type" },
    options: [
      {
        id: "slim",
        labels: { ja: "スリム", en: "Slim" },
        tags: ["slim body type"]
      },
      {
        id: "curvy",
        labels: { ja: "曲線的", en: "Curvy" },
        tags: ["curvy body type"]
      }
    ]
  },

  {
    id: "depth_of_field",
    priority: 3,
    title: { ja: "被写界深度", en: "Depth of field" },
    options: [
      {
        id: "shallow",
        labels: { ja: "浅い（ボケ）", en: "Shallow (bokeh)" },
        tags: ["shallow depth of field", "strong background bokeh"]
      },
      {
        id: "deep",
        labels: { ja: "深い", en: "Deep" },
        tags: ["deep depth of field"]
      }
    ]
  }

];
