import HeaderNavLink from './HeaderNavLink';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='flex flex-row'>
        <HeaderNavLink href='/' title='OH' />
        <HeaderNavLink href='/actualites' title='Actualités' />
        <div className='flex-grow' />
        <HeaderNavLink href='/estimer' title='Estimer mon bien' className='text-white bg-primary' />
        <HeaderNavLink
          href='https://www.optimhome-recrutement.com/?utm_source=optimhome_b2C&utm_medium=cta_menu'
          title='Devenir conseiller immobilier'
          className='text-white bg-secondary'
        />
        <HeaderNavLink href='/' title='Mon compte' />
      </header>

      {children}

      <footer>
        <p>Copyright 2021 Digit D2</p>
      </footer>
    </div>
  );
}
