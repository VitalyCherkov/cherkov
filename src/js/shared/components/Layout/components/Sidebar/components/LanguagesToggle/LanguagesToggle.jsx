// @flow

import cn from 'classnames';
import { observer } from 'mobx-react';
import * as React from 'react';
import languages from 'shared/config/languages';
import type { LangEntity } from 'shared/config/languages';
import { useLangStore } from 'store';
import './LanguagesToggle.scss';

type Props = {
  className?: string
};

const LanguagesToggle = observer(({ className }: Props) => {
  const langStore = useLangStore();

  return (
    <div className={cn('languages-toggle', className)}>
      {languages.order.map(key => {
        const entity: LangEntity = languages.entities[key];
        const setLanguage = React.useCallback(() => {
          langStore.language = key;
        }, [langStore, key]);

        return (
          <div
            key={key}
            className={cn(
              'languages-toggle__item',
              key === langStore.language && 'languages-toggle__item_active'
            )}
            onClick={setLanguage}
          >
            {langStore.getString(entity.labelKey)}
          </div>
        );
      })}
    </div>
  );
});

export default LanguagesToggle;
