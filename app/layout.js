import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "finbuddy",
  description: "Manage yours finance",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/get-money.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          <footer className="bg-slate-800 text-white py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* Logo & Description */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    FinBuddy
                  </h2>
                  <p className="text-sm text-blue-100">
                    Your smart companion in managing finances, budgeting, and
                    investments. Secure, simple, and personalized.
                  </p>
                </div>

                {/* Quick Links */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="/" className="hover:underline">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="/dashboard" className="hover:underline">
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a href="/transaction/create" className="hover:underline">
                        Add Transaction
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Resources */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Resources</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="/faq" className="hover:underline">
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a href="/support" className="hover:underline">
                        Support
                      </a>
                    </li>
                    <li>
                      <a href="/terms" className="hover:underline">
                        Terms of Use
                      </a>
                    </li>
                    <li>
                      <a href="/privacy" className="hover:underline">
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Contact Info */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
                  <p className="text-sm text-blue-100">
                    Email: support@finbuddy.com
                  </p>
                  <p className="text-sm text-blue-100">Phone: +91-XX76543210</p>
                  <p className="text-sm text-blue-100">
                    Location: Noida, India
                  </p>
                </div>
              </div>

              {/* Bottom */}
              <div className="mt-10 border-t border-blue-700 pt-6 text-center text-sm text-blue-200">
                <p>
                  © {new Date().getFullYear()} FinBuddy. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
