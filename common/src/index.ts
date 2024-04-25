import z from 'zod';

const doctorSchema = z.object({
    id: z.string(),
    name: z.string(),
    qualification: z.string(),
    specialty: z.string(),
    experience: z.number(),
    ratings: z.number(),
    location: z.string(),
    availability: z.string()
})

type doctorParams = z.infer<typeof doctorSchema>

const slotSchema = z.object({
    id: z.string(),
    five_six: z.number(),
    six_seven: z.number(),
    seven_eight: z.number(),
    eight_nine: z.number(),
    doctorId: z.string()
})

type slotParams = z.infer<typeof slotSchema>

