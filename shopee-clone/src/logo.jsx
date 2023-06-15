import ShopeeLogo from '..assets/images/logo.png'
import "./index.css"

function Logo() {
    return (
      <img
          alt="Shopee Logo"
          className="mr-3 h-8 sm:h-9"
          src={ShopeeLogo}
        />
    )
  }
  
  export default Logo