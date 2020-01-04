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
  labelKey: LangStringsValue
};

export type LangEntitiesMap = { [key: LangType]: LangEntity };

export interface ILangManager {
  setLanguage(lang: LangType): void;
  getLanguage(): LangType;
  getString(key: string, lang?: LangType): ?string;
  setString(key: string, value: LangStringsValue): ILangManager;
}

export type PropsWithLang = {
  langManager: ILangManager
};
