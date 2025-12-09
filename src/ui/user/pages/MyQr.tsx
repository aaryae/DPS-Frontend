import QRCode from 'react-qr-code'

const MyQr = () => {
  return (
    <div>
      <div style={{ height: 'auto', margin: '0 auto', maxWidth: 300, width: '100%' }}>
        <QRCode
          size={256}
          style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
          value='this is my data'
          viewBox={`0 0 256 256`}
        />
      </div>
      <h1 className='text-center py-6'>Scan to get the account number</h1>
    </div>
  )
}

export default MyQr
