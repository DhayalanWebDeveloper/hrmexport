import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import ProductsCategories from "@/components/ProductsCategories";
import HRMExports from "@/components/HRMExports";
import OurValues from "@/components/OurValues";
import OurProducts from "@/components/OurProducts";
import VisionMission from "@/components/VisionMission";
import RiceMillingProcess from "@/components/RiceMillingProcess";
import WeAreCertified from "@/components/WeAreCertified";
import ReasonsToChoose from "@/components/ReasonsToChoose";
import CustomerTestimonials from "@/components/CustomerTestimonials";
import ProduceToProvide from "@/components/ProduceToProvide";
import QualityRice from "@/components/QualityRice";
import RiceRecipes from "@/components/RiceRecipes";
import LatestArticles from "@/components/LatestArticles";
import MapSection from "@/components/Map";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";
import ActionButtons from "@/components/ActionButtons";

export default function Home() {
  return (
    <div className="page-wrapper">
      <Header />
      <HeroSlider />
      <ProductsCategories />
      <HRMExports />
      <OurValues />
      <OurProducts />
      <section className="position-relative">
        <img
          src="https://www.hrmexports.com/assets/images/middle-banner.jpg"
          alt="middle banner"
          className="img-fluid"
          style={{ width: "100%" }}
        />
        <a href="/brand" className="about-one__btn thm-btn hbbtn">
          Know More
        </a>
      </section>
      <VisionMission />
      <RiceMillingProcess />
      <WeAreCertified />
      <ReasonsToChoose />
      <CustomerTestimonials />
      <ProduceToProvide />
      <QualityRice />
      <RiceRecipes />
      <LatestArticles />
      <MapSection />
      <EnquiryForm />
      <Footer />
      <ActionButtons />
    </div>
  );
}
