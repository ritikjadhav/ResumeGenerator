"use client"

import { useFormContext } from 'react-hook-form';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {
    label: string;
    name: string;
    type: string;
    placeholder: string;
}

export function InputWithLabel({ label, name, type, placeholder }: Props) {
    const { register } = useFormContext();

    return (
        <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor={name} className="text-base font-normal text-slate-500">{label}</Label>
            <Input type={type} id={name} placeholder={placeholder} {...register(name)} />
        </div>
    )
}
