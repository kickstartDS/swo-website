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
>(({ navItems, byline, inverted, logo }, ref) =>
  navItems && navItems.length > 0 ? (
    <div
      className={classnames("dsa-footer")}
      ks-inverted={inverted?.toString()}
      ref={ref}
    >
      <div className="dsa-footer__content dsa-footer__content--top">
        <address className="dsa-footer__address">
          <span className="dsa-footer__address__item">ruhmesmeile GmbH</span>
          <Link
            className="dsa-footer__address__item dsa-footer__address__link"
            href="tel:+49 228 30412660"
          >
            +49 228 30412660
          </Link>
          <Link
            className="dsa-footer__address__item dsa-footer__address__link"
            href="mailto:mail@ruhmesmeile.com"
          >
            mail@ruhmesmeile.com
          </Link>
          <span className="dsa-footer__address__item">Mozartstraße 4 - 10</span>
          <span className="dsa-footer__address__item">53115 Bonn</span>
        </address>

        {navItems.length > 0 ? (
          <ul className="dsa-footer__links dsa-footer__links--top">
            {navItems.map(({ label, active, ...linkProps }) => (
              <Link
                {...linkProps}
                className="dsa-footer__link"
                key={linkProps.href + label}
              >
                {label}
              </Link>
            ))}
          </ul>
        ) : null}
      </div>
      <div className="dsa-footer__content dsa-footer__content--bottom">
        <ul className="dsa-footer__links dsa-footer__links--bottom">
          <Link className="dsa-footer__link" href="ueber-uns/kontakt">
            Kontakt
          </Link>
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
