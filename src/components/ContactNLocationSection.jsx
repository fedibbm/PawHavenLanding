export default function ContactNLocationSection() {
    return (
        <section className="pt-20 flex flex-col items-center">
            <h2 className="text-3xl font-poppins text-center capitalize">
                Get In touch
            </h2>
            <div className="flex justify-center gap-20">
                <address className="">
                    <h3 className="capitalize text-center text-lg">Our Info</h3>
                    <ul className="grid grid-cols-2">
                        <li>📍 Address</li>
                        <li>Rue des Chiens, Tunis, Tunisia</li>
                        <li>📧 Email</li>
                        <li>
                            <a href="mailto:contact@pawhaven.org">contact@pawhaven.org</a>
                        </li>
                        <li>📞 Phone</li>
                        <li>
                            <a href="tel:+21612345678">+216 12 345 678</a>
                        </li>
                    </ul>
                </address>
                <div>
                    <h3 className="capitalize">Come visit Us</h3>
                    <iframe
                        title="Pawhaven Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.7558717845986!2d10.184044576428962!3d36.80040326768718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd346987ae54b1%3A0x9aec62e94b314b47!2sAve%20Habib%20Bourguiba%2C%20Tunis!5e0!3m2!1sen!2stn!4v1754582110424!5m2!1sen!2stn"
                        style={{
                            border: "0",
                            display: "block",
                            filter: "saturate(70%) contrast() ",
                            opacity: "0.9",
                            outline: "none",
                        }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                    />
                </div>
            </div>
        </section>
    );
}
