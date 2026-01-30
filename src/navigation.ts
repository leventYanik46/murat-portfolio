import { getPermalink } from './utils/permalinks';


export const headerData = {
  links: [
    { text: 'About', href: getPermalink('/') },
    { text: 'Academic Works', href: getPermalink('/academic-works') },
    { text: 'Blog', href: getPermalink('/blog') },
  ],
};
export const headerDataTr = {
  links: [
    { text: 'Hakkımızda', href: getPermalink('/tr') },
    { text: 'Akademik Çalışmalar', href: getPermalink('/tr/academic-works') },
    { text: 'Blog', href: getPermalink('/tr/blog') },
  ],
};


export const footerData = {
  links: [
    {
      title: 'Navigation',
      links: [
        { text: 'About', href: getPermalink('/') },
        { text: 'Academic Works', href: getPermalink('/academic-works') },
        { text: 'Blog', href: getPermalink('/blog') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms/english/terms') },
    { text: 'Privacy Policy', href: getPermalink('/terms/english/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/capitollawpartners/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/CapitolLaw/' },
    {
      ariaLabel: 'LinkedIn',
      icon: 'tabler:brand-linkedin',
      href: 'https://www.linkedin.com/company/capitollawpartners',
    },
  ],
  footNote: `
    <strong>
    Attorney Advertising. Content on this website is designed for general information only,<br> and not to be construed as
    formal legal advice or establishment of a lawyer/client relationship. 
    </strong> 
    <br>
    <br>
    <span style="font-size: 0.875rem;">Designed & Developed by <strong>Levent Yanik</strong></span>
    <br>
    <br>
    © Copyright Capitol Law Partners LLC · All Rights Reserved.
    <br>
    <br>
    
  `,
};
export const footerDataTr = {
  links: [
    {
      title: 'Menü',
      links: [
        { text: 'Hakkımızda', href: getPermalink('/tr') },
        { text: 'Akademik Çalışmalar', href: getPermalink('/tr/academic-works') },
        { text: 'Blog', href: getPermalink('/tr/blog') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Şartlar', href: getPermalink('/terms/turkish/terms') },
    { text: 'Gizlilik Politikası', href: getPermalink('/terms/turkish/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/capitollawpartners/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/CapitolLaw/' },
    {
      ariaLabel: 'LinkedIn',
      icon: 'tabler:brand-linkedin',
      href: 'https://www.linkedin.com/company/capitollawpartners',
    },
  ],
  footNote: `
    <strong>
    Avukat Reklamı. Bu web sitesindeki içerik yalnızca genel bilgilendirme içindir,<br> ve resmi bir hukuki tavsiye veya avukat/müvekkil ilişkisi kurulması olarak yorumlanmamalıdır. 
    </strong> 
    <br>
    <br>
    <span style="font-size: 0.875rem;">Yazılım & Tasarım: <strong>Levent Yanik</strong></span>
    <br>
    <br>
    © Telif Hakkı Capitol Law Partners LLC · Tüm Hakları Saklıdır.
    <br>
    <br>
    
  `,
};

