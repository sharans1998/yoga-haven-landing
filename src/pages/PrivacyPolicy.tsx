import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import MinimalHeader from "@/components/MinimalHeader";
import MinimalFooter from "@/components/MinimalFooter";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <MinimalHeader />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-6 text-center">
          Last updated: April 16, 2025
        </p>

        {/* <ScrollArea className="h-[calc(100vh-300px)] px-4"> */}
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-3">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to Yonitara Birth. We respect your privacy and are
              committed to protecting your personal data. This privacy policy
              explains how we collect, use, and safeguard your information when
              you use our website and services.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold mb-3">
              Information We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Name and contact information (email address, phone number)
              </li>
              <li>Booking and scheduling information</li>
              <li>
                Health and fitness-related information you choose to share
              </li>
              <li>Communication preferences</li>
              <li>
                Payment information (processed securely through our payment
                providers)
              </li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold mb-3">
              How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Provide and improve our services</li>
              <li>Process your bookings and payments</li>
              <li>
                Send you important updates about your classes and appointments
              </li>
              <li>
                Communicate with you about our services, promotions, and events
              </li>
              <li>Ensure the safety and security of our services</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold mb-3">Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate security measures to protect your
              personal information. However, please note that no method of
              transmission over the internet or electronic storage is 100%
              secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold mb-3">Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to our use of your data</li>
              <li>Request a copy of your data</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about this Privacy Policy or our
              practices, please contact us through the provided contact
              information on our website.
            </p>
          </section>
        </div>
        {/* </ScrollArea> */}
      </main>
      <MinimalFooter />
    </div>
  );
};

export default PrivacyPolicy;
