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
import { Logo } from "@kickstartds/ds-agency-premium/components/logo/index.js";
import { Picture } from "@kickstartds/base/lib/picture";

export const FooterContextDefault = forwardRef<
  HTMLDivElement,
  ComponentProps<typeof DsaFooter> & HTMLAttributes<HTMLElement>
>(({ byline, navItems, inverted, logo }, ref) =>
  navItems && navItems.length > 0 ? (
    <div
      className={classnames("dsa-footer")}
      ks-inverted={inverted?.toString()}
      ref={ref}
    >
      <div className="dsa-footer__content">
        <Logo {...logo} inverted={inverted} />
        {byline && <span className="dsa-footer__byline">{byline}</span>}
        {navItems.length > 0 ? (
          <div className="dsa-footer__links">
            {navItems.map(({ label, active, ...linkProps }) => (
              <Link
                {...linkProps}
                className="dsa-footer__link"
                key={linkProps.href + label}
              >
                {label}
              </Link>
            ))}
          </div>
        ) : null}
        <Picture
          className="dsa-footer__badge"
          src="https://a.storyblok.com/f/303819/150x32/b91f424f0d/made_in_germamy.svg"
        />
      </div>
    </div>
  ) : null
);

export const FooterProvider: FC<PropsWithChildren> = (props) => (
  <FooterContext.Provider {...props} value={FooterContextDefault} />
);
