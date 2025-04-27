import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary">Sathi</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Your trusted healthcare partner. Book appointments with top doctors and get medical assistance when you
              need it.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="text-muted-foreground hover:text-primary">
                  Find Doctors
                </Link>
              </li>
              <li>
                <Link href="/assistance" className="text-muted-foreground hover:text-primary">
                  Book Assistance
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-muted-foreground hover:text-primary">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">Services</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/services/telemedicine" className="text-muted-foreground hover:text-primary">
                  Telemedicine
                </Link>
              </li>
              <li>
                <Link href="/services/home-care" className="text-muted-foreground hover:text-primary">
                  Home Care
                </Link>
              </li>
              <li>
                <Link href="/services/lab-tests" className="text-muted-foreground hover:text-primary">
                  Lab Tests
                </Link>
              </li>
              <li>
                <Link href="/services/pharmacy" className="text-muted-foreground hover:text-primary">
                  Pharmacy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="text-muted-foreground">Team@Sathi</li>
              <li className="text-muted-foreground">Phone: +91 (885) 562-4567</li>
              <li className="text-muted-foreground">Email: info@sathi.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} sathi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

