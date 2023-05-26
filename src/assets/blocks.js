import { Navigations } from "./navigation.js";
import { Headers } from "./header.js";
import { Contents } from "./content.js";
import { Contacts } from "./contact.js";
import { Heroes } from "./hero.js";
import { Testimonials } from "./testimonial.js";
import { Features } from "./feature.js";
import { Blogs } from "./blog.js";
import { Faqs } from "./faq.js";
import { Pricings } from "./pricing.js";
import { Footers } from "./footer.js";

export const componentBlocks = [
  ...Navigations,
  ...Contacts,
  ...Headers,
  ...Heroes,
  ...Contents,
  ...Features,
  ...Blogs,
  ...Testimonials,
  ...Faqs,
  ...Pricings,
  ...Footers,
];
