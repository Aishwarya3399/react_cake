import React, { useState } from 'react';
import './Faq.css';

const Faq = () => {
  // State to manage which FAQ item is open
  const [openItem, setOpenItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Toggle the visibility of answers
  const toggleItem = (item) => {
    if (openItem === item) {
      setOpenItem(null); // Close if already open
    } else {
      setOpenItem(item); // Open the selected item
    }
  };

  // Handle search input
  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <div className="main-page">
      <div className="FAQ">
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="container mt-5">
        <div className="mb-3">
          <input
            type="text"
            id="searchInput"
            className="form-control"
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="accordion" id="accordionExample">
          {/* FAQ Item 1 */}
          <div
            className="faq-item"
            style={{
              display:
                searchTerm &&
                !'What is the best time to place the order?'
                  .toLowerCase()
                  .includes(searchTerm) &&
                !'We can deliver the cakes'
                  .toLowerCase()
                  .includes(searchTerm)
                  ? 'none'
                  : 'block',
            }}
          >
            <div className="faq-header" onClick={() => toggleItem(1)}>
              <span className="icon-main">
                <i
                  className={`fas ${openItem === 1 ? 'fa-minus' : 'fa-plus'}`}
                ></i>
              </span>
              <h6 className="mb-0">What is the best time to place the order?</h6>
            </div>
            <div
              className={`answer ${openItem === 1 ? 'open' : ''}`}
            >
              We can deliver the cakes to you within 3 Hrs of receiving the order
              if the order is placed before 8 pm. However, if done after 8 pm, the
              order might be delivered the next day.
            </div>
          </div>

          {/* FAQ Item 2 */}
          <div
            className="faq-item"
            style={{
              display:
                searchTerm &&
                !'What is the earliest possible time one can get cake delivered?'
                  .toLowerCase()
                  .includes(searchTerm) &&
                !'The earliest time we can assure delivery'
                  .toLowerCase()
                  .includes(searchTerm)
                  ? 'none'
                  : 'block',
            }}
          >
            <div className="faq-header" onClick={() => toggleItem(2)}>
              <span className="icon-main">
                <i
                  className={`fas ${openItem === 2 ? 'fa-minus' : 'fa-plus'}`}
                ></i>
              </span>
              <h6 className="mb-0">What is the earliest possible time one can get cake delivered?</h6>
            </div>
            <div
              className={`answer ${openItem === 2 ? 'open' : ''}`}
            >
              The earliest time we can assure delivery for any given order is
              10:00 am, with free shipping (depends on order value). In case you
              wish to get it delivered before 10:00 am, Rs.120/- as an extra
              delivery fee will be charged.
            </div>
          </div>

          {/* FAQ Item 3 */}
          <div
            className="faq-item"
            style={{
              display:
                searchTerm &&
                !'Do you provide specific time delivery of Cake, if any?'
                  .toLowerCase()
                  .includes(searchTerm) &&
                !'Yes, we do provide specific time delivery'
                  .toLowerCase()
                  .includes(searchTerm)
                  ? 'none'
                  : 'block',
            }}
          >
            <div className="faq-header" onClick={() => toggleItem(3)}>
              <span className="icon-main">
                <i
                  className={`fas ${openItem === 3 ? 'fa-minus' : 'fa-plus'}`}
                ></i>
              </span>
              <h6 className="mb-0">Do you provide specific time delivery of Cake, if any?</h6>
            </div>
            <div
              className={`answer ${openItem === 3 ? 'open' : ''}`}
            >
              Yes, we do provide specific time delivery. You can select the time
              slot while placing your order.
            </div>
          </div>

          {/* FAQ Item 4 */}
          <div
  className="faq-item"
  style={{
    display:
      searchTerm &&
      !'Does The Cake Heaven provide midnight cake delivery?'
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) &&
      !'Yes, on prior intimation, we provide midnight delivery for cakes. The midnight delivery charge is Rs. 149 over and above the cake charges. However, we provide free shipping if the order is to be delivered in the evening till 9.30 pm.'
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
        ? 'none'
        : 'block',
  }}
>
  <div className="faq-header" onClick={() => toggleItem(4)}>
    <span className="icon-main">
      <i className={`fas ${openItem === 4 ? 'fa-minus' : 'fa-plus'}`}></i>
    </span>
    <h6 className="mb-0">Does The Cake Heaven provide midnight cake delivery?</h6>
  </div>
  <div className={`answer ${openItem === 4 ? 'open' : ''}`}>
    Yes, on prior intimation, we provide midnight delivery for cakes. The midnight delivery charge is Rs. 149 over and above the cake charges. However, we provide free shipping if the order is to be delivered in the evening till 9.30 pm.
  </div>
</div>

  {/* FAQ Item 5 */}
<div
  className="faq-item"
  style={{
    display:
      searchTerm &&
      !'Does your website also deliver on Sundays and public holidays?'
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) &&
      !'The Cake Heaven works on all Sundays and holidays except under uncontrollable situations like bad weather or civil disorder like bandhs.'
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
        ? 'none'
        : 'block',
  }}
