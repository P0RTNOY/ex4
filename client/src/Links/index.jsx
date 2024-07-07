import './styles.css';

function Links({ url, links }) {
  return (
    <div className="links-wrapper">
      <h3 className="url-heading">{url}</h3>
      <div className="list">
        {links.length > 0 ? (
          links.map((link, index) => (
            <a key={index} href={link} target="_blank" rel="noopener noreferrer" className="link-item">
              {link}
            </a>
          ))
        ) : (
          <p className="no-links-message">No links found</p>
        )}
      </div>
    </div>
  );
}

export default Links;
