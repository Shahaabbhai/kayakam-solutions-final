export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-heading font-bold text-brand-navy mb-8">Privacy Policy</h1>
      <div className="prose prose-lg text-gray-600">
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        <p className="mb-4">
          Kayakam Solutions ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Kayakam Solutions.
        </p>
        <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">Information We Collect</h2>
        <p className="mb-4">
          We collect information that you provide directly to us when you use our services, including when you fill out forms on our website or communicate with us directly.
        </p>
        <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">How We Use Your Information</h2>
        <p className="mb-4">
          We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect Kayakam Solutions and our users.
        </p>
        <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us at info@kayakamsolutions.com.
        </p>
      </div>
    </div>
  );
}
