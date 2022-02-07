import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Nav, Navbar } from "react-bootstrap";

export default function Navigation(props) {

  const [navbarExpanded, setNavbarExpanded] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('noscroll', navbarExpanded)
  }, [navbarExpanded])

  return (
    <>
      <Navbar className="dashboard-nav" expand="md" fixed="top" variant="app" collapseOnSelect={true} aria-hidden={!navbarExpanded}>

        <div className="nav-controls">
          <span className="dashboard-nav-logo">
            <Image src="/logo/prospa--dark.svg" alt="Prospa Logo." width={109} height={24} />
          </span>
          <span className="dashboard-notifications-icon">
            <Image src="/icons/notifications.svg" alt="Notifications Icon." width={32} height={32} />
          </span>
          <span className="dashboard-profile-img">
            <Image src="/img/kathy.png" alt="Profile image." width={40} height={40} />
          </span>
        </div>

        <Navbar.Toggle aria-controls="navbar-nav" onClick={() => setNavbarExpanded(navbarExpanded ? false : true)}>
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>

        <Navbar.Collapse id="navbar-nav" className="dashboard-nav--collapse">
          <div className="dashboard-nav__account-switcher">

            <div className="account-switcher__details">
              <div className="account-switcher__initials">
                {props.accountSwitcher.accounts[0].initials}
              </div>
   
              <div className="account-switcher__text">
                <div className="account-switcher__name">
                  {props.accountSwitcher.accounts[0].name}
                </div>

                {props.accountSwitcher && props.accountSwitcher.manageAccount &&
                  <div className="account-switcher__mangage">
                    {props.accountSwitcher.manageAccount}
                  </div>
                }
              </div>
            </div>

          </div>

          <div className="dashboard-nav__menu">
            <ul>
              {props.pages.map((nav) => (
                <li key={nav.title}>
                  <Image src={nav.icon} alt={nav.title + " icon"} width={24} height={24} />
                  <Link href={nav.path}>
                    <a>{nav.title}</a>
                  </Link>
                </li>
              ))}
            </ul>

          </div>
          <div className="dashboard-nav__logo">
            <Image src="/logo/prospa--dark.svg" alt="Prospa Logo." width={109} height={24} />
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
