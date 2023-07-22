import React, { useState } from 'react';
import "./Link.css"
import { Link } from 'react-router-dom';
const LinkConverter = () => {
  const [links, setLinks] = useState("");
  const [linksForDownload, setlinksForDownload] = useState("");
  const [linksForuse, setlinksForuse] = useState("");

  const generateLink = (e) => {
    e.preventDefault();

    console.log(links);
    let bag = '';
    for (let a = 32; a < 65; a++) {
      bag += links[a];
    }

    if (links.length > 30) {
      setlinksForDownload(`https://drive.google.com/uc?export=download&id=${bag}`);
      setlinksForuse(`https://drive.google.com/uc?id=${bag}`);
    }
  }

  const handleCopy1 = () => {
    navigator.clipboard.writeText(linksForDownload);
  }

  const handleCopy2 = () => {
    navigator.clipboard.writeText(linksForuse);
  }

  const handleReset = () => {
    setLinks("");
    setlinksForDownload("");
    setlinksForuse("");
  }

  return (
    <>
    <h1>Uplaod the Image in Cloud and paste the Link at here</h1>
      <form className='form' action="" onClick={generateLink}>
        <input type="text" name="" id="" placeholder='Submit your Google Drive Link' required value={links} onChange={(e) => setLinks(e.target.value)} />
        <input type="submit" name="" value={"Generate"} />
        <br />
        <br />
        <br />
        <label>Direct Download Link</label>
        <div className='div'>
          <input type="text" placeholder='Direct Download Link' value={linksForDownload} readOnly />
          <button onClick={handleCopy1}>Copy Link</button>
        </div>
        <label>Direct Use Link</label>
        <div className='div'>
          <input type="text" placeholder='Direct use Link in HTML' value={linksForuse} readOnly />
          <button onClick={handleCopy2}>Copy Link</button>
        </div>
        <button className='reset' onClick={handleReset}>Reset</button>
      </form>
      <h3><Link to={'/dealerprofile'}>Back To Dealer Profile</Link></h3>
    </>
  );
}

export default LinkConverter;
