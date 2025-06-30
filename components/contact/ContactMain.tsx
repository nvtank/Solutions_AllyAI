import ContactForm from './ContactForm';
import ContactSidebar from './ContactSidebar';
import ContactCTA from './ContactCTA';

export default function ContactMain() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ContactForm />

          {/* Additional Info */}
          <div className="space-y-8">
            <ContactSidebar />
            <ContactCTA />
          </div>
        </div>
      </div>
    </section>
  );
}
