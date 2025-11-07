
const baseClasses = 'inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden'

export function PrimeryBadge({children, className = "", ...props}) {
    return(
        <span 
        data-slot="badge"
      className={`${baseClasses} border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90 cursor-pointer ${className}`}
      {...props}
        >
{children}
        </span>
    )
}

export function SecondaryBadge({children, className = "", ...props}){
  
  
    return(
        <span 
        data-slot="badge"
      className={`${baseClasses} bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90 cursor-pointer ${className}`}
      {...props}
        >
{children}
        </span>
    )
}

export function OutlineBadge({children, className = '', ...props}){
return(
  <span
  data-slot = "badge"
  className={`${baseClasses} text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground border border-secondary px-2 rounded-2xl ${className}` }
  {...props}
  >
{children}
  </span>
)
}