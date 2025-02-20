const footer = () => {
    return (
      <footer>
        <div className="footer">
          <div className="nav">
            <h2>&#123;Finsweet</h2>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">Blog</a></li>
              <li><a href="/aboutus">About Us</a></li>
              <li><a href="/contactus">Contact Us</a></li>
              <li><a href="/">Privacy Police</a></li>
            </ul>
          </div>
          <div className="subscribe">
            <h3>Subscribe to our newsletter to get<br />latest updates and news</h3>
            <ul>
              <li><input type="email" placeholder="Enter Your Email" /></li>
              <li><a href="/"><div className="sub-mail">Subscribe</div></a></li>
            </ul>
          </div>
          <div className="info">
            <p>Finstreet 118 2561 Fintown<br />Hello@finsweet.com 020 7993 2905</p>
            <ul>
              <li><a href="/"><img src="https://img.icons8.com/m_rounded/512/FFFFFF/facebook-new.png" alt="Facebook" /></a></li>
              <li><a href="/"><img src="https://imgpng.ru/d/twitter_PNG15.png" alt="Twitter" /></a></li>
              <li><a href="/"><img src="https://img.icons8.com/m_outlined/512/FFFFFF/instagram-new.png" alt="Instagram" /></a></li>
              <li><a href="/"><img src="https://www.freeiconspng.com/thumbs/linkedin-logo-png/displaying-19-gallery-images-for-linkedin-logo-png-25.png" alt="LinkedIn" /></a></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  };
  
  export default footer;