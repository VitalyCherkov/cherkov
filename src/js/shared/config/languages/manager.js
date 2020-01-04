// @flow

import type { ILangManager, LangStringsValue, LangType } from './types';
import { langTypes } from './types';

class LangManager implements ILangManager {
  _selectedLang: LangType = langTypes.en;
  _dict: { [key: string]: LangStringsValue } = {};

  setLanguage = (lang: LangType) => {
    this._selectedLang = lang;
  };

  getLanguage = () => this._selectedLang;

  getString = (key: string, lang: ?LangType): ?string => {
    const res = this._dict[key];

    if (typeof res === 'object') {
      const requiredLang = lang || this._selectedLang;
      return res[requiredLang];
    }

    if (typeof res === 'string') {
      return res;
    }
  };

  setString = (key: string, value: LangStringsValue): LangManager => {
    this._dict[key] = value;
    return this;
  };
}

export default new LangManager();
