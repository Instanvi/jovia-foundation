const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../app/[locale]/page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Remove donation state from Home function
const stateRegex = /export default function Home\(\) \{[\s\S]*?return \(/;
content = content.replace(stateRegex, 'export default function Home() {\n  return (');

// 2. Remove Section 7 (Donate Section) completely
const donateSecRegex = /\{\/\* =+\s*7\. EMBEDDED DIRECT DONATION[\s\S]*?<\/section>\s*(=\{\/\* =+\s*8\. VOLUNTEER|\{\/\* =+\s*8\. VOLUNTEER)/;
content = content.replace(donateSecRegex, '$1');

// 3. Clean up volunteer banner (Section 8)
content = content.replaceAll('Join our voting membership (CAD $100/year) or register as a passionate volunteer', 'Join our dedicated volunteer network or apply for community membership');
content = content.replaceAll('Apply for Membership (CAD $100)', 'Apply for Community Membership');
content = content.replaceAll('href="/contact#membership"', 'href="/contact"');
content = content.replaceAll('href="/contact#volunteer"', 'href="/contact"');

// 4. Clean up any remaining Canada & Cameroon limiters
content = content.replaceAll('across Canada & Cameroon', 'in Canada, Cameroon & Worldwide');
content = content.replaceAll('in Canada & Cameroon', 'in Canada, Cameroon & Worldwide');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated app/[locale]/page.tsx');