>
  <div className="faq-header" onClick={() => toggleItem(5)}>
    <span className="icon-main">
      <i className={`fas ${openItem === 5 ? 'fa-minus' : 'fa-plus'}`}></i>
    </span>
    <h6 className="mb-0">Does your website also deliver on Sundays and public holidays?</h6>
  </div>
  <div className={`answer ${openItem === 5 ? 'open' : ''}`}>
    The Cake Heaven works on all Sundays and holidays except under uncontrollable situations like bad weather or civil disorder like bandhs.
  </div>
</div>
    {/* FAQ Item 6 */}
    <div
  className="faq-item"
  style={{
    display:
      searchTerm &&
      !'Do you have an option of eggless cake delivery?'
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) &&
      !'Yes, we do deliver eggless cakes across our centers. All the displayed cakes are available in eggless variant as well. You need to choose “Make it eggless” Option available on the product detail page. Be assured about the purity of eggless cakes. They are 100% vegetarian cakes with delicious taste.'
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
        ? 'none'
        : 'block',
  }}
>
  <div className="faq-header" onClick={() => toggleItem(6)}>
    <span className="icon-main">
      <i className={`fas ${openItem === 6 ? 'fa-minus' : 'fa-plus'}`}></i>
    </span>
    <h6 className="mb-0">
      Do you have an option of eggless cake delivery?
    </h6>
  </div>
  <div className={`answer ${openItem === 6 ? 'open' : ''}`}>
    Yes, we do deliver eggless cakes across our centers. All the displayed cakes are 
    available in eggless variant as well. You need to choose “Make it eggless” Option 
    available on the product detail page. Be assured about the purity of eggless cakes. 
    They are 100% vegetarian cakes with delicious taste.
  </div>
</div>
     {/* FAQ Item 7 */}
     <div
  className="faq-item"
  style={{
    display:
      searchTerm &&
      !'What other items can be sent along with the cake? Are any specific product combination options also available?'
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) &&
      !'You can send many items, please see our Cake Add-on Catalogue (Link).'
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
        ? 'none'
        : 'block',
  }}
>
  <div className="faq-header" onClick={() => toggleItem(7)}>
    <span className="icon-main">
      <i className={`fas ${openItem === 7 ? 'fa-minus' : 'fa-plus'}`}></i>
    </span>
    <h6 className="mb-0">
      What other items can be sent along with the cake? Are any specific 
      product combination options also available?
    </h6>
  </div>
  <div className={`answer ${openItem === 7 ? 'open' : ''}`}>
    You can send many items, please see our Cake Add-on Catalogue (Link).
  </div>
</div>
  {/* FAQ Item 8 */}
  <div
  className="faq-item"
  style={{
    display:
      searchTerm &&
      !'Can we send messages along with cake?'
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) &&
      !'Of course you can. The Cake Heaven provides facility of sending personalized messages along with Cake. While placing an order for cake, you get an option of typing your message in a message check box.'
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
        ? 'none'
        : 'block',
  }}
>
  <div className="faq-header" onClick={() => toggleItem(8)}>
    <span className="icon-main">
      <i className={`fas ${openItem === 8 ? 'fa-minus' : 'fa-plus'}`}></i>
    </span>
    <h6 className="mb-0">Can we send messages along with cake?</h6>
  </div>
  <div className={`answer ${openItem === 8 ? 'open' : ''}`}>
    Of course you can. The Cake Heaven provides facility of sending personalized messages along with Cake. While placing an order for cake, you get an option of typing your message in a message check box.
  </div>
