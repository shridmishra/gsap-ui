'use client';

import React, { useState, useRef } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react'
import Image from 'next/image';

export const SponsorButton = () => {
    const [open, setOpen] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setOpen(false);
        }, 100);
    };

    return (
        <Popover open={open} onOpenChange={setOpen} >
            <PopoverTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-red-100/50 dark:bg-red-900/50 backdrop-blur-sm sm:rounded-lg hover:bg-foreground/10 text-red-500 hover:text-red-600 dark:hover:text-red-400"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Heart className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                </Button>
            </PopoverTrigger>
            <PopoverContent
                className="w-80 p-0 overflow-hidden bg-white text-black"
                side="top"
                align="end"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="p-4 flex flex-col items-center text-center space-y-4">
                    <div className="flex flex-col items-center">
                        <div className="flex items-center space-x-3">
                            <div className="rounded-full bg-red-50 p-2 shadow-sm">
                                <Heart className="h-5 w-5 text-red-600" />
                            </div>
                            <h3 className="text-lg font-semibold bg-linear-to-r from-red-600 to-pink-500 bg-clip-text text-transparent">
                                Support this project
                            </h3>
                        </div>

                        <p className="mt-2 text-sm text-muted-foreground text-center max-w-[18rem]">
                            Keeps me motivated to create more.
                        </p>
                        <p className="mt-2 text-xs text-gray-500">Scan to donate via UPI</p>
                    </div>
                    <div className="relative w-64 h-64 rounded-lg overflow-hidden border bg-blue-50">
                        <Image
                            src="/upi.jpg"
                            alt="UPI QR Code"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
};