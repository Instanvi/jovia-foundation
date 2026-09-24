const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, '../app');
const destDir = path.resolve(__dirname, '../app/[locale]');

const pages = [
  'about/page.tsx',
  'bylaws/page.tsx',
  'code-of-conduct/page.tsx',
  'contact/page.tsx',
  'privacy/page.tsx',
  'resources/page.tsx',
  'terms/page.tsx'
];

function transformContent(content) {
  let res = content;
  // 1. Remove $100 & paid membership mentions
  res = res.replaceAll('CAD $100', 'Community');
  res = res.replaceAll('CAD $100.00', 'Community');
  res = res.replaceAll('$100/year', 'community');
  res = res.replaceAll('$100/yr', 'community');
  res = res.replaceAll('CAD $100 Annual Voting Membership', 'Community Membership & Volunteering');
  res = res.replaceAll('Apply for Voting Membership (CAD $100/yr)', 'Apply for Community Membership');
  res = res.replaceAll('Apply for Voting Membership', 'Apply for Community Membership');
  res = res.replaceAll('pays the annual membership fee of CAD $100.00', 'is approved by the Board of Directors');
  res = res.replaceAll("non-payment of annual dues after 60 days' notice, or ", '');
  res = res.replaceAll('Annual voting memberships (CAD $100) are', 'Community memberships are');

  // 2. Proposed Bylaws -> Official Bylaws
  res = res.replaceAll('Proposed Bylaws & Framework', 'Official Bylaws & Framework');
  res = res.replaceAll('Proposed Bylaws', 'Official Bylaws');
  res = res.replaceAll('View Proposed Bylaws', 'View Official Bylaws');
  res = res.replaceAll('Proposed Framework', 'Governance Framework');

  // 3. Bamenda / Mezam / Bafut -> Douala / Littoral Region
  res = res.replaceAll('Bamenda, Northwest Region, Cameroon', 'Douala, Littoral Region, Cameroon');
  res = res.replaceAll('Bamenda Inclusive Park, Cameroon', 'Douala Inclusive Park, Littoral Region, Cameroon');
  res = res.replaceAll('Bamenda Education Center, Cameroon', 'Douala Education Center, Littoral Region, Cameroon');
  res = res.replaceAll('Bamenda Centre, Cameroon', 'Douala Centre, Littoral Region, Cameroon');
  res = res.replaceAll('Bamenda / Yaoundé, Cameroon', 'Douala / Yaoundé, Cameroon');
  res = res.replaceAll('Bamenda / Yaoundé, Centre Region, Cameroon', 'Douala / Yaoundé, Littoral & Centre Regions, Cameroon');
  res = res.replaceAll('Bamenda Learning Hub, Cameroon', 'Douala Learning Hub, Cameroon');
  res = res.replaceAll('Bafut Health Clinic, Cameroon', 'Littoral Health Clinic, Douala, Cameroon');
  res = res.replaceAll('Mezam Division, Cameroon', 'Littoral Region, Cameroon');
  res = res.replaceAll('Mezam Community Gathering, Cameroon', 'Douala Community Gathering, Cameroon');
  res = res.replaceAll('Northwest Region, Cameroon', 'Littoral & Centre Regions, Cameroon');
  res = res.replaceAll('Northwest Clinic, Cameroon', 'Littoral Clinic, Douala, Cameroon');
  res = res.replaceAll('Commercial Avenue, P.O. Box 450, Bamenda / Yaoundé', 'Boulevard de la Liberté, Akwa, Douala / Yaoundé');

  // 4. Global scope
  res = res.replaceAll('in Canada and Cameroon through', 'globally through');
  res = res.replaceAll('across Canada and Cameroon through', 'globally through');
  res = res.replaceAll('across Canada and Cameroon.', 'in Canada, Cameroon, and worldwide.');
  res = res.replaceAll('in Canada and Cameroon.', 'in Canada, Cameroon, and worldwide.');
  res = res.replaceAll('in Canada and Cameroon,', 'in Canada, Cameroon, and worldwide,');
  res = res.replaceAll('in Canada and Cameroon by', 'in Canada, Cameroon, and globally by');
  res = res.replaceAll('Canada and Cameroon projects', 'global programs in Canada and Cameroon');
  res = res.replaceAll('Canada and Cameroon collaboration', 'global international collaboration');

  return res;
}

