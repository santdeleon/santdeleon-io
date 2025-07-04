import { forwardRef, type HTMLAttributes } from "react";
import styles from "./index.module.css";

// =============================================================================
// Typedefs
// =============================================================================

type Variant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info";

export type ButtonKind = "fill" | "outline" | "transparent";

export type ButtonSize = "sm" | "md" | "lg" | "block";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  kind?: ButtonKind;
  loading?: boolean;
  size?: ButtonSize;
  variant?: Variant;
}

// =============================================================================
// Main Component
// =============================================================================

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = "",
      disabled,
      id,
      kind = "fill",
      loading = false,
      size = "md",
      variant = "primary",
      ...rest
    },
    ref
  ) => (
    <button
      {...rest}
      id={id}
      ref={ref}
      disabled={loading || disabled}
      className={`${className} ${styles.btn} ${styles[`btn-${variant}-${kind}`]} ${styles[`btn-${size}`]}`.trim()}
    >
      {loading ? (
        <div className={styles["btn-loader"]}>
          <div className={styles[`btn-circles-${size}`]}>
            {[1, 2, 3].map((i) => (
              <div
                key={`Button__div--${id}-${i}`}
                className={`${styles[`btn-circle`]} ${styles[`btn-circle-${size}`]}`}
              />
            ))}
          </div>
        </div>
      ) : (
        children
      )}
    </button>
  )
);

Button.displayName = "Button";
export default Button;
