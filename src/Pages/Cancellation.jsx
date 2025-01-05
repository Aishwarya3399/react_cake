import React from "react";
import './Cancellation.css'; 

const Cancellation = () => {
  return (
    <div className="condition">
      <div className="refund">
        <h1>The Cake Heaven: Cancellation and Refund Policy</h1>
      </div>
      <div className="refund1">
        <p>
          1. Since all orders are customized as per the customer’s requirement
          and are perishable in nature, refund on any cancellation is not
          possible on the same day.
        </p>
        <p>
          2. It is required that 1-day prior notice of cancellation be given for
          regular cakes and 2-days prior notice be given for Large or Special
          Cakes. Refund charges of 5% per order shall be applicable.
        </p>
        <p>
          3. Cancellation of Order shall be mailed by the customer at
          <a href="mailto:care@ThecakeHeaven.com"> care@ThecakeHeaven.com</a> with the Subject: “Cancellation Request” and
          specifying in the mail:
        </p>
        <p>I. Order ID</p>
        <p>II. Reasons for Cancellation</p>
        <p>
          4. The Cake Heaven will issue a refund to the same card/account/medium
          through which you have made the payment in case of cancellation.
        </p>
        <p>
          5. All refunds shall be made within the period of 2-3 working days
          from the date of cancellation.
        </p>
        <p>
          6. It is entirely up to The Cake Heaven's discretion to change, cancel,
          refund, or otherwise offer any other option to the customer.
        </p>
        <p>
          7. In case of any refund, the amount will be credited as reward
          points into your Bakingo Wallet for any future purchase.
        </p>
      </div>
    </div>
  );
};

export default Cancellation;
