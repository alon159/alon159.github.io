import ContactForm from '../util/ContactForm';
import { useScrollReveal } from '../util/useScrollReveal';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { ref, className } = useScrollReveal();
    const { t } = useTranslation();

    const contactMethods = [
        {
            label: t("contact.email"),
            icon: "📧",
            href: "mailto:aloncrespfer@gmail.com",
            text: "aloncrespfer@gmail.com"
        },
        {
            label: t("contact.phone"),
            icon: "📱",
            href: "tel:+34685034121",
            text: "+34 685 034 121"
        },
    ];

    return (
        <section
            ref={ref}
            className={`bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100 p-8 scroll-mt-15 ${className}`}
            id="contact"
        >
            <h2 className="text-3xl font-semibold text-primary-700">
                {t("header.contact")}
            </h2>
            <div className="py-8 px-4 mx-auto max-w-(--breakpoint-xl) sm:py-8 lg:px-6">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-25">
                    {/* Contact Information - Left Side */}
                    <div>
                        <h3 className="flex justify-center mx-auto text-2xl font-bold">
                            {t("contact.contact_info")}
                        </h3>
                        <div className="space-y-6 mt-10">
                            {contactMethods.map((method, index) => (
                                <div key={index} className="flex items-center space-x-4 border-gray-300 rounded-xl p-6 border dark:bg-gray-700 project-card">
                                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                                        <span className="text-xl">{method.icon}</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white">{method.label}</h4>
                                        <a
                                            href={method.href}
                                            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                                        >
                                            {method.text}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form - Right Side */}
                    <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                            {t("contact.form.title")}
                        </h3>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;