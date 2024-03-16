import React from 'react'
import { cva } from "class-variance-authority";








const Button = cva([],{
    variants:{
        intent:{
        primary:[
            "bg-black",
            "text-zinc-100",
            "dark:text-zinc-100",
            "transition",
            "duration-500",
            "hover:opacity-60",
        ],
        secondary:[
            "bg-zinc-200",
            "text-slate-900",
            "dark:text-zinc-100",
            "transition",
            "duration-500",
            "hover:bg-zinc-300"
        ],
        size:{
            small:["text-sm","py-1","px-2"],
            medium:['text-base','py-2','px-4']
        },
    },
    compoundVariants:[
        {
            intent:'primary',
            size:'medium',
            class:'uppercase',

        },

    ],
    defaultVariants:{
        intent:'primary',
        size:'medium'
    }
    },
});

Button();


Button({intent:'secondary',size:'small'});



export {
    Button
}