type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}



export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Busch Gardens',
    title: 'Work and travel',
    start: '2024',
   link: '/work/work-and-travel',
    id: 'work1',
  },
  {
    company: 'Kolozsvári Műszakis Klub',
    title: 'Hackathon(3rd place)',
    start: '2024',
    id: 'work2',
  },

]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'My Journey in Automation and Computer Engineering',
    description: 'What I have learned so far studying Automation and Computer Engineering.',
    link: '/blog/journey',
    uid: 'blog-1',
  },
  {
    title: 'How I Approach Learning New Technologies',
    description:
      'My process for learning new programming concepts and technologies.',
    link: '/blog/learning',
    uid: 'blog-2',
  },

]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/marec3',
  },

  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/s%C4%83ndel-marec-7904b53aa/',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/alex.marec?igsh=emJveXR2bnk2b2Rt&utm_source=qr',
  },
]

export const EMAIL = 'alexmr2410@gmail.com'
