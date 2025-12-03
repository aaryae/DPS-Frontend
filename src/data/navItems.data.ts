import { faBriefcase, faHome, faInfo, faMoneyBill } from '@fortawesome/free-solid-svg-icons'

export const navItems = [
  { label: 'Dashboard', icon: faHome, href: '/' },
  { label: 'Transfer Money', icon: faMoneyBill, href: '/transfer-money' },
  { label: 'KYC', icon: faInfo, href: '/kyc' },
  { label: 'Services', icon: faBriefcase, href: '/services' },
]
