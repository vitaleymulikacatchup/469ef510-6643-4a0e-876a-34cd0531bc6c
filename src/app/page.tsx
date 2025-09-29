"use client";
import { SiteTheme, SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutSplitBottom from '@/components/navigation/NavbarLayoutSplitBottom/NavbarLayoutSplitBottom';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import ProcessRoadmap from '@/components/sections/layouts/roadmap/ProcessRoadmap';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import RevealFooter from '@/components/sections/layouts/footer/RevealFooter';

const theme: SiteTheme = {
  styleVariant: 'brainRot',
  colorTemplate: 2,
  textAnimation: 'highlight',
};

export default function Home() {
  return (
    <SiteThemeProvider theme={theme}>
      <div id="nav" data-section="nav">
        <NavbarLayoutSplitBottom
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/design-a-simple-high-contrast-logo-for-b-1759140967443-d013c043.jpg"
          logoAlt="BrainRot Coin"
          navItems={[
            { name: "Hero", id: "hero" },
            { name: "About", id: "about" },
            { name: "Roadmap", id: "roadmap" },
            { name: "How to Buy", id: "how-to-buy" },
            { name: "Tokenomics", id: "tokenomics" },
            { name: "Footer", id: "footer" }
          ]}
          buttonText="Buy BrainRot"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <TokenBillboardHero
          title="Welcome to BrainRot Memecoin"
          subtitle="A memecoin that embraces the chaos of crypto"
          contractAddress="0x1234567890abcdef"
          copyButtonText="Copy Address"
          copiedText="Address Copied!"
        />
      </div>
      <div id="about" data-section="about">
        <CtaAbout
          title="About BrainRot"
          descriptions={[
            "BrainRot is a chaotic memecoin for the daring.",
            "Engage in the whirlwind of memes and crypto.",
            "Join our community and be part of the future."
          ]}
        />
      </div>
      <div id="roadmap" data-section="roadmap">
        <ProcessRoadmap
          items={[
            { id: '1', title: 'Phase 1', description: 'Launch the memecoin' },
            { id: '2', title: 'Phase 2', description: 'Community building' },
            { id: '3', title: 'Phase 3', description: 'Exchange listings' }
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D variant="reveal" />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <BigNumberTokenomics
          title="Tokenomics"
          description="Discover the numbers behind BrainRot."
          kpiItems={[
            { value: '1M', description: 'Total Supply', longDescription: 'Total tokens minted since launch.', icon: 'LucideIcon' },
            { value: '500k', description: 'Circulating Supply', longDescription: 'Tokens currently in circulation.', icon: 'LucideIcon' },
            { value: '100k', description: 'Liquidity', longDescription: 'Total liquidity provided to exchanges.', icon: 'LucideIcon' }
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <RevealFooter
          logoText="BrainRot Coin"
          columns={[
            { title: 'Links', items: [
              { label: 'Home', onClick: () => {} },
              { label: 'About', onClick: () => {} },
              { label: 'Contact', onClick: () => {} }
            ] },
            { title: 'Community', items: [
              { label: 'Discord', onClick: () => {} },
              { label: 'Twitter', onClick: () => {} },
              { label: 'Telegram', onClick: () => {} }
            ] },
            { title: 'Legal', items: [
              { label: 'Privacy Policy', onClick: () => {} },
              { label: 'Terms of Service', onClick: () => {} }
            ] }
          ]}
          copyrightText="© 2024 BrainRot Coin. All rights reserved."
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}