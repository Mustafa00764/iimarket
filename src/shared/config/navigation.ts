import FavoriteIcon from '@/shared/assets/icons/other/favorite.svg'
import RotateClockIcon from '@/shared/assets/icons/other/rotate-ccw-clock.svg'

import ArrowRightLeftIcon from '@/shared/assets/icons/other/arrow-right-left.svg'
import HourglassIcon from '@/shared/assets/icons/other/hourglass.svg'
import FilesIcon from '@/shared/assets/icons/other/files.svg'

export const mainNavigation = [
  {
    label: 'History',
    href: '/history',
    icon: RotateClockIcon
  },
  {
    label: 'Saved',
    href: '/saved',
    icon: FavoriteIcon
  },
  {
    label: 'Compare',
    href: '/compare',
    icon: ArrowRightLeftIcon
  },
  {
    label: 'Tracking',
    href: '/tracking',
    icon: HourglassIcon
  },
  {
    label: 'Collections',
    href: '/collections',
    icon: FilesIcon
  }
]
