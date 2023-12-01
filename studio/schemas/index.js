// Documents types
import page from './documents/page'
import route from './documents/route'
import siteConfig from './documents/siteConfig'

// Object types
import card from './objects/card'
import faq from './objects/faq'
import figure from './objects/figure'
import geoMarker from './objects/geoMarker'
import img from './objects/img'
import internalLink from './objects/internalLink'
import link from './objects/link'
import portableText from './objects/portableText'
import socialLink from './objects/socialLink'
import stepCard from './objects/stepCard'

// Section types.
import carousel from './sections/carousel'
import cta from './sections/cta'
import faqs from './sections/faqs'
import map from './sections/map'
import slider from './sections/slider'

export const schemaTypes = [
  card,
  faq,
  figure,
  geoMarker,
  img,
  internalLink,
  link,
  portableText,
  socialLink,
  stepCard,

  carousel,
  cta,
  faqs,
  map,
  slider,

  route,
  page,
  siteConfig,
]
