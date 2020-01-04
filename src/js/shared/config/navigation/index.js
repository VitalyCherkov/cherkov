// @flow

import languages from 'shared/config/languages';

export const navItemTypes = {
  whoAmI: 'whoAmI',
  academicExperience: 'academicExperience',
  professionalExperience: 'professionalExperience'
};

export type NavItemType = $Values<typeof navItemTypes>;

export type NavItem = {
  key: NavItemType,
  labelKey: string
};

export type NavItemEntitiesMap = { [key: NavItemType]: NavItem };

const order: NavItemType[] = [
  navItemTypes.whoAmI,
  navItemTypes.academicExperience,
  navItemTypes.professionalExperience
];

const KEY_NAV_LABEL_WHO_AM_I = 'KEY_NAV_LABEL_WHO_AM_I';
const KEY_NAV_LABEL_ACADEMIC_EXPERIENCE = 'KEY_NAV_LABEL_ACADEMIC_EXPERIENCE';
const KEY_NAV_LABEL_PROFESSIONAL_EXPERIENCE =
  'KEY_NAV_LABEL_PROFESSIONAL_EXPERIENCE';

languages.manager
  .setString(KEY_NAV_LABEL_WHO_AM_I, {
    [languages.keys.ru]: 'Кто я такой',
    [languages.keys.en]: 'Who am I'
  })
  .setString(KEY_NAV_LABEL_ACADEMIC_EXPERIENCE, {
    [languages.keys.ru]: 'Академический опыт',
    [languages.keys.en]: 'Academic experience'
  })
  .setString(KEY_NAV_LABEL_PROFESSIONAL_EXPERIENCE, {
    [languages.keys.ru]: 'Профессиональный опыт',
    [languages.keys.en]: 'Professional experience'
  });

const entities: NavItemEntitiesMap = {
  [navItemTypes.whoAmI]: {
    key: navItemTypes.whoAmI,
    labelKey: KEY_NAV_LABEL_WHO_AM_I
  },
  [navItemTypes.academicExperience]: {
    key: navItemTypes.academicExperience,
    labelKey: KEY_NAV_LABEL_ACADEMIC_EXPERIENCE
  },
  [navItemTypes.professionalExperience]: {
    key: navItemTypes.professionalExperience,
    labelKey: KEY_NAV_LABEL_PROFESSIONAL_EXPERIENCE
  }
};

export default {
  keys: navItemTypes,
  order,
  entities
};
