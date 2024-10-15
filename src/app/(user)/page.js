import HeroSection from '@/components/HeroSection/HeroSection';
import CatalogSection from '@/components/CatalogSection/CatalogSection';
import UniqueDesignSection from '@/components/UniqueDesignSection/UniqueDesignSection';
import CreatorSection from '@/components/CreatorSection/CreatorSection';
import ReviewsSection from '@/components/ReviewsSection/ReviewsSection';
import BenefitsSection from '@/components/BenefitsSection/BenefitsSaection';
import InstagramSection from '@/components/InstagramSection/InstagramSection';

export default function MainPage() {
  return (
    <main>
      <HeroSection />
      <CatalogSection />
      <UniqueDesignSection />
      <CreatorSection />
      <ReviewsSection />
      <BenefitsSection />
      <InstagramSection />
    </main>
  );
}