pages.forEach(p => {
  const fullSrc = path.join(srcDir, p);
  const fullDest = path.join(destDir, p);
  fs.mkdirSync(path.dirname(fullDest), { recursive: true });
  if (fs.existsSync(fullSrc)) {
    const original = fs.readFileSync(fullSrc, 'utf8');
    const transformed = transformContent(original);
    fs.writeFileSync(fullDest, transformed, 'utf8');
    console.log('Created: ' + fullDest);
  }
});

// Donate page
const donateDest = path.join(destDir, 'donate/page.tsx');
fs.mkdirSync(path.dirname(donateDest), { recursive: true });
const donateContent = `import React from 'react';
import { Heart, ShieldCheck, CheckCircle, ArrowRight, Lock } from '@phosphor-icons/react/dist/ssr';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export default function DonatePage() {
  return (
    <div className="py-16 sm:py-24 bg-[var(--background-alt)] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-[var(--foundation-primary)] text-xs font-bold uppercase tracking-wider">
            <Heart weight="fill" className="w-4 h-4 text-rose-500 fill-rose-500" />
            Support JOVIA Foundation
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--foreground)] tracking-tight">
            Empower a Child. <span className="text-gradient-primary">Transform a Life.</span>
          </h1>
          <p className="text-base sm:text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto leading-relaxed">
            Your generous gift provides adaptive wheelchairs, pediatric physiotherapy, inclusive educational materials, and family respite care for children with disabilities globally.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-purple-100 shadow-xl space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-[var(--foreground)]">Ways to Give</h2>
            <p className="text-sm text-[var(--foreground-muted)]">
              JOVIA Foundation operates with strict accountability and transparency. Direct donations support active field programs in Canada, Cameroon, and communities worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-6 rounded-2xl bg-purple-50/60 border border-purple-100 space-y-3 hover:border-[var(--foundation-primary)] transition-all">
              <span className="text-3xl font-extrabold text-[var(--foundation-primary)]">$50</span>
              <p className="text-xs text-[var(--foreground-muted)] leading-relaxed">Provides adaptive classroom learning materials and specialized textbooks.</p>
            </div>
            <div className="p-6 rounded-2xl bg-purple-50/60 border border-purple-100 space-y-3 hover:border-[var(--foundation-primary)] transition-all">
              <span className="text-3xl font-extrabold text-[var(--foundation-primary)]">$150</span>
              <p className="text-xs text-[var(--foreground-muted)] leading-relaxed">Funds 1 month of clinical pediatric physiotherapy and assessments.</p>
            </div>
            <div className="p-6 rounded-2xl bg-purple-50/60 border border-purple-100 space-y-3 hover:border-[var(--foundation-primary)] transition-all">
              <span className="text-3xl font-extrabold text-[var(--foundation-primary)]">$350</span>
              <p className="text-xs text-[var(--foreground-muted)] leading-relaxed">Helps assemble and fit a pediatric all-terrain mobility wheelchair.</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-50 to-amber-50/50 border border-purple-200/70 space-y-4">
            <div className="flex items-center gap-3">
              <Lock weight="bold" className="w-5 h-5 text-[var(--foundation-primary)]" />
              <h3 className="text-base font-bold text-[var(--foreground)]">Secure Donation Processing</h3>
            </div>
            <p className="text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed">
              For direct bank transfers, corporate sponsorships, or donor-advised gifts, please contact our Board and Finance Committee directly at <strong className="text-[var(--foreground)]">donations@joviafoundation.org</strong> or via our contact portal.
            </p>
            <div className="pt-2">
              <Button href="/contact" variant="primary" size="default" className="font-bold shadow-md">
                Contact Finance & Direct Giving Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
`;
fs.writeFileSync(donateDest, donateContent, 'utf8');
console.log('Created donate page: ' + donateDest);