</div>
  {/* FAQ Item 9 */}
  <div
  className="faq-item"
  style={{
    display:
      searchTerm &&
      !'Can I order a customized cake?'
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) &&
      !'Yes, you can customize your cake, as we have photo cakes, where you can upload the best clicked photo and customize it accordingly. For any other customization, you may write to us at .... or call us on ....'
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
        ? 'none'
        : 'block',
  }}
>
  <div className="faq-header" onClick={() => toggleItem(9)}>
    <span className="icon-main">
      <i className={`fas ${openItem === 9 ? 'fa-minus' : 'fa-plus'}`}></i>
    </span>
    <h6 className="mb-0">Can I order a customized cake?</h6>
  </div>
  <div className={`answer ${openItem === 9 ? 'open' : ''}`}>
    Yes, you can customize your cake, as we have photo cakes, where you can upload the best clicked photo and customize it accordingly. For any other customization, you may write to us at .... or call us on ....
  </div>
</div>
 {/* FAQ Item 10*/}
<div
  className="faq-item"
  style={{
    display:
      searchTerm &&
      !'Which mode of payment does The Cake Heaven accept?'
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) &&
      !'The Cake Heaven accepts all the major payment intermediaries like Visa, Master Card, Maestro, American Express. You can also make the payment through UPI App.'
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
        ? 'none'
        : 'block',
  }}
>
  <div className="faq-header" onClick={() => toggleItem(10)}>
    <span className="icon-main">
      <i className={`fas ${openItem === 10 ? 'fa-minus' : 'fa-plus'}`}></i>
    </span>
    <h6 className="mb-0">Which mode of payment does The Cake Heaven accept?</h6>
  </div>
  <div className={`answer ${openItem === 10 ? 'open' : ''}`}>
    The Cake Heaven accepts all the major payment intermediaries like Visa, Master Card, Maestro, American Express. You can also make the payment through UPI App.
  </div>
</div>
     {/* FAQ Item 11*/}
     <div
  className="faq-item"
  style={{
    display:
      searchTerm &&
      !'Do you provide COD?'
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) &&
      !'No, We don\'t provide COD.'
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
        ? 'none'
        : 'block',
  }}
>
  <div className="faq-header" onClick={() => toggleItem(11)}>
    <span className="icon-main">
      <i className={`fas ${openItem === 11 ? 'fa-minus' : 'fa-plus'}`}></i>
    </span>
    <h6 className="mb-0">Do you provide COD?</h6>
  </div>
  <div className={`answer ${openItem === 11 ? 'open' : ''}`}>
    No, We don't provide COD.
  </div>
</div>
   {/* FAQ Item 12*/}
   <div
  className="faq-item"
  style={{
    display:
      searchTerm &&
      !'Are there any delivery charges applicable for the orders?'
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) &&
      !'Orders above Rs. 499 have free delivery, otherwise, it\'s Rs. 99. Our midnight delivery charges are Rs. 149, Fixtime delivery fee is Rs. 150, and Early Morning delivery rate is Rs. 200.'
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
        ? 'none'
        : 'block',
  }}
>
  <div className="faq-header" onClick={() => toggleItem(12)}>
    <span className="icon-main">
      <i className={`fas ${openItem === 12 ? 'fa-minus' : 'fa-plus'}`}></i>
    </span>
    <h6 className="mb-0">
      Are there any delivery charges applicable for the orders?
    </h6>
  </div>
  <div className={`answer ${openItem === 12 ? 'open' : ''}`}>
    Orders above Rs. 499 have free delivery, otherwise, it's Rs. 99. Our midnight delivery charges are Rs. 149, Fixtime delivery fee is Rs. 150, and Early Morning delivery rate is Rs. 200.
  </div>
</div>
 {/* FAQ Item 13*/}
 <div
  className="faq-item"
  style={{
    display:
      searchTerm &&
      !'Will you deliver fresh cakes?'
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) &&
      !'A person can enjoy the actual taste of cake only when it\'s fresh, this is why all the cakes we deliver are prepared only some time before it reaches to the recipient. To achieve the same, we offer customers to choose delivery time as well, so that we know when we need to prepare a cake and get it delivered. We ensure that customer always enjoys the freshest possible cake. We do not believe in delivering stale cakes.'
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
        ? 'none'
        : 'block',
  }}
