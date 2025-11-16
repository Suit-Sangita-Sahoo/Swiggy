import Footer from "./Footer"
import "./Footer.css"

const Footerdata = () => {
  return (
    <div id="footer-container">
      <Footer 
        mainheading="Company"
        sub1="About us"
        sub2="Swiggy Corporate"
        sub3="Team"
        sub4="Swiggy Instamart"
        sub5="Minis"
      />
      <Footer 
        mainheading="Contact Us"
        sub1="Help & Support"
        sub2="Partner with us"
        sub3="Ride with us"
        sub4="Swiggy Instamart"
        sub5="Minis"
      />
      <Footer 
        mainheading="Available in"
        sub1="Bangalore"
        sub2="Delhi"
        sub3="Hyderabad"
        sub4="Mumbai"
        sub5="Chennai"
      />
      <Footer 
        mainheading="Life at Swiggy"
        sub1="Careers"
        sub2="Culture"
        sub3="Stories"
        sub4="Events"
        sub5=""
      />
    </div>
  )
}

export default Footerdata
