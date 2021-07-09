import { ValueConverter } from '@microsoft/fast-element';
import { format } from 'date-fns';

export const dateValueConverter: ValueConverter = {
  toView(value: Date | undefined): string {
    return value ? format(value, 'yyyy-MM-dd') : '';
  },
  fromView(value: string | Date): Date | undefined {
    if (value instanceof Date) {
      return value;
    }
    if (!value) {
      return undefined;
    }
    const b = value.split(/\D/).map(s => parseInt(s));
    return new Date(b[0], --b[1], b[2]);
  }
}

export const datesValueConverter: ValueConverter = {
  toView(value: Date[] | undefined): string {
    if (!value || value.length === 0) {
      return '';
    }
    return value.map(v => format(v, 'yyyy-MM-dd')).join(',');
  },
  fromView(value: string): Date[] {
    if (Array.isArray(value)) {
      return value;
    }
    if (!value) {
      return [];
    }
    return value.split(',').map(v => {
      const b = v.split(/\D/).map(s => parseInt(s));
      return new Date(b[0], --b[1], b[2]);
    });
  }
}

export const numbersValueConverter: ValueConverter = {
  toView(value: number[] | undefined): string {
    if (!value || value.length === 0) {
      return '';
    }
    return value.map(v => v.toString()).join(',');
  },
  fromView(value: string): number[] {
    if (Array.isArray(value)) {
      return value;
    }
    if (!value) {
      return [];
    }
    return value.split(',').map(v => parseFloat(v));
  }
}