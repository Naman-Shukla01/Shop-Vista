
const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-10 px-6">
      <hr />
      <br />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Shop Vista</h3>
          <p className="text-sm text-gray-200">
            Your one-stop destination for most of your needs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
            <li><a href="/faq" className="hover:text-white">FAQs</a></li>
            <li><a href="/returns" className="hover:text-white">Returns & Refunds</a></li>
            <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <p className="text-sm text-gray-200">Email: support@shopvista.com</p>
          <p className="text-sm text-gray-200">Phone: +91-9876543210</p>
          <p className="text-sm text-gray-200">Address: 123 Market Street, New Delhi, India</p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex space-x-4 text-gray-200 text-sm">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Twitter</a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-200 text-sm">
        &copy; 2025 Shop Vista. All rights reserved.
      </div>
    </footer>
  );
  
}

export default Footer