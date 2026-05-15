declare namespace JSX {
  interface IntrinsicElements {
    'scale-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { variant?: string; size?: string };
    'scale-card': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    'scale-tag': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { variant?: string };
    'scale-text-field': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { label?: string; value?: string };
  }
}
