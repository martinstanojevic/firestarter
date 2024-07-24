'use client';

import { Paintbrush } from 'lucide-react';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/Popover';
import { cn } from '@/lib/utils';

export function ColorPicker({
  selectedColor,
  setSelectedColor,
  className
}: {
  selectedColor: string;
  setSelectedColor: (selectedColor: string) => void;
  className?: string;
}) {
  const solids = [
    '#E2E2E2',
    '#ff75c3',
    '#ffa647',
    '#ffe83f',
    '#9fff5b',
    '#70e2ff',
    '#cd93ff',
    '#09203f'
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[220px] justify-start text-left font-normal',
            !selectedColor && 'text-muted-foreground',
            className
          )}
        >
          <div className="w-full flex items-center gap-2">
            {selectedColor ? (
              <div
                className="h-4 w-4 rounded !bg-center !bg-cover transition-all"
                style={{ background: selectedColor }}
              ></div>
            ) : (
              <Paintbrush className="h-4 w-4" />
            )}
            <div className="truncate flex-1">{selectedColor ? selectedColor : 'Pick a color'}</div>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="flex space-x-2">
          {solids.map((s) => (
            <div
              key={s}
              style={{ backgroundColor: s }}
              className="rounded-md h-6 w-6 cursor-pointer active:scale-105"
              onClick={() => setSelectedColor(s)}
            />
          ))}
        </div>

        <Input
          id="custom"
          value={selectedColor}
          className="col-span-2 h-8 mt-4"
          onChange={(e) => setSelectedColor(e.currentTarget.value)}
        />
      </PopoverContent>
    </Popover>
  );
}
