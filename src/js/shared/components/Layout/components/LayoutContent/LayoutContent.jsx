// @flow

import { observer } from 'mobx-react';
import * as React from 'react';
import { useParams } from 'react-router';
import type { ILangManager } from 'shared/config/languages';
import navigation from 'shared/config/navigation';
import type { NavItem } from 'shared/config/navigation';
import { useLangStore } from 'store';
import './LayoutContent.scss';

type SpanRef = {
  current?: HTMLSpanElement | null
};

const useTitle = (langManager: ILangManager, titleRef: SpanRef) => {
  const { nav_type: navType = '' } = useParams();

  const entity: NavItem = navigation.entities[navType || ''];

  const title = langManager.getString(entity.labelKey) || '';

  const timerRef = React.useRef(null);

  const speedMS = 500 / title.length;

  const doWork = React.useCallback(() => {
    const titleCur = titleRef.current;
    if (timerRef.current === null || !titleCur) {
      return;
    }

    const realTitle = titleCur.innerText || '';

    if (realTitle.length === title.length) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
      return;
    }

    titleCur.innerText = title.substr(0, realTitle.length + 1);

    timerRef.current = setTimeout(doWork, speedMS);
  }, [timerRef.current, title]);

  React.useEffect(() => {
    clearTimeout(timerRef.current);
    timerRef.current = null;

    if (titleRef.current) {
      titleRef.current.innerHTML = '';
    }

    timerRef.current = setTimeout(doWork, speedMS);
  }, [titleRef, titleRef.current, title]);
};

type Props = {
  children?: React.Node
};

const LayoutContent = observer(({ children }: Props) => {
  const langStore = useLangStore();
  const titleRef = React.useRef();
  useTitle(langStore, titleRef);

  return (
    <div className="layout-content">
      <div className="layout-content__title">
        <span className="layout-content__title_accent">/ </span>
        <span ref={titleRef} />
        <span className="layout-content__title_accent"> /</span>
      </div>
      {children}
    </div>
  );
});

export default LayoutContent;
