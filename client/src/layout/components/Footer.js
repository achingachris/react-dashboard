const Footer = () => {
  // get current year
  const year = new Date().getFullYear()
  return (
    <footer className='sticky-footer bg-primary text-white'>
      <div className='container my-auto'>
        <div className='copyright text-center my-auto'>
          <span>Copyright © Chris Achinga {year}</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
