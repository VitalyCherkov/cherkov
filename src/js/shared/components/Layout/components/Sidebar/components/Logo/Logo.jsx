// @flow

import cn from 'classnames';
import * as React from 'react';
import type { PropsWithLang } from 'shared/config/languages';
import { langTypes } from 'shared/config/languages';
import './Logo.scss';

type Props = PropsWithLang & {
  className?: string
};

const Logo = ({ langManager, className }: Props) => {
  const nameChunks =
    langManager.getLanguage() === langTypes.ru
      ? ['Виталий', 'Черков']
      : ['Vitaly', 'Cherkov'];

  const subtitleChunk =
    langManager.getLanguage() === langTypes.ru
      ? 'Фронтенд-разработчик'
      : 'Frontend-developer';

  return (
    <div className={cn('logo', className)}>
      {nameChunks.map(chunk => (
        <div key={chunk} className="logo__chunk">
          <svg
            width="100%"
            height="6.8rem"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMid meet"
            overflow="visible"
          >
            <text
              x="0"
              y="50%"
              dominantBaseline="middle"
              textAnchor="start"
              fontSize="6.8rem"
              fill="currentColor"
              fillOpacity="0.1"
              strokeWidth="0.2rem"
              stroke="currentColor"
              fontFamily="Anonymous Pro"
            >
              {chunk}
            </text>
          </svg>
        </div>
      ))}
      <div className="logo__subtitle">{subtitleChunk}</div>
    </div>
  );
};

export default Logo;
