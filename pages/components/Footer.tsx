import type { NextPage } from 'next';
import Link from 'next/link';
import { contacts } from '../../constants/contacts';

const Footer: NextPage = () => {
  return (
    <footer className="flex gap-4 text-xs">
      {contacts.map((contact) => {
        return (
          <Link
            key={contact.id}
            href={contact.uri}
            target="_blank"
            className="hover:text-neutral-400 dark:hover:text-gray-500 transition-colors duration-500"
          >
            {contact.title}
          </Link>
        );
      })}
    </footer>
  );
};

export default Footer;
