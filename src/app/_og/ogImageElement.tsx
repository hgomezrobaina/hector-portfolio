export function ogImageElement(subtitle: string) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '80px',
        backgroundColor: '#0a192f',
        backgroundImage: 'linear-gradient(135deg, #0a192f 0%, #112240 60%, #0a192f 100%)',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: 96,
          height: 6,
          backgroundColor: '#48dbfb',
          marginBottom: 40,
        }}
      />
      <div
        style={{
          display: 'flex',
          fontSize: 88,
          fontWeight: 700,
          color: '#ffffff',
          lineHeight: 1.1,
        }}
      >
        Héctor Gómez
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: 40,
          fontWeight: 500,
          color: '#48dbfb',
          marginTop: 24,
        }}
      >
        {subtitle}
      </div>
    </div>
  )
}
