// @flow

import { MobXProviderContext } from 'mobx-react';
import { useContext } from 'react';
import type { ILangManager } from 'shared/config/languages';
import langStore from './LangStore';

export default {
  langStore
};

export const useStores = () => {
  return useContext(MobXProviderContext);
};

export const useLangStore = (): ILangManager => {
  const store = useStores();
  return store.langStore;
};
