import React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';

import { cn } from '@Utils/index';

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        'naxatw-z-50 naxatw-w-72 naxatw-rounded-md naxatw-border bg-popover naxatw-p-4 text-popover-foreground naxatw-shadow-md naxatw-outline-none data-[state=open]:naxatw-animate-fade-down data-[state=closed]:naxatw-animate-fade-up-hide data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className,
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent };
