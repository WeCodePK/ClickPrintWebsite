import type { ChangeEvent } from "react";
import { useState } from "react";
import Footer from "../components/Footer";

interface ContactPageProps {
	onHome: () => void;
	onRegister: () => void;
	onContact?: () => void;
	onPrivacy?: () => void;
	onTerms?: () => void;
	onRefund?: () => void;
}

interface FormState {
	name: string;
	email: string;
	whatsapp: string;
	message: string;
}

const initialForm: FormState = {
	name: "",
	email: "",
	whatsapp: "",
	message: "",
};

export default function ContactPage({
	onHome,
	onRegister,
	onContact,
	onPrivacy,
	onTerms,
	onRefund,
}: ContactPageProps) {
	const [form, setForm] = useState<FormState>(initialForm);
	const [submitted, setSubmitted] = useState(false);
	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState("");

	const setF = (key: keyof FormState) => (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const value = e.target.value;
		setForm((s) => ({ ...s, [key]: value }));
		setError("");
	};

	const validateName = (name: string) => {
		const trimmed = name.trim();
		if (trimmed.length <= 3 || !trimmed.match("^[A-Za-z ]+$")) return false;
		return true;
	};

	const validateEmail = (email: string) => {
		const trimmed = email.trim();
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return false;
		return true;
	};

	const validateWhatsapp = (whatsapp: string) => {
		const cleaned = whatsapp.trim().replace(/[\s+()-]/g, "");
		if (cleaned.length === 11 && cleaned.match("^03[0-9]{9}$")) return true;
		if (cleaned.length === 12 && cleaned.match("^92[0-9]{10}$")) return true;
		return false;
	};

	const validateMessage = (message: string) => {
		if (message.trim().length < 10) return false;
		return true;
	};

	const submit = async () => {
		const missing: string[] = [];
		if (!form.name.trim()) missing.push("name");
		if (!form.email.trim()) missing.push("email address");
		if (!form.whatsapp.trim()) missing.push("WhatsApp number");
		if (!form.message.trim()) missing.push("message");
		if (missing.length) {
			setError("Please fill in: " + missing.join(", ") + ".");
			return;
		}

		if (!validateName(form.name)) {
			setError("Name - Only letters & spaces and must be at least 4 characters long.");
			return;
		}
		if (!validateEmail(form.email)) {
			setError("Email - Please enter a valid email address.");
			return;
		}
		if (!validateWhatsapp(form.whatsapp)) {
			setError("Enter a valid WhatsApp number, either format (03XXXXXXXXX or 92XXXXXXXXXX).");
			return;
		}
		if (!validateMessage(form.message)) {
			setError("Message must be at least 10 characters long.");
			return;
		}

		setSubmitting(true);
		setError("");

		const body = new URLSearchParams({
			form: "ClickPrint Contact Form",
			name: form.name.trim(),
			email: form.email.trim(),
			whatsapp: form.whatsapp.trim(),
			message: form.message.trim(),
		});

		try {
			const res = await fetch("https://contactform.f1ac.workers.dev", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: body.toString(),
			});
			if (!res.ok) throw new Error("Request failed");
			setSubmitted(true);
			setError("");
			window.scrollTo({ top: 0, behavior: "auto" });
		} catch {
			setError("Something went wrong submitting your message. Please try again.");
		} finally {
			setSubmitting(false);
		}
	};

	const senderFirst = form.name.trim().split(/\s+/)[0] || "there";
	const label = "block font-bold text-[13.5px] mb-2";
	const required = <span className="text-coral-deep">*</span>;

	return (
		<>
			<main className="min-h-[calc(100vh-74px)]">
				<div className="relative overflow-hidden pt-6 sm:pt-10">
					<div
						className="absolute inset-0"
						style={{
							background:
								"radial-gradient(800px 400px at 85% -10%, rgba(59,158,255,.1), transparent 60%),radial-gradient(700px 400px at 0% 6%, rgba(0,217,163,.08), transparent 60%)",
						}}
					/>
					<div className="cp-in relative max-w-240 pt-8 sm:pt-11 pb-14 sm:pb-20">
						<a
							onClick={onHome}
							className="cursor-pointer inline-flex items-center gap-1.75 text-muted font-bold text-sm mb-4 sm:mb-5.5"
						>
							← Back to home
						</a>

						{submitted ? (
							/* success */
							<div className="cp-rise bg-white rounded-[22px] sm:rounded-[26px] px-6 sm:px-10 py-10 sm:py-14 text-center shadow-[0_20px_50px_rgba(143,155,179,.16)] max-w-140 mx-auto my-6 sm:my-10">
								<div className="w-18 sm:w-21 h-18 sm:h-21 rounded-full bg-[rgba(0,217,163,.14)] flex items-center justify-center mx-auto mb-5 sm:mb-6">
									<div className="w-11 sm:w-13 h-11 sm:h-13 rounded-full bg-green flex items-center justify-center text-white text-[24px] sm:text-[28px] font-extrabold">
										✓
									</div>
								</div>
								<h2 className="font-sora font-extrabold text-[24px] sm:text-[30px] tracking-[-.8px] mb-3">
									Message received!
								</h2>
								<p className="text-body text-[14.5px] sm:text-base leading-[1.6] max-w-100 mx-auto mb-6 sm:mb-7">
									Thanks, {senderFirst}. We have received your message and our team will get back to you shortly.
								</p>
								<button
									onClick={onHome}
									className="cp-btn-primary border-none cursor-pointer font-manrope font-bold text-[15px] sm:text-[15.5px] text-white bg-coral px-7 sm:px-8 py-3.5 sm:py-3.75 rounded-[13px]"
								>
									Back to home
								</button>
							</div>
						) : (
							<div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-6 sm:gap-8.5 items-start pb-10 sm:pb-15">
								{/* form card */}
								<div className="bg-white rounded-[22px] sm:rounded-[26px] p-6 sm:p-9 shadow-[0_16px_44px_rgba(143,155,179,.14)]">
									<div className="font-sora font-bold text-[12px] sm:text-[13px] tracking-[.6px] text-coral-deep uppercase">
										Contact us
									</div>
									<h1 className="font-sora font-extrabold text-[26px] sm:text-[32px] tracking-[-1px] mt-2.5 mb-1.5">
										Get in touch with us
									</h1>
									<p className="text-muted text-[14px] sm:text-[15px] mb-6 sm:mb-7">
										All fields marked {required} are required.
									</p>

									<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4.5">
										<div className="sm:col-span-2">
											<label className={label}>Name {required}</label>
											<input
												className="cp-inp"
												type="text"
												placeholder="e.g. Adeel Qureshi"
												value={form.name}
												onChange={setF("name")}
											/>
										</div>
										<div className="sm:col-span-2">
											<label className={label}>Email address {required}</label>
											<input
												className="cp-inp"
												type="email"
												placeholder="e.g. adeel@example.com"
												value={form.email}
												onChange={setF("email")}
											/>
										</div>
										<div className="sm:col-span-2">
											<label className={label}>WhatsApp number {required}</label>
											<input
												className="cp-inp"
												type="tel"
												placeholder="+92 323 5400291"
												value={form.whatsapp}
												onChange={setF("whatsapp")}
											/>
										</div>
										<div className="sm:col-span-2">
											<label className={label}>Message {required}</label>
											<textarea
												className="cp-inp resize-y"
												rows={4}
												placeholder="Your message here..."
												value={form.message}
												onChange={setF("message")}
											/>
										</div>
									</div>

									{/* error */}
									{error && (
										<div className="mt-4 sm:mt-5 bg-[rgba(255,139,123,.12)] border border-[rgba(255,139,123,.35)] rounded-xl px-4 py-3 sm:py-3.25 text-[#d0432e] text-[13px] sm:text-[13.5px] font-semibold">
											{error}
										</div>
									)}

									<button
										onClick={submit}
										disabled={submitting}
										className="cp-btn-primary mt-5 sm:mt-6.5 w-full border-none cursor-pointer font-manrope font-extrabold text-[15.5px] sm:text-[16.5px] text-white bg-coral p-3.75 sm:p-4.25 rounded-[14px] shadow-[0_12px_30px_rgba(255,139,123,.35)] disabled:opacity-60 disabled:cursor-not-allowed"
									>
										{submitting ? "Sending…" : "Send message"}
									</button>
									<div className="text-center text-[12px] sm:text-[12.5px] text-muted mt-3 sm:mt-3.5">
										We usually respond within a few hours on business days.
									</div>
								</div>

								{/* aside with stacked WhatsApp and Email cards */}
								<aside className="sticky flex flex-col gap-4.5">
									{/* WhatsApp Card */}
									<div className="bg-white rounded-[22px] p-5 sm:p-6 shadow-[0_16px_40px_rgba(18,35,63,.1)] border border-line/60">
										<div className="flex items-center gap-3 mb-3">
											<div className="w-10 h-10 rounded-xl bg-[rgba(0,217,163,.14)] text-green-dark flex items-center justify-center flex-none">
												<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
													<path d="M12.031 2C6.492 2 2 6.492 2 12.031c0 1.808.483 3.518 1.326 5.006L2 22l5.127-1.309a10.01 10.01 0 004.904 1.28c5.539 0 10.031-4.492 10.031-10.031S17.57 2 12.031 2zm5.836 14.199c-.244.688-1.229 1.32-1.74 1.378-.475.053-1.077.076-3.486-.92-2.79-1.155-4.57-4.004-4.708-4.188-.138-.184-1.127-1.503-1.127-2.866 0-1.363.714-2.036.969-2.316.244-.268.535-.335.714-.335.184 0 .367.002.527.01.169.008.396-.064.619.472.229.55.78 1.905.849 2.043.069.138.115.3.023.483-.092.183-.138.298-.275.459-.138.161-.29.359-.414.482-.138.138-.282.288-.121.564.161.276.714 1.177 1.533 1.906 1.054.938 1.944 1.229 2.22 1.366.276.138.437.115.6-.069.161-.184.69-.803.874-1.079.184-.276.368-.23.62-.138.252.092 1.603.757 1.879.895.276.138.46.207.528.322.069.115.069.665-.175 1.353z" />
												</svg>
											</div>
											<h3 className="font-sora font-bold text-[17px] text-ink">
												Reach via WhatsApp
											</h3>
										</div>
										<p className="text-body text-[13.5px] leading-[1.55] mb-3.5">
											Chat directly with our team for quick assistance on orders, shop listings, or inquiries.
										</p>
										<div className="bg-cloud rounded-xl p-3 border border-line mb-3.5">
											<div className="text-[11.5px] font-semibold text-muted">WhatsApp Number</div>
											<div className="font-sora font-bold text-[14.5px] text-ink mt-0.5">
												+92 323 5400291
											</div>
										</div>
										<a
											href="https://wa.me/923235400291?text=Hi%20ClickPrint%20team,%20I%20have%20an%20inquiry."
											target="_blank"
											rel="noopener noreferrer"
											className="cp-btn-primary w-full inline-flex items-center justify-center gap-2 font-manrope font-bold text-[14px] text-white bg-green-dark hover:bg-[#009270] py-2.75 px-4 rounded-xl shadow-[0_8px_20px_rgba(0,169,130,.25)] transition-all"
										>
											<span>Chat on WhatsApp</span>
											<svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
												<path d="M4 12l8-8M6 4h6v6" />
											</svg>
										</a>
									</div>

									{/* Email Card */}
									<div className="bg-white rounded-[22px] p-5 sm:p-6 shadow-[0_16px_40px_rgba(18,35,63,.1)] border border-line/60">
										<div className="flex items-center gap-3 mb-3">
											<div className="w-10 h-10 rounded-xl bg-[rgba(59,158,255,.12)] text-blue flex items-center justify-center flex-none">
												<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
													<rect width="20" height="16" x="2" y="4" rx="2" />
													<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
												</svg>
											</div>
											<h3 className="font-sora font-bold text-[17px] text-ink">
												Reach via Email
											</h3>
										</div>
										<p className="text-body text-[13.5px] leading-[1.55] mb-3.5">
											For partnerships, business inquiries, or general feedback, write to our support desk.
										</p>
										<div className="bg-cloud rounded-xl p-3 border border-line mb-3.5">
											<div className="text-[11.5px] font-semibold text-muted">Support Email</div>
											<div className="font-sora font-bold text-[13.5px] text-ink mt-0.5 truncate">
												clickprintsupport@gmail.com
											</div>
										</div>
										<a
											href="mailto:clickprintsupport@gmail.com?subject=Inquiry%20from%20ClickPrint%20Website"
											className="cp-btn-primary w-full inline-flex items-center justify-center gap-2 font-manrope font-bold text-[14px] text-white bg-navy hover:bg-navy-deep py-2.75 px-4 rounded-xl shadow-[0_8px_20px_rgba(18,35,63,.25)] transition-all"
										>
											<span>Send an Email</span>
											<svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
												<path d="M4 12l8-8M6 4h6v6" />
											</svg>
										</a>
									</div>
								</aside>
							</div>
						)}
					</div>
				</div>
			</main>
			<Footer
				onRegister={onRegister}
				onContact={onContact ?? (() => window.scrollTo({ top: 0, behavior: "smooth" }))}
				onPrivacy={onPrivacy}
				onTerms={onTerms}
				onRefund={onRefund}
			/>
		</>
	);
}
