import { Backdrop } from '@/components/atmosphere/Backdrop';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ShortcutCards } from '@/components/ShortcutCards';
import { StatCounters } from '@/components/StatCounters';
import { LeadMagnetForm } from '@/components/LeadMagnetForm';
import { PainSection } from '@/components/PainSection';
import { ThreeStepInventory } from '@/components/ThreeStepInventory';
import { BundlePreviewGrid } from '@/components/BundlePreviewGrid';
import { BundlesMosaic } from '@/components/BundlesMosaic';
import { InventoryBreakdown } from '@/components/InventoryBreakdown';
import { OfferCard } from '@/components/OfferCard';
import { ProofSection } from '@/components/ProofSection';
import { OldVsNew } from '@/components/OldVsNew';
import { BenefitGrid } from '@/components/BenefitGrid';
import { ForYouQualifier } from '@/components/ForYouQualifier';
import { FAQ } from '@/components/FAQ';
import { Guarantee } from '@/components/Guarantee';
import { FounderBio } from '@/components/FounderBio';
import { TestimonialsFB } from '@/components/TestimonialsFB';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { CouponBanner } from '@/components/CouponBanner';
import { StickyBottomBar } from '@/components/StickyBottomBar';
import { TrustPulsePopup } from '@/components/TrustPulsePopup';

export default function Home() {
  return (
    <>
      <CouponBanner />
      <Backdrop>
        <Header />
        <main>
          <Hero />
          <ShortcutCards />
          <StatCounters />
          <LeadMagnetForm />
          <PainSection />
          <ThreeStepInventory />
          <BundlePreviewGrid />
          <BundlesMosaic />
          <InventoryBreakdown />
          <OfferCard />
          <ProofSection />
          <OldVsNew />
          <BenefitGrid />
          <ForYouQualifier />
          <FAQ />
          <Guarantee />
          <FounderBio />
          <TestimonialsFB />
          <FinalCTA />
        </main>
        <Footer />
      </Backdrop>
      <StickyBottomBar />
      <TrustPulsePopup />
    </>
  );
}
