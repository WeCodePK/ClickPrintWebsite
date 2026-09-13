import Footer from "../components/Footer";

interface TermsPageProps {
	onHome: () => void;
	onRegister: () => void;
	onContact?: () => void;
	onPrivacy?: () => void;
	onTerms?: () => void;
	onRefund?: () => void;
}

export default function TermsPage({
	onHome,
	onRegister,
	onContact,
	onPrivacy,
	onTerms,
	onRefund,
}: TermsPageProps) {
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
								Terms and Conditions
							</h1>
							<p className="text-muted text-[13.5px] font-medium mb-6 pb-4 border-b border-line/70">
								Last updated: July 1, 2026
							</p>

							<div className="space-y-6 text-body text-[14.5px] sm:text-[15px] leading-[1.7]">
								<p>
									These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of ClickPrint (the &quot;Service&quot;), operated by WeCode, a sole proprietorship registered in Pakistan (NTN 3740565477847) and owned by Shahid Zahoor (&quot;WeCode&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By creating an account or using the Service, you agree to these Terms. If you do not agree, do not use the Service.
								</p>

								<section>
									<h2 className="font-sora font-bold text-[18px] sm:text-[19px] text-ink mb-2.5">
										1. Eligibility
									</h2>
									<p>
										You must be at least 18 years of age and capable of entering into a legally binding contract under the laws of Pakistan to use the Service.
									</p>
								</section>

								<section>
									<h2 className="font-sora font-bold text-[18px] sm:text-[19px] text-ink mb-2.5">
										2. The Service
									</h2>
									<p>
										ClickPrint is a platform that connects users with independent third-party print shops. Through the Service you can upload files, choose print settings, view a list of nearby print shops, receive a cost quote, pay from your in-app wallet, and submit your job to a selected print shop for printing. Print jobs are collect-only: you must collect your completed prints in person from the print shop you selected. WeCode does not itself print documents and does not deliver prints.
									</p>
								</section>

								<section>
									<h2 className="font-sora font-bold text-[18px] sm:text-[19px] text-ink mb-2.5">
										3. Your Account
									</h2>
									<p>
										You are responsible for the accuracy of the information you provide (your name and mobile phone number) and for all activity that occurs under your account. You must keep access to your account secure and notify us of any unauthorised use.
									</p>
								</section>

								<section>
									<h2 className="font-sora font-bold text-[18px] sm:text-[19px] text-ink mb-2.5">
										4. Wallet and Top-Ups
									</h2>
									<p className="mb-2">
										The Service includes an in-app wallet. You may add funds (&quot;top up&quot;) to your wallet using Raast-compatible payment methods (such as JazzCash, EasyPaisa, SadaPay, or NayaPay) through our licensed payment gateway partner.
									</p>
									<p className="mb-2">
										Top-ups are currently subject to a minimum of PKR 100 and a maximum of PKR 1,000 per transaction. These limits may be updated from time to time, and the limits then in effect will be shown in the app.
									</p>
									<p className="mb-2">
										Wallet balance is non-refundable and may be used only to pay for print jobs on the Service. It cannot be withdrawn, transferred, or converted back to cash or to any bank or mobile wallet account. Please see our Cancellation / Refund Policy for full details.
									</p>
									<p>Wallet balance does not expire.</p>
								</section>

								<section>
									<h2 className="font-sora font-bold text-[18px] sm:text-[19px] text-ink mb-2.5">
										5. Print Jobs, Quotes, and Payment
									</h2>
									<p className="mb-2">
										When you submit a print job, you will be shown a cost quote before you confirm.
									</p>
									<p className="mb-2">
										The amount quoted for a print job is the total amount payable for that job and is inclusive of all applicable charges.
									</p>
									<p className="mb-2">
										When you confirm a job, the quoted amount is deducted from your wallet balance. You must have sufficient wallet balance to submit a job.
									</p>
									<p>
										Print jobs are produced by the independent print shop you select and must be collected by you in person from that shop.
									</p>
								</section>

								<section>
									<h2 className="font-sora font-bold text-[18px] sm:text-[19px] text-ink mb-2.5">
										6. Cancellations and Refunds
									</h2>
									<p>
										Cancellations and refunds are governed by our Cancellation / Refund Policy, which forms part of these Terms.
									</p>
								</section>

								<section>
									<h2 className="font-sora font-bold text-[18px] sm:text-[19px] text-ink mb-2.5">
										7. Acceptable Use and Your Content
									</h2>
									<p className="mb-2">
										You are solely responsible for the files you upload and print through the Service. You represent and warrant that you have all rights necessary to print the content you submit.
									</p>
									<p className="mb-2">
										You must not use the Service to upload, print, or distribute any content that:
									</p>
									<ul className="list-disc pl-5 space-y-1.5 mb-2">
										<li>
											is unlawful under the laws of Pakistan, including (without limitation) child sexual abuse material, content that incites violence or terrorism, counterfeit currency or documents, or content that infringes another person&apos;s intellectual property or other rights;
										</li>
										<li>you do not have the legal right to reproduce.</li>
									</ul>
									<p>
										We reserve the right to refuse, cancel, or report any job that we reasonably believe involves unlawful content, and to suspend or terminate accounts used for such purposes.
									</p>
								</section>

								<section>
									<h2 className="font-sora font-bold text-[18px] sm:text-[19px] text-ink mb-2.5">
										8. Print Shops and Print Quality
									</h2>
									<p>
										Print shops on the Service are independent third parties. While WeCode facilitates the connection, quotation, and payment, the actual printing is carried out by the selected print shop. If you are dissatisfied with the quality of a completed job, you may raise a complaint with us as described in our Cancellation / Refund Policy, and we will review it and determine, at our discretion, whether a refund is warranted.
									</p>
								</section>

								<section>
									<h2 className="font-sora font-bold text-[18px] sm:text-[19px] text-ink mb-2.5">
										9. Intellectual Property
									</h2>
									<p className="mb-2">
										You retain all ownership rights in the files you upload. You grant WeCode and the selected print shop a limited, temporary licence to store, transmit, and reproduce your files solely for the purpose of fulfilling your print job. This licence ends when your files are deleted upon completion of the job.
									</p>
									<p>
										All rights in the ClickPrint software, branding, and platform remain the property of WeCode.
									</p>
								</section>

								<section>
									<h2 className="font-sora font-bold text-[18px] sm:text-[19px] text-ink mb-2.5">
										10. Disclaimers
									</h2>
									<p>
										The Service is provided on an &quot;as is&quot; and &quot;as available&quot; basis. To the maximum extent permitted by law, we disclaim all warranties not expressly stated in these Terms, including any warranties as to the availability, reliability, or fitness of the Service for a particular purpose.
									</p>
								</section>

								<section>
									<h2 className="font-sora font-bold text-[18px] sm:text-[19px] text-ink mb-2.5">
										11. Limitation of Liability
									</h2>
									<p>
										To the maximum extent permitted by applicable law, WeCode shall not be liable for any indirect, incidental, or consequential damages arising out of or in connection with your use of the Service. Our total aggregate liability in connection with any print job shall not exceed the amount you paid for that job.
									</p>
								</section>

								<section>
									<h2 className="font-sora font-bold text-[18px] sm:text-[19px] text-ink mb-2.5">
										12. Indemnity
									</h2>
									<p>
										You agree to indemnify and hold harmless WeCode and its operator against any claims, losses, or liabilities arising from your misuse of the Service or your breach of these Terms, including any claim relating to content you submitted for printing.
									</p>
								</section>

								<section>
									<h2 className="font-sora font-bold text-[18px] sm:text-[19px] text-ink mb-2.5">
										13. Suspension and Termination
									</h2>
									<p>
										We may suspend or terminate your access to the Service if you breach these Terms or use the Service unlawfully. You may stop using the Service at any time. Note that wallet balance is non-refundable as set out above.
									</p>
								</section>

								<section>
									<h2 className="font-sora font-bold text-[18px] sm:text-[19px] text-ink mb-2.5">
										14. Governing Law and Jurisdiction
									</h2>
									<p>
										These Terms are governed by the laws of the Islamic Republic of Pakistan. Any dispute arising out of or in connection with these Terms shall be subject to the jurisdiction of the courts at Rawalpindi / Islamabad, Pakistan.
									</p>
								</section>

								<section>
									<h2 className="font-sora font-bold text-[18px] sm:text-[19px] text-ink mb-2.5">
										15. Changes to These Terms
									</h2>
									<p>
										We may update these Terms from time to time. The updated version will be posted on this page with a revised effective date. Your continued use of the Service after changes take effect constitutes acceptance of the revised Terms.
									</p>
								</section>

								<section className="pt-2">
									<h2 className="font-sora font-bold text-[18px] sm:text-[19px] text-ink mb-2.5">
										16. Contact Us
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
