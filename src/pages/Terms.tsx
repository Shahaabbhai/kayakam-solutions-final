export default function Terms() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-heading font-bold text-brand-navy mb-8">Terms & Conditions</h1>
      <div className="prose prose-lg text-gray-600">
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        <p className="mb-4">
          Please read these Terms and Conditions carefully before using the Kayakam Solutions website and services.
        </p>
        <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access our services.
        </p>
        <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">Services</h2>
        <p className="mb-4">
          Kayakam Solutions provides HR consultancy, recruitment, and statutory compliance services. The specific terms of these services will be governed by individual service agreements.
        </p>
        <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">Intellectual Property</h2>
        <p className="mb-4">
          The website and its original content, features, and functionality are owned by Kayakam Solutions and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
        </p>
      </div>
    </div>
  );
}
