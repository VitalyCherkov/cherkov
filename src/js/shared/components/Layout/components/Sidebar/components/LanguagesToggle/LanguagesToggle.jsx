// @flow

import cn from 'classnames';
import React from 'react';
import languages from 'shared/config/languages';
import type { PropsWithLang, LangEntity } from 'shared/config/languages';
import './LanguagesToggle.scss';

type Props = {
  className?: string
} & PropsWithLang;

const LanguagesToggle = ({ langManager, className }: Props) => {
  return (
    <div className={cn('languages-toggle', className)}>
      {languages.order.map(key => {
        const entity: LangEntity = languages.entities[key];
        const setLanguage = React.useCallback(() => {
          langManager.setLanguage(key);
        });

        return (
          <div
            key={key}
            className={cn(
              'languages-toggle__item',
              key === langManager.getLanguage() &&
                'languages-toggle__item_active'
            )}
            onClick={setLanguage}
          >
            {langManager.getString(entity.labelKey)}
          </div>
        );
      })}
    </div>
  );
};

export default LanguagesToggle;
