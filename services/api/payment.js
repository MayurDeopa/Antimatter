

const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
};

export const makePayment = async(param)=>{
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }
    const first = await fetch(`https://antimatter-server.herokuapp.com/payment/create`,{
      method:"POST",
      headers:{"Content-Type" :"application/json"},
      body:JSON.stringify(param)
    })
    const data = await first.json()
    const options = {
			key: "rzp_live_ZOEzXI1X91g4Sc",
			currency: data.currency,
			amount: parseInt(data.amount),
			name: 'Donation',
			description: 'Thank you for nothing. Please give us some money',
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
}