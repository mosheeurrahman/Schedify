function Footer() {
  const links = [
    {
      name:  'github',
      label: 'GitHub',
      href:  'https://github.com/mosheeurrahman',
      icon: (
        <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435
            9.795 8.205 11.385.6.105.825-.255.825-.57
            0-.285-.015-1.23-.015-2.235-3.015.555-3.795
            -.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695
            -.42-.225-1.02-.78-.015-.795.945-.015 1.62.87
            1.845 1.23.51.885 1.365 1.185 2.445.435a2.91
            2.91 0 0 1 .87-1.83c-3.045-.345-6.255-1.56
            -6.255-6.885 0-1.53.54-2.79 1.41-3.765-.135
            -.345-.615-1.785.135-3.72 0 0 1.155-.375 3.795
            1.41A13.18 13.18 0 0 1 12 5.835c1.17 0 2.34.165
            3.435.465 2.64-1.8 3.795-1.41 3.795-1.41.75
            1.935.27 3.375.135 3.72.87.975 1.41 2.22 1.41
            3.765 0 5.34-3.225 6.54-6.285 6.885.495.435.93
            1.29.93 2.61 0 1.875-.015 3.39-.015 3.855 0
            .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0
            -6.63-5.37-12-12-12z'/>
        </svg>
      )
    },
    {
      name:  'linkedin',
      label: 'LinkedIn',
      href:  'https://www.linkedin.com/in/mosheeurrahman/',
      icon: (
        <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <path d='M20.447 20.452h-3.554v-5.569c0-1.328
            -.027-3.037-1.852-3.037-1.853 0-2.136 1.445
            -2.136 2.939v5.667H9.351V9h3.414v1.561h.046
            c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267
            2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062
            0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063
            2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225
            0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227
            .792 24 1.771 24h20.451C23.2 24 24 23.227 24
            22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
        </svg>
      )
    },
    {
    name:  'codeforces',
    label: 'Codeforces',
    href:  'https://codeforces.com/profile/moshee_moshee',
    icon: (
        <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path d='M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672
            1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672
            -1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5V19.5c0
            .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V4.5
            C9 3.672 9.672 3 10.5 3h3zm9 7.5c.828 0 1.5.672 1.5
            1.5v9c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672
            -1.5-1.5v-9c0-.828.672-1.5 1.5-1.5h3z'/>
        </svg>
    )
    },
    {
      name:  'youtube',
      label: 'YouTube',
      href:  'https://www.youtube.com/@MosheeUrRahman',
      icon: (
        <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <path d='M23.498 6.186a3.016 3.016 0 0 0-2.122
            -2.136C19.505 3.545 12 3.545 12 3.545s-7.505
            0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0
            8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0
            0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s
            7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122
            -2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z
            M9.545 15.568V8.432L15.818 12l-6.273 3.568z'/>
        </svg>
      )
    },
    {
      name:  'facebook',
      label: 'Facebook',
      href:  'https://www.facebook.com/mosheeur',
      icon: (
        <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <path d='M24 12.073C24 5.405 18.627 0 12 0S0
            5.405 0 12.073C0 18.1 4.388 23.094 10.125
            24v-8.437H7.078v-3.49h3.047V9.43c0-3.007
            1.792-4.669 4.533-4.669 1.312 0 2.686.235
            2.686.235v2.953H15.83c-1.491 0-1.956.925
            -1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24
            C19.612 23.094 24 18.1 24 12.073z'/>
        </svg>
      )
    },
    {
      name:  'email',
      label: 'Email',
      href:  'mailto:mosheeurrahman76@gmail.com',
      icon: (
        <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <path d='M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2
            2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0
            4l-8 5-8-5V6l8 5 8-5v2z'/>
        </svg>
      )
    },
  ]

  return (
    <footer className='footer'>
      <div className='footer-divider'></div>
      <p className='footer-copy'>© 2026 Made by Moshee-Ur Rahman</p>
      <p className='footer-rights'>All rights reserved.</p>
      <div className='footer-icons'>
        {links.map(link => (
          <a
            key={link.name}
            href={link.href}
            target='_blank'
            rel='noopener noreferrer'
            className={`footer-icon ${link.name}`}
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer
