import { observer } from 'mobx-react';
import * as React from 'react';
import GithubIcon from 'components/icons/GithubIcon';
import InstagramIcon from 'components/icons/InstagramIcon';
import MailIcon from 'components/icons/MailIcon';
import TelegramIcon from 'components/icons/TelegramIcon';
import VkIcon from 'components/icons/VkIcon';
import { langTypes } from 'shared/config/languages';
import { useLangStore } from 'store';
import './ContactsBlock.modules.scss';

const instaContact = {
  icon: InstagramIcon,
  text: 'VitalyCherkov',
  link: 'https://www.instagram.com/vitalycherkov'
};

const contacts = [
  instaContact,
  {
    icon: TelegramIcon,
    text: 'VitalyCherkov',
    link: 'https://t.me/vitalycherkov'
  },
  {
    icon: GithubIcon,
    text: 'VitalyCherkov',
    link: 'https://github.com/VitalyCherkov'
  },
  {
    icon: MailIcon,
    text: 'vv-ch@bk.ru',
    link: 'mailto:vv-ch@bk.ru'
  },
  {
    icon: VkIcon,
    text: 'vcherkov',
    link: 'https://vk.com/vcherkov'
  }
];

const ContactsBlock = observer(() => {
  const langStore = useLangStore();

  const headingText =
    langStore.language === langTypes.ru ? (
      <>
        На&nbsp;фоне использовано моё последнее фото из&nbsp;
        <a href={instaContact.link} styleName="contacts-block__header-link">
          Инстаграма
        </a>
      </>
    ) : (
      <>
        Background is&nbsp;my&nbsp;last&nbsp;
        <a href={instaContact.link} styleName="contacts-block__header-link">
          Instagram
        </a>
        &nbsp; photo
      </>
    );

  return (
    <div styleName="contacts-block">
      <div styleName="contacts-block__header">{headingText}</div>
      <div styleName="contacts-block__links-group">
        {contacts.map(({ icon: Icon, text, link }) => (
          <a
            styleName="contacts-block__link"
            href={link}
            key={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon styleName="contacts-block__link-icon" />
            {text}
          </a>
        ))}
      </div>
    </div>
  );
});

export default ContactsBlock;