>
  <div className="faq-header" onClick={() => toggleItem(13)}>
    <span className="icon-main">
      <i className={`fas ${openItem === 13 ? 'fa-minus' : 'fa-plus'}`}></i>
    </span>
    <h6 className="mb-0">Will you deliver fresh cakes?</h6>
  </div>
  <div className={`answer ${openItem === 13 ? 'open' : ''}`}>
    A person can enjoy the actual taste of cake only when it's fresh, this is why all the cakes we deliver are prepared only some time before it reaches to the recipient. To achieve the same, we offer customers to choose delivery time as well, so that we know when we need to prepare a cake and get it delivered. We ensure that customer always enjoys the freshest possible cake. We do not believe in delivering stale cakes.
  </div>
</div>
 {/* FAQ Item 14*/}
 <div
  className="faq-item"
  style={{
    display:
      searchTerm &&
      !'How can I trust the quality of cake delivered by The Cake Heaven?'
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) &&
      !'We bake fresh cakes after order get placed. This help us to ensure that customer always get quality cakes and consistent taste. We promise to deliver quality products when ordering from The Cake Heaven.'
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
        ? 'none'
        : 'block',
  }}
>
  <div className="faq-header" onClick={() => toggleItem(14)}>
    <span className="icon-main">
      <i className={`fas ${openItem === 14 ? 'fa-minus' : 'fa-plus'}`}></i>
    </span>
    <h6 className="mb-0">
      How can I trust the quality of cake delivered by The Cake Heaven?
    </h6>
  </div>
  <div className={`answer ${openItem === 14 ? 'open' : ''}`}>
    We bake fresh cakes after order gets placed. This helps us to ensure that customers always get quality cakes and consistent taste. We promise to deliver quality products when ordering from The Cake Heaven.
  </div>
</div>
   {/* FAQ Item 15*/}
   <div
  className="faq-item"
  style={{
    display:
      searchTerm &&
      !'Does The Cake Heaven provide midnight delivery as well? Is there any extra charge for it?'
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) &&
      !'Yes, we do provide midnight delivery. The midnight delivery time is from 11:00 PM to 11:59 PM. Although we try our best to deliver orders as close to 23:59 as possible, it is always suggested to have midnight orders placed well on time. We charge Rs. 250 extra for midnight delivery.'
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
        ? 'none'
        : 'block',
  }}
>
  <div className="faq-header" onClick={() => toggleItem(15)}>
    <span className="icon-main">
      <i className={`fas ${openItem === 15 ? 'fa-minus' : 'fa-plus'}`}></i>
    </span>
    <h6 className="mb-0">
      Does The Cake Heaven provide midnight delivery as well? Is there any extra charge for it?
    </h6>
  </div>
  <div className={`answer ${openItem === 15 ? 'open' : ''}`}>
    Yes, we do provide midnight delivery. The midnight delivery time is from 11:00 PM to 11:59 PM. Although we try our best to deliver orders as close to 23:59 as possible, it is always suggested to have midnight orders placed well on time. We charge Rs. 250 extra for midnight delivery.
  </div>
</div>
 {/* FAQ Item 16*/}
 <div
  className="faq-item"
  style={{
    display:
      searchTerm &&
      !'What if recipient is not available when delivery person reaches there? Will you re-attempt delivery?'
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) &&
      !'We do not attempt to deliver again, but we would call recipient and sender to know if we can deliver their order to any neighbor or nearby place. Unable to do so will lead to cancellation of order and no refund will be made in case of perishable products like cakes.'
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
        ? 'none'
        : 'block',
  }}
>
  <div className="faq-header" onClick={() => toggleItem(16)}>
    <span className="icon-main">
      <i className={`fas ${openItem === 16 ? 'fa-minus' : 'fa-plus'}`}></i>
    </span>
    <h6 className="mb-0">
      What if recipient is not available when delivery person reaches there? Will you re-attempt delivery?
    </h6>
  </div>
  <div className={`answer ${openItem === 16 ? 'open' : ''}`}>
    We do not attempt to deliver again, but we would call recipient and sender to know if we can deliver their order to any neighbor or nearby place. Unable to do so will lead to cancellation of order and no refund will be made in case of perishable products like cakes.
  </div>
</div>
{/* FAQ Item 17*/}
<div
  className="faq-item"
  style={{
    display:
      searchTerm &&
      !'While placing order, why do I see delivery time disabled?'
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) &&
      !'Sometimes we get large number of orders for delivery at a particular time slot. In this case, that particular time slot is disabled to prevent taking any more orders. If you are need help in finding time slot for that day, please contact our customer support.'
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
        ? 'none'
        : 'block',
  }}
