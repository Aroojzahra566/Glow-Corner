import { AnnouncementBar, Nav, Footer, FadeInSection } from "@/components";

export default function AccountPage() {
  return (
    <>
      <AnnouncementBar />
      <Nav />

      <main className="min-h-screen bg-[#F5E8E2] py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h1 className="text-3xl font-semibold text-[#916B61]">Account</h1>
            <p className="mt-4 text-[#916B61]/80">
              Sign in or create an account to manage orders and preferences.
            </p>
          </FadeInSection>
        </div>
      </main>

      <Footer />
    </>
  );
}
