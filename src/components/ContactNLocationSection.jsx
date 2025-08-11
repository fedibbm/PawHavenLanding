export default function ContactNLocationSection() {
    return (
        <section className="py-40 flex flex-col items-center px-6">
            <header className="text-center mb-20">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary capitalize font-poppins mb-6">
                    Get In Touch
                </h2>
                <div className="h-1 w-20 bg-primary/20 mx-auto rounded-full"></div>
            </header>

            <div className="w-full max-w-6xl">
                <div className="mb-16">
                    <h3 className="text-2xl font-semibold text-primary mb-12 text-center">Contact Information</h3>
                    <address className="not-italic">
                        <ul className="flex flex-col md:flex-row justify-center gap-12 md:gap-20">
                            <li className="flex items-center gap-4 text-gray-700">
                                <span className="text-2xl">📍</span>
                                <div>
                                    <p className="font-medium text-secondary mb-1">Address</p>
                                    <p>Rue des Chiens, Tunis, Tunisia</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-4 text-gray-700">
                                <span className="text-2xl">📧</span>
                                <div>
                                    <p className="font-medium text-secondary mb-1">Email</p>
                                    <a href="mailto:contact@pawhaven.org" 
                                       className="hover:text-primary transition-colors duration-200">
                                        contact@pawhaven.org
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-center gap-4 text-gray-700">
                                <span className="text-2xl">📞</span>
                                <div>
                                    <p className="font-medium text-secondary mb-1">Phone</p>
                                    <a href="tel:+21612345678" 
                                       className="hover:text-primary transition-colors duration-200">
                                        +216 12 345 678
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </address>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold text-primary mb-8 text-center">Find Us Here</h3>
                    <div className="rounded-xs overflow-hidden drop-shadow-sm">
                        <iframe
                            title="Pawhaven Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.7558717845986!2d10.184044576428962!3d36.80040326768718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd346987ae54b1%3A0x9aec62e94b314b47!2sAve%20Habib%20Bourguiba%2C%20Tunis!5e0!3m2!1sen!2stn!4v1754582110424!5m2!1sen!2stn"
                            className="w-full h-[400px] "
                            style={{
                                border: "0",
                                filter: "saturate(70%)",
                            }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
