// @flow

import { observer } from 'mobx-react';
import * as React from 'react';
import { useParams } from 'react-router';
import type { ILangManager } from 'shared/config/languages';
import navigation from 'shared/config/navigation';
import type { NavItem } from 'shared/config/navigation';
import { useLangStore } from 'store/index';
import './LayoutContent.scss';

const useTitle = (
  langManager: ILangManager,
  titleRef: React.Ref<HTMLSpanElement>
) => {
  const { nav_type: navType } = useParams();

  const entity: NavItem = navigation.entities[navType];

  const title = langManager.getString(entity.labelKey);

  const timerRef = React.useRef(null);

  const speedMS = 20;

  const doWork = () => {
    if (timerRef.current === null || titleRef.current === null) {
      return;
    }

    const realTitle = titleRef.current.innerText;

    if (realTitle.length === title.length) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
      return;
    }

    titleRef.current.innerText = title.substr(0, realTitle.length + 1);

    timerRef.current = setTimeout(doWork, speedMS);
  };

  React.useEffect(() => {
    clearTimeout(timerRef.current);
    timerRef.current = null;

    if (titleRef.current === null) {
      return;
    }

    titleRef.current.innerText = '';
    timerRef.current = setTimeout(doWork, speedMS);
  }, [title]);
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
