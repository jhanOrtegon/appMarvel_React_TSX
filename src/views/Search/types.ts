export type TSearchC = {
    data: {
        handleChange: (e: React.FormEvent<HTMLInputElement>) => void,
        stateForm: { inputHeroe: string },
        handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
        dataHeroe: any
    }
}