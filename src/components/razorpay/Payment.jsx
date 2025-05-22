import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import interview from "../../assets/inter.jpg";

function Payment({ setHasVisitedPayment }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set the button to appear after 6 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 18000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  const amount = 100;
  const currency = "INR";
  const receiptId = "jaimatadi";

  const paymentHandler = async (e) => {
    const response = await fetch("http://localhost:8000/order", {
      method: "POST",
      body: JSON.stringify({
        amount,
        currency,
        receipt: receiptId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const order = await response.json();
    console.log(order);

    var options = {
      key: "rzp_test_PAqG3Xf0DvV6SN", // Enter the Key ID generated from the Dashboard
      amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency,
      name: "CareerConnect", // your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id, // This is a sample Order ID. Pass the id obtained in the response of Step 1
      handler: async function (response) {
        const body = { ...response };

        const validateRes = await fetch(
          "http://localhost:8000/order/validate",
          {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const jsonRes = await validateRes.json();
        console.log(jsonRes);
      },
      prefill: {
        name: "Ashima", // your customer's name
        email: "ashima@example.com",
        contact: "9000000000", // Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();
    e.preventDefault();
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: 'url(https://source.unsplash.com/1600x900/?interview,career)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
      }}
    >
      <div
        style={{
          maxWidth: '600px',
          width: '100%',
          background: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '12px',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
          textAlign: 'center',
          padding: '40px',
          display: 'flex',                // Add Flexbox display
          flexDirection: 'column',        // Align content vertically
          justifyContent: 'center',       // Center items vertically
          alignItems: 'center',           // Center items horizontally
          margin: '0 auto',
        }}
      >
        <h2 style={{ marginBottom: '20px', color: '#1e293b', fontSize: '28px', fontWeight: 'bold' }}>
          Unlock Premium Access
        </h2>
        <p style={{ marginBottom: '30px', color: '#475569', fontSize: '18px', lineHeight: '1.6' }}>
          Subscribe now to gain access to exclusive features and ace your interviews with ease. Empower your career with the best tools and resources.
        </p>
        <img
          src={interview}
          alt="CareerConnect Logo"
          style={{ width: '80%', marginBottom: '20px', borderRadius: '8px' }}
        />
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '20px' }}>
          <button
            onClick={paymentHandler}
            style={{
              background: '#4f46e5',
              color: '#fff',
              border: 'none',
              padding: '14px 28px',
              borderRadius: '8px',
              fontSize: '18px',
              cursor: 'pointer',
              transition: 'background 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.background = '#4338ca')}
            onMouseOut={(e) => (e.target.style.background = '#4f46e5')}
          >
            Buy Subscription
          </button>
          {isVisible && (
            <Link
              to="/interview"
              style={{
                display: 'inline-block',
                padding: '14px 28px',
                background: '#10b981',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 'bold',
                transition: 'background 0.3s ease',
              }}
              onClick={() => setHasVisitedPayment(true)}
              onMouseOver={(e) => (e.target.style.background = '#059669')}
              onMouseOut={(e) => (e.target.style.background = '#10b981')}
            >
              Ace Interview
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Payment;