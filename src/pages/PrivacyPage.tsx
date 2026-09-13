import Footer from "../components/Footer";

interface PrivacyPageProps {
	onHome: () => void;
	onRegister: () => void;
	onContact?: () => void;
	onPrivacy?: () => void;
	onTerms?: () => void;
	onRefund?: () => void;
}

export default function PrivacyPage({
	onHome,
	onRegister,
	onContact,
	onPrivacy,
	onTerms,
	onRefund,
}: PrivacyPageProps) {
	return (
		<>
			<main className="min-h-[calc(100vh-74px)]">
				<div className="relative overflow-hidden pt-6 sm:pt-10">
					<div
						className="absolute inset-0 pointer-events-none"
						style={{
							background:
								"radial-gradient(800px 400px at 85% -10%, rgba(59,158,255,.1), transparent 60%),radial-gradient(700px 400px at 0% 6%, rgba(0,217,163,.08), transparent 60%)",
						}}
					/>
					<div className="cp-in relative max-w-220 pt-8 sm:pt-11 pb-14 sm:pb-20">
						<a
							onClick={onHome}
							className="cursor-pointer inline-flex items-center gap-1.75 text-muted hover:text-ink font-bold text-sm mb-4 sm:mb-5.5 transition-colors"
						>
							← Back to home
						</a>

						<div className="bg-white rounded-[22px] sm:rounded-[26px] p-6 sm:p-10 shadow-[0_16px_44px_rgba(143,155,179,.14)] border border-line/60">
							<div className="font-sora font-bold text-[12px] sm:text-[13px] tracking-[.6px] text-coral-deep uppercase">
								Legal
							</div>
							<h1 className="font-sora font-extrabold text-[26px] sm:text-[34px] tracking-[-1px] text-ink mt-2 mb-1">
								Privacy Policy
							</h1>
							<p className="text-muted text-[13.5px] font-medium mb-6 pb-4 border-b border-line/70">
								Last updated: July 1, 2026
							</p>

							<div className="space-y-6 text-body text-[14.5px] sm:text-[15px] leading-[1.7]">
								<p>
									This Privacy Policy explains how WeCode (&quot;WeCode&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), a sole proprietorship registered in Pakistan (NTN 3740565477847) and operated by Shahid Zahoor, collects, uses, and protects information in connection with ClickPrint (the &quot;Service&quot;), our application that lets users upload documents, choose print settings, select a nearby print shop, receive a cost quote, and submit print jobs, paying from an in-app wallet.
								</p>
								<p>
									By creating an account or using ClickPrint, you agree to the practices described in this Privacy Policy.
								</p>

								<section>
									<h2 className="font-sora font-bold text-[18px] sm:text-[19px] text-ink mb-2.5">
										Information We Collect
									</h2>
									<p className="mb-2">We deliberately collect as little information as possible to run the Service.</p>
									
									<p className="font-semibold text-ink mt-3 mb-1">Information you provide when you register:</p>
									<ul className="list-disc pl-5 space-y-1 mb-3">
										<li>Your name</li>
										<li>Your mobile phone number</li>
									</ul>

									<p className="font-semibold text-ink mt-3 mb-1">Information relating to your print jobs:</p>
									<ul className="list-disc pl-5 space-y-1 mb-3">
										<li>The files you upload for printing and the print settings you select (paper size, colour, copies, etc.)</li>
										<li>The print shop you select and the associated cost quote</li>
									</ul>

									<p className="font-semibold text-ink mt-3 mb-1">Payment information:</p>
									<ul className="list-disc pl-5 space-y-1 mb-3">
										<li>Your mobile phone number, which is used to request payment through Raast (see &quot;Payments&quot; below). We do not collect or store your bank account numbers, card numbers, wallet PINs, passwords, or other payment credentials.</li>
									</ul>

									<p className="font-semibold text-ink mt-3 mb-1">Location information:</p>
									<ul className="list-disc pl-5 space-y-1 mb-3">
										<li>We determine your approximate city using an IP-address lookup so we can show you nearby print shops.</li>
										<li>You may optionally choose to share a more precise approximate location from your device to improve the list of nearby shops. This is optional and used only for that purpose.</li>
									</ul>
								</section>

								<section>
									<h2 className="font-sora font-bold text-[18px] sm:text-[19px] text-ink mb-2.5">
										How We Use Your Information
									</h2>
									<p className="mb-2">We use the information above to:</p>
									<ul className="list-disc pl-5 space-y-1.5">
										<li>Create and maintain your account;</li>
										<li>Show you print shops near your approximate location;</li>
										<li>Generate cost quotes and process your print jobs;</li>
										<li>Request and confirm wallet top-up payments through Raast;</li>
										<li>Transmit your files and print settings to the print shop you select so your job can be printed;</li>
										<li>Provide customer support and respond to complaints;</li>
										<li>Comply with applicable laws and regulatory requirements.</li>
									</ul>
								</section>

								<section>
									<h2 className="font-sora font-bold text-[18px] sm:text-[19px] text-ink mb-2.5">
										Payments
									</h2>
									<p className="mb-2">
										Wallet top-ups are processed through Raast, the instant payment system operated by the State Bank of Pakistan, using the Request-to-Pay flow. Payment processing is carried out by a licensed third-party payment processor.
									</p>
									<p className="mb-2">
										When you top up your wallet, we submit a payment request associated with your mobile phone number. The transaction itself is completed by you within your own bank or wallet application (e.g. JazzCash, EasyPaisa, SadaPay, NayaPay). WeCode does not receive, see, or store your payment credentials. Our payment gateway partner processes the transaction and returns to us only a success/failure result and a transaction reference. The payment gateway may retain transaction records and audit logs as required by law and by the State Bank of Pakistan.
									</p>
									<p>
										We share only the information necessary to process a payment (such as your phone number and the transaction amount) with our payment gateway partner. We do not share your uploaded print files with the payment gateway.
									</p>
								</section>

								<section>
									<h2 className="font-sora font-bold text-[18px] sm:text-[19px] text-ink mb-2.5">
										Your Print Files
									</h2>
									<p className="mb-2">Your privacy over the documents you print matters to us:</p>
									<ul className="list-disc pl-5 space-y-1.5">
										<li>Uploaded files are shared only with the specific print shop you select, together with your chosen print settings, so your job can be printed.</li>
										<li>Once a print job is completed, your files are deleted immediately — both from our servers and from the machines at the print shop.</li>
										<li>We do not use, read, analyse, sell, or retain the contents of your files for any purpose other than fulfilling your print job.</li>
									</ul>
								</section>

								<section>
									<h2 className="font-sora font-bold text-[18px] sm:text-[19px] text-ink mb-2.5">
										When We Share Information
									</h2>
									<p className="mb-2">We share information only in these limited cases:</p>
									<ul className="list-disc pl-5 space-y-1.5 mb-3">
										<li>With the print shop you select — your uploaded files and print settings, so your job can be printed.</li>
										<li>With our licensed third-party payment processor — transaction data only (such as your phone number and amount), so top-up payments can be processed. Print files are never shared with the payment gateway.</li>
										<li>Where required by law — if we are legally compelled to disclose information by a court or competent authority.</li>
									</ul>
									<p>
										We do not sell your personal information, and we do not share it with advertisers or data brokers.
									</p>
								</section>

								<section>
									<h2 className="font-sora font-bold text-[18px] sm:text-[19px] text-ink mb-2.5">
										Cookies and Analytics
									</h2>
									<p>
										We do not use cookies or third-party analytics or tracking tools on the Service.
									</p>
								</section>

								<section>
									<h2 className="font-sora font-bold text-[18px] sm:text-[19px] text-ink mb-2.5">
										Data Retention
									</h2>
									<ul className="list-disc pl-5 space-y-1.5">
										<li><strong>Print files:</strong> deleted immediately after the relevant print job is completed.</li>
										<li><strong>Account information (name and phone number):</strong> retained for as long as your account is active, and thereafter only as long as required to comply with legal, tax, or regulatory obligations.</li>
										<li><strong>Transaction records:</strong> retained by us and/or our payment gateway partner as required by applicable law and State Bank of Pakistan regulations.</li>
									</ul>
								</section>

								<section>
									<h2 className="font-sora font-bold text-[18px] sm:text-[19px] text-ink mb-2.5">
										Data Security
									</h2>
									<p>
										We apply reasonable technical and organisational measures to protect information against unauthorised access, loss, or misuse. No system can be guaranteed to be completely secure, but we take the protection of your information seriously.
									</p>
								</section>

								<section>
									<h2 className="font-sora font-bold text-[18px] sm:text-[19px] text-ink mb-2.5">
										Children
									</h2>
									<p>
										The Service is intended for users aged 18 and over. It is not directed at children, and we do not knowingly collect information from anyone under 18.
									</p>
								</section>

								<section>
									<h2 className="font-sora font-bold text-[18px] sm:text-[19px] text-ink mb-2.5">
										Your Rights
									</h2>
									<p>
										You may request access to, correction of, or deletion of your personal information by contacting us at the details below. Please note that we may need to retain certain information where required by law.
									</p>
								</section>

								<section>
									<h2 className="font-sora font-bold text-[18px] sm:text-[19px] text-ink mb-2.5">
										Changes to This Policy
									</h2>
									<p>
										We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised effective date.
									</p>
								</section>

								<section className="pt-2">
									<h2 className="font-sora font-bold text-[18px] sm:text-[19px] text-ink mb-2.5">
										Contact Us
									</h2>
									<div className="bg-cloud p-4 sm:p-5 rounded-2xl border border-line space-y-1 text-[14px]">
										<div className="font-sora font-bold text-ink text-[15px]">WeCode</div>
										<div>374/4, St. Sial Maternity Home, Tench Bhatta, Rawalpindi</div>
										<div>
											Email:{" "}
											<a href="mailto:support@wecode.com.pk" className="text-blue font-semibold hover:underline">
												support@wecode.com.pk
											</a>
										</div>
										<div>
											Phone:{" "}
											<a href="tel:+923235400291" className="text-ink font-semibold">
												+92 323 5400291
											</a>
										</div>
										<div>
											Phone:{" "}
											<a href="tel:+923352147147" className="text-ink font-semibold">
												+92 335 2147147
											</a>
										</div>
									</div>
								</section>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer
				onRegister={onRegister}
				onContact={onContact}
				onPrivacy={onPrivacy}
				onTerms={onTerms}
				onRefund={onRefund}
			/>
		</>
	);
}
