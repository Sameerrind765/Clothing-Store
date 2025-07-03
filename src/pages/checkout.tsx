import { useState } from "react";
import { useCart } from "../context/CartContext";
// import UseNavigate from "../utils/navigate";

const COUNTRIES = [
	"Pakistan",
	"United States",
	"United Kingdom",
	"Canada",
	"Australia",
	"Germany",
	"France",
	"Other",
];

const Checkout = () => {
	// Form state
	const [form, setForm] = useState({
		contact: "",
		newsLetter: false,
		name: "",
		address: "",
		city: "",
		state: "",
		zip: "",
		country: "",
	});

	// Error state
	const [errors, setErrors] = useState<{ [key: string]: string }>({});

	// Promo code state
	const [promoCode, setPromoCode] = useState("");
	const [promoMessage, setPromoMessage] = useState("");
	const [discount, setDiscount] = useState(0);
	const [promoApplied, setPromoApplied] = useState(false);

	// Handle form field changes
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const target = e.target as HTMLInputElement | HTMLSelectElement;
		const { name, value, type } = target;
		const checked = (type === "checkbox") ? (target as HTMLInputElement).checked : undefined;
		setForm((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
		setErrors((prev) => ({ ...prev, [name]: "" }));
	};

	// Validate form fields
	const validate = () => {
		const newErrors: { [key: string]: string } = {};
		if (!form.contact) newErrors.contact = "Contact is required";
		if (!form.name) newErrors.name = "Name is required";
		if (!form.address) newErrors.address = "Address is required";
		if (!form.city) newErrors.city = "City is required";
		if (!form.state) newErrors.state = "State is required";
		if (!form.zip) newErrors.zip = "ZIP/Postal Code is required";
		if (!form.country) newErrors.country = "Country is required";
		return newErrors;
	};

	// Handle form submission
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const validationErrors = validate();
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}
		// Handle form submission (e.g., send to backend or move to next step)
		console.log(form);
		alert("Address submitted!");
	};

	const handlePromoApply = () => {
		// Example: Apply a fixed promo code "SAVE10" for 10% off
		if (promoCode.trim().toUpperCase() === "SAVE10") {
			setDiscount(subtotal * 0.1);
			setPromoMessage("Promo code applied! 10% discount.");
			setPromoApplied(true);
		} else {
			setDiscount(0);
			setPromoMessage("Invalid promo code.");
			setPromoApplied(false);
		}
	};

	const { cartItems } = useCart();
	// const navigate = UseNavigate();

	const subtotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

	return (
		<div>
			<div className="headline bg-black text-white text-center p-1 h-3.5"></div>
			<form onSubmit={handleSubmit} className="checkout-form" noValidate>
				<fieldset>
					<legend>Contact</legend>
					<label htmlFor="contact">Email or phone number</label>
					<input
						type="email"
						id="contact"
						name="contact"
						placeholder="Email or phone number"
						value={form.contact}
						onChange={handleChange}
						required
						autoComplete="email"
					/>
					{errors.contact && <span className="error">{errors.contact}</span>}
					<div className="checkbox-group">
						<input
							type="checkbox"
							id="newsLetter"
							name="newsLetter"
							checked={form.newsLetter}
							onChange={handleChange}
						/>
						<label htmlFor="newsLetter">
							Subscribe For Newsletter and offers
						</label>
					</div>
				</fieldset>
				<fieldset>
					<legend className="">Delivery Address</legend>
					<label htmlFor="name">Full Name</label>
					<input
						type="text"
						id="name"
						name="name"
						value={form.name}
						onChange={handleChange}
						required
						autoComplete="name"
					/>
					{errors.name && <span className="error">{errors.name}</span>}

					<label htmlFor="address">Address</label>
					<input
						type="text"
						id="address"
						name="address"
						value={form.address}
						onChange={handleChange}
						required
						autoComplete="street-address"
					/>
					{errors.address && <span className="error">{errors.address}</span>}

					<label htmlFor="city">City</label>
					<input
						type="text"
						id="city"
						name="city"
						value={form.city}
						onChange={handleChange}
						required
						autoComplete="address-level2"
					/>
					{errors.city && <span className="error">{errors.city}</span>}

					<label htmlFor="state">State</label>
					<input
						type="text"
						id="state"
						name="state"
						value={form.state}
						onChange={handleChange}
						required
						autoComplete="address-level1"
					/>
					{errors.state && <span className="error">{errors.state}</span>}

					<label htmlFor="zip">ZIP/Postal Code</label>
					<input
						type="text"
						id="zip"
						name="zip"
						value={form.zip}
						onChange={handleChange}
						required
						autoComplete="postal-code"
						inputMode="numeric"
						pattern="[0-9]*"
					/>
					{errors.zip && <span className="error">{errors.zip}</span>}

					<label htmlFor="country">Country</label>
					<select
						id="country"
						name="country"
						value={form.country}
						onChange={handleChange}
						required
					>
						<option value="">Select Country</option>
						{COUNTRIES.map((country) => (
							<option key={country} value={country}>
								{country}
							</option>
						))}
					</select>
					{errors.country && <span className="error">{errors.country}</span>}
				</fieldset>
				<h2 className="">Payment Summary</h2>
				<div className="summary-item flex flex-col gap-3">
					<div className="border-b-gray-600 wrapper flex justify-between border-b-[1px]">
						<p>Subtotal</p>
						<p>Rs. {subtotal.toLocaleString()}</p>
					</div>
					<div className="border-b-gray-600 wrapper flex justify-between border-b-[1px]">
						<p>Discount</p>
						<p>Rs. {discount ? discount.toLocaleString() : 0}</p>
					</div>
					{/* Promo code input */}
					<div className="promo-row flex items-center gap-2" style={{ margin: "10px 0" }}>
						<input
							type="text"
							className="promo-input"
							placeholder="Promo code"
							value={promoCode}
							onChange={e => setPromoCode(e.target.value)}
							style={{ flex: 1 }}
						/>
						<button
							type="button"
							className={`promo-btn${promoApplied ? " applied" : ""}`}
							style={{ padding: "0.5rem 1rem", fontSize: "1rem" }}
							onClick={handlePromoApply}
							disabled={promoApplied || !promoCode.trim()}
						>
							{promoApplied ? "Applied" : "Apply"}
						</button>
					</div>
					{promoMessage && <span className="promo-message">{promoMessage}</span>}
					<div className="border-b-gray-600 wrapper flex justify-between border-b-[1px]">
						<p>Total</p>
						<p>Rs. {(subtotal - discount).toLocaleString()}</p>
					</div>
				</div>
				<button type="submit" className="cart-btn">
					Continue to Checkout
				</button>
			</form>
		</div>
	);
};

export default Checkout;