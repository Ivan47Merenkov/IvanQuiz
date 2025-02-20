const post = () => {
    return (
      <div className="post">
        <div className="post-content">
          <div className="featured">
            <h1>Featured Posts</h1>
            <ul>
              <li><h1>All Posts</h1></li>
              <li><a href="/">View All</a></li>
            </ul>
          </div>
          <div className="example">
            <div className="feat">
              <div className="post-img"></div>
              <p>By <a href="/">John Doe</a> | May 23, 2022</p>
              <h1>Lorem ipsum dolor sit amet, consectetur adipiscing<br />elit, sed do eiusmod tempor.</h1>
              <p className="post-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum<br />dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
              <a href="/"><div className="read-post">Read More &#62;</div></a>
            </div>
            <div className="other">
              <div className="other-post">
                <p>By <a href="/">John Doe</a> | Aug 23, 2021</p>
                <h1>8 Figma design systems that<br />you can download for free<br />today.</h1>
              </div>
              <div className="other-post">
                <p>By <a href="/">John Doe</a> Aug 23, 2021</p>
                <h1>8 Figma design systems that<br />you can download for free<br />today.</h1>
              </div>
              <div className="other-post">
                <p>By <a href="/">John Doe</a> Aug 23, 2021</p>
                <h1>8 Figma design systems that<br />you can download for free<br />today.</h1>
              </div>
              <div className="other-post">
                <p>By <a href="/">John Doe</a> Aug 23, 2021</p>
                <h1>8 Figma design systems that<br />you can download for free<br />today.</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default post;