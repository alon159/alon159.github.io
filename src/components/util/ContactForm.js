import { useForm, ValidationError } from "@formspree/react";
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
    const [state, handleSubmit] = useForm("xyzdygrl");
    const { t } = useTranslation();

    if (state.succeeded) {
        return (
            <div className="text-center py-8">
                <div className="mb-4">
                    <span className="text-4xl">✅</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {t("contact.form.sent_status")}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                    {t("contact.form.sent_message1")}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                    {t("contact.form.sent_message2")}
                </p>
            </div>
        );
    }

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t("contact.form.name")} *
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder={t("contact.form.name_hint")}
                    required
                />
                <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t("contact.form.email")} *
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder={t("contact.form.email_hint")}
                    required
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                />
            </div>

            <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t("contact.form.subject")} *
                </label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder={t("contact.form.subject_hint")}
                    required
                />
                <ValidationError
                    prefix="Subject"
                    field="subject"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t("contact.form.message")} *
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors placeholder-gray-400 dark:placeholder-gray-500 resize-vertical"
                    placeholder={t("contact.form.message_hint")}
                    required
                ></textarea>
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                />
            </div>

            <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:scale-100 cursor-pointer disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
                {state.submitting ? (
                    <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>{t("contact.form.sending")}</span>
                    </>
                ) : (
                    <>
                        <span>{t("contact.form.send")}</span>
                        <span>📧</span>
                    </>
                )}
            </button>
        </form>
    );
}

export default ContactForm;