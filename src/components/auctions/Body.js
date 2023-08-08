import React, { useContext, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthContext';
import { useFirestore } from '../../hooks/useFirestore';
import { AddAuction } from './AddAuction';
import { AuctionCard } from './AuctionCard';
import { ProgressBar } from './ProgressBar';
import './Body.css'

export const AuctionBody = () => {
  const [auction, setAuction] = useState(null);
  const { currentUser, globalMsg } = useContext(AuthContext);
  const { docs } = useFirestore('auctions');

  return (
    <div className="py-5">
      <div className="container">
        {auction && <ProgressBar auction={auction} setAuction={setAuction} />}

        {globalMsg && <Alert variant="info">{globalMsg}</Alert>}

        {currentUser && <AddAuction setAuction={setAuction} />}

        {docs && (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {docs.map((doc) => {
              return <AuctionCard item={doc} key={doc.id} />;
            })}
          </div>
        )}
      </div>
      <div style={{backgroundColor:"black",height:"200px",marginTop:"80px",marginBottom:"-46px",color:"goldenrod"}}>
      <footer>
            <div class="container" style={{textAlign:"Center"}}>
            <div>
                <div class="col-md-6 item text" style={{textAlign:"Center",marginLeft:"25%"}}>
                    <h2>Auction Hunters</h2>
                    <h5 >We at auction hunters provide a forum for sellers to virtually interact with buyers without any hustel of going to there place, and sell items to interested buyers.</h5>
                </div>
               </div>
            <br />
            <p class="copyright">AuctionHunters © 2023 | auction@hunters.gmail.com</p>
            </div>
        </footer>

      </div>
    </div>
  );
};
