import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Stroke({
  children,
  ...props
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function IconSearch(props: IconProps) {
  return (
    <Stroke {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20.5 20.5-4.3-4.3" />
    </Stroke>
  );
}

export function IconCart(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M6 8h12l1.2 12.2a1 1 0 0 1-1 1.1H5.8a1 1 0 0 1-1-1.1L6 8Z" />
      <path d="M9 10V6a3 3 0 0 1 6 0v4" />
    </Stroke>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M4 6.5h16" />
      <path d="M4 12h16" />
      <path d="M4 17.5h16" />
    </Stroke>
  );
}

export function IconClose(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </Stroke>
  );
}

export function IconChevronRight(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="m9 6 6 6-6 6" />
    </Stroke>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M4 12h16" />
      <path d="m13 5 7 7-7 7" />
    </Stroke>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}

export function IconStar({
  filled = true,
  ...props
}: IconProps & { filled?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? 0 : 1.6}
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m12 2.6 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4 6.2 20.9l1.1-6.5L2.6 9.4l6.5-.9L12 2.6Z" />
    </svg>
  );
}

export function IconTruck(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M2.5 6.5h11v9.5h-11z" />
      <path d="M13.5 9h4.3l3.7 3.4v3.6H13.5" />
      <circle cx="6.2" cy="17.8" r="1.8" />
      <circle cx="17.2" cy="17.8" r="1.8" />
    </Stroke>
  );
}

export function IconBadge(props: IconProps) {
  return (
    <Stroke {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.8 12.2 2.2 2.2 4.2-4.4" />
    </Stroke>
  );
}

export function IconHeadphones(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <path d="M3.5 15a1.8 1.8 0 0 1 1.8-1.6h1.4v6H5.3A1.8 1.8 0 0 1 3.5 17.6v-2.6Z" />
      <path d="M20.5 15a1.8 1.8 0 0 0-1.8-1.6h-1.4v6h1.4a1.8 1.8 0 0 0 1.8-1.8v-2.6Z" />
    </Stroke>
  );
}

export function IconSparkles(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M12 4.2 13.9 8.6 18.3 10.5 13.9 12.4 12 16.8 10.1 12.4 5.7 10.5 10.1 8.6 12 4.2Z" />
      <path d="M19 15.2 19.7 16.9 21.4 17.6 19.7 18.3 19 20 18.3 18.3 16.6 17.6 18.3 16.9 19 15.2Z" />
    </Stroke>
  );
}

export function IconBook(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M4 5h5.5A3 3 0 0 1 12.5 8v10.5a2.5 2.5 0 0 0-2.5-2.5H4V5Z" />
      <path d="M20 5h-5.5A3 3 0 0 0 11.5 8v10.5a2.5 2.5 0 0 1 2.5-2.5H20V5Z" />
    </Stroke>
  );
}

export function IconQuote(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M10.5 5.5v6.5c0 3.4-2.1 5.4-5 6v-2.2c1.3-.5 2.2-1.4 2.5-2.7H3.5V5.5h7Zm10 0v6.5c0 3.4-2.1 5.4-5 6v-2.2c1.3-.5 2.2-1.4 2.5-2.7h-4.5V5.5H20.5Z" />
    </svg>
  );
}

export function IconMail(props: IconProps) {
  return (
    <Stroke {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </Stroke>
  );
}

export function IconTwitter(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.2 3h3.3l-7.2 8.3L22.8 21h-6.6l-5.2-6.8L5 21H1.7l7.7-8.8L1.2 3h6.8l4.7 6.2L18.2 3Zm-1.2 16h1.8L7.1 4.9H5.2L17 19Z" />
    </svg>
  );
}

export function IconInstagram(props: IconProps) {
  return (
    <Stroke {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17" cy="7" r="0.6" fill="currentColor" stroke="none" />
    </Stroke>
  );
}

export function IconFacebook(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.8 21v-7h2.4l.4-2.8h-2.8V9.3c0-.8.2-1.4 1.4-1.4h1.5V5.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.1H8v2.8h2.6v7h3.2Z" />
    </svg>
  );
}
