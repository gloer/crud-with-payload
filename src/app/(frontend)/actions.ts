"use server";
import config from "@payload-config";
import { revalidatePath } from "next/cache";
import { getPayload } from "payload";

export async function oppdaterJulegave(id: number, formData: FormData) {
    const payload = await getPayload({ config });
    const navn = formData.get("navn");
    const mottaker = formData.get("mottaker");

    if(
        typeof navn !== "string" ||
        typeof mottaker !== "string" ||
        !navn.trim() ||
        !mottaker.trim()
    ) {
        throw new Error("Feil i data");
    }

    await payload.update({
        collection: "julegaver",
        id,
        data: {
            navn: navn.trim(),
            mottaker: mottaker.trim(),
        }
    });

    revalidatePath("/");
}

export async function slettJulegave(id: number) {
    const payload = await getPayload({ config });
    
    if(typeof id !== "number") {
        throw new Error("Feil id-type");
    }

    await payload.delete({
        collection: "julegaver",
        id,
    });

    revalidatePath("/");

}

export async function hentJulegaver() {
    const payload = await getPayload({ config });

    const queryResult = await payload.find({
        collection: "julegaver",
        limit: 100,
        sort: "-createdAt",
        overrideAccess: false,
    });

    if(!queryResult) {
        throw new Error("Nissen har ikke vært på besøk");
    }

    return queryResult.docs;

}

export async function leggTilJulegave(formData: FormData) {
    const payload = await getPayload({ config });

    const navn = formData.get("navn");
    const mottaker = formData.get("mottaker");

    if (
        typeof navn !== "string" ||
        typeof mottaker !== "string" ||
        !navn.trim() || 
        !mottaker.trim()
    ) {
        throw new Error("Feil i data");
    }

    await payload.create({
        collection: "julegaver",
        data: {
            navn: navn.trim(),
            mottaker: mottaker.trim(),
        },
        overrideAccess: false,
    });

    revalidatePath("/");

}