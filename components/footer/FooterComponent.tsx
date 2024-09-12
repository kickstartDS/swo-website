/*  eslint react/display-name: 0 */
import {
  ComponentProps,
  FC,
  HTMLAttributes,
  PropsWithChildren,
  forwardRef,
} from "react";
import classnames from "classnames";
import {
  FooterContextDefault as DsaFooter,
  FooterContext,
} from "@kickstartds/ds-agency-premium/footer";
import { Link } from "@kickstartds/base/lib/link";
import { Icon } from "@kickstartds/base/lib/icon";

export const FooterContextDefault = forwardRef<
  HTMLDivElement,
  ComponentProps<typeof DsaFooter> & HTMLAttributes<HTMLDivElement>
>(({ navItems, inverted }, ref) =>
  navItems && navItems.length > 0 ? (
    <div
      className={classnames("dsa-footer")}
      ks-inverted={inverted?.toString()}
      ref={ref}
    >
      <div className="dsa-footer__content dsa-footer__content--top">
        <address className="dsa-footer__column dsa-footer__address">
          <ul className="dsa-footer__contact">
            <Link
              className="dsa-footer__headline"
              href="mailto:mail@ruhmesmeile.com"
            >
              mail@ruhmesmeile.com
            </Link>
            <Link className="dsa-footer__headline" href="tel:+49 228 30412660">
              +49 228 30412660
            </Link>
          </ul>
          <span className="dsa-footer__item">ruhmesmeile GmbH</span>
          <span className="dsa-footer__item">Mozartstraße 4 - 10</span>
          <span className="dsa-footer__item">53115 Bonn</span>
        </address>

        <nav className="dsa-footer__links dsa-footer__links--top">
          <li className="dsa-footer__column">
            <Link
              className="dsa-footer__headline"
              href="/design-system-services/design-system-services"
            >
              Design System Services
            </Link>
            <ul className="dsa-footer__sublist">
              <Link
                className="dsa-footer__link"
                href="/design-system-services/brauche-ich-ein-design-system"
              >
                Beratung
              </Link>
              <Link
                className="dsa-footer__link"
                href="/design-system-services/vorteile-eines-design-systems"
              >
                Design System Vorteile
              </Link>
              <Link className="dsa-footer__link" href="/ux-strategie-beratung">
                UX-Strategie
              </Link>
            </ul>
          </li>
          <li className="dsa-footer__column">
            <Link
              className="dsa-footer__headline"
              href="/headless-cms/was-ist-ein-headless-cms"
            >
              Headless CMS
            </Link>
            <ul className="dsa-footer__sublist">
              <Link
                className="dsa-footer__link"
                href="/headless-cms/was-ist-ein-headless-cms"
              >
                Wissenswertes
              </Link>
              <Link className="dsa-footer__link" href="/cms-starter-paket">
                CMS Starter
              </Link>
              <Link
                className="dsa-footer__link"
                href="/headless-cms/storyblok-websites"
              >
                Storyblok Agentur
              </Link>
            </ul>
          </li>
          <li className="dsa-footer__column">
            <Link
              className="dsa-footer__headline"
              href="/ueber-uns/design-system-agentur-beratung"
            >
              Agentur & Beratung
            </Link>
            <ul className="dsa-footer__sublist">
              <Link
                className="dsa-footer__link"
                href="/ueber-uns/design-system-agentur-beratung"
              >
                Über uns
              </Link>
              <Link className="dsa-footer__link" href="#">
                Insights LINK FEHLT
              </Link>
              <Link className="dsa-footer__link" href="/ueber-uns/kontakt">
                Kontakt
              </Link>
            </ul>
          </li>
        </nav>
      </div>
      <div className="dsa-footer__content dsa-footer__content--bottom">
        <ul className="dsa-footer__links dsa-footer__links--bottom">
          <Link className="dsa-footer__link" href="/impressum">
            Impressum
          </Link>
          <Link className="dsa-footer__link" href="/datenschutz">
            Datenschutz
          </Link>
          <Link className="dsa-footer__link" href="/glossar">
            Glossar
          </Link>
          <Link className="dsa-footer__link" href="#">
            Cookie-Liste
          </Link>
        </ul>
        <ul className="dsa-footer__social">
          <Link
            className="dsa-footer__link"
            href="https://www.linkedin.com/company/ruhmesmeile/"
            target="_blank"
          >
            <Icon icon="linkedin" />
          </Link>
        </ul>
      </div>
    </div>
  ) : null
);

export const FooterProvider: FC<PropsWithChildren> = (props) => (
  <FooterContext.Provider {...props} value={FooterContextDefault} />
);
