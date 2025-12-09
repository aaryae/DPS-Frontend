import { faHome, faInfo, faMoneyBill, faQrcode } from '@fortawesome/free-solid-svg-icons'

export const navItems = [
  { label: 'Dashboard', icon: faHome, href: '/' },
  { label: 'Transfer Money', icon: faMoneyBill, href: '/transfer-money' },
  { label: 'KYC', icon: faInfo, href: '/kyc' },
  { label: 'My QR', icon: faQrcode, href: '/my-qr' },
]