>
  <div className="faq-header" onClick={() => toggleItem(17)}>
    <span className="icon-main">
      <i className={`fas ${openItem === 17 ? 'fa-minus' : 'fa-plus'}`}></i>
    </span>
    <h6 className="mb-0">
      While placing order, why do I see delivery time disabled?
    </h6>
  </div>
  <div className={`answer ${openItem === 17 ? 'open' : ''}`}>
    Sometimes we get a large number of orders for delivery at a particular time slot. In this case, that particular time slot is disabled to prevent taking any more orders. If you need help in finding a time slot for that day, please contact our customer support.
  </div>
</div>
{/* FAQ Item 18*/}
<div className="faq-item" style={{
    display:
      searchTerm &&
      !'Are there any delivery charges?'
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) &&
      !'Delivery charges varies from location to location. When you provide pin code of the delivery address, our website will show you the delivery charges for that particular location. Delivery charges ranges between Rs.0 – 300 rupees.'
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
        ? 'none'
        : 'block',
  }}>
  <div className="faq-header" onClick={() => toggleItem(18)}>
    <span className="icon-main">
      <i className={`fas ${openItem === 18 ? 'fa-minus' : 'fa-plus'}`}></i>
    </span>
    <h6 className="mb-0">
      Are there any delivery charges?
    </h6>
  </div>
  <div className={`answer ${openItem === 18 ? 'open' : ''}`}>
    Delivery charges vary from location to location. When you provide the pin code of the delivery address, our website will show you the delivery charges for that particular location. Delivery charges range between Rs. 0 – 300 rupees.
  </div>
</div>
{/* FAQ Item 19*/}
<div className="faq-item" style={{
    display:
      searchTerm &&
      !'Are there any hidden charges (Sales Tax) when I make a purchase on The Cake Heaven?'
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) &&
      !'There are NO hidden charges when you make a purchase on The Cake Heaven. The prices listed for all the items are final and all-inclusive. The price you see is exactly what you need to pay. Delivery charges may be extra depending on the location and other parameters.'
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
        ? 'none'
        : 'block',
  }}>
  <div className="faq-header" onClick={() => toggleItem(19)}>
    <span className="icon-main">
      <i className={`fas ${openItem === 19 ? 'fa-minus' : 'fa-plus'}`}></i>
    </span>
    <h6 className="mb-0">
      Are there any hidden charges (Sales Tax) when I make a purchase on The Cake Heaven?
    </h6>
  </div>
  <div className={`answer ${openItem === 19 ? 'open' : ''}`}>
    There are NO hidden charges when you make a purchase on The Cake Heaven. The prices listed for all the items are final and all-inclusive. The price you see is exactly what you need to pay. Delivery charges may be extra depending on the location and other parameters.
  </div>
</div>
{/* FAQ Item 20*/}
<div className="faq-item" style={{
    display:
      searchTerm &&
      !'Do you take same day orders as well?'
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) &&
      !'Yes, Our priority is to deliver cake on the same day till a fixed time on that particular day. It is always advisable to place same day order well on time to avoid any delivery problem.'
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
        ? 'none'
        : 'block',
  }}>
  <div className="faq-header" onClick={() => toggleItem(20)}>
    <span className="icon-main">
      <i className={`fas ${openItem === 20 ? 'fa-minus' : 'fa-plus'}`}></i>
    </span>
    <h6 className="mb-0">
      Do you take same day orders as well?
    </h6>
  </div>
  <div className={`answer ${openItem === 20 ? 'open' : ''}`}>
    Yes, Our priority is to deliver cake on the same day till a fixed time on that particular day. It is always advisable to place same day order well on time to avoid any delivery problem.
  </div>
</div>
{/* FAQ Item 21*/}
  {/* FAQ Item 21 */}
<div
  className="faq-item"
  style={{
    display:
      searchTerm &&
      !"When and how can I cancel my order?"
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) &&
      !"You can cancel your order 24 hours before delivery time. After that, order cancellation requests will not be entertained. If you placed an order whose delivery time is within 24 hours of order placing time then the order can't be cancelled and no refund will be processed for the same. For cancelling your order, you need to send us an email on info@TheCakeHeaven.in with the order id from the same email address which you have placed that order."
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
        ? "none"
        : "block",
  }}
