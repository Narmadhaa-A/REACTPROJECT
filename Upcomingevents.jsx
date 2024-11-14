// UpcomingEvents.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Upcomingevents.css';

const events = [
  {
    id: 1,
    name: "Football",
    date: "$500",
    location: "15%",
    image: "https://up.yimg.com/ib/th?id=OIP.ONUF2gIsOHqmILSozWH12AHaE8&pid=Api&rs=1&c=1&qlt=95&w=155&h=103"
  },
  {
    id: 2,
    name: "Cricket Gloves",
    date: "$300",
    location: "10%",
    image: "https://gmcricket.in/media/catalog/product/cache/757ea7d2b7282843694bdb6de7a23598/p/r/prima-707-batting-gloves.jpg"
  },
  {
    id: 3,
    name: "Tennis Racket",
    date: "$320",
    location: "5%",
    image: "https://up.yimg.com/ib/th?id=OIP.NIWplNM2oj_IPUXNCMiOWAAAAA&pid=Api&rs=1&c=1&qlt=95&w=149&h=102"
  },
  {
    id: 4,
    name: "Hockey Stick",
    date: "$150",
    location: "10%",
    image: "https://edsports.ie/wp-content/uploads/cm/data/product-2242/Adidas-DF24-Compo-1-Dualrod-Composite-Hockey-Stick-2017.jpg"
  },
  {
    id: 5,
    name: "Hockey Ball",
    date: "$50",
    location: "8%",
    image: "https://cdn.shopify.com/s/files/1/2227/4695/products/HDAI13BALL_20Match_20WHITE_1350x1350.jpg?v=1612539224"
  },
  {
    id: 6,
    name: "Cricket Bat",
    date: "$200",
    location: "12%",
    image: "https://www.cricketequipmentusa.com/content/images/thumbs/0003408_cricket-bat-english-willow-gm-chrome-606-tnow-by-gunn-moore.jpeg"
  },
  {
    id: 7,
    name: "Cricket Ball",
    date: "$30",
    location: "5%",
    image: "https://cdn-d03d5231-5b2e278c.mysagestore.com/cf738e9579802e6b988bb225ca6bc00c/contents/1A2455/1A2455M01-cricket-ball-county-star-front.jpg"
  },
  {
    id: 8,
    name: "Cricket Kit",
    date: "$350",
    location: "15%",
    image: "https://www.jaxtr.com/wp-content/uploads/2019/05/Best-Cricket-Kit-Set-in-India-2019-1.jpg"
  },
  {
    id: 9,
    name: "Football Shoes",
    date: "$120",
    location: "10%",
    image: "https://ae01.alicdn.com/kf/HTB1HMnRDxWYBuNjy1zkq6xGGpXaC/Men-Soccer-Shoes-Sport-Breathable-Women-Spikes-Professional-Adult-Indoor-Superfly-Cleats-CR7-Football-Sneakers-Plus.jpg"
  },
  {
    id: 10,
    name: "Volleyball",
    date: "$60",
    location: "7%",
    image: "https://nwscdn.com/media/catalog/product/f/o/forza_size_5_competition_standard_volleyball_for_all_volleyball_tournaments_and_matches.jpg"
  },
  {
    id: 11,
    name: "Table Tennis Racket",
    date: "$70",
    location: "6%",
    image: "https://www.hurtowniasportowa.eu/eng_pl_SET-OF-2-TABLE-TENNIS-RACKETS-METEOR-QIN-AND-3-BALLS-33984_2.jpg"
  },
  {
    id: 12,
    name: "Boxing Gloves",
    date: "$90",
    location: "10%",
    image: "https://k1extreme.com.ph/cdn/shop/files/viber_image_2023-05-27_11-01-19-863.jpg?v=1711523094&width=1280"
  },
  {
    id: 13,
    name: "Squash Rackets",
    date: "$110",
    location: "8%",
    image: "https://img.freepik.com/premium-photo/squash-rackets-ball-court-floor-top-view_266732-6260.jpg?w=2000"
  },
  {
    id: 14,
    name: "Basketball",
    date: "$80",
    location: "5%",
    image: "https://ftw.usatoday.com/wp-content/uploads/sites/90/2018/03/basketball-general.jpg?resize=100"
  },
  {
    id: 15,
    name: "Badminton Kit Bag",
    date: "$90",
    location: "12%",
    image: "https://sportonixsports.in/cdn/shop/products/APACS_BT_BACKPACK-2_1024x1024.jpg?v=1710346930"
  },
  {
    id: 16,
    name: "Tennis Kit Bag",
    date: "$100",
    location: "10%",
    image: "https://www.sportswing.in/wp-content/uploads/2019/03/prince-back-pack-tennis-bag-ping.jpg"
  },
  {
    id: 17,
    name: "Running Shoes",
    date: "$130",
    location: "15%",
    image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/n/c/z/-original-imagudcghwwpcuu5.jpeg?q=90&crop=false"
  }
  
];

function UpcomingEvents() {
  const navigate = useNavigate();

  const handleAddToCart = (event) => {
    navigate('/cart', { state: { event } });
  };

  return (
    <div className="upcoming-events-page">
      <h2>Products</h2>
      <div className="events-list">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.name} className="event-image" />
            <h3>{event.name}</h3>
            <p>Price: {event.date}</p>
            <p>Discount: {event.location}</p>
            <button onClick={() => handleAddToCart(event)} className="add-to-cart-button">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingEvents;
