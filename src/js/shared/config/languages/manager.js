// @flow

import { action, observable } from 'mobx';
import type { ILangManager, LangStringsValue, LangType } from './types';
import { langTypes } from './types';

class LangManager implements ILangManager {
  @observable language: LangType = langTypes.en;
  @observable _dict: { [key: string]: LangStringsValue } = {};

  getString = (key: string, lang: ?LangType): ?string => {
    const res = this._dict[key];

    if (typeof res === 'string') {
      return res;
    }

    const requiredLang = lang || this.language;
    return res ? res[requiredLang] : undefined;
  };

  @action
  setString(key: string, value: LangStringsValue) {
    this._dict[key] = value;
  }
}

export default new LangManager();
