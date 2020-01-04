// @flow

import manager from './manager';
import type { LangEntitiesMap } from './types';
import { langTypes } from './types';

const KEY_LANG_RU_LABEL = 'KEY_LANG_RU_LABEL';
const KEY_LANG_EN_LABEL = 'KEY_LANG_EN_LABEL';

manager.setString(KEY_LANG_RU_LABEL, 'Ру').setString(KEY_LANG_EN_LABEL, 'En');

const entities: LangEntitiesMap = {
  [langTypes.ru]: {
    key: langTypes.ru,
    labelKey: KEY_LANG_RU_LABEL
  },
  [langTypes.en]: {
    key: langTypes.en,
    labelKey: KEY_LANG_EN_LABEL
  }
};

export default entities;
