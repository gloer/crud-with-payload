import { CollectionConfig } from "payload";

export const Julegaver: CollectionConfig = {
    slug: "julegaver",
    access: {
        create: () => true,
        read: () => true,
        update: () => true,
        delete: () => true,
    },
    labels: {
        singular: "Julegave",
        plural: "Julegaver",
    },
    fields: [
        {
            name: "navn",
            label: "Hva skal du gi bort",
            type: "text",
            required: true,
        },
        {
            name: "mottaker",
            label: "Hvem er denne gaven til",
            type: "text",
            required: true,
        },
        {
            name: "pris",
            label: "Hva koster gaven",
            type: "number",
            defaultValue: 100,
            required: true,
        },
        {
            name: "kjopt",
            label: "Er gaven kjøp inn",
            type: "checkbox",
            defaultValue: false,
            required: true,
        },
    ],
};