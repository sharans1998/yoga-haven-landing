import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import MinimalHeader from "@/components/MinimalHeader";
import MinimalFooter from "@/components/MinimalFooter";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-white">
      <MinimalHeader />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Terms and Conditions
        </h1>
        <p className="text-sm text-gray-500 mb-6 text-center">
          Last updated: April 16, 2025
        </p>

        {/* <ScrollArea className="h-[calc(100vh-300px)] px-4"> */}
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-3">Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using Yonitara Birth's website and services, you
              acknowledge that you have read, understood, and agree to be bound
              by these Terms and Conditions. If you do not agree with any part
              of these terms, please do not use our services.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold mb-3">Services Description</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Yonitara Birth provides yoga instruction, wellness services, and
              related activities. Our services include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Yoga classes and sessions</li>
              <li>Wellness workshops and programs</li>
              <li>Teacher training programs</li>
              <li>Online content and resources</li>
              <li>Personal consultation services</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold mb-3">
              User Responsibilities
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a user of our services, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Provide accurate and complete information when registering
              </li>
              <li>Maintain the confidentiality of your account information</li>
              <li>
                Notify us immediately of any unauthorized use of your account
              </li>
              <li>
                Follow all safety guidelines and instructions during sessions
              </li>
              <li>Respect other participants and staff members</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold mb-3">Health and Safety</h2>
            <p className="text-gray-700 leading-relaxed">
              You acknowledge that yoga and related activities involve physical
              exertion and may carry inherent risks. You should consult with a
              physician before participating in any of our programs. You agree
              to inform your instructor of any physical limitations, medical
              conditions, or injuries that may affect your practice.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold mb-3">
              Booking and Cancellation
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our booking and cancellation policies include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Advance booking is required for all classes and sessions</li>
              <li>
                24-hour cancellation notice is required for regular classes
              </li>
              <li>
                48-hour cancellation notice is required for private sessions
              </li>
              <li>No refunds for missed classes or late cancellations</li>
              <li>
                Class packages and memberships have specific validity periods
              </li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold mb-3">Payment Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              All payments must be made in advance of services. We accept major
              credit cards and other specified payment methods. Prices are
              subject to change, and any changes will be communicated in
              advance. Refunds are subject to our refund policy and will be
              handled on a case-by-case basis.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold mb-3">
              Intellectual Property
            </h2>
            <p className="text-gray-700 leading-relaxed">
              All content on our website, including text, graphics, logos,
              images, and videos, is the property of Yonitara Birth and is
              protected by copyright laws. You may not use, reproduce, or
              distribute our content without explicit permission.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold mb-3">
              Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Yonitara Birth and its instructors are not liable for any injury,
              loss, or damage that may occur during or as a result of
              participating in our services. You participate in all activities
              at your own risk and accept full responsibility for your actions.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold mb-3">Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these terms at any time. Changes
              will be effective immediately upon posting to our website. Your
              continued use of our services after any changes indicates your
              acceptance of the modified terms.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about these Terms and Conditions, please
              contact us through the provided contact information on our
              website.
            </p>
          </section>
        </div>
        {/* </ScrollArea> */}
      </main>
      <MinimalFooter />
    </div>
  );
};

export default TermsAndConditions;
