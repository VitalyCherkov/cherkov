// @flow

export const langTypes = {
  en: 'lang-key-en',
  ru: 'lang-key-ru'
};

export type LangType = $Values<typeof langTypes>;

export type LangStringsValue =
  | {
      [key: LangType]: string
    }
  | string;

export type LangEntity = {
  key: LangType,
  labelKey: string
};

export type LangEntitiesMap = { [key: LangType]: LangEntity };

export interface ILangManager {
  language: LangType;
  getString(key: string, lang?: LangType): ?string;
  setString(key: string, value: LangStringsValue): void;
}

export type PropsWithLang = {
  langManager: ILangManager
};
