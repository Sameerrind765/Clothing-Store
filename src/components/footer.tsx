function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-700 mt-8">
            <div className="line mt-1 mb-1 w-full bg-gray-600" style={{ height: "1px" }}></div>
            <div className="container mx-auto py-4 flex flex-col md:flex-row justify-between items-center text-sm">
                <span>&copy; {new Date().getFullYear()} Clothing Store. All rights reserved.</span>
                <div className="flex gap-4 mt-2 md:mt-0">
                    <a href="/privacy" className="hover:underline">Privacy Policy</a>
                    <a href="/terms" className="hover:underline">Terms of Service</a>
                    <a href="/contact" className="hover:underline">Contact</a>
                </div>
            </div>
        </footer>
    );
}
export default Footer;