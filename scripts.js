// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Stripe Payment Integration
const stripe = Stripe('your-publishable-key'); // Replace with your Stripe key
const elements = stripe.elements();
const cardElement = elements.create('card');
cardElement.mount('#card-element');

const form = document.getElementById('payment-form');
form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const { error, paymentMethod } = await stripe.createPaymentMethod({
    type: 'card',
    card: cardElement,
  });

  if (error) {
    document.getElementById('payment-message').textContent = error.message;
  } else {
    fetch('/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ payment_method: paymentMethod.id }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          document.getElementById('payment-message').textContent = 'Payment successful!';
        } else {
          document.getElementById('payment-message').textContent = 'Payment failed. Please try again.';
        }
      });
  }
});
