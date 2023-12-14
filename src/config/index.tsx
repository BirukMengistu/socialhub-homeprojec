export const INFORMATION_CATEGORIES = [
    {
      label: 'Informations',
      value: 'ui_kits' as const,
      featured: [
        {
          name: 'Politics',
          href: `/news?category=poltics`,
          imageSrc: '/nav/ui-kits/mixed.jpg',
        },
        {
          name: 'Sport',
          href: '/news?category=sport&sort=desc',
          imageSrc: '/nav/ui-kits/blue.jpg',
        },
        {
          name: 'Religion',
          href: '/news?category=religion',
          imageSrc: '/nav/ui-kits/purple.jpg',
        },
      ],
    },
    {
      label: 'Jobs',
      value: 'icons' as const,
      featured: [
        {
          name: 'Favorite Icon Picks',
          href: `/products?category=icons`,
          imageSrc: '/nav/icons/picks.jpg',
        },
        {
          name: 'New Arrivals',
          href: '/products?category=icons&sort=desc',
          imageSrc: '/nav/icons/new.jpg',
        },
        {
          name: 'Bestselling Icons',
          href: '/products?category=icons',
          imageSrc: '/nav/icons/bestsellers.jpg',
        },
      ],
    },
  ]