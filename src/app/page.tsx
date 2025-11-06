"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { BarChart3, Calendar, CreditCard, Gift, GraduationCap, Instagram, Linkedin, Sparkles, Star, Twitter, Users, Youtube } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="large"
      background="animatedAurora"
      cardStyle="glass-depth"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="layered"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="StudyFlow"
          button={{
            text: "Get Started Free",
            href: "pricing"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Transform Your Study Game"
          description="The ultimate SaaS platform designed specifically for students. Track assignments, collaborate with peers, and boost your academic performance with AI-powered insights."
          tag="For Students"
          tagIcon={GraduationCap}
          buttons={[
            { text: "Start Free Trial", href: "pricing" },
            { text: "Watch Demo", href: "https://youtube.com/demo" }
          ]}
          imageSrc="https://images.pexels.com/photos/8472849/pexels-photo-8472849.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Students using StudyFlow platform"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Built for Student Success"
          description={[
            "We understand the unique challenges students face in today's academic environment. From overwhelming coursework to tight deadlines, managing your studies shouldn't be another stress factor.",
            "StudyFlow combines powerful productivity tools with intelligent automation, helping you stay organized, collaborate effectively, and achieve your academic goals with confidence."
          ]}
          buttons={[
            { text: "Learn More", href: "features" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="Everything You Need to Excel"
          description="Powerful features designed specifically for student workflows and academic success"
          tag="Features"
          tagIcon={Sparkles}
          features={[
            {
              title: "Smart Study Analytics",
              description: "Track your study patterns, identify productive hours, and optimize your learning schedule with AI-powered insights and performance metrics.",
              icon: BarChart3,
              button: { text: "Learn More", href: "features" }
            },
            {
              title: "Seamless Collaboration",
              description: "Work together on group projects with real-time document sharing, task assignment, and integrated communication tools.",
              icon: Users,
              button: { text: "Try It", href: "pricing" }
            },
            {
              title: "Assignment Automation",
              description: "Never miss another deadline with automated reminders, calendar integration, and intelligent task prioritization based on difficulty and due dates.",
              icon: Calendar,
              button: { text: "Get Started", href: "pricing" }
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Loved by Students Worldwide"
          description="See how StudyFlow is helping students achieve their academic goals"
          tag="Success Stories"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah Chen",
              role: "Computer Science Major",
              testimonial: "StudyFlow completely transformed how I manage my coursework. The analytics feature helped me identify my most productive study times, and I've improved my GPA by a full point this semester!",
              imageSrc: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Chen student testimonial"
            },
            {
              id: "2",
              name: "Marcus Rodriguez",
              role: "Graduate Student",
              testimonial: "The collaboration tools are incredible. My research group stays perfectly synchronized, and the automated reminders ensure we never miss important deadlines. It's like having a personal academic assistant.",
              imageSrc: "https://images.pexels.com/photos/5726790/pexels-photo-5726790.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Marcus Rodriguez graduate student"
            },
            {
              id: "3",
              name: "Priya Patel",
              role: "Pre-Med Student",
              testimonial: "Managing organic chemistry, physics, and MCAT prep was overwhelming until I found StudyFlow. The smart scheduling feature automatically balances my study time across all subjects.",
              imageSrc: "https://images.pexels.com/photos/7251050/pexels-photo-7251050.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Priya Patel pre-med student"
            },
            {
              id: "4",
              name: "Jake Thompson",
              role: "Business Administration",
              testimonial: "The assignment automation is a game-changer. I can focus on actually learning instead of worrying about what's due when. My stress levels have dropped significantly since using StudyFlow.",
              imageSrc: "https://images.pexels.com/photos/6373291/pexels-photo-6373291.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Jake Thompson business student"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Choose Your Plan"
          description="Flexible pricing designed for students at every level"
          tag="Pricing"
          tagIcon={CreditCard}
          plans={[
            {
              id: "free",
              badge: "Free Forever",
              badgeIcon: Gift,
              price: "$0/month",
              subtitle: "Perfect for getting started",
              buttons: [
                { text: "Get Started", href: "https://app.studyflow.com/signup" },
                { text: "Learn More", href: "features" }
              ],
              features: [
                "Up to 3 courses",
                "Basic task management",
                "Calendar integration",
                "Mobile app access",
                "Email support"
              ]
            },
            {
              id: "student",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$9.99/month",
              subtitle: "Ideal for serious students",
              buttons: [
                { text: "Start Free Trial", href: "https://app.studyflow.com/trial" },
                { text: "Compare Plans", href: "pricing" }
              ],
              features: [
                "Unlimited courses",
                "Advanced analytics",
                "Group collaboration",
                "AI-powered insights",
                "Priority support",
                "Grade tracking",
                "Study timer"
              ]
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Ready to Transform Your Studies?"
          description="Join thousands of students who are already using StudyFlow to achieve academic excellence. Start your free trial today!"
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Student Email", required: true },
            { name: "university", type: "text", placeholder: "University/College", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your study goals or any questions you have...",
            rows: 4,
            required: false
          }}
          buttonText="Start Free Trial"
          imageSrc="https://images.pexels.com/photos/4260475/pexels-photo-4260475.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Student success team ready to help"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="StudyFlow"
          copyrightText="© StudyFlow, Inc. 2025. Empowering students worldwide."
          columns={[
            {
              title: "Product",
              items: [
                { label: "Features", href: "features" },
                { label: "Pricing", href: "pricing" },
                { label: "Mobile App", href: "https://app.studyflow.com/download" },
                { label: "API", href: "https://docs.studyflow.com" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Help Center", href: "https://help.studyflow.com" },
                { label: "Study Tips", href: "https://blog.studyflow.com" },
                { label: "Tutorials", href: "https://learn.studyflow.com" },
                { label: "Student Community", href: "https://community.studyflow.com" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Careers", href: "https://careers.studyflow.com" },
                { label: "Contact", href: "contact" },
                { label: "Privacy Policy", href: "https://studyflow.com/privacy" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Twitter, href: "https://twitter.com/studyflow", ariaLabel: "Follow StudyFlow on Twitter" },
            { icon: Instagram, href: "https://instagram.com/studyflow", ariaLabel: "Follow StudyFlow on Instagram" },
            { icon: Youtube, href: "https://youtube.com/studyflow", ariaLabel: "Subscribe to StudyFlow on YouTube" },
            { icon: Linkedin, href: "https://linkedin.com/company/studyflow", ariaLabel: "Connect with StudyFlow on LinkedIn" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}