>
  <div className="faq-header" onClick={() => toggleItem(21)}>
    <span className="icon-main">
      <i className={`fas ${openItem === 21 ? "fa-minus" : "fa-plus"}`}></i>
    </span>
    <h6 className="mb-0">When and how can I cancel my order?</h6>
  </div>
  <div className={`answer ${openItem === 21 ? "open" : ""}`}>
    You can cancel your order 24 hours before delivery time. After that, order 
    cancellation requests will not be entertained. If you placed an order whose 
    delivery time is within 24 hours of order placing time then the order can't be 
    cancelled and no refund will be processed for the same. For cancelling your 
    order, you need to send us an email on <a href="mailto:info@TheCakeHeaven.in">info@TheCakeHeaven.in</a> 
    with the order id from the same email address with which you placed that order.
  </div>
</div>
{/* FAQ Item 22 */}
<div
  className="faq-item"
  style={{
    display:
      searchTerm &&
      !"How long will it take to process my cancellation request?"
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) &&
      !"Once you request the cancellation of item(s) in your order, it will take us a maximum of 1-2 business days to cancel the order and initiate a refund. You will be notified of the same by email. If you have paid online for your order, it may take 7-14 business days for the respective banks to process the refund. Please get in touch with the banks directly in case of any delays post confirmation of cancellation/refund by The Cake Heaven."
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
        ? "none"
        : "block",
  }}
>
  <div className="faq-header" onClick={() => toggleItem(22)}>
    <span className="icon-main">
      <i className={`fas ${openItem === 22 ? "fa-minus" : "fa-plus"}`}></i>
    </span>
    <h6 className="mb-0">
      How long will it take to process my cancellation request?
    </h6>
  </div>
  <div className={`answer ${openItem === 22 ? "open" : ""}`}>
    Once you request the cancellation of item(s) in your order, it will take us
    a maximum of 1-2 business days to cancel the order and initiate a refund. You
    will be notified of the same by email. If you have paid online for your order,
    it may take 7-14 business days for the respective banks to process the refund.
    Please get in touch with the banks directly in case of any delays post
    confirmation of cancellation/refund by The Cake Heaven.
  </div>
</div>

{/* FAQ Item 23 */}
<div
  className="faq-item"
  style={{
    display:
      searchTerm &&
      !"Can I order a product that is 'Out of Stock'?"
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) &&
      !"Unfortunately, products listed as 'Out of Stock' are not available for sale."
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
        ? "none"
        : "block",
  }}
>
  <div className="faq-header" onClick={() => toggleItem(23)}>
    <span className="icon-main">
      <i className={`fas ${openItem === 23 ? "fa-minus" : "fa-plus"}`}></i>
    </span>
    <h6 className="mb-0">Can I order a product that is 'Out of Stock'?</h6>
  </div>
  <div className={`answer ${openItem === 23 ? "open" : ""}`}>
    Unfortunately, products listed as 'Out of Stock' are not available for sale.
  </div>
</div>

{/* FAQ Item 24 */}
<div
  className="faq-item"
  style={{
    display:
      searchTerm &&
      !"Is it necessary to have an account to shop on The Cake Heaven?"
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) &&
      !"You can shop on The Cake Heaven by providing just your email address. While it is not necessary to have an account to shop for and purchase items, it is recommended that you create one. By creating your own The Cake Heaven account, you can enjoy a personalized shopping experience, including recommendations, saved address and a quicker checkout, Rewards points and More Discount offers."
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
        ? "none"
        : "block",
  }}
>
  <div className="faq-header" onClick={() => toggleItem(24)}>
    <span className="icon-main">
      <i className={`fas ${openItem === 24 ? "fa-minus" : "fa-plus"}`}></i>
    </span>
    <h6 className="mb-0">
      Is it necessary to have an account to shop on The Cake Heaven?
    </h6>
  </div>
  <div className={`answer ${openItem === 24 ? "open" : ""}`}>
    You can shop on The Cake Heaven by providing just your email address. While
    it is not necessary to have an account to shop for and purchase items, it
    is recommended that you create one. By creating your own The Cake Heaven
    account, you can enjoy a personalized shopping experience, including
    recommendations, saved address and a quicker checkout, Rewards points, and
    More Discount offers.
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default Faq;
