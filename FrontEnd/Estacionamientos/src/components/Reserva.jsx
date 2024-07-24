
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function Component() {
  return (
    <div>
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Parking Reservations</h1>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="#" className="hover:underline" prefetch={false}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline" prefetch={false}>
                  Reservations
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section className="bg-muted py-12 px-6">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">About Our Parking</h2>
              <p className="text-muted-foreground mb-4">
                Our parking facility is conveniently located in the heart of the city, just a short walk from the main
                shopping and entertainment districts. We offer secure and affordable parking for all your needs.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 7am - 9pm
                    <br />
                    Saturday - Sunday: 8am - 8pm
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Rates</h3>
                  <p className="text-muted-foreground">
                    Hourly: $2.50
                    <br />
                    Daily: $15.00
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/placeholder.svg"
                alt="Parking Lot"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
        <section className="py-12 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">Make a Reservation</h2>
            <form className="bg-card p-6 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium mb-2">
                    Date
                  </label>
                  <Input type="date" id="date" name="date" required />
                </div>
                <div>
                  <label htmlFor="time-in" className="block text-sm font-medium mb-2">
                    Time In
                  </label>
                  <Input type="time" id="time-in" name="time-in" required />
                </div>
                <div>
                  <label htmlFor="time-out" className="block text-sm font-medium mb-2">
                    Time Out
                  </label>
                  <Input type="time" id="time-out" name="time-out" required />
                </div>
                <div>
                  <label htmlFor="vehicle" className="block text-sm font-medium mb-2">
                    Vehicle Type
                  </label>
                  <Select id="vehicle" name="vehicle" required>
                    <option value="">Select Vehicle Type</option>
                    <option value="car">Car</option>
                    <option value="truck">Truck</option>
                    <option value="motorcycle">Motorcycle</option>
                  </Select>
                </div>
              </div>
              <div className="mt-6">
                <Button type="submit" className="w-full">
                  Review Reservation
                </Button>
              </div>
            </form>
          </div>
        </section>
        <section className="bg-muted py-12 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">Reservation Summary</h2>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-muted-foreground mb-2">Date</p>
                  <p>2023-05-01</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-2">Time In</p>
                  <p>10:00 AM</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-2">Time Out</p>
                  <p>2:00 PM</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-2">Vehicle Type</p>
                  <p>Car</p>
                </div>
              </div>
              <Separator className="my-6" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-muted-foreground mb-2">Total Hours</p>
                  <p>4 hours</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-2">Total Cost</p>
                  <p>$10.00</p>
                </div>
              </div>
              <Separator className="my-6" />
              <div>
                <Button type="submit" className="w-full">
                  Proceed to Payment
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">Secure Payment</h2>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="card-number" className="block text-sm font-medium mb-2">
                      Card Number
                    </label>
                    <Input type="text" id="card-number" name="card-number" placeholder="XXXX XXXX XXXX XXXX" required />
                  </div>
                  <div>
                    <label htmlFor="expiration-date" className="block text-sm font-medium mb-2">
                      Expiration Date
                    </label>
                    <div className="flex space-x-4">
                      <Select id="expiration-month" name="expiration-month" required>
                        <option value="">Month</option>
                        {[...Array(12)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </Select>
                      <Select id="expiration-year" name="expiration-year" required>
                        <option value="">Year</option>
                        {[...Array(10)].map((_, i) => (
                          <option key={i + 2023} value={i + 2023}>
                            {i + 2023}
                          </option>
                        ))}
                      </Select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="cvc" className="block text-sm font-medium mb-2">
                      CVC
                    </label>
                    <Input type="text" id="cvc" name="cvc" placeholder="XXX" required />
                  </div>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Cardholder Name
                    </label>
                    <Input type="text" id="name" name="name" placeholder="John Doe" required />
                  </div>
                </div>
                <div className="mt-6">
                  <Button type="submit" className="w-full">
                    Complete Payment
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <p>&copy; 2023 Parking Reservations. All rights reserved.</p>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="#" className="hover:underline" prefetch={false}>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline" prefetch={false}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  )
}