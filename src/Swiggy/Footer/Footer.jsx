import "./Footer.css"

const Footer = ({ mainheading, sub1, sub2, sub3, sub4, sub5 }) => {
  return (
    <div className="footer">
        <div>
            <div></div>
      <div className="Footerdata">
        <h2>{mainheading}</h2>
        <ul>
          <li>{sub1}</li>
          <li>{sub2}</li>
          <li>{sub3}</li>
          <li>{sub4}</li>
          <li>{sub5}</li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Footer
