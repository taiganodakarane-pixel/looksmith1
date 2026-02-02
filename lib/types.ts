export type Locale = "ja" | "en";

export type Option = {
  id: string;
  labels: Record<Locale, string>;
  tags: string[];
};

export type Question = {
  id: string;
  priority: 1 | 2 | 3;
  required?: boolean;
  title: Record<Locale, string>;
  options: Option[];
};

export type Answers = Record<string, string>;
