import "bulma/css/bulma.min.css";
function Card() {
  return (
    <div className="tile is-ancestor">
      <div className="tile is-vertical is-8">
        <div className="tile">
          <div className="tile is-parent is-vertical"></div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-info">
              <p className="title">Middle tile</p>
              <p className="subtitle">With an image</p>
              <figure className="">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img
                        src="https://bulma.io/images/placeholders/1280x960.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left">
                        <figure className="image is-48x48">
                          <img
                            src="https://bulma.io/images/placeholders/96x96.png"
                            alt="Placeholder image"
                          />
                        </figure>
                      </div>
                      <div className="media-content">
                        <p className="title is-4">John Smith</p>
                        <p className="subtitle is-6">@johnsmith</p>
                      </div>
                    </div>

                    <div className="content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                      <a href="#">#css</a> <a href="#">#responsive</a>
                      <br />
                      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </div>
                  </div>
                </div>
              </figure>
            </article>
          </div>
        </div>
        <div className="tile is-parent"></div>
      </div>
      <div className="tile is-parent"></div>
    </div>
  );
}
export default Card;
