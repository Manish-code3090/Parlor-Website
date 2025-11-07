

const baseClasses =
  "inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all disabled:opacity-50 disabled:pointer-events-none focus:outline-none";

export function PrimaryButton({ children,time, className , ...props }) {
  return (
    <button
      className={`${baseClasses} bg-primary text-primary-foreground hover:bg-primary/90 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({ children,time, className , ...props }) {
  return (
    <button
      className={`${baseClasses} border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 ${className}`}
      {...props}
    >
    
      {children}
    </button>
  );
}

export function OutlineButton({ children, className , ...props }) {
  return (
    <button
      className={`${baseClasses} border border-gray-400 text-gray-900 hover:bg-gray-100 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function GhostButton({ children, className , ...props }) {
  return (
    <button
      className={`${baseClasses} text-gray-700 hover:bg-gray-100 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function DangerButton({ children, className , ...props }) {
  return (
    <button
      className={`${baseClasses} bg-red-600 text-white hover:bg-red-700 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function LinkButton({children, className , ...props }){
  return(
    <button className={`${baseClasses} text-primary underline-offset-4 hover:underline ${className}`}
    {...props}
    >

{children}
    </button>
  )
}

