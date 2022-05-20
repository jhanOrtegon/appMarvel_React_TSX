
export type TValidateForm = {
    (user: string, password: string): boolean
}

export type TLoginC = {
    handleChange: (e: ChangeEventHandler<HTMLInputElement>) => void
    handleSubmit: (e: FormEventHandler<HTMLFormElement>) => void
}

