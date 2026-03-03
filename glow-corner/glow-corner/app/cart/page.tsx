import Link from "next/link";
import { AnnouncementBar, Nav, Footer, Button, FadeInSection } from "@/components";

export default function CartPage() {
  return (
    <>
      <AnnouncementBar />
      <Nav />

      <main className="min-h-screen bg-[#F5E8E2] py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <FadeInSection>
            <h1 className="text-3xl font-semibold text-[#916B61]">Your Cart</h1>
            <p className="mt-4 text-[#916B61]/80">
              Your cart is empty. Start shopping to add items.
            </p>
            <Button href="/shop" className="mt-8">
              Shop Now
            </Button>
          </FadeInSection>
        </div>
      </main>

      <Footer />
    </>
  );
}
