import Footer from "../components/Footer";

interface RefundPageProps {
	onHome: () => void;
	onRegister: () => void;
	onContact?: () => void;
	onPrivacy?: () => void;
	onTerms?: () => void;
	onRefund?: () => void;
}

export default function RefundPage({
	onHome,
	onRegister,
	onContact,
	onPrivacy,
	onTerms,
	onRefund,
}: RefundPageProps) {
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
								Policies
							</div>
							<h1 className="font-sora font-extrabold text-[26px] sm:text-[34px] tracking-[-1px] text-ink mt-2 mb-1">
								Cancellation / Refund Policy
							</h1>
							<p className="text-muted text-[13.5px] font-medium mb-6 pb-4 border-b border-line/70">
								Last updated: July 1, 2026
							</p>

							<div className="space-y-6 text-body text-[14.5px] sm:text-[15px] leading-[1.7]">
								<p>
									This policy explains when and how cancellations and refunds apply to ClickPrint, operated by WeCode. It forms part of our Terms and Conditions.
								</p>

								<section>
									<h2 className="font-sora font-bold text-[18px] sm:text-[19px] text-ink mb-2.5">
										Wallet Top-Ups
									</h2>
									<p className="mb-3">
										Wallet top-ups are non-refundable. Once you add funds to your ClickPrint wallet, that balance:
									</p>
									<ul className="list-disc pl-5 space-y-1.5 mb-3">
										<li>can be used only to pay for print jobs on the Service;</li>
										<li>cannot be withdrawn, transferred, or converted back to cash or to any bank or mobile wallet account;</li>
										<li>does not expire.</li>
									</ul>
									<p>Please top up only the amount you intend to spend on printing.</p>
								</section>

								<section>
									<h2 className="font-sora font-bold text-[18px] sm:text-[19px] text-ink mb-2.5">
										Cancelling a Print Job
									</h2>
									<p className="mb-2">
										You may cancel a submitted print job and receive a full refund to your wallet at any time before the print shop has begun printing your job.
									</p>
									<p>
										Once printing has begun, the job can no longer be cancelled, because production is already underway.
									</p>
								</section>

								<section>
									<h2 className="font-sora font-bold text-[18px] sm:text-[19px] text-ink mb-2.5">
										Automatic Refunds
									</h2>
									<p>
										If a print job fails due to a technical or equipment error on the print shop&apos;s side before it is completed, you will be automatically refunded the full amount to your wallet. You do not need to take any action.
									</p>
								</section>

								<section>
									<h2 className="font-sora font-bold text-[18px] sm:text-[19px] text-ink mb-2.5">
										Where Refunds Go
									</h2>
									<p>
										All refunds are credited back to your in-app ClickPrint wallet. Refunds are not returned to your original bank or mobile wallet, consistent with the non-refundable nature of wallet balance described above. Wallet refunds are applied automatically and are available immediately for use on the Service.
									</p>
								</section>

								<section>
									<h2 className="font-sora font-bold text-[18px] sm:text-[19px] text-ink mb-2.5">
										Returns and Exchanges
									</h2>
									<p>
										Prints are custom-produced to your specifications and are collect-only. For this reason, completed prints cannot be returned or exchanged once produced.
									</p>
								</section>

								<section>
									<h2 className="font-sora font-bold text-[18px] sm:text-[19px] text-ink mb-2.5">
										Print Quality Complaints
									</h2>
									<p>
										If you believe a completed job was not printed correctly or is of poor quality, you may submit a complaint to us with supporting evidence (for example, photographs of the print) within 48 hours of the job being completed. We will review your complaint and, at our discretion, determine whether a refund to your wallet is warranted. Because print shops are independent third parties, we act as a neutral reviewer in these cases.
									</p>
								</section>

								<section>
									<h2 className="font-sora font-bold text-[18px] sm:text-[19px] text-ink mb-2.5">
										Uncollected Jobs
									</h2>
									<p>
										Print jobs are collect-only and must be collected in person from the print shop you selected. Once a job has been printed, the amount paid is non-refundable if you do not collect it. Print shops may hold completed jobs for collection at their own discretion, and are under no obligation to retain uncollected jobs indefinitely.
									</p>
								</section>

								<section className="pt-2">
									<h2 className="font-sora font-bold text-[18px] sm:text-[19px] text-ink mb-2.5">
										Contact for Refunds and Disputes
									</h2>
									<div className="bg-cloud p-4 sm:p-5 rounded-2xl border border-line space-y-1 text-[14px]">
										<div className="font-sora font-bold text-ink text-[15px]">WeCode</div>
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
