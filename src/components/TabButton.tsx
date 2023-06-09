import { HTMLAttributes, MouseEvent, useCallback } from 'react';

import { ActiveTab } from 'types';
import { classNames } from 'utils';
import { useDispatch, useSelector } from 'redux/store';
import { selectActiveTab, setActiveTab } from 'redux/reducer';
import styles from 'styles/modules/Tab.module.css';

export const TabButton = ({ id, children }: HTMLAttributes<HTMLButtonElement>) => {
  const dispatch = useDispatch();
  const activeTab = useSelector(selectActiveTab);

  const tabId = `tab-${id}`;

  const handleTabButtonClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      dispatch(setActiveTab(event.currentTarget.id as ActiveTab));
    },
    [dispatch],
  );

  return (
    <button
      id={tabId}
      role="tab"
      onClick={handleTabButtonClick}
      className={classNames(styles.tabButton, activeTab === tabId ? styles.active : '')}
      aria-selected={`${activeTab === tabId ? 'true' : 'false'}`}
      aria-controls={`tabpanel-${id}`}
    >
      {children}
    </button>
  );
};
