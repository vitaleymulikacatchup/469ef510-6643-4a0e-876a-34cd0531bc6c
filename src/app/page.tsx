use client
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
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/design-a-simple-high-contrast-logotype-w-1759139827368-34ae9cac.jpg"
          logoWidth={150}
          logoHeight={50}
          navItems={[
            { name: 'Hero', id: 'hero' },
            { name: 'About', id: 'about' },
            { name: 'Roadmap', id: 'roadmap' },
            { name: 'How to Buy', id: 'how-to-buy' },
            { name: 'Tokenomics', id: 'tokenomics' },
            { name: 'Footer', id: 'footer' },
          ]}
          buttonText="Buy BrainRot"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <TokenBillboardHero
          title="BrainRot Memecoin"
          subtitle="Join the revolution of memecoins!"
          contractAddress="0x...."
          copyButtonText="Copy Address"
          copiedText="Address Copied"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout
          title="About BrainRot"
          descriptions={[
            "Welcome to BrainRot, the fun and chaotic memecoin!",
            "Our mission is to bring laughter while having transparent tokenomics.",
            "Join us in making memecoins fun again!"
          ]}
        />
      </div>
      <div id="roadmap" data-section="roadmap" className="scroll-mt-24">
        <ProcessRoadmap
          items={[
            { id: '1', title: 'Phase 1', description: 'Concept and Planning', image: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/create-a-2d-digital-illustration-in-brai-1759139821618-e6859c2a.jpg', items: [{ icon: 'Globe', text: 'Global Community Building' }]},
            { id: '2', title: 'Phase 2', description: 'Development', image: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/create-a-2d-digital-illustration-in-brai-1759139823162-66ee65e4.jpg', items: [{ icon: 'Globe', text: 'Token Release' }]},
            { id: '3', title: 'Phase 3', description: 'Marketing', image: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/create-a-2d-digital-illustration-in-brai-1759139825884-0f8e08ca.jpg', items: [{ icon: 'Globe', text: 'Community Engagement' }]} 
          ]}
          className="my-8"
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D variant="simple" />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <BigNumberTokenomics
          title="Tokenomics"
          description="Transparent and clear tokenomics for investors."
          kpiItems={[
            { value: '1M', description: 'Total Supply', longDescription: 'Total amount of memecoins created.', icon: 'DollarSign' },
            { value: '500K', description: 'Market Cap', longDescription: 'Total market capitalization of memecoins.', icon: 'DollarSign' },
            { value: '5K', description: 'Holders', longDescription: 'Number of unique holders of the memecoin.', icon: 'Users' }
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <RevealFooter
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/design-a-simple-high-contrast-logotype-w-1759139827368-34ae9cac.jpg"
          logoWidth={150}
          logoHeight={50}
          columns={[
            { title: 'Help', items: [{ label: 'FAQ', onClick: () => {} }, { label: 'Support', onClick: () => {} }] },
            { title: 'Company', items: [{ label: 'About', onClick: () => {} }, { label: 'Contact', onClick: () => {} }] },
            { title: 'Legal', items: [{ label: 'Privacy Policy', onClick: () => {} }, { label: 'Terms of Service', onClick: () => {} }] },
          ]}
          copyrightText="© 2023 BrainRot Coin. All rights reserved."
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}