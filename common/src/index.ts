import z from 'zod';

const doctorSchema = z.object({
    id: z.string(),
    name: z.string(),
    qualifications: z.string(),
    specialty: z.string(),
    experience: z.number(),
    ratings: z.number(),
    location: z.string(),
    availability: z.string()
})

type doctorParams = z.infer<typeof doctorSchema>

const slotSchema = z.object({
    six_seven: z.number(),
    seven_eight: z.number(),
    eight_nine: z.number()
})

type slotParams = z.infer<typeof slotSchema>

